/* Swahili-Konjugator: baut Verbformen aus Morphemen und liefert
   die Zerlegung gleich mit, damit man das System sieht.            */
window.KS = window.KS || {};

(function () {
  var VOWELS = "aeiou";

  function isVowelStart(s) { return VOWELS.indexOf(s.charAt(0)) >= 0; }

  /* Endvokal -a → -i (Verneinung Präsens) bzw. -e (Konjunktiv).
     Arabischstämmige Verben ändern ihren Endvokal NIE. */
  function finalVowel(stem, target, arabic) {
    if (arabic) return stem;
    if (stem.charAt(stem.length - 1) !== "a") return stem;
    return stem.slice(0, -1) + target;
  }

  /* Objektinfix an den Stamm anpassen (m- → mw- vor Vokal usw.) */
  function objForm(obj, stem) {
    if (!obj || !obj.pfx) return "";
    if (obj.vowelForm && isVowelStart(stem)) return obj.vowelForm;
    return obj.pfx;
  }

  /* ku- vor vokalisch anlautendem Stamm wird kw- (ku + enda = kwenda) */
  function kuForm(stem) { return isVowelStart(stem) ? "kw" : "ku"; }

  function find(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /* Hauptfunktion.
     Rückgabe: { form, parts:[{text,label}], note }  oder { error } */
  KS.conjugate = function (verb, subjId, tenseId, neg, objId) {
    var s = find(KS.subjects, subjId);
    var t = find(KS.tenses, tenseId);
    var o = find(KS.objects, objId || "none");
    if (!verb || !s || !t) return { error: "Ungültige Auswahl." };

    var stem = verb.stem;
    var arabic = !!verb.arabic;
    var mono = !!verb.mono;
    var parts = [];
    var note = verb.note || "";

    /* ---------- Befehlsform ---------- */
    if (t.imperative) {
      var plural = (subjId === "2pl");
      if (subjId !== "2sg" && subjId !== "2pl") {
        return { error: "Die Befehlsform gibt es nur für „du“ und „ihr“." };
      }
      if (neg) {
        var nStem = finalVowel(stem, "e", arabic);
        var nPfx = plural ? "msi" : "usi";
        parts.push({ text: nPfx, label: plural ? "ihr + nicht" : "du + nicht" });
        parts.push({ text: nStem, label: "Stamm (-e)" });
        return { form: nPfx + nStem + "!", parts: parts,
                 note: "Verneinter Befehl = Konjunktiv mit -si-." };
      }
      if (verb.irr && (plural ? verb.irr.impPl : verb.irr.imp)) {
        var irrForm = plural ? verb.irr.impPl : verb.irr.imp;
        return { form: irrForm, parts: [{ text: irrForm, label: "unregelmäßig" }],
                 note: "Unregelmäßige Befehlsform — auswendig lernen." };
      }
      if (plural) {
        var pStem = arabic ? stem : finalVowel(stem, "e", arabic);
        var pre = mono ? kuForm(stem) : "";
        if (pre) parts.push({ text: pre, label: "ku- (einsilbig)" });
        parts.push({ text: pStem, label: "Stamm (-e)" });
        parts.push({ text: "ni", label: "Plural" });
        return { form: pre + pStem + "ni!", parts: parts, note: note };
      }
      var sgForm = mono ? kuForm(stem) + stem : stem;
      parts.push({ text: sgForm, label: mono ? "ku- + Stamm (einsilbig)" : "purer Stamm" });
      return { form: sgForm.charAt(0).toUpperCase() + sgForm.slice(1) + "!",
               parts: parts, note: mono ? "Einsilbige Verben behalten ku- im Befehl." : note };
    }

    /* ---------- -ka- und hu- haben keine Verneinung ---------- */
    if (neg && t.negMarker === null) {
      return { error: "Diese Form hat keine eigene Verneinung. " +
                      (t.id === "hu" ? "Nutze die Präsens-Verneinung." :
                                       "Verneine stattdessen den Hauptsatz.") };
    }

    var objPfx = objForm(o, stem);
    var workStem = stem;
    var keepKu;

    if (!neg) {
      /* ---------- positiv ---------- */
      keepKu = mono && t.keepKu && !objPfx;

      if (t.noSubj) {
        parts.push({ text: t.posMarker, label: "hu- (Gewohnheit, ohne Subjekt!)" });
      } else {
        parts.push({ text: s.pos, label: "Subjekt: " + s.label });
        if (t.posMarker) parts.push({ text: t.posMarker, label: "Tempus: " + t.label });
      }
      if (objPfx) parts.push({ text: objPfx, label: "Objekt: " + o.label });
      if (keepKu) parts.push({ text: kuForm(stem), label: "ku- (einsilbiges Verb)" });
      if (t.finalE) workStem = finalVowel(stem, "e", arabic);
      parts.push({ text: workStem, label: t.finalE ? "Stamm (-e)" : "Stamm" });

    } else {
      /* ---------- verneint ---------- */
      if (t.id === "subj") {
        /* Konjunktiv-Verneinung: POSITIVES Subjektpräfix + si- */
        parts.push({ text: s.pos, label: "Subjekt: " + s.label });
        parts.push({ text: "si", label: "Verneinung" });
        if (objPfx) parts.push({ text: objPfx, label: "Objekt: " + o.label });
        workStem = finalVowel(stem, "e", arabic);
        parts.push({ text: workStem, label: "Stamm (-e)" });

      } else if (t.id === "ki") {
        /* -ki- verneint sich als -sipo- mit positivem Subjektpräfix */
        parts.push({ text: s.pos, label: "Subjekt: " + s.label });
        parts.push({ text: "sipo", label: "verneintes -ki- (wenn … nicht)" });
        if (objPfx) parts.push({ text: objPfx, label: "Objekt: " + o.label });
        parts.push({ text: workStem, label: "Stamm" });
        note = "Nisiposoma = wenn ich nicht lese.";

      } else {
        keepKu = mono && t.negKeepKu && !objPfx;
        parts.push({ text: s.neg, label: "Subjekt verneint: " + s.label });
        if (t.negMarker) {
          /* Das verneinte -ku- der Vergangenheit wird vor Vokal zu kw-:
             si + ku + enda = sikwenda, nicht *sikuenda. */
          var negM = (t.negMarker === "ku" && isVowelStart(stem)) ? "kw" : t.negMarker;
          parts.push({ text: negM, label: "Tempus (verneint)" });
        }
        if (objPfx) parts.push({ text: objPfx, label: "Objekt: " + o.label });
        if (keepKu) parts.push({ text: kuForm(stem), label: "ku- (einsilbiges Verb)" });
        if (t.finalI) {
          workStem = finalVowel(stem, "i", arabic);
          if (arabic) note = "Arabischstämmiges Verb: Endvokal bleibt -" +
                             stem.charAt(stem.length - 1) + ", wird NICHT zu -i.";
        }
        parts.push({ text: workStem, label: t.finalI ? "Stamm (-i)" : "Stamm" });
      }
    }

    /* Einzelteile zusammenkleben; ku+Vokalstamm ist schon als kw- gesetzt */
    var form = parts.map(function (p) { return p.text; }).join("");

    if (mono && !note) {
      note = "Einsilbiges Verb: das ku- des Infinitivs bleibt in -na-, -li-, -ta-, -me-, " +
             "verschwindet aber, sobald ein Objektinfix da ist.";
    }

    return { form: form, parts: parts, note: note };
  };

  /* Komplette Tabelle einer Zeitform über alle sechs Personen */
  KS.conjugateTable = function (verb, tenseId, neg) {
    var ids = ["1sg", "2sg", "3sg", "1pl", "2pl", "3pl"];
    return ids.map(function (id) {
      var s = find(KS.subjects, id);
      var r = KS.conjugate(verb, id, tenseId, neg, "none");
      return { person: s.label, result: r };
    });
  };

  /* "kuwa na" = haben. Unregelmäßig, darum fest hinterlegt. */
  KS.haben = {
    pos: [["ich", "nina"], ["du", "una"], ["er/sie", "ana"],
          ["wir", "tuna"], ["ihr", "mna"], ["sie", "wana"]],
    neg: [["ich", "sina"], ["du", "huna"], ["er/sie", "hana"],
          ["wir", "hatuna"], ["ihr", "hamna"], ["sie", "hawana"]],
    past: "nilikuwa na … (ich hatte)",
    future: "nitakuwa na … (ich werde haben)"
  };

  KS.findVerb = function (inf) {
    for (var i = 0; i < KS.verbs.length; i++) if (KS.verbs[i].inf === inf) return KS.verbs[i];
    return null;
  };
})();
