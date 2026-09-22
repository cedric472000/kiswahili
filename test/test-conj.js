// Unabhaengige Pruefung der Konjugations-Engine ueber den Windows Script Host.
// JScript kennt die ES5-Array-Methoden nicht, darum ein paar Polyfills.

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn) {
    for (var i = 0; i < this.length; i++) fn(this[i], i, this);
  };
}
if (!Array.prototype.map) {
  Array.prototype.map = function (fn) {
    var o = []; for (var i = 0; i < this.length; i++) o.push(fn(this[i], i, this)); return o;
  };
}
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fn) {
    var o = []; for (var i = 0; i < this.length; i++) if (fn(this[i], i, this)) o.push(this[i]); return o;
  };
}
if (!Array.prototype.some) {
  Array.prototype.some = function (fn) {
    for (var i = 0; i < this.length; i++) if (fn(this[i], i, this)) return true; return false;
  };
}

var window = this;

function read(p) {
  var st = new ActiveXObject("ADODB.Stream");
  st.Type = 2; st.Charset = "utf-8"; st.Open(); st.LoadFromFile(p);
  var s = st.ReadText(); st.Close(); return s;
}

var BASE = "C:\\Users\\cedri\\OneDrive\\Desktop\\Claude\\kiswahili\\";
eval(read(BASE + "data\\verbs.js"));
eval(read(BASE + "js\\conjugator.js"));

// [Verb, Subjekt, Tempus, verneint, Objekt, erwartete Form]
var cases = [
  // Praesens
  ["kusoma","1sg","na",false,"none","ninasoma"],
  ["kusoma","2sg","na",false,"none","unasoma"],
  ["kusoma","3sg","na",false,"none","anasoma"],
  ["kusoma","1pl","na",false,"none","tunasoma"],
  ["kusoma","2pl","na",false,"none","mnasoma"],
  ["kusoma","3pl","na",false,"none","wanasoma"],
  // Praesens verneint: -na- faellt weg, -a wird -i
  ["kusoma","1sg","na",true,"none","sisomi"],
  ["kusoma","2sg","na",true,"none","husomi"],
  ["kusoma","3sg","na",true,"none","hasomi"],
  ["kusoma","1pl","na",true,"none","hatusomi"],
  ["kusoma","2pl","na",true,"none","hamsomi"],
  ["kusoma","3pl","na",true,"none","hawasomi"],
  // Vergangenheit: -li- wird verneint zu -ku-
  ["kusoma","1sg","li",false,"none","nilisoma"],
  ["kusoma","1sg","li",true,"none","sikusoma"],
  ["kusoma","3sg","li",true,"none","hakusoma"],
  ["kufika","3sg","li",true,"none","hakufika"],
  // Futur: -ta- bleibt
  ["kusoma","1sg","ta",false,"none","nitasoma"],
  ["kusoma","1sg","ta",true,"none","sitasoma"],
  ["kuja","3pl","ta",true,"none","hawatakuja"],
  // Perfekt: -me- wird verneint zu -ja- ("noch nicht")
  ["kusoma","1sg","me",false,"none","nimesoma"],
  ["kusoma","1sg","me",true,"none","sijasoma"],
  ["kufika","3sg","me",true,"none","hajafika"],
  ["kuelewa","1sg","me",false,"none","nimeelewa"],
  // Einsilbige Verben: ku- bleibt in na/li/ta/me
  ["kula","1sg","na",false,"none","ninakula"],
  ["kula","1sg","li",false,"none","nilikula"],
  ["kula","1sg","ta",false,"none","nitakula"],
  ["kula","1sg","me",false,"none","nimekula"],
  ["kunywa","3sg","na",false,"none","anakunywa"],
  // ... faellt aber in Verneinung/Konjunktiv weg
  ["kula","1sg","na",true,"none","sili"],
  ["kula","1pl","na",true,"none","hatuli"],
  ["kula","1sg","li",true,"none","sikula"],
  ["kula","1sg","me",true,"none","sijala"],
  // kwenda: ku + Vokal wird kw
  ["kwenda","1sg","na",false,"none","ninakwenda"],
  ["kwenda","1pl","na",false,"none","tunakwenda"],
  ["kwenda","1sg","na",true,"none","siendi"],
  ["kwenda","1sg","li",true,"none","sikwenda"],
  ["kwenda","3sg","li",true,"none","hakwenda"],
  ["kwenda","1pl","subj",false,"none","tuende"],
  ["kuja","1sg","na",false,"none","ninakuja"],
  ["kuja","1sg","subj",false,"none","nije"],
  // Arabischstaemmige Verben: Endvokal aendert sich nie
  ["kusafiri","1sg","na",true,"none","sisafiri"],
  ["kurudi","1sg","na",true,"none","sirudi"],
  ["kujibu","1sg","na",true,"none","sijibu"],
  ["kuhitaji","1sg","na",true,"none","sihitaji"],
  ["kurudi","1sg","subj",false,"none","nirudi"],
  // Objektinfixe
  ["kupenda","1sg","na",false,"o2sg","ninakupenda"],
  ["kuona","1sg","me",false,"o3sg","nimemwona"],
  ["kusoma","3sg","li",false,"ocl7","alikisoma"],
  ["kusaidia","3pl","ta",false,"o1sg","watanisaidia"],
  // Einsilbig + Objekt: ku- faellt weg
  ["kula","1sg","na",false,"ocl7","ninakila"],
  // Sachklassen bekommen nie a-
  ["kwenda","cl9","na",false,"none","inakwenda"],
  ["kwenda","cl10","na",false,"none","zinakwenda"],
  ["kuwa","cl5","na",false,"none","linakuwa"],
  ["kufika","cl8","me",false,"none","vimefika"],
  // Konjunktiv
  ["kusoma","1sg","subj",false,"none","nisome"],
  ["kusoma","1sg","subj",true,"none","nisisome"],
  ["kusaidia","1sg","subj",false,"o2sg","nikusaidie"],
  ["kukaa","1sg","subj",false,"none","nikae"],
  // Gewohnheitsform: ohne Subjektpraefix
  ["kusoma","1sg","hu",false,"none","husoma"],
  ["kusoma","3pl","hu",false,"none","husoma"],
  // -ki- und sein verneintes Gegenstueck -sipo-
  ["kutaka","2sg","ki",false,"none","ukitaka"],
  ["kufika","1sg","ki",false,"none","nikifika"],
  ["kusoma","1sg","ki",true,"none","nisiposoma"],
  // -nge- Konjunktiv
  ["kupenda","1sg","nge",false,"none","ningependa"],
  ["kupenda","1sg","nge",true,"none","singependa"],
  ["kupenda","2sg","nge",true,"none","hungependa"],
  ["kupenda","3sg","nge",true,"none","hangependa"],
  ["kula","1sg","nge",false,"none","ningekula"],
  // -ka- Anreihung
  ["kununua","1sg","ka",false,"none","nikanunua"]
];

