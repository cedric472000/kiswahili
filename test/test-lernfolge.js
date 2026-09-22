// Prueft die Lernfolge fuer neue Vokabeln: Lektionswoerter zuerst, dann
// Alltagswortschatz, Spezielles zuletzt. Testet den echten js/srs.js mit
// einem kleinen Ersatz fuer den Browserspeicher.

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
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (x) { for (var i=0;i<this.length;i++) if (this[i]===x) return i; return -1; };
}
if (!Date.now) { Date.now = function () { return new Date().getTime(); }; }

var window = this;
function read(p) {
  var st = new ActiveXObject("ADODB.Stream");
  st.Type = 2; st.Charset = "utf-8"; st.Open(); st.LoadFromFile(p);
  var s = st.ReadText(); st.Close(); return s;
}
var BASE = "C:\\Users\\cedri\\OneDrive\\Desktop\\Claude\\kiswahili\\";
eval(read(BASE + "data\\vocab.js"));
eval(read(BASE + "data\\lessons.js"));
eval(read(BASE + "data\\lernfolge.js"));
eval(read(BASE + "js\\srs.js"));

// Ersatz fuer KS.store
var PROFIL;
function neuesProfil() {
  PROFIL = { lessons: {}, cards: {}, settings: {},
             stats: { reviews: 0, correct: 0, streak: 0, lastDay: null } };
}
KS.store = {
  profile: function () { return PROFIL; },
  card: function (id) {
    if (!PROFIL.cards[id]) PROFIL.cards[id] = { box: 0, due: 0, reps: 0, lapses: 0, updatedAt: 0 };
    return PROFIL.cards[id];
  },
  markDay: function () {}, touch: function () {}
};

var probleme = [];
function pruefe(bedingung, text) { if (!bedingung) probleme.push(text); }
function wort(sw) { for (var i = 0; i < KS.vocab.length; i++) if (KS.vocab[i].sw === sw) return KS.vocab[i]; return null; }
function reihenfolge(p) {
  var f = KS.srs.lernfolge(p);
  return KS.vocab.slice().sort(function (a, b) { return f[a.id].rank - f[b.id].rank; });
}
function swListe(arr) { return arr.map(function (v) { return v.sw; }); }
function position(arr, sw) { for (var i = 0; i < arr.length; i++) if (arr[i].sw === sw) return i; return -1; }
function pad(v, w) { var s = "" + v; while (s.length < w) s += " "; return s; }

var L1 = KS.lessons[0].vocab;
var SPEZIAL = ["nyama choma", "chipsi mayai", "mishkaki", "biriani", "kachumbari", "pilau", "mandazi"];

// 1. Frisches Profil: Lektion 1 zuerst, in Lektionsreihenfolge
neuesProfil();
var f0 = reihenfolge(PROFIL);
pruefe(swListe(f0.slice(0, L1.length)).join("|") === L1.join("|"),
  "Frisches Profil beginnt nicht mit den Woertern aus Lektion 1: " + swListe(f0.slice(0, 5)).join(", "));

// 2. Grillfleisch & Co. kommen spaet
var posGrill = position(f0, "nyama choma");
pruefe(posGrill >= 150, "nyama choma kommt schon an Position " + (posGrill + 1));

// 3. Der ganze Alltagswortschatz steht vor dem Rest
var info0 = KS.srs.lernfolge(PROFIL);
var maxAlltag = -1, minRest = 1e9;
KS.vocab.forEach(function (v) {
  var inf = info0[v.id];
  pruefe(inf && typeof inf.rank === "number", v.sw + " hat keinen Rang");
  if (!inf) return;
  if (inf.quelle === "alltag" && inf.rank > maxAlltag) maxAlltag = inf.rank;
  if (inf.quelle === "rest" && inf.rank < minRest) minRest = inf.rank;
});
pruefe(maxAlltag < minRest, "Alltagswortschatz steht nicht vollstaendig vor dem Rest");
SPEZIAL.concat(["tembo", "simba", "moyo", "damu"]).forEach(function (sw) {
  var v = wort(sw);
  pruefe(v && info0[v.id].quelle === "rest",
    sw + " sollte zum Rest gehoeren, gehoert aber zu '" + (v ? info0[v.id].quelle : "?") + "'");
});

// 4. Erste Sitzung: genau die ersten 8 Woerter aus Lektion 1
neuesProfil();
var s1 = KS.srs.buildSession({ limit: 20, maxNew: 8 });
pruefe(s1.length === 8, "Erste Sitzung hat " + s1.length + " statt 8 Woerter");
pruefe(swListe(s1).join("|") === L1.slice(0, 8).join("|"),
  "Erste Sitzung bringt " + swListe(s1).join(", ") + " statt der ersten acht aus Lektion 1");

// 5. Lektion 1 fertig: Lektion 2 rueckt direkt dahinter
neuesProfil();
PROFIL.lessons.l01 = { done: true, score: 100, updatedAt: 1 };
var f1 = reihenfolge(PROFIL);
var erwartet = L1.concat(KS.lessons[1].vocab.filter(function (sw) { return L1.indexOf(sw) < 0; }));
pruefe(swListe(f1.slice(0, erwartet.length)).join("|") === erwartet.join("|"),
  "Nach Lektion 1 folgen nicht die Woerter aus Lektion 2");
