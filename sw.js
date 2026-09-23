/* Service Worker — macht die App offline benutzbar.

   Ohne ihn braucht jeder Start eine Verbindung. Mit ihm liegen alle Dateien
   im Cache des Geraets: im Flugzeug, im Funkloch und ohne Datenvolumen
   startet die App trotzdem.

   Strategie:
   · Seitenaufruf (navigate) — erst Netz, sonst Cache. So kommt eine neue
     Fassung sofort an, solange man online ist.
   · Alles andere — erst Cache (sofort sichtbar), parallel das Netz fragen
     und den Cache auffrischen. Die Auffrischung wirkt beim naechsten Start.

   VERSION bei jeder Veroeffentlichung hochzaehlen: aendert sich diese Datei,
   installiert der Browser den Worker neu und wirft alte Caches weg.
   DATEIEN muss zu dem passen, was index.html laedt — test/test-pwa.js
   prueft genau das.                                                        */

var VERSION = "kiswahili-v2";

var DATEIEN = [
  "./",
  "./index.html",
  "./css/style.css",
  "./data/vocab.js",
  "./data/lernfolge.js",
  "./data/verbs.js",
  "./data/lessons.js",
  "./data/grammar.js",
  "./data/methali.js",
  "./js/storage.js",
  "./js/srs.js",
  "./js/conjugator.js",
  "./js/app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (cache) { return cache.addAll(DATEIEN); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (namen) {
      return Promise.all(namen.map(function (n) {
        return n === VERSION ? null : caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  /* Fremde Adressen nicht anfassen. */
  var ziel;
  try { ziel = new URL(req.url); } catch (err) { return; }
  if (ziel.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(function (res) { ablegen(req, res.clone()); return res; })
        .catch(function () {
          return caches.match(req).then(function (treffer) {
            return treffer || caches.match("./index.html");
          });
        })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (treffer) {
      var ausDemNetz = fetch(req).then(function (res) {
        ablegen(req, res.clone());
        return res;
      }).catch(function () { return treffer; });
      return treffer || ausDemNetz;
    })
  );
});

function ablegen(req, res) {
  if (!res || res.status !== 200 || res.type !== "basic") return;
  caches.open(VERSION).then(function (cache) { cache.put(req, res); });
}