var imps = [
  ["kusoma","2sg",false,"Soma!"],
  ["kusoma","2pl",false,"someni!"],
  ["kusoma","2sg",true,"usisome!"],
  ["kusoma","2pl",true,"msisome!"],
  ["kwenda","2sg",false,"Nenda!"],
  ["kuja","2sg",false,"Njoo!"],
  ["kula","2sg",false,"Kula!"]
];

var fails = [];
cases.forEach(function (c) {
  var v = KS.findVerb(c[0]);
  if (!v) { fails.push(c[0] + ": Verb nicht gefunden"); return; }
  var r = KS.conjugate(v, c[1], c[2], c[3], c[4]);
  var got = r.form ? r.form : ("FEHLER:" + r.error);
  if (got !== c[5]) {
    fails.push(c[0] + " [" + c[1] + "/" + c[2] + (c[3] ? "/neg" : "") +
               (c[4] !== "none" ? "/" + c[4] : "") + "]  erwartet: " + c[5] + "  bekommen: " + got);
  }
});
imps.forEach(function (c) {
  var r = KS.conjugate(KS.findVerb(c[0]), c[1], "imp", c[2], "none");
  var got = r.form ? r.form : ("FEHLER:" + r.error);
  if (got !== c[3]) {
    fails.push(c[0] + " [Befehl/" + c[1] + (c[2] ? "/neg" : "") +
               "]  erwartet: " + c[3] + "  bekommen: " + got);
  }
});

// Formen, die es nicht geben darf
var mustError = [
  ["kusoma","1sg","ka",true,"-ka- hat keine Verneinung"],
  ["kusoma","1sg","hu",true,"hu- hat keine Verneinung"],
  ["kusoma","1sg","imp",false,"Befehl nur fuer du/ihr"]
];
mustError.forEach(function (c) {
  var r = KS.conjugate(KS.findVerb(c[0]), c[1], c[2], c[3], "none");
  if (!r.error) fails.push("Haette Fehler liefern sollen (" + c[4] + "), lieferte: " + r.form);
});

var total = cases.length + imps.length + mustError.length;
WScript.Echo("Geprueft: " + total);
WScript.Echo("Fehler:   " + fails.length);
if (fails.length) {
  WScript.Echo("");
  fails.forEach(function (f) { WScript.Echo("  " + f); });
} else {
  WScript.Echo("Alle Formen korrekt.");
}