var mw = wort("mwalimu");
pruefe(KS.srs.lernfolge(PROFIL)[mw.id].lektion === 1,
  "mwalimu steht in Lektion 2 und 3 — es sollte der frueheren zugeordnet sein");

// 6. Angefangene, nicht beendete Lektion zaehlt ebenfalls
neuesProfil();
PROFIL.lessons.l01 = { done: true, score: 100, updatedAt: 1 };
PROFIL.lessons.l02 = { done: true, score: 100, updatedAt: 1 };
PROFIL.lessons.l04 = { done: false, score: 0, started: 1, updatedAt: 1 };
var info4 = KS.srs.lernfolge(PROFIL);
pruefe(info4[wort("kusoma").id].quelle === "lektion",
  "Woerter aus der angefangenen Lektion 4 sind nicht vorgezogen");

// 7. Faellige Wiederholungen stehen vor neuen Woertern
neuesProfil();
var jetzt = Date.now();
var w1 = KS.vocab[200], w2 = KS.vocab[201];
KS.store.card(w1.id).reps = 2; KS.store.card(w1.id).due = jetzt - 1000;
KS.store.card(w2.id).reps = 2; KS.store.card(w2.id).due = jetzt - 5000;
var s2 = KS.srs.buildSession({ limit: 20, maxNew: 8 });
pruefe(s2.length === 10, "Sitzung mit 2 Wiederholungen hat " + s2.length + " statt 10 Karten");
pruefe(swListe(s2.slice(0, 2)).sort().join("|") === [w1.sw, w2.sw].sort().join("|"),
  "Faellige Wiederholungen stehen nicht am Anfang der Sitzung");

// 8. Themensitzung Essen: Alltagsessen vor Spezialgerichten
neuesProfil();
var s3 = KS.srs.buildSession({ topic: "chakula", limit: 20, maxNew: 8 });
s3.forEach(function (v) {
  pruefe(SPEZIAL.indexOf(v.sw) < 0, "Themensitzung Essen bringt schon '" + v.sw + "' unter den ersten acht");
});

// 9. Vorschau stimmt mit der Sitzung ueberein
neuesProfil();
var vorschau = swListe(KS.srs.naechsteNeue(8).map(function (n) { return n.v; }));
var sitzung  = swListe(KS.srs.buildSession({ limit: 20, maxNew: 8 }));
pruefe(vorschau.join("|") === sitzung.join("|"),
  "Die Vorschau zeigt andere Woerter als die Sitzung dann bringt");

// 10. Wiederholung in derselben Sitzung (Anki-Prinzip)
neuesProfil();
var wv = KS.vocab[10];
var wc = KS.store.card(wv.id);
wc.reps = 3; wc.box = 4; wc.due = Date.now() - 1000;
KS.srs.grade(wv.id, false);                 // erster Fehlversuch
pruefe(wc.box < 4, "Nach einem Fehler muesste das Fach sinken, ist aber " + wc.box);
pruefe(wc.due <= Date.now() + 1000, "Nach einem Fehler muesste die Karte sofort wieder faellig sein");

KS.srs.relearn(wv.id, false);               // in der Sitzung nochmal falsch
pruefe(wc.box === 0, "Erneut falsch: Fach muesste 0 sein, ist " + wc.box);
pruefe(wc.due <= Date.now() + 1000, "Erneut falsch: Karte muesste sofort wieder drankommen");

var vorher = PROFIL.stats.reviews;
KS.srs.relearn(wv.id, true);                // in der Sitzung richtig
var tage = Math.round((wc.due - Date.now()) / 864e5);
pruefe(wc.box === 1, "Nach erfolgreicher Wiederholung muesste Fach 1 sein, ist " + wc.box);
pruefe(tage === 1, "Nach erfolgreicher Wiederholung muesste die Karte in 1 Tag faellig sein, ist " + tage);
pruefe(PROFIL.stats.reviews === vorher,
  "Wiederholungen duerfen die Trefferquote nicht verfaelschen (Abfragen stiegen von " +
  vorher + " auf " + PROFIL.stats.reviews + ")");

// Ausgabe zum Anschauen
neuesProfil();
var ansicht = reihenfolge(PROFIL);
var infoA = KS.srs.lernfolge(PROFIL);
WScript.Echo("Die ersten 40 neuen Woerter fuer ein frisches Profil:");
WScript.Echo("");
for (var k = 0; k < 40; k++) {
  var v = ansicht[k];
  WScript.Echo("  " + pad(k + 1, 4) + pad(v.sw, 18) + pad(KS.srs.quelle(infoA[v.id]) || "Rest", 11) + v.de);
}
WScript.Echo("");
WScript.Echo("nyama choma kommt an Position " + (position(ansicht, "nyama choma") + 1) +
             " von " + ansicht.length);
WScript.Echo("");
WScript.Echo("Probleme: " + probleme.length);
if (probleme.length) {
  WScript.Echo("");
  probleme.forEach(function (p) { WScript.Echo("  " + p); });
}
