/* Spaced Repetition nach dem Leitner-Prinzip.
   Fach 0 = neu/falsch, Fach 6 = sitzt. Intervalle in Tagen.

   Neue Wörter kommen in einer festen Lernfolge (siehe lernfolge() unten
   und data/lernfolge.js), nicht zufällig.                               */
window.KS = window.KS || {};

(function () {
  var DAY = 864e5;
  var INTERVALS = [0, 1, 3, 7, 16, 35, 90];

  /* Gewicht der Themen für alles, was weder in einer Lektion noch im
     Alltagswortschatz steht. Spezialgerichte, Körperteile und Tiere
     landen dadurch am Ende. */
  var THEMA_GEWICHT = {
    salamu: 1, maswali: 2, vitenzi: 3, namba: 4, wakati: 5, nyumbani: 6,
    safari: 7, watu: 8, sifa: 9, chakula: 10, kazi: 11, afya: 12, asili: 13
  };

  var SRS = {
    intervals: INTERVALS,

    /* Karten für eine Sitzung: erst fällige Wiederholungen, dann neue
       Wörter in Lernfolge. */
    buildSession: function (opts) {
      opts = opts || {};
      var limit  = opts.limit || 20;
      var topic  = opts.topic || null;
      var maxNew = opts.maxNew != null ? opts.maxNew : 8;
      var now    = Date.now();
      var folge  = lernfolge(KS.store.profile());

      var due = [], fresh = [];
      KS.vocab.forEach(function (v) {
        if (topic && v.topic !== topic) return;
        var c = KS.store.card(v.id);
        if (!c) return;
        if (c.reps === 0) fresh.push(v);
        else if (c.due <= now) due.push({ v: v, due: c.due });
      });

      /* Wiederholungen: die am längsten überfälligen auswählen, dann
         mischen, damit sich keine feste Abfolge einprägt. */
      due.sort(function (a, b) { return a.due - b.due; });
      var session = shuffle(due.slice(0, limit).map(function (d) { return d.v; }));

      /* Neue Wörter: in Lernfolge statt zufällig, und hinter den
         Wiederholungen — erst aufwärmen, dann Neues. */
      var room = Math.min(limit - session.length, maxNew);
      if (room > 0) {
        fresh.sort(function (a, b) { return folge[a.id].rank - folge[b.id].rank; });
        session = session.concat(fresh.slice(0, room));
      }
      return session;
    },

    /* Die nächsten noch nie gelernten Wörter, in der Reihenfolge, in der
       sie drankommen — für die Vorschau auf der Vokabelseite. */
    naechsteNeue: function (anzahl, topic) {
      var folge = lernfolge(KS.store.profile());
      return KS.vocab
        .filter(function (v) {
          if (topic && v.topic !== topic) return false;
          var c = KS.store.card(v.id);
          return c && c.reps === 0;
        })
        .sort(function (a, b) { return folge[a.id].rank - folge[b.id].rank; })
        .slice(0, anzahl)
        .map(function (v) { return { v: v, info: folge[v.id] }; });
    },

    lernfolge: function (p) {
      return lernfolge(p === undefined ? KS.store.profile() : p);
    },

    /* Kurzes Etikett, woher ein Wort kommt. */
    quelle: function (info) {
      if (!info) return "";
      if (info.quelle === "lektion" || info.quelle === "spaeter") return "Lektion " + (info.lektion + 1);
      if (info.quelle === "alltag") return "Alltag";
      return "";
    },

    /* Antwort verbuchen. correct = true/false */
    grade: function (vocabId, correct) {
      var c = KS.store.card(vocabId);
      if (!c) return null;
      var p = KS.store.profile();

      c.reps += 1;
      if (correct) {
        c.box = Math.min(c.box + 1, INTERVALS.length - 1);
        c.due = Date.now() + INTERVALS[c.box] * DAY;
      } else {
        /* Eine gerade verpatzte Karte wird nicht tagelang weggelegt, sondern
           geht ins Wiederlernen: sofort wieder fällig. Wann sie danach
           wirklich drankommt, entscheidet relearn() — nach erfolgreicher
           Wiederholung morgen. */
        c.lapses += 1;
        c.box = Math.max(0, c.box - 2);
        c.due = Date.now();
      }
      c.updatedAt = Date.now();

      if (p) {
        p.stats.reviews += 1;
        if (correct) p.stats.correct += 1;
      }
      KS.store.markDay();
      KS.store.touch();
      return c;
    },

    /* Wiederholung innerhalb derselben Sitzung (wie Ankis Lernschritte).
       Der erste Fehlversuch wurde bereits über grade() verbucht; hier geht
       es nur noch darum, die Karte aus der Sitzung zu entlassen, sobald
       sie sitzt. Richtig beantwortet heißt: morgen nochmal, nicht in
       einer Woche. Die Trefferquote bleibt unangetastet, damit nur der
       erste Versuch zählt. */
    relearn: function (vocabId, correct) {
      var c = KS.store.card(vocabId);
      if (!c) return null;
      if (correct) {
        c.box = 1;
        c.due = Date.now() + INTERVALS[1] * DAY;
      } else {
        c.box = 0;
        c.due = Date.now();
      }
      c.updatedAt = Date.now();
      KS.store.touch();
      return c;
    },

    /* Zahlen für die Startseite */
    overview: function (topic) {
      var now = Date.now(), t = { total: 0, neu: 0, faellig: 0, gelernt: 0, gemeistert: 0 };
      KS.vocab.forEach(function (v) {
        if (topic && v.topic !== topic) return;
        var c = KS.store.card(v.id);
        t.total++;
        if (!c || c.reps === 0) { t.neu++; return; }
        t.gelernt++;
        if (c.box >= 5) t.gemeistert++;
        if (c.due <= now) t.faellig++;
      });
      return t;
    },

    /* Antwortprüfung: tolerant gegenüber Groß/Klein, Akzenten,
       Klammerzusätzen und mehreren durch Komma getrennten Lösungen. */
    check: function (given, expected) {
      var g = norm(given);
      if (!g) return false;
      return expected.split(/[,/]/).some(function (alt) {
        return norm(alt) === g;
      });
    },

    normalize: norm
  };

  /* Lernfolge: für jedes Wort ein Rang (klein = früher) und seine Herkunft.
       Rang      0 … 19999  Lektion, die man gemacht oder angefangen hat,
                            plus die nächste offene — in Lektionsreihenfolge
       Rang  20000 … 29999  Alltagswortschatz aus data/lernfolge.js
       Rang  30000 … 49999  Wörter aus späteren Lektionen
       Rang  50000 …        alles Übrige, nach Themengewicht
     Steht ein Wort an mehreren Stellen, zählt die früheste. */
  function lernfolge(p) {
    var lessons = KS.lessons || [];
    var aktiv = {}, ersteOffene = -1;
    lessons.forEach(function (l, i) {
      var st = p && p.lessons ? p.lessons[l.id] : null;
      if (st && (st.done || st.started)) aktiv[i] = true;
      if (ersteOffene < 0 && !(st && st.done)) ersteOffene = i;
    });
    if (ersteOffene >= 0) aktiv[ersteOffene] = true;

    var nachSw = {};
    KS.vocab.forEach(function (v) { nachSw[v.sw] = v; });

    var info = {};
    function setze(v, rang, quelle, lektion) {
      if (!v) return;
      if (!info[v.id] || rang < info[v.id].rank) {
        info[v.id] = { rank: rang, quelle: quelle, lektion: lektion };
      }
    }

    lessons.forEach(function (l, i) {
      (l.vocab || []).forEach(function (sw, pos) {
        if (aktiv[i]) setze(nachSw[sw], i * 1000 + pos, "lektion", i);
        else          setze(nachSw[sw], 30000 + i * 1000 + pos, "spaeter", i);
      });
    });
    (KS.grundwortschatz || []).forEach(function (sw, pos) {
      setze(nachSw[sw], 20000 + pos, "alltag", null);
    });
    KS.vocab.forEach(function (v, idx) {
      setze(v, 50000 + (THEMA_GEWICHT[v.topic] || 20) * 1000 + idx, "rest", null);
    });
    return info;
  }

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\([^)]*\)/g, " ")        /* Klammerzusätze ignorieren */
      .replace(/[.!?;:]/g, " ")
      .replace(/\b(der|die|das|ein|eine|einen|einem|einer|to|sich|zu)\b/g, " ")
      .replace(/ß/g, "ss")
      .replace(/\s+/g, " ")
      .trim();
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  KS.shuffle = shuffle;
  KS.srs = SRS;
})();
