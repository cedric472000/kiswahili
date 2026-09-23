// Prueft die Installier- und Offline-Teile: Passt die Dateiliste im Service
// Worker zu dem, was index.html wirklich laedt? Gibt es jede Datei, die
// Manifest und Worker nennen? Ein vergessener Eintrag faellt sonst erst auf,
// wenn die App offline auf dem Handy leer bleibt.
//
//   cscript //nologo //E:JScript test/test-pwa.js

var BASE = "C:\\Users\\cedri\\OneDrive\\Desktop\\Claude\\kiswahili\\";
var fso = new ActiveXObject("Scripting.FileSystemObject");

function read(p) {
  var st = new ActiveXObject("ADODB.Stream");
  st.Type = 2; st.Charset = "utf-8"; st.Open(); st.LoadFromFile(p);
  var s = st.ReadText(); st.Close(); return s;
}
function pfad(rel) {
  return BASE + String(rel).replace(/^\.\//, "").replace(/\//g, "\\");
}
function existiert(rel) { return fso.FileExists(pfad(rel)); }

var probleme = [];
function pruefe(bedingung, text) { if (!bedingung) probleme.push(text); }

// ---- 1. Dateiliste aus sw.js holen -----------------------------------
var sw = read(BASE + "sw.js");
var block = sw.match(/var DATEIEN = \[([\s\S]*?)\];/);
if (!block) {
  WScript.Echo("FEHLER: DATEIEN-Liste in sw.js nicht gefunden.");
  WScript.Quit(1);
}
var liste = [], m, re = /"([^"]+)"/g;
while ((m = re.exec(block[1])) !== null) liste.push(m[1]);

WScript.Echo("Service Worker nennt " + liste.length + " Dateien.");

var imCache = {};
for (var i = 0; i < liste.length; i++) {
  var eintrag = liste[i];
  imCache[eintrag.replace(/^\.\//, "")] = true;
  if (eintrag === "./") continue;              // der Ordner selbst
  pruefe(existiert(eintrag), "sw.js nennt eine Datei, die es nicht gibt: " + eintrag);
}

// ---- 2. Was laedt index.html wirklich? -------------------------------
var html = read(BASE + "index.html");
var geladen = [];
var reQuelle = /(?:src|href)="([^"]+)"/g;
while ((m = reQuelle.exec(html)) !== null) {
  var url = m[1];
  if (/^(https?:|data:|#|mailto:)/.test(url)) continue;
  geladen.push(url);
}
for (i = 0; i < geladen.length; i++) {
  pruefe(existiert(geladen[i]), "index.html verweist auf eine fehlende Datei: " + geladen[i]);
  pruefe(imCache[geladen[i].replace(/^\.\//, "")],
         "index.html laedt " + geladen[i] + ", aber sw.js legt sie nicht in den Cache — " +
         "offline fehlt sie dann.");
}
WScript.Echo("index.html laedt " + geladen.length + " eigene Dateien.");

// ---- 3. Manifest -----------------------------------------------------
var manifest = read(BASE + "manifest.webmanifest");
var mf;
try { mf = eval("(" + manifest + ")"); }
catch (e) { probleme.push("manifest.webmanifest ist kein gueltiges JSON: " + e.message); mf = null; }

if (mf) {
  pruefe(mf.name && mf.short_name, "Manifest braucht name und short_name.");
  pruefe(mf.display === "standalone", "display sollte 'standalone' sein, sonst bleibt die Browserleiste.");
  pruefe(/^\.\/?$/.test(mf.start_url), "start_url muss relativ sein ('./'), sonst bricht ein Unterordner auf GitHub Pages.");
  pruefe(/^\.\/?$/.test(mf.scope), "scope muss relativ sein ('./').");
  pruefe(mf.icons && mf.icons.length >= 2, "Mindestens zwei Icons (192 und 512) noetig.");
  var hat192 = false, hat512 = false, maskierbar = false;
  for (i = 0; mf.icons && i < mf.icons.length; i++) {
    var ik = mf.icons[i];
    pruefe(existiert(ik.src), "Manifest nennt ein Icon, das es nicht gibt: " + ik.src);
    pruefe(imCache[ik.src.replace(/^\.\//, "")], "Icon nicht im Offline-Cache: " + ik.src);
    if (ik.sizes === "192x192") hat192 = true;
    if (ik.sizes === "512x512") hat512 = true;
    if (ik.purpose && ik.purpose.indexOf("maskable") >= 0) maskierbar = true;
  }
  pruefe(hat192, "Icon 192x192 fehlt — Android verlangt es zum Installieren.");
  pruefe(hat512, "Icon 512x512 fehlt — Android verlangt es zum Installieren.");
  pruefe(maskierbar, "Kein maskierbares Icon — Android schneidet sonst weisse Ecken hinein.");
  pruefe(/^#[0-9A-Fa-f]{6}$/.test(mf.theme_color || ""), "theme_color fehlt oder ist kein Hex-Wert.");
}

// ---- 4. Einbindung in index.html -------------------------------------
pruefe(/rel="manifest"/.test(html), "index.html bindet das Manifest nicht ein.");
pruefe(/rel="apple-touch-icon"/.test(html), "apple-touch-icon fehlt — auf dem iPhone bliebe das Icon leer.");
pruefe(/serviceWorker/.test(html), "index.html registriert den Service Worker nicht.");
pruefe(/apple-mobile-web-app-title/.test(html), "apple-mobile-web-app-title fehlt (Name unter dem Icon).");
pruefe(existiert("icons/apple-touch-icon.png"), "icons/apple-touch-icon.png fehlt.");

// Zwei Fallen, die schon einmal zugeschnappt sind:
pruefe(/cache: ?["']reload["']/.test(sw),
       "sw.js holt die Dateien beim Installieren ohne cache:\"reload\" — dann legt der neue " +
       "Worker die alten Dateien aus dem HTTP-Cache ab und kein Update kommt je an.");
pruefe(/controllerchange/.test(html),
       "index.html lädt nach dem Wechsel auf einen neuen Worker nicht neu — neue Inhalte " +
       "erschienen erst beim übernächsten Öffnen.");

// Das Artefakt darf den Worker nicht registrieren — dort ist er gesperrt.
var artefakt = read(BASE + "artifact.html");
pruefe(!/serviceWorker/.test(artefakt),
       "artifact.html sollte den Service Worker nicht registrieren.");

// ---- Ergebnis --------------------------------------------------------
WScript.Echo("");
if (probleme.length) {
  for (i = 0; i < probleme.length; i++) WScript.Echo("  ! " + probleme[i]);
}
WScript.Echo("Probleme: " + probleme.length);
WScript.Quit(probleme.length ? 1 : 0);
