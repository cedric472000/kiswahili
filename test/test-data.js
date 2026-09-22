// Integritaetspruefung der Inhaltsdateien.
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn) { for (var i=0;i<this.length;i++) fn(this[i],i,this); };
}
if (!Array.prototype.map) {
  Array.prototype.map = function (fn) { var o=[]; for (var i=0;i<this.length;i++) o.push(fn(this[i],i,this)); return o; };
}
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fn) { var o=[]; for (var i=0;i<this.length;i++) if (fn(this[i],i,this)) o.push(this[i]); return o; };
}
if (!Array.prototype.some) {
  Array.prototype.some = function (fn) { for (var i=0;i<this.length;i++) if (fn(this[i],i,this)) return true; return false; };
}

var window = this;
function read(p) {
  var st = new ActiveXObject("ADODB.Stream");
  st.Type = 2; st.Charset = "utf-8"; st.Open(); st.LoadFromFile(p);
  var s = st.ReadText(); st.Close(); return s;
}
var BASE = "C:\\Users\\cedri\\OneDrive\\Desktop\\Claude\\kiswahili\\";
eval(read(BASE + "data\\vocab.js"));
eval(read(BASE + "data\\verbs.js"));
eval(read(BASE + "data\\lessons.js"));
eval(read(BASE + "data\\grammar.js"));
eval(read(BASE + "data\\methali.js"));

var problems = [];

function vocabBySw(sw) {
  for (var i = 0; i < KS.vocab.length; i++) if (KS.vocab[i].sw === sw) return KS.vocab[i];
  return null;
}
function topicExists(id) {
  for (var i = 0; i < KS.topics.length; i++) if (KS.topics[i].id === id) return true;
  return false;
}

// 1. Vokabeln
var seenSw = {}, seenId = {};
KS.vocab.forEach(function (v, i) {
  if (!v.sw)    problems.push("Vokabel #" + i + " ohne sw");
  if (!v.de)    problems.push("Vokabel '" + v.sw + "' ohne Uebersetzung");
  if (!v.topic) problems.push("Vokabel '" + v.sw + "' ohne Thema");
  else if (!topicExists(v.topic)) problems.push("Vokabel '" + v.sw + "': Thema '" + v.topic + "' existiert nicht");
  if (!v.id) problems.push("Vokabel '" + v.sw + "' ohne id");
  if (seenId[v.id]) problems.push("Doppelte id: " + v.id);
  seenId[v.id] = 1;
  if (seenSw[v.sw]) problems.push("Doppelter Eintrag: '" + v.sw + "'");
  seenSw[v.sw] = 1;
  if (v.pl && !v.cls) problems.push("Vokabel '" + v.sw + "' hat Plural, aber keine Klasse");
});

// 2. Lektionen
var seenLid = {};
KS.lessons.forEach(function (l, li) {
  if (!l.id) problems.push("Lektion #" + li + " ohne id");
  if (seenLid[l.id]) problems.push("Doppelte Lektions-id: " + l.id);
  seenLid[l.id] = 1;
  if (!l.title) problems.push(l.id + ": kein Titel");
  if (!l.goal)  problems.push(l.id + ": kein Lernziel");
  if (!l.mwalimu || !l.mwalimu.length) problems.push(l.id + ": kein Mwalimu-Text");
  if (!l.grammar || !l.grammar.length) problems.push(l.id + ": kein Grammatikteil");
  if (!l.examples || !l.examples.length) problems.push(l.id + ": keine Beispiele");

  (l.vocab || []).forEach(function (sw) {
    if (!vocabBySw(sw)) problems.push(l.id + ": Vokabel-Referenz '" + sw + "' findet keinen Eintrag");
  });
  (l.examples || []).forEach(function (e, ei) {
    if (!e.sw || !e.de) problems.push(l.id + ": Beispiel #" + ei + " unvollstaendig");
  });
  if (!l.practice || l.practice.length < 3) problems.push(l.id + ": weniger als 3 gefuehrte Uebungen");
  (l.practice || []).forEach(function (p, pi) {
    var tag = l.id + " gefuehrte Uebung #" + (pi + 1);
    if (!p.instruction) problems.push(tag + ": keine Anleitung von Amani");
    if (!p.q)           problems.push(tag + ": keine Aufgabe");
    if (!p.a)           problems.push(tag + ": keine Loesung");
    if (!p.explain)     problems.push(tag + ": keine Erklaerung");
    // Die Bausteinkette muss zur Loesung passen, sonst fuehrt sie in die Irre.
    if (p.build && p.build.indexOf(" + ") >= 0) {
      var zusammen = p.build.split(" + ").join("").replace(/-/g, "").toLowerCase();
      var loesung  = p.a.split(",")[0].replace(/[\s-]/g, "").toLowerCase();
      if (zusammen !== loesung)
        problems.push(tag + ": Bausteine '" + p.build + "' ergeben '" + zusammen +
                      "', Loesung ist aber '" + loesung + "'");
    }
  });
  (l.exercises || []).forEach(function (ex, ei) {
    var tag = l.id + " Uebung #" + (ei + 1);
    if (!ex.q) problems.push(tag + ": keine Frage");
    if (ex.type === "translate") {
      if (!ex.a) problems.push(tag + ": keine Loesung");
    } else if (ex.type === "choice") {
      if (!ex.options || ex.options.length < 2) problems.push(tag + ": zu wenige Optionen");
      else if (typeof ex.a !== "number" || ex.a < 0 || ex.a >= ex.options.length)
        problems.push(tag + ": Loesungsindex " + ex.a + " liegt ausserhalb von 0.." + (ex.options.length - 1));
      if (!ex.why) problems.push(tag + ": keine Erklaerung (why)");
    } else {
      problems.push(tag + ": unbekannter Aufgabentyp '" + ex.type + "'");
    }
  });
  if (!l.exercises || l.exercises.length < 4) problems.push(l.id + ": weniger als 4 Uebungen");
});

