/* Oberfläche + Router. Reines DOM, keine Bibliotheken. */
(function () {
  "use strict";

  var app, rail, tabbar, topbar;

  /* ------------------------------------------------------------------ */
  /* Helfer                                                              */
  /* ------------------------------------------------------------------ */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function h(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.firstElementChild;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function go(hash) { location.hash = hash; }
  function vocabBySw(sw) {
    for (var i = 0; i < KS.vocab.length; i++) if (KS.vocab[i].sw === sw) return KS.vocab[i];
    return null;
  }
  function topicName(id) {
    for (var i = 0; i < KS.topics.length; i++) if (KS.topics[i].id === id) return KS.topics[i].name;
    return id;
  }

  /* Fokus erst im nächsten Tick setzen.
     Sonst aktiviert dieselbe Enter-Taste, die gerade die Antwort geprüft hat,
     unmittelbar die neu erschienene Weiter-Schaltfläche — und die Rückmeldung
     samt Erklärung blitzt nur auf, statt gelesen werden zu können. */
  function focusSoon(el) {
    if (el) setTimeout(function () { el.focus(); }, 0);
  }

  /* ------------------------------------------------------------------ */
  /* Gerüst: Navigationsspalte, Tab-Leiste, Konzentrationsmodus          */
  /* ------------------------------------------------------------------ */

  /* Strichzeichnungen, alle im selben 24er-Raster und in currentColor —
     so passen sie sich Akzentfarbe und Dunkelmodus von selbst an. */
  var ICONS = {
    home:  '<path d="M3.5 10.6 12 3.8l8.5 6.8"/><path d="M6 9.6V20h12V9.6"/>',
    book:  '<path d="M5 5.2A2.2 2.2 0 0 1 7.2 3H19v18H7.2A2.2 2.2 0 0 1 5 18.8z"/><path d="M8.5 7.8h7"/>',
    cards: '<rect x="3.2" y="7.2" width="13" height="13" rx="2.6"/><path d="M7.6 4h9.2A3.2 3.2 0 0 1 20 7.2v9.2"/>',
    tool:  '<path d="M4 7.5h16M4 16.5h16"/><circle cx="9.5" cy="7.5" r="2.4"/><circle cx="15" cy="16.5" r="2.4"/>',
    info:  '<circle cx="12" cy="12" r="8.6"/><path d="M12 11.2v5.4M12 7.7v.2"/>',
    user:  '<circle cx="12" cy="8.8" r="3.6"/><path d="M4.8 19.8a7.2 7.2 0 0 1 14.4 0"/>',
    list:  '<path d="M5 7h14M5 12h14M5 17h9"/>',
    grid:  '<rect x="3.8" y="3.8" width="6.8" height="6.8" rx="1.8"/>' +
           '<rect x="13.4" y="3.8" width="6.8" height="6.8" rx="1.8"/>' +
           '<rect x="3.8" y="13.4" width="6.8" height="6.8" rx="1.8"/>' +
           '<rect x="13.4" y="13.4" width="6.8" height="6.8" rx="1.8"/>',
    flame: '<path d="M12 3.2c.4 2.6 1.9 3.6 3 5 1 1.3 1.6 2.6 1.6 4.1a4.6 4.6 0 1 1-9.2 0c0-1.7.7-2.9 1.6-3.8.1 1.3.8 2.1 1.6 2.1.9 0 1.5-.8 1.5-2.1 0-1.9-.5-3.5-.1-5.3z"/>',
    close: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    arrow: '<path d="M5 12h13M12.8 5.8 19 12l-6.2 6.2"/>',
    check: '<path d="M5.5 12.4 10 16.9l8.5-9"/>',
    sun:   '<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2M12 19.2v2M4.8 12h-2M21.2 12h-2' +
           'M6.4 6.4 5 5M19 19l-1.4-1.4M17.6 6.4 19 5M5 19l1.4-1.4"/>',
    moon:  '<path d="M20.2 14.6A8.4 8.4 0 0 1 9.4 3.8a8.4 8.4 0 1 0 10.8 10.8z"/>'
  };
  function ic(name, size) {
    var s = size || 20;
    return '<svg class="ic" viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" ' +
           'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ' +
           'aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  var NAV = [
    { href: "#/",           label: "Start",      icon: "home",  tab: true },
    { href: "#/lessons",    label: "Lektionen",  icon: "book",  tab: true },
    { href: "#/vokabeln",   label: "Vokabeln",   icon: "cards", tab: true },
    { href: "#/konjugator", label: "Konjugator", icon: "tool",  tab: false },
    { href: "#/grammatik",  label: "Grammatik",  icon: "info",  tab: true },
    { href: "#/profil",     label: "Profil",     icon: "user",  tab: true }
  ];

  /* Unterseiten färben den passenden Hauptpunkt ein. */
  var TOP = {
    lesson: "lessons", lernen: "vokabeln", klassen: "vokabeln", liste: "vokabeln",
    "konjugator-drill": "konjugator"
  };
  function bereich() {
    var parts = (location.hash || "#/").replace(/^#\//, "").split("/");
    return "#/" + (TOP[parts[0]] || parts[0]);
  }
  function markActive(href) {
    $$("[data-nav]").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === href);
    });
  }

  /* ---- Hell / dunkel: Gerätewunsch als Vorgabe, Wahl bleibt gespeichert ---- */
  var THEME_KEY = "kiswahili.theme";
  function themeGespeichert() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function themeAktiv() {
    var t = themeGespeichert();
    if (t) return t;
    return (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }
  function themeAnwenden() {
    var t = themeGespeichert();
    if (t) document.documentElement.setAttribute("data-theme", t);
  }
  function themeUmschalten() {
    var neu = themeAktiv() === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, neu); } catch (e) {}
    document.documentElement.setAttribute("data-theme", neu);
    renderShell();
  }

  function brandHtml() {
    return '<a class="brand" href="#/"><span class="mark">K</span>' +
           '<span class="wordmark">Ki<em>swahili</em></span></a>';
  }

  function renderShell() {
    var p = KS.store.profile();
    if (!p || !rail) return;
    var dunkel = themeAktiv() === "dark";
    var themeKnopf = '<button class="iconbtn themeBtn" type="button" title="Hell oder dunkel" ' +
                     'aria-label="Hell oder dunkel">' + ic(dunkel ? "sun" : "moon") + "</button>";

    rail.innerHTML =
      brandHtml() +
      '<nav class="railnav">' + NAV.map(function (n) {
        return '<a class="navitem" data-nav="' + n.href + '" href="' + n.href + '">' +
               ic(n.icon) + "<span>" + n.label + "</span></a>";
      }).join("") + "</nav>" +
      '<div class="railfoot">' + themeKnopf +
        '<a class="userchip" href="#/profil"><span class="avatar">' +
          esc(p.name.charAt(0).toUpperCase()) + "</span><span>" + esc(p.name) +
          "<small>" + (p.stats.streak > 0 ? p.stats.streak + " Tage am Stück" : "Noch kein Streak") +
        "</small></span></a>" +
      "</div>";

    if (topbar) {
      topbar.innerHTML = brandHtml() +
        '<span class="topright">' +
          (p.stats.streak > 0
            ? '<span class="chip chip-streak">' + ic("flame", 15) + p.stats.streak + "</span>" : "") +
          themeKnopf +
        "</span>";
    }
    if (tabbar) {
      tabbar.innerHTML = NAV.filter(function (n) { return n.tab; }).map(function (n) {
        return '<a class="tabitem" data-nav="' + n.href + '" href="' + n.href + '">' +
               '<span class="icwrap">' + ic(n.icon, 22) + "</span>" + n.label + "</a>";
      }).join("");
    }

    $$(".themeBtn").forEach(function (b) { b.onclick = themeUmschalten; });
    markActive(bereich());
  }

  function shellAn()  { [rail, tabbar, topbar].forEach(function (e) { if (e) e.classList.remove("hidden"); }); }
  function shellAus() { [rail, tabbar, topbar].forEach(function (e) { if (e) e.classList.add("hidden"); }); }

  /* Während Lektion und Abfrage verschwindet die Navigation — eine Aufgabe,
     ein Bildschirm. Der Router hebt das bei jedem Seitenwechsel wieder auf. */
  function focusAn()  { document.body.classList.add("focus"); }
  function focusAus() { document.body.classList.remove("focus"); }

  /* ---- Wiederkehrende Bausteine ---- */
  function pageHead(title, sub, actions) {
    return '<header class="phead"><h1>' + esc(title) + "</h1>" +
           (sub ? '<p class="lead">' + esc(sub) + "</p>" : "") +
           (actions ? '<div class="pactions">' + actions + "</div>" : "") +
           "</header>";
  }

  /* Fortschrittsring: Umfang bei r=26 ist 2πr ≈ 163.4 */
  function ringHtml(pct, oben, unten) {
    var c = 163.4;
    var wert = Math.max(0, Math.min(100, pct || 0));
    return '<div class="ringwrap">' +
             '<svg class="ring" viewBox="0 0 62 62" width="62" height="62" aria-hidden="true">' +
               '<circle class="ring-bg" cx="31" cy="31" r="26"/>' +
               '<circle class="ring-fg" cx="31" cy="31" r="26" stroke-dasharray="' + c +
                 '" stroke-dashoffset="' + (c * (1 - wert / 100)).toFixed(1) + '"/>' +
             "</svg>" +
             '<div class="ring-val">' + esc(oben) +
               (unten ? "<small>" + esc(unten) + "</small>" : "") + "</div>" +
           "</div>";
  }

  /* Kopfzeile für die beiden Drills */
  function drillKopf(titel, i, n, zurueck) {
    return '<div class="focushead">' +
             '<a class="iconbtn" href="' + zurueck + '" aria-label="Beenden">' + ic("close") + "</a>" +
             '<div class="fh-mid"><div class="fh-title">' + esc(titel) + "</div>" +
               '<div class="exbar"><div class="exbar-fill" style="width:' +
                 Math.round((i / n) * 100) + '%"></div></div>' +
               '<div class="fh-meta"><span>' + (i + 1) + " von " + n + "</span></div>" +
             "</div></div>";
  }

  /* Merkt sich, dass man die Wörter einer Lektion gesehen hat. Ab dann
     rücken genau diese Wörter in der Vokabel-Lernfolge nach vorn (srs.js). */
  function markiereGesehen(l) {
    var p = KS.store.profile();
    if (!p) return;
    var st = p.lessons[l.id];
    if (st && (st.started || st.done)) return;
    p.lessons[l.id] = { done: false, score: 0, started: Date.now(), updatedAt: Date.now() };
    KS.store.touch();
  }

  /* Vokabelkarte als HTML */
  function vocabChip(v) {
    if (!v) return "";
    var cls = v.cls ? '<span class="cls">Kl. ' + esc(v.cls) + "</span>" : "";
    var pl  = v.pl ? ' <span class="pl">Pl. ' + esc(v.pl) + "</span>" : "";
    var tag = v.tag ? '<span class="tag tag-' + esc(v.tag) + '">' +
                      (v.tag === "dar" ? "Dar" : "TZ") + "</span>" : "";
    return '<div class="vchip">' +
             '<div class="vchip-top"><b>' + esc(v.sw) + "</b>" + pl + cls + tag + "</div>" +
             '<div class="vchip-de">' + esc(v.de) + "</div>" +
             (v.note ? '<div class="vchip-note">' + esc(v.note) + "</div>" : "") +
           "</div>";
  }

  /* Methali-Band — auf einem Kanga steht das Sprichwort unten am Rand,
     gerahmt von der Bordüre. Genau diese Rolle hat es hier. */
  function methaliBand() {
    var m = KS.methaliLeo();
    return '<div class="methali">' +
             '<div class="methali-band"></div>' +
             '<div class="methali-body">' +
               '<div class="methali-lab">Methali ya leo — Sprichwort des Tages</div>' +
               '<div class="methali-sw">' + esc(m.sw) + "</div>" +
               '<div class="methali-de">' + esc(m.de) + "</div>" +
               (m.note ? '<div class="methali-note">' + esc(m.note) + "</div>" : "") +
             "</div>" +
             '<div class="methali-band"></div>' +
           "</div>";
  }

  /* ------------------------------------------------------------------ */
  /* Profilauswahl                                                       */
  /* ------------------------------------------------------------------ */
  function renderProfileGate() {
    var profiles = KS.store.listProfiles();
    var html =
      '<div class="gate">' +
        '<div class="gate-card">' +
          '<div class="gate-twiga">' + KS.twiga.figur(92) + "</div>" +
          brandHtml() +
          '<p class="gate-sub">Karibu! Wer lernt gerade?</p>' +
          '<div class="gate-list">' +
            profiles.map(function (p) {
              return '<button class="profile-btn" data-id="' + esc(p.id) + '">' +
                       '<span class="avatar">' + esc(p.name.charAt(0).toUpperCase()) + "</span>" +
                       '<span class="pname">' + esc(p.name) + "</span>" +
                     "</button>";
            }).join("") +
          "</div>" +
          '<div class="gate-new">' +
            '<input id="newProfile" type="text" placeholder="Neuer Name" maxlength="20">' +
            '<button id="createProfile" class="btn">Profil anlegen</button>' +
          "</div>" +
        "</div>" +
      "</div>";
    app.innerHTML = html;
    shellAus();
    focusAus();

    $$(".profile-btn").forEach(function (b) {
      b.onclick = function () {
        KS.store.setActive(b.dataset.id);
        location.hash = "#/";
        boot();
      };
    });
    $("#createProfile").onclick = function () {
      var name = $("#newProfile").value.trim();
      if (!name) return;
      KS.store.createProfile(name);
      location.hash = "#/";
      boot();
    };
    $("#newProfile").onkeydown = function (e) {
      if (e.key === "Enter") $("#createProfile").click();
    };
  }

  /* ------------------------------------------------------------------ */
  /* Startseite                                                          */
  /* ------------------------------------------------------------------ */
  function viewHome() {
    var p = KS.store.profile();
    var ov = KS.srs.overview();
    var done = 0;
    KS.lessons.forEach(function (l) { if (p.lessons[l.id] && p.lessons[l.id].done) done++; });

    var next = null, nextIdx = -1;
    for (var i = 0; i < KS.lessons.length; i++) {
      var st = p.lessons[KS.lessons[i].id];
      if (!st || !st.done) { next = KS.lessons[i]; nextIdx = i; break; }
    }

    var quote = KS.mwalimu.intro;
    if (ov.faellig > 0) {
      quote = "Karibu tena, " + p.name + ". " + ov.faellig + " Wörter warten auf ihre " +
              "Wiederholung. Tuanze — fangen wir an.";
    } else if (p.stats.streak > 1) {
      quote = "Hongera! " + p.stats.streak + " Tage am Stück. Endelea hivyo — mach genau so weiter.";
    }

    var vokPct = ov.total ? Math.round((ov.gelernt / ov.total) * 100) : 0;
    var acc = p.stats.reviews ? Math.round((p.stats.correct / p.stats.reviews) * 100) : 0;

    var vok = ov.faellig > 0
      ? { t: ov.faellig + (ov.faellig === 1 ? " Wort fällig" : " Wörter fällig"),
          s: ov.neu + " neue warten außerdem" }
      : ov.neu > 0
        ? { t: "Nichts fällig — " + ov.neu + " neue Wörter", s: "Du kannst vorarbeiten" }
        : { t: "Alles wiederholt", s: "Der ganze Wortschatz sitzt" };

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-head">' +
          '<div class="mw-avatar">' + KS.twiga.kopf(44) + "</div>" +
          "<div><div class='hero-hello'>Habari, " + esc(p.name) + "!</div>" +
          "<div class='hero-where'>" + esc(KS.mwalimu.name) + " · " + esc(KS.mwalimu.where) +
          "</div></div>" +
          (p.stats.streak > 0
            ? '<span class="chip chip-streak">' + ic("flame", 15) + p.stats.streak +
              (p.stats.streak === 1 ? " Tag" : " Tage") + "</span>"
            : "") +
        "</div>" +
        '<p class="hero-say">' + esc(quote) + "</p>" +
        '<div class="hero-cta">' +
          '<a class="btn btn-primary" href="#/lernen">' + ic("cards", 18) +
            (ov.faellig > 0 ? ov.faellig + " Wörter üben" : "Vokabeln üben") + "</a>" +
          (next
            ? '<a class="btn" href="#/lesson/' + next.id + '">' + ic("book", 18) +
              "Lektion " + (nextIdx + 1) + " weiterlernen</a>"
            : "") +
        "</div>" +
      "</section>" +

      '<div class="today">' +
        '<a class="tcard" href="#/lernen">' +
          ringHtml(vokPct, ov.gelernt, "von " + ov.total) +
          "<div><div class='tcard-lab'>Karteikarten</div>" +
          "<div class='tcard-title'>" + esc(vok.t) + "</div>" +
          "<div class='tcard-sub'>" + esc(vok.s) + "</div></div>" +
          '<span class="arrow">' + ic("arrow", 20) + "</span></a>" +
        (next
          ? '<a class="tcard" href="#/lesson/' + next.id + '">' +
              '<span class="lnum next">' + (nextIdx + 1) + "</span>" +
              "<div><div class='tcard-lab'>Nächste Lektion</div>" +
              "<div class='tcard-title'>" + esc(next.title) + "</div>" +
              "<div class='tcard-sub'>" + esc(next.goal) + "</div></div>" +
              '<span class="arrow">' + ic("arrow", 20) + "</span></a>"
          : '<a class="tcard" href="#/lessons">' +
              '<span class="lnum done">' + ic("check", 20) + "</span>" +
              "<div><div class='tcard-lab'>Kurs</div>" +
              "<div class='tcard-title'>Alle " + KS.lessons.length + " Lektionen geschafft</div>" +
              "<div class='tcard-sub'>Hongera sana! Zeit zum Wiederholen.</div></div>" +
              '<span class="arrow">' + ic("arrow", 20) + "</span></a>") +
      "</div>" +

      '<div class="metrics">' +
        metric(ov.gelernt + " / " + ov.total, "Wörter") +
        metric(done + " / " + KS.lessons.length, "Lektionen") +
        metric(acc + "%", "Trefferquote") +
        metric(p.stats.streak, "Tage-Streak") +
      "</div>" +

      '<h2 class="sec">Werkzeuge</h2>' +
      '<div class="tiles">' +
        tile("tool", "Konjugator", "Formen bauen und zerlegen", "#/konjugator") +
        tile("info", "Grammatik", "Regeln zum Nachschlagen", "#/grammatik") +
        tile("list", "Wortliste", "Alle Wörter, durchsuchbar", "#/liste") +
        tile("grid", "Nomenklassen", "Plural üben", "#/klassen") +
      "</div>" +

      methaliBand();

    function metric(v, l) {
      return '<div class="metric"><div class="metric-v">' + esc(v) + "</div>" +
             '<div class="metric-l">' + esc(l) + "</div></div>";
    }
    function tile(icon, n, s, href) {
      return '<a class="tile" href="' + href + '"><div class="tile-ic">' + ic(icon, 19) + "</div>" +
             '<div class="tile-n">' + esc(n) + "</div>" +
             '<div class="tile-s">' + esc(s) + "</div></a>";
    }
  }

  /* ------------------------------------------------------------------ */
  /* Lektionsübersicht                                                   */
  /* ------------------------------------------------------------------ */
  /* Der Kurs in sechs Abschnitten — ein Kurs mit Kapiteln liest sich
     leichter als eine Liste aus vierundzwanzig gleichen Zeilen.
     bis = letzte Lektionsnummer des Abschnitts (1-basiert). */
  var LEKTIONSGRUPPEN = [
    { bis: 3,  name: "Erste Worte",        hinweis: "Grüßen, sich vorstellen, Nomenklassen" },
    { bis: 7,  name: "Das Verb",           hinweis: "Baukasten, Verneinung, Zeitformen" },
    { bis: 12, name: "Alltag in Dar",      hinweis: "Adjektive, Besitz, Zahlen, Uhrzeit, Orte" },
    { bis: 16, name: "Verberweiterungen",  hinweis: "Für jemanden, Passiv, veranlassen, einander" },
    { bis: 20, name: "Sätze verbinden",    hinweis: "Relativsätze, Bedingungen, das Unwirkliche" },
    { bis: 99, name: "Draußen in Dar",     hinweis: "Arzt, Wohnen, Behörden, unterwegs" }
  ];
  function gruppeVon(i) {
    for (var g = 0; g < LEKTIONSGRUPPEN.length; g++) {
      if (i + 1 <= LEKTIONSGRUPPEN[g].bis) return g;
    }
    return LEKTIONSGRUPPEN.length - 1;
  }

  function viewLessons() {
    var p = KS.store.profile();
    var done = 0, offen = -1;
    KS.lessons.forEach(function (l, i) {
      if (p.lessons[l.id] && p.lessons[l.id].done) done++;
      else if (offen < 0) offen = i;
    });
    var pct = Math.round((done / KS.lessons.length) * 100);

    var liste = "", offeneGruppe = false;
    KS.lessons.forEach(function (l, i) {
      var g = gruppeVon(i);
      if (i === 0 || gruppeVon(i - 1) !== g) {
        if (offeneGruppe) liste += "</div></section>";
        liste += '<section class="lgroup"><div class="lgroup-h"><b>' +
                 esc(LEKTIONSGRUPPEN[g].name) + "</b><span>" +
                 esc(LEKTIONSGRUPPEN[g].hinweis) + "</span></div><div class='lesson-list'>";
        offeneGruppe = true;
      }
      liste += zeile(l, i);
    });
    if (offeneGruppe) liste += "</div></section>";

    app.innerHTML =
      pageHead("Lektionen",
        "Der ganze Kurs in " + KS.lessons.length + " Schritten — vom Gruß bis zum Nebensatz. " +
        "Jede Lektion läuft Seite für Seite ab: Amani erklärt, zeigt die Wörter, übt mit dir — " +
        "und erst ganz zum Schluss kommt die Abfrage.") +
      '<div class="coursebar">' + ringHtml(pct, pct + "%", "") +
        '<div class="cb-text"><b>' + done + " von " + KS.lessons.length + " Lektionen</b>" +
        "<small>" + (offen < 0 ? "Kurs abgeschlossen — hongera sana!"
                               : "Weiter mit Lektion " + (offen + 1)) + "</small></div>" +
      "</div>" + liste;

    function zeile(l, i) {
      var st = p.lessons[l.id];
      var fertig = st && st.done;
      var jetzt = i === offen;
      return '<a class="lrow' + (jetzt ? " next" : "") + '" href="#/lesson/' + l.id + '">' +
               '<span class="lnum' + (fertig ? " done" : jetzt ? " next" : "") + '">' +
                 (fertig ? ic("check", 19) : (i + 1)) + "</span>" +
               '<span class="lrow-body"><span class="lr-title">' + esc(l.title) + "</span>" +
                 '<span class="lr-goal">' + esc(l.goal) + "</span></span>" +
               '<span class="lr-right">' +
                 (fertig ? '<span class="score' + (st.score < 80 ? " mid" : "") + '">' +
                           st.score + "%</span>" : "") +
                 (jetzt ? '<span class="nextpill">Weiter hier</span>' : "") +
                 '<span class="arrow">' + ic("arrow", 18) + "</span>" +
               "</span></a>";
    }
  }

  /* ------------------------------------------------------------------ */
  /* Einzelne Lektion — Schritt für Schritt                              */
  /* ------------------------------------------------------------------ */

  /* Aus den Lektionsdaten eine Folge einzelner Seiten bauen. Reihenfolge:
     erst erklären, dann Wortschatz zeigen, dann geführt üben (ungewertet),
     und erst ganz zum Schluss die Abfrage. Wie ein Buch, nicht wie ein Test. */
  function buildSteps(l) {
    var steps = [{ kind: "intro" }];

    (l.grammar || []).forEach(function (g, n) {
      steps.push({ kind: "teach", g: g, n: n, of: l.grammar.length });
    });
    if (l.examples && l.examples.length) steps.push({ kind: "examples" });

    /* Wortschatz gleichmäßig aufteilen statt in starre Sechserblöcke.
       Sonst ergeben 13 Wörter die Folge 6+6+1 — und der letzte Schritt
       zeigt eine einzelne, verloren wirkende Karte. So werden es 5+5+3. */
    var words = (l.vocab || []).map(vocabBySw).filter(Boolean);
    var bloecke = Math.max(1, Math.ceil(words.length / 6));
    var proBlock = Math.ceil(words.length / bloecke);
    for (var i = 0; i < words.length; i += proBlock) {
      steps.push({ kind: "vocab", words: words.slice(i, i + proBlock), first: i === 0 });
    }
    if (l.culture) steps.push({ kind: "culture" });

    if (l.practice && l.practice.length) {
      steps.push({ kind: "practiceIntro", count: l.practice.length });
      l.practice.forEach(function (p, n) {
        steps.push({ kind: "practice", p: p, n: n, of: l.practice.length });
      });
    }
    steps.push({ kind: "quizIntro", count: (l.exercises || []).length });
    (l.exercises || []).forEach(function (e, n) {
      steps.push({ kind: "quiz", e: e, n: n });
    });
    steps.push({ kind: "done" });
    return steps;
  }

  var PHASE = {
    intro: "Einstieg", teach: "Erklärung", examples: "Beispiele", vocab: "Wortschatz",
    culture: "Aus Dar", practiceIntro: "Üben", practice: "Üben",
    quizIntro: "Abfrage", quiz: "Abfrage", done: "Ergebnis"
  };

  function viewLesson(id, mode) {
    var l = null, idx = -1;
    KS.lessons.forEach(function (x, i) { if (x.id === id) { l = x; idx = i; } });
    if (!l) { app.innerHTML = "<p>Lektion nicht gefunden.</p>"; return; }
    if (mode === "text") { renderLessonText(l, idx); return; }

    var steps = buildSteps(l);
    var i = 0, correct = 0;
    var quizTotal = 0;
    steps.forEach(function (s) { if (s.kind === "quiz") quizTotal++; });

    /* Gemeinsamer Rahmen: Kopfzeile mit Abbruch und Fortschritt, Inhalt,
       Navigation. Alles andere blendet body.focus währenddessen aus. */
    function frame(inner, opts) {
      opts = opts || {};
      var s = steps[i];
      return '<div class="focushead">' +
               '<a class="iconbtn" href="#/lessons" title="Lektion verlassen" ' +
                 'aria-label="Lektion verlassen">' + ic("close") + "</a>" +
               '<div class="fh-mid">' +
                 '<div class="fh-title">' + esc(l.title) + "</div>" +
                 '<div class="exbar"><div class="exbar-fill" style="width:' +
                   Math.round((i / (steps.length - 1)) * 100) + '%"></div></div>' +
                 '<div class="fh-meta"><span class="phase phase-' + s.kind + '">' +
                   esc(PHASE[s.kind] || "") + "</span><span>Schritt " + (i + 1) +
                   " von " + steps.length + "</span></div>" +
               "</div>" +
               '<a class="iconbtn" href="#/lesson/' + l.id + '/text" title="Ganze Lektion als Text" ' +
                 'aria-label="Ganze Lektion als Text">' + ic("list") + "</a>" +
             "</div>" +
             '<div class="step">' + inner + "</div>" +
             (opts.noNav ? '<div class="stepnav" id="stepnav">' +
                             (i > 0 ? '<button class="btn" id="stepBack">Zurück</button>' : "<span></span>") +
                             "<span></span></div>"
                         : '<div class="stepnav">' +
                             (i > 0 ? '<button class="btn" id="stepBack">Zurück</button>' : "<span></span>") +
                             '<button class="btn btn-primary" id="stepNext">' +
                               esc(opts.nextLabel || "Weiter") + "</button></div>");
    }

    function bindNav() {
      var b = $("#stepBack"), n = $("#stepNext");
      if (b) b.onclick = function () { i--; render(); };
      if (n) { n.onclick = function () { i++; render(); }; focusSoon(n); }
    }

    /* Falsch beantwortete Abfragen kommen am Ende der Lektion noch einmal —
       dieselbe Regel wie bei den Vokabeln: Eine Aufgabe verlässt die Lektion
       erst, wenn sie saß. Höchstens zweimal nachreichen, damit niemand
       wegen eines Tippfehlers festhängt. */
    var wdhZaehler = {};
    function quizNochmal(s) {
      var k = "q" + s.n;
      wdhZaehler[k] = (wdhZaehler[k] || 0) + 1;
      if (wdhZaehler[k] > 2) return false;
      steps.splice(steps.length - 1, 0, { kind: "quiz", e: s.e, n: s.n, repeat: true });
      return true;
    }

    /* Nach dem Antworten die Weiter-Schaltfläche nachreichen. */
    function offerNext(label) {
      var nav = $("#stepnav");
      nav.innerHTML = (i > 0 ? '<button class="btn" id="stepBack">Zurück</button>' : "<span></span>") +
                      '<button class="btn btn-primary" id="stepNext">' + esc(label || "Weiter") + "</button>";
      bindNav();
    }

    function amaniSays(text) {
      return '<div class="mwalimu-line"><div class="mw-avatar sm">' + KS.twiga.kopf(30) + "</div>" +
             "<div>" + text + "</div></div>";
    }

    function buildChips(build) {
      if (!build) return "";
      if (build.indexOf(" + ") < 0) return '<div class="buildhint">' + esc(build) + "</div>";
      return '<div class="morphs">' + build.split(" + ").map(function (b) {
        return '<div class="morph"><div class="m-text">' + esc(b) + "</div></div>";
      }).join('<div class="plus">+</div>') + "</div>";
    }

    function render() {
      var s = steps[i];
      window.scrollTo(0, 0);
      /* Ergebnisseite zeigt die Navigation wieder, alles davor nicht. */
      if (s.kind === "done") focusAus(); else focusAn();

      /* ---------- Einstieg ---------- */
      if (s.kind === "intro") {
        app.innerHTML = frame(
          '<div class="mwalimu-card">' +
            '<div class="mw-avatar">' + KS.twiga.kopf(44) + "</div><div>" +
              '<div class="mw-name">' + esc(KS.mwalimu.name) + "</div>" +
              '<div class="mw-where">' + esc(KS.mwalimu.where) + "</div>" +
              l.mwalimu.map(function (m) {
                return m.sw ? '<p class="mw-sw">„' + esc(m.sw) + "“<br>" +
                              '<span class="mw-de">' + esc(m.de) + "</span></p>"
                            : '<p class="mw-text">' + m.de + "</p>";
              }).join("") +
            "</div></div>" +
          '<div class="goalbox"><b>Worum es geht:</b> ' + esc(l.goal) + "</div>",
          { nextLabel: "Anfangen" });
        bindNav();

      /* ---------- Erklärung ---------- */
      } else if (s.kind === "teach") {
        app.innerHTML = frame(
          (s.n === 0 ? amaniSays("Lies das in Ruhe. Wir üben es gleich zusammen — " +
                                 "du musst es jetzt noch nicht können.") : "") +
          '<div class="gblock"><h3>' + esc(s.g.h) + "</h3><div>" + s.g.body + "</div></div>",
          { nextLabel: s.n + 1 < s.of ? "Weiter" : "Beispiele ansehen" });
        bindNav();

      /* ---------- Beispielsätze ---------- */
      } else if (s.kind === "examples") {
        app.innerHTML = frame(
          amaniSays("So klingt das in echten Sätzen. Sprich sie einmal laut mit — " +
                    "die Betonung liegt immer auf der vorletzten Silbe.") +
          '<div class="examples">' + l.examples.map(function (e) {
            return '<div class="ex"><div class="ex-sw">' + esc(e.sw) + "</div>" +
                   '<div class="ex-de">' + esc(e.de) + "</div>" +
                   (e.gloss ? '<div class="ex-gloss">' + esc(e.gloss) + "</div>" : "") + "</div>";
          }).join("") + "</div>");
        bindNav();

      /* ---------- Wortschatz ---------- */
      } else if (s.kind === "vocab") {
        markiereGesehen(l);
        app.innerHTML = frame(
          (s.first ? amaniSays("Und jetzt die Wörter dazu. Bei Nomen steht die Klasse und der " +
                               "Plural mit dabei — lern sie immer zusammen, das spart dir später Arbeit.") : "") +
          '<div class="vgrid">' + s.words.map(vocabChip).join("") + "</div>");
        bindNav();

      /* ---------- Kulturhinweis ---------- */
      } else if (s.kind === "culture") {
        app.innerHTML = frame(
          '<div class="culture"><div class="culture-h">Aus Amanis Erfahrung</div>' +
          "<div>" + l.culture + "</div></div>");
        bindNav();

      /* ---------- Ankündigung: geführtes Üben ---------- */
      } else if (s.kind === "practiceIntro") {
        app.innerHTML = frame(
          '<div class="mwalimu-card">' +
            '<div class="mw-avatar">' + KS.twiga.kopf(44) + "</div><div>" +
              '<p class="mw-text">Jetzt üben wir zusammen. Ich sage dir bei jeder Aufgabe, ' +
              'worauf du achten musst, und zeige dir die Bausteine.</p>' +
              '<p class="mw-text"><b>Das hier zählt noch nicht.</b> Rate ruhig, schau dir die ' +
              'Lösung an, probier es nochmal. Erst danach kommt die Abfrage.</p>' +
            "</div></div>",
          { nextLabel: s.count + " Übungen beginnen" });
        bindNav();

      /* ---------- Geführte Übung (ungewertet) ---------- */
      } else if (s.kind === "practice") {
        var p = s.p;
        app.innerHTML = frame(
          amaniSays(esc(p.instruction)) +
          '<div class="taskcard">' +
            '<div class="tasklab">Übung ' + (s.n + 1) + " von " + s.of + " · zählt nicht</div>" +
            '<div class="taskq">' + esc(p.q) + "</div>" +
            buildChips(p.build) +
          "</div>" +
          '<input id="pIn" type="text" autocomplete="off" autocapitalize="off" ' +
            'spellcheck="false" placeholder="Deine Antwort …">' +
          '<div class="exrow">' +
            '<button class="btn btn-primary" id="pGo">Prüfen</button>' +
            '<button class="btn btn-ghost" id="pShow">Lösung zeigen</button>' +
          "</div>" +
          '<div id="pFb"></div>', { noNav: true });

        var pin = $("#pIn");
        pin.focus();
        pin.onkeydown = function (e) { if (e.key !== "Enter") return; e.preventDefault(); $("#pGo").click(); };
        $("#pGo").onclick = function () { settle(KS.srs.check(pin.value, p.a)); };
        $("#pShow").onclick = function () { settle(null); };

        function settle(ok) {
          var loesung = p.a.split(",")[0].trim();
          var kopf = ok === true ? "Sahihi! Genau so."
                   : ok === false ? "Noch nicht. So geht es:"
                   : "Die Lösung:";
          $("#pFb").innerHTML =
            '<div class="fb ' + (ok === true ? "ok" : ok === false ? "no" : "hint") + '">' +
              esc(kopf) + " <b>" + esc(loesung) + "</b></div>" +
            '<div class="explain">' + esc(p.explain) + "</div>";
          if (ok !== true) {
            $("#pFb").innerHTML += '<button class="btn btn-ghost" id="pRetry">Nochmal versuchen</button>';
            $("#pRetry").onclick = function () { render(); };
          }
          pin.disabled = true;
          $("#pGo").disabled = true;
          $("#pShow").disabled = true;
          offerNext(s.n + 1 < s.of ? "Nächste Übung" : "Weiter");
        }

      /* ---------- Ankündigung: Abfrage ---------- */
      } else if (s.kind === "quizIntro") {
        app.innerHTML = frame(
          '<div class="mwalimu-card">' +
            '<div class="mw-avatar">' + KS.twiga.kopf(44) + "</div><div>" +
              '<p class="mw-text">Gut. Jetzt probierst du es allein — ' + s.count +
              " Aufgaben, und ab hier wird gezählt.</p>" +
              '<p class="mw-text">Falls etwas hakt: Über „Ganze Lektion als Text“ oben kannst ' +
              "du jederzeit zurückblättern, ohne von vorn anfangen zu müssen.</p>" +
            "</div></div>",
          { nextLabel: "Abfrage starten" });
        bindNav();

      /* ---------- Abfrage (gewertet) ---------- */
      } else if (s.kind === "quiz") {
        var ex = s.e;
        var head = '<div class="tasklab">' + (s.repeat ? "Wiederholung · " : "") +
                   "Aufgabe " + (s.n + 1) + " von " + quizTotal + "</div>";

        if (ex.type === "translate") {
          app.innerHTML = frame(
            '<div class="taskcard">' + head + '<div class="taskq">' + esc(ex.q) + "</div></div>" +
            '<input id="qIn" type="text" autocomplete="off" autocapitalize="off" ' +
              'spellcheck="false" placeholder="Auf Swahili …">' +
            '<div class="exrow"><button class="btn btn-primary" id="qGo">Prüfen</button>' +
            (ex.hint ? '<button class="btn btn-ghost" id="qHint">Tipp</button>' : "") + "</div>" +
            '<div id="qFb"></div>', { noNav: true });
          var qin = $("#qIn");
          qin.focus();
          qin.onkeydown = function (e) { if (e.key !== "Enter") return; e.preventDefault(); $("#qGo").click(); };
          if (ex.hint) $("#qHint").onclick = function () {
            $("#qFb").innerHTML = '<div class="fb hint">' + esc(ex.hint) + "</div>";
          };
          $("#qGo").onclick = function () {
            var ok = KS.srs.check(qin.value, ex.a);
            if (ok && !s.repeat) correct++;
            var nochmal = !ok && quizNochmal(s);
            $("#qFb").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '">' +
              (ok ? "Sahihi! " : "Nicht ganz. Richtig wäre: ") + "<b>" + esc(ex.a) + "</b></div>" +
              (nochmal ? '<div class="fb hint">Diese Aufgabe kommt am Ende der Lektion ' +
                         "noch einmal.</div>" : "");
            qin.disabled = true; $("#qGo").disabled = true;
            offerNext();
          };

        } else {
          app.innerHTML = frame(
            '<div class="taskcard">' + head + '<div class="taskq">' + esc(ex.q) + "</div></div>" +
            '<div class="choices">' + ex.options.map(function (o, k) {
              return '<button class="choice" data-k="' + k + '">' + esc(o) + "</button>";
            }).join("") + '</div><div id="qFb"></div>', { noNav: true });
          $$(".choice").forEach(function (b) {
            b.onclick = function () {
              var k = parseInt(b.dataset.k, 10);
              var ok = (k === ex.a);
              if (ok && !s.repeat) correct++;
              var nochmal = !ok && quizNochmal(s);
              $$(".choice").forEach(function (x, xi) {
                x.disabled = true;
                if (xi === ex.a) x.classList.add("right");
                else if (xi === k) x.classList.add("wrong");
              });
              $("#qFb").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '">' +
                                    esc(ex.why || "") + "</div>" +
                (nochmal ? '<div class="fb hint">Diese Aufgabe kommt am Ende der Lektion ' +
                           "noch einmal.</div>" : "");
              offerNext();
            };
          });
        }

      /* ---------- Ergebnis ---------- */
      } else {
        var score = quizTotal ? Math.round((correct / quizTotal) * 100) : 100;
        var p2 = KS.store.profile();
        var vorher = p2.lessons[l.id];
        /* Nur verbessern, nie verschlechtern — Wiederholen soll sich lohnen. */
        if (!vorher || !vorher.done || score > vorher.score) {
          p2.lessons[l.id] = { done: true, score: score,
                               started: (vorher && vorher.started) || Date.now(),
                               updatedAt: Date.now() };
        }
        KS.store.markDay();
        KS.store.touch();

        /* Lob auf Swahili — die Sprache, die man gerade gelernt hat,
           soll auch die sein, die einen beglückwünscht. */
        var lob = score === 100 ? { sw: "Hongera sana!", de: "Alles richtig.", stufe: "" }
                : score >= 80   ? { sw: "Vizuri sana!",  de: "Das sitzt.", stufe: "" }
                : score >= 50   ? { sw: "Vizuri!",       de: "Guter Anfang.", stufe: " mid" }
                :                 { sw: "Pole pole.",    de: "Langsam, langsam.", stufe: " low" };

        app.innerHTML =
          '<div class="crumbs"><a href="#/lessons">' + ic("book", 16) + "Alle Lektionen</a>" +
          '<a href="#/lesson/' + l.id + '/text">' + ic("list", 16) + "Ganze Lektion als Text</a></div>" +
          '<div class="result big">' +
            '<div class="twiga-gross">' + KS.twiga.figur(80) + "</div>" +
            '<div class="praise">' + esc(lob.sw) + "</div>" +
            '<div class="scorebig' + lob.stufe + '">' + score + "%</div>" +
            "<h1>" + esc(lob.de) + " " + correct + " von " + quizTotal + " richtig.</h1>" +
            "<p>" + (score >= 80
              ? "Die Wörter dieser Lektion tauchen ab jetzt in deinen Karteikarten auf — " +
                "das System bringt sie dir genau dann wieder, wenn du sie zu vergessen beginnst."
              : "Blätter die Lektion nochmal durch, das ist beim ersten Mal völlig normal. " +
                "Deine Prozentzahl wird dabei nur besser, nie schlechter.") +
            "</p>" +
            '<div class="btnrow">' +
              '<button class="btn" id="restart">Lektion wiederholen</button>' +
              (idx < KS.lessons.length - 1
                ? '<a class="btn btn-primary" href="#/lesson/' + KS.lessons[idx + 1].id +
                  '">Nächste Lektion →</a>'
                : '<a class="btn btn-primary" href="#/lessons">Zur Übersicht</a>') +
            "</div>" +
          "</div>";
        $("#restart").onclick = function () { i = 0; correct = 0; render(); };
      }
    }

    render();
  }

  /* ---- Lesefassung: die komplette Lektion auf einer Seite ---- */
  function renderLessonText(l, idx) {
    markiereGesehen(l);
    app.innerHTML =
      '<div class="crumbs">' +
        '<a href="#/lessons">' + ic("book", 16) + "Alle Lektionen</a>" +
        '<a href="#/lesson/' + l.id + '">' + ic("arrow", 16) + "Schritt für Schritt</a>" +
      "</div>" +
      pageHead(l.title, l.goal + " — Lesefassung zum Nachschlagen und Wiederholen, ohne Übungen.") +

      '<div class="mwalimu-card">' +
        '<div class="mw-avatar">' + KS.twiga.kopf(44) + "</div><div>" +
        l.mwalimu.map(function (m) {
          return m.sw ? '<p class="mw-sw">„' + esc(m.sw) + "“<br>" +
                        '<span class="mw-de">' + esc(m.de) + "</span></p>"
                      : '<p class="mw-text">' + m.de + "</p>";
        }).join("") + "</div></div>" +

      '<h2 class="sec">Grammatik</h2>' +
      l.grammar.map(function (g) {
        return '<div class="gblock"><h3>' + esc(g.h) + "</h3><div>" + g.body + "</div></div>";
      }).join("") +

      '<h2 class="sec">Beispielsätze</h2><div class="examples">' +
      l.examples.map(function (e) {
        return '<div class="ex"><div class="ex-sw">' + esc(e.sw) + "</div>" +
               '<div class="ex-de">' + esc(e.de) + "</div>" +
               (e.gloss ? '<div class="ex-gloss">' + esc(e.gloss) + "</div>" : "") + "</div>";
      }).join("") + "</div>" +

      '<h2 class="sec">Wortschatz</h2><div class="vgrid">' +
      (l.vocab || []).map(function (sw) { return vocabChip(vocabBySw(sw)); }).join("") + "</div>" +

      (l.culture ? '<div class="culture"><div class="culture-h">Aus Amanis Erfahrung</div>' +
                   "<div>" + l.culture + "</div></div>" : "") +

      '<div class="lesson-nav">' +
        (idx > 0 ? '<a class="btn" href="#/lesson/' + KS.lessons[idx - 1].id + '/text">← Zurück</a>'
                 : "<span></span>") +
        '<a class="btn btn-primary" href="#/lesson/' + l.id + '">Lektion durcharbeiten</a>' +
        (idx < KS.lessons.length - 1
          ? '<a class="btn" href="#/lesson/' + KS.lessons[idx + 1].id + '/text">Weiter →</a>'
          : "<span></span>") +
      "</div>";
  }

  /* ------------------------------------------------------------------ */
  /* Vokabeln: Themenauswahl                                             */
  /* ------------------------------------------------------------------ */
  function viewVocab() {
    var ges = KS.srs.overview();
    var rows = KS.topics.map(function (t) {
      var ov = KS.srs.overview(t.id);
      var pct = ov.total ? Math.round((ov.gelernt / ov.total) * 100) : 0;
      return '<a class="topic" href="#/lernen/' + t.id + '">' +
               '<div class="t-head"><div class="t-name">' + esc(t.name) + "</div>" +
               '<div class="t-pct">' + pct + "%</div></div>" +
               "<div class='t-meta'>" + ov.total + " Wörter · " + ov.faellig + " fällig · " +
               ov.neu + " neu</div>" +
               '<div class="pbar"><div class="pbar-fill" style="width:' + pct + '%"></div></div>' +
             "</a>";
    }).join("");

    /* Vorschau: welche neuen Wörter als Nächstes drankommen. Macht die
       Lernfolge sichtbar, statt sie nur zu behaupten. */
    var naechste = KS.srs.naechsteNeue(10);
    var vorschau = naechste.length
      ? '<h2 class="sec">Als Nächstes neu</h2>' +
        '<p class="lead">Neue Wörter kommen nicht zufällig: zuerst die aus deiner aktuellen ' +
        "Lektion, dann der Alltagswortschatz. Tiere, Körperteile und Spezialgerichte erst später.</p>" +
        '<div class="nextwords">' + naechste.map(function (n) {
          var q = KS.srs.quelle(n.info);
          return '<span class="nw"><b>' + esc(n.v.sw) + "</b>" +
                 (q ? "<small>" + esc(q) + "</small>" : "") + "</span>";
        }).join("") + "</div>"
      : "";

    app.innerHTML =
      pageHead("Vokabeln",
        "Karteikarten mit Spaced Repetition: Was du kannst, kommt seltener; was wackelt, kommt " +
        "öfter. Ein Wort, das du falsch hattest, kommt in derselben Sitzung wieder — so lange, " +
        "bis es sitzt.",
        '<a class="btn btn-primary" href="#/lernen">' + ic("cards", 18) + "Sitzung starten</a>" +
        '<a class="btn" href="#/klassen">Nomenklassen-Drill</a>' +
        '<a class="btn" href="#/liste">Wortliste</a>') +
      '<div class="metrics">' +
        '<div class="metric"><div class="metric-v">' + ges.faellig + "</div>" +
          '<div class="metric-l">fällig</div></div>' +
        '<div class="metric"><div class="metric-v">' + ges.neu + "</div>" +
          '<div class="metric-l">neu</div></div>' +
        '<div class="metric"><div class="metric-v">' + ges.gelernt + "</div>" +
          '<div class="metric-l">gelernt</div></div>' +
        '<div class="metric"><div class="metric-v">' + ges.gemeistert + "</div>" +
          '<div class="metric-l">gemeistert</div></div>' +
      "</div>" +
      vorschau +
      '<h2 class="sec">Nach Thema</h2>' +
      '<div class="topics">' + rows + "</div>";
  }

  /* ------------------------------------------------------------------ */
  /* Vokabelsitzung                                                      */
  /* ------------------------------------------------------------------ */

  /* Wie oft eine Karte in einer Sitzung höchstens drankommt, bevor sie
     durchgewunken wird. Verhindert Endlosschleifen bei Tippfehlern. */
  var MAX_VERSUCHE = 4;

  function viewSession(topic) {
    var p = KS.store.profile();
    var queue = KS.srs.buildSession({ topic: topic || null, limit: p.settings.dailyGoal || 20 });
    if (!queue.length) {
      app.innerHTML = "<h1>Nichts fällig</h1>" +
        '<p class="lead">In diesem Bereich ist gerade nichts zur Wiederholung dran. ' +
        "Das ist ein gutes Zeichen — komm später wieder oder wähl ein anderes Thema.</p>" +
        '<a class="btn" href="#/vokabeln">Zurück zur Auswahl</a>';
      return;
    }

    var folge = KS.srs.lernfolge();
    var gesamt = queue.length;      /* Karten, die diese Sitzung umfasst   */
    var erledigt = 0;               /* davon endgültig abgehakt            */
    var richtigErstversuch = 0;
    var versuche = {};              /* vocabId -> Anzahl Versuche          */
    var wackler = [];               /* Karten, die mindestens einmal falsch waren */
    var vorgestellt = {};
    var i = 0;
    var dir = p.settings.direction || "de2sw";

    /* Falsch beantwortete Karte kommt in derselben Sitzung wieder —
       ein paar Karten später, damit man sie nicht einfach abschreibt. */
    function einreihen(v) {
      var ziel = Math.min(i + 3, queue.length);
      queue.splice(ziel, 0, v);
    }

    function kopf(c, isNew, istWdh) {
      return '<div class="focushead">' +
               '<a class="iconbtn" href="#/vokabeln" title="Abfrage beenden" ' +
                 'aria-label="Abfrage beenden">' + ic("close") + "</a>" +
               '<div class="fh-mid">' +
                 '<div class="exbar"><div class="exbar-fill" style="width:' +
                   Math.round((erledigt / gesamt) * 100) + '%"></div></div>' +
                 '<div class="fh-meta"><span>' + erledigt + " / " + gesamt + "</span>" +
                   (isNew ? '<span class="newtag">neu</span>' : "") +
                   (istWdh ? '<span class="retag">Wiederholung</span>' : "") +
                   '<span class="boxtag">Fach ' + c.box + "</span></div>" +
               "</div></div>";
    }

    function herkunft(v) {
      var q = KS.srs.quelle(folge[v.id]);
      return esc((q ? q + " · " : "") + topicName(v.topic));
    }

    function render() {
      if (i >= queue.length) {
        focusAus();
        app.innerHTML =
          '<div class="result big">' +
            '<div class="twiga-gross">' + KS.twiga.figur(80) + "</div>" +
            '<div class="praise">' + (richtigErstversuch === gesamt ? "Hongera!" : "Vizuri!") + "</div>" +
            "<h1>" + richtigErstversuch + " von " + gesamt + " gleich beim ersten Versuch</h1>" +
            "<p>" + (richtigErstversuch === gesamt
              ? "Alles auf Anhieb gesessen."
              : "Die übrigen hast du in dieser Sitzung so oft wiederholt, bis sie saßen. " +
                "Sie kommen morgen noch einmal — so merkt man sich Wörter dauerhaft.") + "</p>" +
            (wackler.length ? '<h3 class="sec">Diese hast du wiederholt</h3><div class="vgrid">' +
              wackler.map(vocabChip).join("") + "</div>" : "") +
            '<div class="btnrow"><a class="btn btn-primary" href="#/">Zur Startseite</a>' +
            '<a class="btn" href="#/vokabeln">Weiteres Thema</a></div>' +
          "</div>";
        return;
      }

      focusAn();
      var v = queue[i];
      var c = KS.store.card(v.id);
      var n = versuche[v.id] || 0;
      var istWdh = n > 0;
      var isNew = c.reps === 0;

      /* Ein nie gesehenes Wort wird erst vorgestellt, dann abgefragt. */
      if (isNew && !vorgestellt[v.id]) {
        var meta = (v.pl ? '<span class="pl">Plural ' + esc(v.pl) + "</span>" : "") +
                   (v.cls ? '<span class="cls">Kl. ' + esc(v.cls) + "</span>" : "") +
                   (v.tag ? '<span class="tag tag-' + esc(v.tag) + '">' +
                            (v.tag === "dar" ? "Dar" : "TZ") + "</span>" : "");
        app.innerHTML =
          '<div class="session">' + kopf(c, true, false) +
            '<div class="qcard reveal">' +
              '<div class="qtopic">Neues Wort · ' + herkunft(v) + "</div>" +
              '<div class="qword sw">' + esc(v.sw) + "</div>" +
              '<div class="reveal-de">' + esc(v.de) + "</div>" +
              (meta ? '<div class="reveal-meta">' + meta + "</div>" : "") +
              (v.note ? '<div class="reveal-note">' + esc(v.note) + "</div>" : "") +
            "</div>" +
            '<div class="exrow"><button class="btn btn-primary" id="revealOk">' +
              "Gemerkt — jetzt abfragen</button></div>" +
          "</div>";
        $("#revealOk").onclick = function () { vorgestellt[v.id] = true; render(); };
        focusSoon($("#revealOk"));
        return;
      }

      var ask = dir === "de2sw" ? v.de : v.sw;
      var sol = dir === "de2sw" ? v.sw : v.de;

      app.innerHTML =
        '<div class="session">' + kopf(c, isNew, istWdh) +
          '<div class="qcard">' +
            '<div class="qtopic">' + (istWdh ? "Nochmal · " : "") + herkunft(v) + "</div>" +
            '<div class="qword' + (dir === "de2sw" ? "" : " sw") + '">' + esc(ask) + "</div>" +
          "</div>" +
          '<input id="ansIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" ' +
            'placeholder="' + (dir === "de2sw" ? "Auf Swahili …" : "Auf Deutsch …") + '">' +
          '<div class="exrow">' +
            '<button class="btn btn-primary" id="ansGo">Prüfen</button>' +
            '<button class="btn btn-ghost" id="ansSkip">Weiß ich nicht</button>' +
          "</div>" +
          '<div id="ansFb"></div>' +
        "</div>";

      var input = $("#ansIn");
      focusSoon(input);
      input.onkeydown = function (e) { if (e.key !== "Enter") return; e.preventDefault(); $("#ansGo").click(); };
      $("#ansGo").onclick = function () { grade(KS.srs.check(input.value, sol)); };
      $("#ansSkip").onclick = function () { grade(false); };

      function grade(ok) {
        var versuchNr = (versuche[v.id] = n + 1);

        /* Nur der erste Versuch zählt für Fach, Streak und Trefferquote.
           Jede Wiederholung danach ist reines Lernen. */
        if (versuchNr === 1) {
          KS.srs.grade(v.id, ok);
          if (ok) richtigErstversuch++;
        } else {
          KS.srs.relearn(v.id, ok);
        }

        if (!ok && wackler.indexOf(v) < 0) wackler.push(v);

        var nochmal = !ok && versuchNr < MAX_VERSUCHE;
        if (nochmal) einreihen(v); else erledigt++;

        input.disabled = true;
        $("#ansGo").disabled = true;
        $("#ansSkip").disabled = true;
        $("#ansFb").innerHTML =
          '<div class="fb ' + (ok ? "ok" : "no") + '">' +
            (ok ? (versuchNr > 1 ? "Sahihi! Jetzt sitzt es." : "Sahihi!")
                : "Richtig wäre:") +
          "</div>" +
          vocabChip(v) +
          (nochmal ? '<div class="fb hint">Dieses Wort kommt gleich noch einmal — ' +
                     "es verlässt die Sitzung erst, wenn du es richtig hast.</div>"
                   : (!ok ? '<div class="fb hint">Gut, wir lassen es für heute. ' +
                            "Morgen kommt es wieder.</div>" : "")) +
          '<button class="btn btn-primary" id="ansNext">Weiter</button>';
        $("#ansNext").onclick = function () { i++; render(); };
        focusSoon($("#ansNext"));
      }
    }
    render();
  }

  /* ------------------------------------------------------------------ */
  /* Nomenklassen-Drill                                                  */
  /* ------------------------------------------------------------------ */
  function viewClassDrill() {
    var nouns = KS.vocab.filter(function (v) { return v.cls && v.pl; });
    var queue = KS.shuffle(nouns.slice()).slice(0, 12);
    var i = 0, right = 0;

    function render() {
      if (i >= queue.length) {
        focusAus();
        app.innerHTML = '<div class="result big"><h1>' + right + " von " + queue.length +
          " richtig</h1><p>Der Plural verrät die Klasse — wer ihn kann, kann die Kongruenz.</p>" +
          '<div class="btnrow"><button class="btn btn-primary" id="again">Nochmal</button>' +
          '<a class="btn" href="#/vokabeln">Zurück</a></div></div>';
        $("#again").onclick = function () {
          queue = KS.shuffle(nouns.slice()).slice(0, 12); i = 0; right = 0; render();
        };
        return;
      }
      var v = queue[i];
      focusAn();
      app.innerHTML =
        '<div class="session">' +
          drillKopf("Nomenklassen-Drill", i, queue.length, "#/vokabeln") +
          '<div class="qcard">' +
            '<div class="qtopic">Wie lautet der Plural?</div>' +
            '<div class="qword">' + esc(v.sw) + "</div>" +
            '<div class="qnew">' + esc(v.de) + "</div>" +
          "</div>" +
          '<input id="clIn" type="text" autocomplete="off" spellcheck="false" placeholder="Plural …">' +
          '<div class="exrow"><button class="btn btn-primary" id="clGo">Prüfen</button>' +
          '<button class="btn btn-ghost" id="clSkip">Weiß ich nicht</button></div>' +
          '<div id="clFb"></div>' +
        "</div>";
      var input = $("#clIn");
      input.focus();
      input.onkeydown = function (e) { if (e.key !== "Enter") return; e.preventDefault(); $("#clGo").click(); };
      $("#clGo").onclick = function () { grade(KS.srs.check(input.value, v.pl)); };
      $("#clSkip").onclick = function () { grade(false); };

      function grade(ok) {
        if (ok) right++;
        input.disabled = true; $("#clGo").disabled = true; $("#clSkip").disabled = true;
        $("#clFb").innerHTML =
          '<div class="fb ' + (ok ? "ok" : "no") + '">' + esc(v.sw) + " → <b>" + esc(v.pl) +
          "</b> · Klasse " + esc(v.cls) + "</div>" +
          '<button class="btn btn-primary" id="clNext">Weiter</button>';
        $("#clNext").onclick = function () { i++; render(); };
        focusSoon($("#clNext"));
      }
    }
    render();
  }

  /* ------------------------------------------------------------------ */
  /* Wortliste                                                           */
  /* ------------------------------------------------------------------ */
  function viewList() {
    app.innerHTML =
      "<h1>Wortliste</h1>" +
      '<input id="listSearch" class="search" type="text" placeholder="Suchen — deutsch oder Swahili …">' +
      '<div id="listOut"></div>';
    var out = $("#listOut");

    function draw(q) {
      q = (q || "").toLowerCase().trim();
      var groups = {};
      KS.vocab.forEach(function (v) {
        if (q && (v.sw + " " + v.de + " " + (v.pl || "") + " " + (v.note || ""))
                 .toLowerCase().indexOf(q) < 0) return;
        (groups[v.topic] = groups[v.topic] || []).push(v);
      });
      var html = KS.topics.map(function (t) {
        if (!groups[t.id]) return "";
        return '<h2 class="sec">' + esc(t.name) + ' <span class="count">' +
               groups[t.id].length + "</span></h2>" +
               '<div class="vgrid">' + groups[t.id].map(vocabChip).join("") + "</div>";
      }).join("");
      out.innerHTML = html || '<p class="lead">Nichts gefunden.</p>';
    }
    $("#listSearch").oninput = function () { draw(this.value); };
    draw("");
  }

  /* ------------------------------------------------------------------ */
  /* Grammatik                                                           */
  /* ------------------------------------------------------------------ */
  function viewGrammar() {
    app.innerHTML =
      "<h1>Grammatik</h1>" +
      '<p class="lead">Das Nachschlagewerk, das Duolingo fehlt. Alles auf einer Seite, ' +
      "durchsuchbar.</p>" +
      '<input id="gSearch" class="search" type="text" placeholder="Suchen — z.B. Verneinung, Klassen, Uhrzeit …">' +
      '<div id="gOut"></div>';
    var out = $("#gOut");

    function draw(q) {
      q = (q || "").toLowerCase().trim();
      var html = KS.grammar.map(function (g) {
        var hay = (g.title + " " + g.tags + " " +
                   g.sections.map(function (s) { return s.h + " " + s.body; }).join(" ")).toLowerCase();
        if (q && hay.indexOf(q) < 0) return "";
        return '<details class="gdet"' + (q ? " open" : "") + ">" +
                 "<summary>" + esc(g.title) + "</summary>" +
                 g.sections.map(function (s) {
                   return '<div class="gblock"><h3>' + esc(s.h) + "</h3><div>" + s.body + "</div></div>";
                 }).join("") +
               "</details>";
      }).join("");
      out.innerHTML = html || '<p class="lead">Kein Treffer. Versuch es mit einem anderen Begriff.</p>';
    }
    $("#gSearch").oninput = function () { draw(this.value); };
    draw("");
  }

  /* ------------------------------------------------------------------ */
  /* Konjugator                                                          */
  /* ------------------------------------------------------------------ */
  function viewConjugator() {
    var state = { verb: KS.verbs[0].inf, subj: "1sg", tense: "na", neg: false, obj: "none" };

    function opts(list, sel, valFn, labFn, grouped) {
      if (!grouped) {
        return list.map(function (x) {
          var v = valFn(x);
          return '<option value="' + esc(v) + '"' + (v === sel ? " selected" : "") + ">" +
                 esc(labFn(x)) + "</option>";
        }).join("");
      }
      var groups = {};
      list.forEach(function (x) { (groups[x.group] = groups[x.group] || []).push(x); });
      return Object.keys(groups).map(function (g) {
        return "<optgroup label='" + esc(g) + "'>" + groups[g].map(function (x) {
          var v = valFn(x);
          return '<option value="' + esc(v) + '"' + (v === sel ? " selected" : "") + ">" +
                 esc(labFn(x)) + "</option>";
        }).join("") + "</optgroup>";
      }).join("");
    }

    app.innerHTML =
      "<h1>Konjugator</h1>" +
      '<p class="lead">Stell eine Form zusammen und sieh, aus welchen Bausteinen sie besteht. ' +
      "Genau so denkt man im Swahili.</p>" +

      '<div class="btnrow"><a class="btn" href="#/konjugator-drill">Zum Übungsmodus</a></div>' +

      '<div class="conj-controls">' +
        ctl("Verb", '<select id="cVerb">' +
            opts(KS.verbs, state.verb, function (v) { return v.inf; },
                 function (v) { return v.inf + " — " + v.de; }) + "</select>") +
        ctl("Person / Klasse", '<select id="cSubj">' +
            opts(KS.subjects, state.subj, function (s) { return s.id; },
                 function (s) { return s.label; }, true) + "</select>") +
        ctl("Zeit / Modus", '<select id="cTense">' +
            opts(KS.tenses, state.tense, function (t) { return t.id; },
                 function (t) { return t.label; }) + "</select>") +
        ctl("Objekt", '<select id="cObj">' +
            opts(KS.objects, state.obj, function (o) { return o.id; },
                 function (o) { return o.label; }) + "</select>") +
        ctl("Form", '<label class="switch"><input type="checkbox" id="cNeg">' +
            "<span>verneint</span></label>") +
      "</div>" +

      '<div id="cOut"></div>' +
      '<div id="cTable"></div>';

    function ctl(label, inner) {
      return '<div class="ctl"><label>' + esc(label) + "</label>" + inner + "</div>";
    }

    function update() {
      var verb = KS.findVerb(state.verb);
      var r = KS.conjugate(verb, state.subj, state.tense, state.neg, state.obj);
      var tense = null;
      KS.tenses.forEach(function (t) { if (t.id === state.tense) tense = t; });

      if (r.error) {
        $("#cOut").innerHTML = '<div class="conj-out err">' + esc(r.error) + "</div>";
      } else {
        $("#cOut").innerHTML =
          '<div class="conj-out">' +
            '<div class="conj-form">' + esc(r.form) + "</div>" +
            '<div class="morphs">' + r.parts.map(function (p) {
              return '<div class="morph"><div class="m-text">' + esc(p.text) + "</div>" +
                     '<div class="m-lab">' + esc(p.label) + "</div></div>";
            }).join('<div class="plus">+</div>') + "</div>" +
            (tense && tense.hint ? '<div class="conj-hint">' + esc(tense.hint) + "</div>" : "") +
            (r.note ? '<div class="conj-note">' + esc(r.note) + "</div>" : "") +
          "</div>";
      }

      /* Volle Personentabelle */
      if (tense && !tense.imperative) {
        var rows = KS.conjugateTable(verb, state.tense, state.neg);
        $("#cTable").innerHTML =
          '<h2 class="sec">Alle Personen</h2><table class="tbl wide">' +
          rows.map(function (row) {
            return "<tr><td>" + esc(row.person) + "</td><td><b>" +
                   esc(row.result.form || row.result.error || "—") + "</b></td></tr>";
          }).join("") + "</table>" +
          (state.tense === "na" && !state.neg
            ? '<div class="conj-note">Zum Vergleich „haben“ (unregelmäßig): ' +
              KS.haben.pos.map(function (x) { return x[1]; }).join(" · ") + "</div>"
            : "");
      } else {
        $("#cTable").innerHTML = "";
      }
    }

    $("#cVerb").onchange  = function () { state.verb = this.value; update(); };
    $("#cSubj").onchange  = function () { state.subj = this.value; update(); };
    $("#cTense").onchange = function () { state.tense = this.value; update(); };
    $("#cObj").onchange   = function () { state.obj = this.value; update(); };
    $("#cNeg").onchange   = function () { state.neg = this.checked; update(); };
    update();
  }

  /* ---- Konjugator-Drill ---- */
  function viewConjDrill() {
    var drillTenses = ["na", "li", "ta", "me", "subj"];
    var persons = ["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"];
    var i = 0, right = 0, total = 10, task = null;

    function newTask() {
      var verb  = KS.verbs[Math.floor(Math.random() * KS.verbs.length)];
      var subj  = persons[Math.floor(Math.random() * persons.length)];
      var tense = drillTenses[Math.floor(Math.random() * drillTenses.length)];
      var neg   = Math.random() < 0.4;
      var r = KS.conjugate(verb, subj, tense, neg, "none");
      if (r.error) return newTask();
      var s = null, t = null;
      KS.subjects.forEach(function (x) { if (x.id === subj) s = x; });
      KS.tenses.forEach(function (x) { if (x.id === tense) t = x; });
      return { verb: verb, subjLabel: s.label, tenseLabel: t.label, neg: neg, answer: r.form, parts: r.parts };
    }

    function render() {
      if (i >= total) {
        focusAus();
        app.innerHTML = '<div class="result big"><h1>' + right + " von " + total +
          " richtig</h1><p>" + (right >= 8
            ? "Der Baukasten sitzt. Genau so funktioniert Swahili."
            : "Pole. Schau dir im Konjugator die Zerlegung nochmal an — dann fällt es leichter.") +
          '</p><div class="btnrow"><button class="btn btn-primary" id="again">Nochmal</button>' +
          '<a class="btn" href="#/konjugator">Zum Konjugator</a></div></div>';
        $("#again").onclick = function () { i = 0; right = 0; render(); };
        return;
      }
      task = newTask();
      focusAn();
      app.innerHTML =
        '<div class="session">' +
          drillKopf("Konjugations-Drill", i, total, "#/konjugator") +
          '<div class="qcard">' +
            '<div class="qtopic">Bilde die Form</div>' +
            '<div class="qword">' + esc(task.verb.inf) + "</div>" +
            '<div class="qnew">' + esc(task.verb.de) + "</div>" +
            '<div class="drill-spec">' + esc(task.subjLabel) + " · " + esc(task.tenseLabel) +
              (task.neg ? ' · <b class="negtag">verneint</b>' : "") + "</div>" +
          "</div>" +
          '<input id="dIn" type="text" autocomplete="off" spellcheck="false" placeholder="Verbform …">' +
          '<div class="exrow"><button class="btn btn-primary" id="dGo">Prüfen</button>' +
          '<button class="btn btn-ghost" id="dSkip">Weiß ich nicht</button></div>' +
          '<div id="dFb"></div>' +
        "</div>";
      var input = $("#dIn");
      input.focus();
      input.onkeydown = function (e) { if (e.key !== "Enter") return; e.preventDefault(); $("#dGo").click(); };
      $("#dGo").onclick = function () {
        grade(KS.srs.normalize(input.value) === KS.srs.normalize(task.answer));
      };
      $("#dSkip").onclick = function () { grade(false); };

      function grade(ok) {
        if (ok) right++;
        input.disabled = true; $("#dGo").disabled = true; $("#dSkip").disabled = true;
        $("#dFb").innerHTML =
          '<div class="fb ' + (ok ? "ok" : "no") + '">' +
            (ok ? "Sahihi! " : "Richtig wäre: ") + "<b>" + esc(task.answer) + "</b></div>" +
          '<div class="morphs small">' + task.parts.map(function (p) {
            return '<div class="morph"><div class="m-text">' + esc(p.text) + "</div>" +
                   '<div class="m-lab">' + esc(p.label) + "</div></div>";
          }).join('<div class="plus">+</div>') + "</div>" +
          '<button class="btn btn-primary" id="dNext">Weiter</button>';
        $("#dNext").onclick = function () { i++; render(); };
        focusSoon($("#dNext"));
      }
    }
    render();
  }

  /* ------------------------------------------------------------------ */
  /* Profil & Einstellungen                                              */
  /* ------------------------------------------------------------------ */

  /* Rückmeldung, die nach dem Neuzeichnen der Profilseite einmal oben
     erscheint — damit man sieht, dass ein Zurücksetzen oder Einlesen
     wirklich geklappt hat. */
  var profilHinweis = null;

  /* Wichtig: kein confirm(), alert() und kein Datei-Download.
     Die veröffentlichte Fassung läuft in einem Sandbox-Rahmen ohne
     allow-modals und ohne Downloads. confirm() liefert dort sofort
     „abgebrochen" — ein Knopf damit täte stillschweigend nichts.
     Deshalb Sicherheitsabfragen direkt auf der Seite und Übertragen
     per Kopieren und Einfügen. */
  function viewProfile() {
    var p = KS.store.profile();
    var ov = KS.srs.overview();
    var acc = p.stats.reviews ? Math.round((p.stats.correct / p.stats.reviews) * 100) : 0;
    var hinweis = profilHinweis;
    profilHinweis = null;

    app.innerHTML =
      '<div class="profhead">' +
        '<span class="avatar">' + esc(p.name.charAt(0).toUpperCase()) + "</span>" +
        "<div><h1>" + esc(p.name) + "</h1>" +
        '<div class="sub">' +
          (p.stats.streak > 0 ? p.stats.streak + (p.stats.streak === 1 ? " Tag" : " Tage") +
                                " am Stück · " : "") +
          ov.gelernt + " von " + ov.total + " Wörtern gelernt</div></div>" +
      "</div>" +
      (hinweis ? '<div class="fb ok">' + hinweis + "</div>" : "") +

      '<div class="metrics">' +
        '<div class="metric"><div class="metric-v">' + ov.gelernt + "</div>" +
          '<div class="metric-l">Wörter</div></div>' +
        '<div class="metric"><div class="metric-v">' + ov.gemeistert + "</div>" +
          '<div class="metric-l">gemeistert</div></div>' +
        '<div class="metric"><div class="metric-v">' + p.stats.reviews + "</div>" +
          '<div class="metric-l">Abfragen</div></div>' +
        '<div class="metric"><div class="metric-v">' + acc + "%</div>" +
          '<div class="metric-l">Trefferquote</div></div>' +
      "</div>" +

      '<h2 class="sec">Einstellungen</h2>' +
      '<div class="panel"><div class="conj-controls">' +
        '<div class="ctl"><label>Abfragerichtung</label><select id="sDir">' +
          '<option value="de2sw"' + (p.settings.direction === "de2sw" ? " selected" : "") +
            ">Deutsch → Swahili (schwerer, bringt mehr)</option>" +
          '<option value="sw2de"' + (p.settings.direction === "sw2de" ? " selected" : "") +
            ">Swahili → Deutsch (leichter)</option>" +
        "</select></div>" +
        '<div class="ctl"><label>Wörter pro Sitzung</label><select id="sGoal">' +
          [10, 15, 20, 30, 50].map(function (n) {
            return '<option value="' + n + '"' + (p.settings.dailyGoal === n ? " selected" : "") +
                   ">" + n + "</option>";
          }).join("") + "</select></div>" +
      "</div></div>" +

      '<h2 class="sec">Fortschritt übertragen</h2>' +
      '<div class="panel">' +
        '<p class="lead">Der Fortschritt liegt im Browser des jeweiligen Geräts. Zum Übertragen ' +
        "hier kopieren, dir selbst schicken (Mail, Chat) und auf dem anderen Gerät einfügen. " +
        "Beim Einlesen gewinnt pro Wort der neuere Stand — es geht nichts verloren.</p>" +
        '<div class="btnrow">' +
          '<button class="btn" id="doExport">Fortschritt kopieren</button>' +
          '<button class="btn" id="doImport">Fortschritt einfügen</button>' +
        "</div>" +
        '<div id="ioBox"></div>' +
      "</div>" +

      '<h2 class="sec">Profil</h2>' +
      '<div class="panel">' +
        '<div class="btnrow">' +
          '<a class="btn" href="#/wechseln">' + ic("user", 18) + "Profil wechseln</a>" +
          '<button class="btn" id="doResetVocab">Nur Vokabeln zurücksetzen</button>' +
          '<button class="btn btn-danger" id="doReset">Fortschritt zurücksetzen</button>' +
        "</div>" +
        '<div id="resetBox"></div>' +
      "</div>";

    $("#sDir").onchange = function () { p.settings.direction = this.value; KS.store.touch(); };
    $("#sGoal").onchange = function () { p.settings.dailyGoal = parseInt(this.value, 10); KS.store.touch(); };

    /* ---- Kopieren ---- */
    $("#doExport").onclick = function () {
      var text = KS.store.exportProfile();
      $("#ioBox").innerHTML =
        '<textarea id="ioText" class="iotext" rows="4" readonly></textarea>' +
        '<div id="ioFb"></div>';
      var ta = $("#ioText");
      ta.value = text;

      function geklappt() {
        $("#ioFb").innerHTML = '<div class="fb ok">Kopiert. Schick den Text an dich selbst und ' +
          "füge ihn auf dem anderen Gerät unter „Fortschritt einfügen“ ein.</div>";
      }
      function perHand() {
        ta.focus();
        ta.select();
        $("#ioFb").innerHTML = '<div class="fb hint">Automatisches Kopieren war nicht möglich. ' +
          "Der Text oben ist markiert — kopier ihn von Hand (Strg+C, am Handy lange drücken).</div>";
      }
      function altKopieren() {
        ta.select();
        try { if (document.execCommand("copy")) { geklappt(); return; } } catch (e) {}
        perHand();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(geklappt, altKopieren);
      } else {
        altKopieren();
      }
    };

    /* ---- Einfügen ---- */
    $("#doImport").onclick = function () {
      $("#ioBox").innerHTML =
        '<textarea id="ioText" class="iotext" rows="4" ' +
          'placeholder="Kopierten Fortschritt hier einfügen …"></textarea>' +
        '<div class="btnrow"><button class="btn btn-primary" id="ioGo">Einlesen</button></div>' +
        '<div id="ioFb"></div>';
      focusSoon($("#ioText"));
      $("#ioGo").onclick = function () {
        var text = $("#ioText").value.trim();
        if (!text) {
          $("#ioFb").innerHTML = '<div class="fb no">Das Feld ist leer. Füge zuerst den kopierten ' +
                                 "Fortschritt ein.</div>";
          return;
        }
        try {
          var prof = KS.store.importProfile(text);
          profilHinweis = "Fortschritt von „" + esc(prof.name) + "“ eingelesen und zusammengeführt.";
          route();
        } catch (e) {
          var grund = (e instanceof SyntaxError)
            ? "Der Text ist unvollständig. Kopiere ihn auf dem anderen Gerät bitte noch einmal ganz."
            : esc(e.message);
          $("#ioFb").innerHTML = '<div class="fb no">' + grund + "</div>";
        }
      };
    };

    /* ---- Sicherheitsabfrage direkt auf der Seite ---- */
    function frageNach(text, jaText, aktion) {
      $("#resetBox").innerHTML =
        '<div class="confirmbox">' +
          "<p>" + text + "</p>" +
          '<div class="btnrow">' +
            '<button class="btn btn-danger" id="resetJa">' + esc(jaText) + "</button>" +
            '<button class="btn btn-ghost" id="resetNein">Abbrechen</button>' +
          "</div>" +
        "</div>";
      $("#resetNein").onclick = function () { $("#resetBox").innerHTML = ""; };
      $("#resetJa").onclick = aktion;
      $("#resetBox").scrollIntoView({ block: "nearest" });
      focusSoon($("#resetNein"));   /* sicherer Standard: Enter bricht ab */
    }

    /* Nur die Karteikarten leeren — Lektionsergebnisse und Streak bleiben. */
    $("#doResetVocab").onclick = function () {
      frageNach("Alle <b>" + ov.gelernt + " gelernten Vokabeln</b> dieses Profils zurücksetzen? " +
                "Deine Lektionsergebnisse und dein Streak bleiben erhalten.",
                "Ja, Vokabeln zurücksetzen", function () {
        p.cards = {};
        p.stats.reviews = 0;
        p.stats.correct = 0;
        KS.store.touch();
        profilHinweis = "Vokabeln zurückgesetzt — jetzt 0 von " + ov.total + " Wörtern gelernt. " +
                        "Deine Lektionsergebnisse sind erhalten. Die nächste Vokabelsitzung " +
                        "beginnt mit den Wörtern aus deiner aktuellen Lektion.";
        route();
      });
    };

    $("#doReset").onclick = function () {
      frageNach("Wirklich den <b>gesamten Lernfortschritt</b> dieses Profils löschen — Vokabeln, " +
                "Lektionsergebnisse und Streak? Das lässt sich nicht rückgängig machen.",
                "Ja, alles löschen", function () {
        p.cards = {}; p.lessons = {};
        p.stats = { reviews: 0, correct: 0, streak: 0, lastDay: null };
        KS.store.touch();
        profilHinweis = "Gesamter Fortschritt gelöscht. Du startest wieder bei Lektion 1.";
        route();
      });
    };
  }

  /* ------------------------------------------------------------------ */
  /* Router                                                              */
  /* ------------------------------------------------------------------ */
  function route() {
    var hash = location.hash || "#/";
    var parts = hash.replace(/^#\//, "").split("/");
    window.scrollTo(0, 0);
    focusAus();
    markActive(bereich());

    switch (parts[0]) {
      case "":                 viewHome(); break;
      case "lessons":          viewLessons(); break;
      case "lesson":           viewLesson(parts[1], parts[2]); break;
      case "vokabeln":         viewVocab(); break;
      case "lernen":           viewSession(parts[1]); break;
      case "klassen":          viewClassDrill(); break;
      case "liste":            viewList(); break;
      case "grammatik":        viewGrammar(); break;
      case "konjugator":       viewConjugator(); break;
      case "konjugator-drill": viewConjDrill(); break;
      case "profil":           viewProfile(); break;
      case "wechseln":         KS.store.data.activeProfile = null; KS.store.save(); boot(); break;
      default:                 viewHome();
    }
  }

  /* ------------------------------------------------------------------ */
  /* Start                                                               */
  /* ------------------------------------------------------------------ */
  function boot() {
    themeAnwenden();
    KS.twiga.einbauen();   /* Zeichnung einmal ins Dokument, davor zeigen alle <use> ins Leere */
    KS.store.load();
    if (!KS.store.profile()) { renderProfileGate(); return; }
    renderShell();
    shellAn();
    route();
  }

  window.addEventListener("hashchange", function () {
    if (KS.store.profile()) route(); else boot();
  });

  document.addEventListener("DOMContentLoaded", function () {
    app = $("#app");
    rail = $("#rail");
    tabbar = $("#tabbar");
    topbar = $("#topbar");
    boot();
  });
})();
