// Prueft die Reihenfolge der Lektionsschritte: erst erklaeren, dann Wortschatz,
// dann gefuehrt ueben, und erst danach die gewertete Abfrage.
// buildSteps wird dafuer direkt aus js/app.js herausgeschnitten und ausgefuehrt —
// so testen wir den echten Quelltext und keine Nachbildung.

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn) { for (var i=0;i<this.length;i++) fn(this[i],i,this); };
}
if (!Array.prototype.map) {
  Array.prototype.map = function (fn) { var o=[]; for (var i=0;i<this.length;i++) o.push(fn(this[i],i,this)); return o; };
}
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fn) { var o=[]; for (var i=0;i<this.length;i++) if (fn(this[i],i,this)) o.push(this[i]); return o; };
}
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (x) { for (var i=0;i<this.length;i++) if (this[i]===x) return i; return -1; };
}

var window = this;
function read(p) {
  var st = new ActiveXObject("ADODB.Stream");
  st.Type = 2; st.Charset = "utf-8"; st.Open(); st.LoadFromFile(p);
  var s = st.ReadText(); st.Close(); return s;
}
var BASE = "C:\\Users\\cedri\\OneDrive\\Desktop\\Claude\\kiswahili\\";
eval(read(BASE + "data\\vocab.js"));
eval(read(BASE + "data\\lessons.js"));

// buildSteps aus app.js herausschneiden
var src = read(BASE + "js\\app.js");
var von = src.indexOf("function buildSteps(l) {");
var bis = src.indexOf("var PHASE = {");
if (von < 0 || bis < 0 || bis < von) {
  WScript.Echo("FEHLER: buildSteps konnte in js/app.js nicht gefunden werden.");
  WScript.Quit(1);
}
eval(src.substring(von, bis));

// Abhaengigkeit, die buildSteps aus app.js braucht
function vocabBySw(sw) {
  for (var i = 0; i < KS.vocab.length; i++) if (KS.vocab[i].sw === sw) return KS.vocab[i];
  return null;
}

var LERNEN  = { intro:1, teach:1, examples:1, vocab:1, culture:1 };
var problems = [];

WScript.Echo("Lektion  Schritte  Erklaerung  Wortschatz  Ueben  Abfrage");
WScript.Echo("-------  --------  ----------  ----------  -----  -------");

KS.lessons.forEach(function (l) {
  var steps = buildSteps(l);
  var kinds = steps.map(function (s) { return s.kind; });

  function ersterIndex(kind) { return kinds.indexOf(kind); }

  var iTeach    = ersterIndex("teach");
  var iVocab    = ersterIndex("vocab");
  var iPractice = ersterIndex("practice");
  var iQuiz     = ersterIndex("quiz");
  var iDone     = ersterIndex("done");

  WScript.Echo("  " + l.id + "      " + pad(steps.length, 8) + pad(iTeach + 1, 12) +
               pad(iVocab + 1, 12) + pad(iPractice + 1, 7) + pad(iQuiz + 1, 9));

  if (kinds[0] !== "intro") problems.push(l.id + ": beginnt nicht mit dem Einstieg");
  if (iTeach < 0)    problems.push(l.id + ": kein Erklaerungsschritt");
  if (iVocab < 0)    problems.push(l.id + ": kein Wortschatzschritt");
  if (iPractice < 0) problems.push(l.id + ": keine gefuehrte Uebung");
  if (iQuiz < 0)     problems.push(l.id + ": keine Abfrage");

  if (iTeach > iVocab)    problems.push(l.id + ": Wortschatz kommt VOR der Erklaerung");
  if (iVocab > iPractice) problems.push(l.id + ": Ueben kommt VOR dem Wortschatz");
  if (iPractice > iQuiz)  problems.push(l.id + ": Abfrage kommt VOR dem gefuehrten Ueben");
  if (iDone !== steps.length - 1) problems.push(l.id + ": Ergebnis steht nicht am Schluss");

  // Kern der Anforderung: vor der ersten gewerteten Frage darf nur Gelerntes
  // und Gefuehrtes stehen — nie eine Abfrage.
  for (var i = 0; i < iQuiz; i++) {
    if (kinds[i] === "quiz") problems.push(l.id + ": gewertete Frage vor Schritt " + (iQuiz + 1));
  }
  var vorUeben = kinds.slice(0, iPractice);
  for (var j = 0; j < vorUeben.length; j++) {
    if (!LERNEN[vorUeben[j]] && vorUeben[j] !== "practiceIntro") {
      problems.push(l.id + ": unerwarteter Schritt '" + vorUeben[j] + "' im Lernteil");
    }
  }
  // Jede gefuehrte Uebung muss eine Anleitung mitbringen
  steps.forEach(function (s) {
    if (s.kind === "practice" && !s.p.instruction) {
      problems.push(l.id + ": gefuehrte Uebung ohne Anleitung");
    }
  });

  // Kein Wortschatzschritt darf mit einer einsamen Karte dastehen.
  // Bei starren Sechserbloecken ergaben 13 Woerter sonst 6+6+1.
  var vSchritte = steps.filter(function (s) { return s.kind === "vocab"; });
  vSchritte.forEach(function (s, n) {
    if (vSchritte.length > 1 && s.words.length < 2) {
      problems.push(l.id + ": Wortschatzschritt " + (n + 1) + " zeigt nur " +
                    s.words.length + " Karte(n)");
    }
  });
});

function pad(v, w) {
  var s = "" + v;
  while (s.length < w) s = s + " ";
  return s;
}

WScript.Echo("");
WScript.Echo("Probleme: " + problems.length);
if (problems.length) {
  WScript.Echo("");
  problems.forEach(function (p) { WScript.Echo("  " + p); });
} else {
  WScript.Echo("In jeder Lektion steht Erklaerung vor Wortschatz vor Ueben vor Abfrage.");
}