// 3. Grammatik
var seenGid = {};
KS.grammar.forEach(function (g, gi) {
  if (!g.id) problems.push("Grammatik #" + gi + " ohne id");
  if (seenGid[g.id]) problems.push("Doppelte Grammatik-id: " + g.id);
  seenGid[g.id] = 1;
  if (!g.title) problems.push(g.id + ": kein Titel");
  if (!g.tags)  problems.push(g.id + ": keine Suchbegriffe");
  if (!g.sections || !g.sections.length) problems.push(g.id + ": keine Abschnitte");
  (g.sections || []).forEach(function (s, si) {
    if (!s.h || !s.body) problems.push(g.id + " Abschnitt #" + si + " unvollstaendig");
  });
});

// 4. Konjugator-Daten
KS.verbs.forEach(function (v) {
  if (!v.inf || !v.stem || !v.de) problems.push("Verb unvollstaendig: " + (v.inf || "?"));
});
KS.subjects.forEach(function (s) {
  if (!s.pos || !s.neg || !s.label) problems.push("Subjekt unvollstaendig: " + (s.id || "?"));
});

// 4a. Alltagswortschatz fuer die Lernfolge: jeder Eintrag muss existieren
eval(read(BASE + "data\\lernfolge.js"));
var seenG = {};
if (!KS.grundwortschatz || KS.grundwortschatz.length < 80) {
  problems.push("Alltagswortschatz fehlt oder hat weniger als 80 Eintraege");
}
(KS.grundwortschatz || []).forEach(function (sw) {
  if (!vocabBySw(sw)) problems.push("Alltagswortschatz: '" + sw + "' gibt es in vocab.js nicht");
  if (seenG[sw]) problems.push("Alltagswortschatz: '" + sw + "' steht doppelt drin");
  seenG[sw] = 1;
});

// 4b. Sprichwoerter fuers Methali-Band
var seenM = {};
if (!KS.methali || KS.methali.length < 7) problems.push("Zu wenige Sprichwoerter fuer taeglichen Wechsel");
(KS.methali || []).forEach(function (m, mi) {
  if (!m.sw) problems.push("Methali #" + mi + " ohne Swahili");
  if (!m.de) problems.push("Methali '" + m.sw + "' ohne Uebersetzung");
  if (seenM[m.sw]) problems.push("Doppeltes Sprichwort: " + m.sw);
  seenM[m.sw] = 1;
});
// Das Sprichwort des Tages muss stabil sein und ueber die Tage rotieren
if (typeof KS.methaliLeo === "function") {
  var a1 = KS.methaliLeo(), a2 = KS.methaliLeo();
  if (a1.sw !== a2.sw) problems.push("Sprichwort des Tages springt innerhalb eines Aufrufs");
} else {
  problems.push("KS.methaliLeo fehlt");
}

// 5. Deckt der Wortschatz alle Themen ab?
var counts = {};
KS.vocab.forEach(function (v) { counts[v.topic] = (counts[v.topic] || 0) + 1; });
KS.topics.forEach(function (t) {
  if (!counts[t.id]) problems.push("Thema '" + t.name + "' hat keine Vokabeln");
});

WScript.Echo("Vokabeln:   " + KS.vocab.length);
WScript.Echo("Themen:     " + KS.topics.length);
WScript.Echo("Lektionen:  " + KS.lessons.length);
var exCount = 0;
KS.lessons.forEach(function (l) { exCount += (l.exercises || []).length; });
WScript.Echo("Uebungen:   " + exCount);
WScript.Echo("Grammatik:  " + KS.grammar.length + " Kapitel");
WScript.Echo("Verben:     " + KS.verbs.length);
WScript.Echo("");
WScript.Echo("Probleme:   " + problems.length);
if (problems.length) {
  WScript.Echo("");
  problems.forEach(function (p) { WScript.Echo("  " + p); });
}
