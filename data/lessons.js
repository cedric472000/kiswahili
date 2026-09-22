/* Lektionen. Mwalimu Amani ist eine erfundene Lehrerfigur aus Kariakoo,
   Dar es Salaam. Sie führt durch den Kurs und spricht von Lektion zu
   Lektion mehr Swahili — erst mit voller Übersetzung, später nur noch
   mit Stützen, damit sich das Ohr gewöhnt.                             */
window.KS = window.KS || {};

KS.mwalimu = {
  name: "Mwalimu Amani",
  where: "Kariakoo, Dar es Salaam",
  intro: "Hodi hodi! Ich bin Amani und unterrichte Kiswahili. Wir machen das " +
         "pole pole — langsam, aber gründlich. Anders als in manchen Apps " +
         "bekommt ihr bei mir immer erst die Regel und dann die Wörter. " +
         "Karibuni sana!"
};

KS.lessons = [
  /* ============================ 1 ============================ */
  {
    id: "l01",
    title: "Salamu — Grüßen will gelernt sein",
    goal: "Die tansanischen Begrüßungspaare sicher beherrschen und wissen, wen man wie anspricht.",
    mwalimu: [
      { sw: "Karibu! Hujambo?", de: "Willkommen! Wie geht es dir?" },
      { sw: "", de: "In Tansania ist Grüßen kein Nebenbei. Wer gleich zur Sache kommt, gilt als unhöflich. Man grüßt, fragt nach der Familie, nach der Arbeit — und erst dann redet man." },
      { sw: "", de: "Das Wichtigste zuerst: Begrüßungen kommen in festen Paaren. Auf jeden Gruß gehört genau eine Antwort. Die lernt ihr am besten zusammen, nie einzeln." }
    ],
    grammar: [
      { h: "Die Paare",
        body: "<b>Hujambo?</b> → <b>Sijambo.</b> (an eine Person)<br>" +
              "<b>Hamjambo?</b> → <b>Hatujambo.</b> (an mehrere)<br>" +
              "<b>Habari?</b> → <b>Nzuri.</b> / <b>Njema.</b> / <b>Salama.</b><br>" +
              "<b>Shikamoo</b> → <b>Marahaba</b> (an alle Älteren)<br>" +
              "<b>Mambo?</b> → <b>Poa.</b> (locker, unter Jüngeren)<br>" +
              "<b>Karibu</b> → <b>Asante.</b>" },
      { h: "Ein erster Blick ins Innere",
        body: "<i>Jambo</i> heißt „Sache, Angelegenheit“. <b>Hu-jambo</b> heißt wörtlich " +
              "„du hast keine Sache“, <b>si-jambo</b> „ich habe keine Sache“. " +
              "Das <b>hu-</b> und das <b>si-</b> sind bereits Verneinungs­vorsilben — " +
              "genau die, die euch in Lektion 5 wiederbegegnen. Swahili ist ein Baukasten, " +
              "und ihr habt gerade die ersten zwei Bausteine gesehen." },
      { h: "Habari lässt sich erweitern",
        body: "<b>Habari za asubuhi?</b> (des Morgens) · <b>za mchana?</b> (des Tages) · " +
              "<b>za jioni?</b> (des Abends) · <b>za kazi?</b> (der Arbeit) · " +
              "<b>za nyumbani?</b> (von zu Hause) · <b>za safari?</b> (der Reise)<br>" +
              "Antwort bleibt immer: <b>Nzuri</b> — auch wenn es einem schlecht geht. " +
              "Das ist Höflichkeit, keine Lüge." }
    ],
    vocab: ["Hujambo?", "Sijambo", "Hamjambo?", "Shikamoo", "Marahaba", "Habari?",
            "Nzuri", "Mambo?", "Poa", "Karibu", "Asante", "Kwaheri", "Tutaonana"],
    examples: [
      { sw: "Shikamoo, mzee.", de: "Ehrerbietiger Gruß, alter Herr.", gloss: "An jede ältere Person — Pflicht in Tansania." },
      { sw: "Habari za asubuhi?", de: "Guten Morgen? (wörtl. Nachrichten des Morgens?)", gloss: "za = von/des, Plural" },
      { sw: "Nzuri, asante. Na wewe?", de: "Gut, danke. Und du?", gloss: "na wewe = und du" }
    ],
    culture: "Beim Shikamoo senken jüngere Menschen leicht den Kopf. Wenn dich ein Kind mit " +
             "Shikamoo grüßt, antwortest du Marahaba — auch als Mzungu. Lass es nie unbeantwortet.",
    practice: [
      { instruction: "Wir fangen ruhig an. Ich nenne dir einen Gruß, du gibst nur die passende Antwort — sonst nichts.",
        q: "Shikamoo", a: "Marahaba",
        explain: "Auf Shikamoo gibt es genau eine Antwort. Kein Nachdenken nötig — das ist ein festes Paar." },
      { instruction: "Noch einmal dasselbe, diesmal mit dem alltäglichsten Gruß überhaupt.",
        q: "Hujambo?", a: "Sijambo",
        explain: "hu- heißt „du … nicht“, si- heißt „ich … nicht“. Du hast eben zwei Verneinungsvorsilben benutzt, ohne es zu merken." },
      { instruction: "Jetzt die offene Form. Hier sind mehrere Antworten richtig — nimm die, die dir zuerst einfällt.",
        q: "Habari za asubuhi?", a: "Nzuri, Njema, Salama, Safi",
        explain: "Nzuri ist der Standard, Njema und Salama gehen genauso. Man antwortet immer positiv — auch wenn der Tag schlecht läuft." }
    ],
    exercises: [
      { type: "translate", q: "Wie geht es dir? (an eine Person)", a: "Hujambo", hint: "Das hu- ist die Vorsilbe für „du … nicht“." },
      { type: "translate", q: "Mir geht es gut. (Antwort auf Hujambo)", a: "Sijambo" },
      { type: "choice", q: "Du triffst die 70-jährige Nachbarin. Was sagst du?",
        options: ["Mambo?", "Shikamoo", "Hatujambo", "Kwaheri"], a: 1,
        why: "Shikamoo ist der Respektsgruß an Ältere. „Mambo?“ wäre hier respektlos." },
      { type: "choice", q: "Jemand sagt zu dir „Shikamoo“. Deine Antwort?",
        options: ["Shikamoo", "Marahaba", "Nzuri", "Karibu"], a: 1,
        why: "Auf Shikamoo gibt es genau eine Antwort: Marahaba." },
      { type: "translate", q: "Guten Abend? (wörtlich: Nachrichten des Abends?)", a: "Habari za jioni" },
      { type: "translate", q: "Danke sehr", a: "Asante sana" }
    ]
  },

  /* ============================ 2 ============================ */
  {
    id: "l02",
    title: "Mimi ni — sich vorstellen",
    goal: "Sagen können, wer man ist, woher man kommt und wo man wohnt.",
    mwalimu: [
      { sw: "Jina langu ni Amani. Wewe je?", de: "Mein Name ist Amani. Und du?" },
      { sw: "", de: "Jetzt kommt ein Geschenk: Das Wort für „sein“ im Präsens ist <b>ni</b> — und es verändert sich nie. Nicht nach Person, nicht nach Zahl, nicht nach Klasse. Ein einziges Wort für bin, bist, ist, sind, seid." },
      { sw: "", de: "Die Verneinung ist genauso einfach: <b>si</b>. Das war's. Merkt euch das gut, denn so bequem wird Swahili nicht oft." }
    ],
    grammar: [
      { h: "ni = sein, si = nicht sein",
        body: "<b>Mimi ni Mjerumani.</b> Ich bin Deutscher.<br>" +
              "<b>Yeye ni mwalimu.</b> Er/sie ist Lehrer/in.<br>" +
              "<b>Sisi ni wanafunzi.</b> Wir sind Schüler.<br>" +
              "<b>Huyu si daktari.</b> Das ist kein Arzt.<br>" +
              "Kein Konjugieren, keine Kongruenz. <i>ni</i> und <i>si</i> gelten für alles." },
      { h: "Die Personalpronomen",
        body: "<b>mimi</b> ich · <b>wewe</b> du · <b>yeye</b> er/sie<br>" +
              "<b>sisi</b> wir · <b>ninyi</b> ihr · <b>wao</b> sie<br>" +
              "Sie stehen nur zur Betonung. Normalerweise steckt die Person schon im Verb, " +
              "wie ihr in Lektion 4 seht." },
      { h: "Länder, Menschen, Sprachen — ein Muster",
        body: "Hier seht ihr zum ersten Mal, was die Nomenklassen leisten:<br>" +
              "<b>U</b>jerumani = Deutschland (Kl. 14, Abstraktes/Länder)<br>" +
              "<b>M</b>jerumani = ein Deutscher (Kl. 1, Menschen)<br>" +
              "<b>Wa</b>jerumani = Deutsche (Kl. 2, Menschen Plural)<br>" +
              "<b>Ki</b>jerumani = die deutsche Sprache (Kl. 7, Sprachen)<br>" +
              "Dasselbe mit Tansania: Utanzania · Mtanzania · Watanzania · Kiswahili.<br>" +
              "<i>Eine</i> Wurzel, vier Wörter — allein durch die Vorsilbe." }
    ],
    vocab: ["jina", "mwalimu", "mwanafunzi", "rafiki", "mpenzi", "nani", "wapi", "-je"],
    examples: [
      { sw: "Jina langu ni Cedric.", de: "Mein Name ist Cedric.", gloss: "langu = mein (Klasse 5, weil jina Kl. 5 ist)" },
      { sw: "Unaitwa nani?", de: "Wie heißt du?", gloss: "wörtl.: du wirst genannt wer?" },
      { sw: "Ninatoka Ujerumani.", de: "Ich komme aus Deutschland.", gloss: "ni-na-toka = ich-Präsens-kommen von" },
      { sw: "Ninakaa Dar es Salaam.", de: "Ich wohne in Dar es Salaam.", gloss: "kukaa = wohnen, sitzen, bleiben" },
      { sw: "Ninajifunza Kiswahili.", de: "Ich lerne Swahili.", gloss: "Ki- = Sprache" }
    ],
    culture: "„Dar es Salaam“ ist Arabisch und heißt „Haus des Friedens“. Tansanier sagen " +
             "meist einfach <b>Dar</b> oder <b>Bongo</b> — Bongo ist der Spitzname für die Stadt " +
             "und steckt auch in „Bongo Flava“, der Musikrichtung aus Dar.",
    practice: [
      { instruction: "Setz die drei Teile zusammen. Denk daran: ni verändert sich nie.",
        q: "„Ich bin Lehrer.“", build: "mimi + ni + mwalimu", a: "Mimi ni mwalimu",
        explain: "Fertig. Kein Konjugieren, keine Kongruenz — ni ist das bequemste Wort der Sprache." },
      { instruction: "Jetzt die Vorsilben. Erinnere dich: Ki- gehört zu Klasse 7, und Sprachen sind Klasse 7.",
        q: "Wie heißt „die deutsche Sprache“?", build: "Ki- + jerumani", a: "Kijerumani",
        explain: "Ujerumani = das Land, Mjerumani = ein Deutscher, Wajerumani = Deutsche, Kijerumani = die Sprache. Eine Wurzel, vier Wörter." },
      { instruction: "Eine Frage, die du in Dar täglich hören wirst. Beide Formen sind richtig.",
        q: "Wie heißt du?", a: "Unaitwa nani, Unaitwaje",
        explain: "„Unaitwa nani?“ ist wörtlich „du wirst genannt wer?“, „Unaitwaje?“ ist „wie wirst du genannt?“ — das -je hängt hinten am Verb." }
    ],
    exercises: [
      { type: "translate", q: "Ich bin Lehrer.", a: "Mimi ni mwalimu", hint: "ni verändert sich nie." },
      { type: "translate", q: "Wie heißt du?", a: "Unaitwa nani" },
      { type: "choice", q: "Was heißt „Kijerumani“?",
        options: ["Deutschland", "ein Deutscher", "die deutsche Sprache", "deutsch (Adjektiv)"], a: 2,
        why: "Ki- ist die Vorsilbe der Klasse 7 — und Sprachen gehören zu Klasse 7." },
      { type: "choice", q: "Und wie heißt „ein Deutscher“?",
        options: ["Ujerumani", "Mjerumani", "Wajerumani", "Kijerumani"], a: 1,
        why: "M- ist Klasse 1: Menschen im Singular." },
      { type: "translate", q: "Ich komme aus Deutschland.", a: "Ninatoka Ujerumani" },
      { type: "translate", q: "Das ist kein Arzt. (Das hier …)", a: "Huyu si daktari" }
    ]
  },

  /* ============================ 3 ============================ */
  {
    id: "l03",
    title: "Watu na vitu — die Nomenklassen beginnen",
    goal: "Die beiden wichtigsten Klassenpaare erkennen und den Plural selbst bilden.",
    mwalimu: [
      { sw: "Sasa tunaanza kazi kubwa.", de: "Jetzt beginnt die große Arbeit." },
      { sw: "", de: "Swahili hat kein Geschlecht — kein der, die, das. Stattdessen hat es <b>Nomenklassen</b>. Jedes Nomen gehört zu einer Klasse, und diese Klasse bestimmt, wie alles andere im Satz aussieht." },
      { sw: "", de: "Viele Lernende empfinden das als Last. Ich sage: Es ist ein Geschenk. Die Klasse steht vorne am Wort und verrät euch die Bedeutung. Wer die Klassen kennt, errät Wörter, die er nie gelernt hat." }
    ],
    grammar: [
      { h: "Klasse 1/2: M- / WA- — Menschen",
        body: "<b>m</b>tu → <b>wa</b>tu (Mensch/Menschen)<br>" +
              "<b>m</b>toto → <b>wa</b>toto (Kind/Kinder)<br>" +
              "<b>mw</b>alimu → <b>wa</b>limu (Lehrer/Lehrer)<br>" +
              "<b>m</b>geni → <b>wa</b>geni (Gast/Gäste)<br>" +
              "Vor Vokal wird m- zu mw-: mwalimu, mwanafunzi." },
      { h: "Klasse 7/8: KI- / VI- — Dinge, Werkzeuge, Sprachen",
        body: "<b>ki</b>tu → <b>vi</b>tu (Ding/Dinge)<br>" +
              "<b>ki</b>tabu → <b>vi</b>tabu (Buch/Bücher)<br>" +
              "<b>ki</b>ti → <b>vi</b>ti (Stuhl/Stühle)<br>" +
              "<b>ch</b>akula → <b>vy</b>akula (Essen) — vor Vokal wird ki- zu ch-, vi- zu vy-." },
      { h: "Warum das mehr ist als Vokabeln",
        body: "Klasse 7 ist auch die Verkleinerungsform. Aus <i>mtoto</i> (Kind) wird " +
              "<b>kitoto</b> (Kleinkind). Aus <i>mtu</i> wird <b>kijitu</b> (Männlein). " +
              "Und Sprachen sind ebenfalls Klasse 7: <b>Ki</b>swahili, <b>Ki</b>ingereza, " +
              "<b>Ki</b>jerumani. Ihr lernt keine Vokabeln — ihr lernt eine Maschine." },
      { h: "Das Adjektiv folgt dem Nomen",
        body: "Das Adjektiv steht <i>hinter</i> dem Nomen und übernimmt dessen Klassenvorsilbe:<br>" +
              "mtu <b>m</b>zuri · watu <b>wa</b>zuri · kitu <b>ki</b>zuri · vitu <b>vi</b>zuri" }
    ],
    vocab: ["mtu", "mtoto", "mwalimu", "mgeni", "mzee", "kitu", "kitabu", "kiti", "chakula", "kijiji"],
    examples: [
      { sw: "Mtoto mzuri.", de: "Ein schönes Kind.", gloss: "m-toto m-zuri — Klasse 1" },
      { sw: "Watoto wazuri.", de: "Schöne Kinder.", gloss: "wa-toto wa-zuri — Klasse 2" },
      { sw: "Kitabu kizuri.", de: "Ein gutes Buch.", gloss: "ki-tabu ki-zuri — Klasse 7" },
      { sw: "Vitabu vizuri.", de: "Gute Bücher.", gloss: "vi-tabu vi-zuri — Klasse 8" },
      { sw: "Chakula kizuri!", de: "Gutes Essen!", gloss: "chakula ist Kl. 7, darum ki-zuri" }
    ],
    culture: "Lernt Nomen ab jetzt <b>immer im Paar</b>: mtoto/watoto, nicht nur mtoto. " +
             "Das kostet am Anfang etwas mehr und spart euch später sehr viel.",
    practice: [
      { instruction: "Nur den Plural bilden, mehr nicht. Die Vorsilbe vorne wird ausgetauscht.",
        q: "mtoto (Kind)", build: "m- → wa-", a: "watoto",
        explain: "Klasse 1 wird zu Klasse 2. Genauso: mtu → watu, mwalimu → walimu." },
      { instruction: "Dasselbe, aber jetzt bei einem Ding statt bei einem Menschen.",
        q: "kitabu (Buch)", build: "ki- → vi-", a: "vitabu",
        explain: "Klasse 7 wird zu Klasse 8. Genauso: kitu → vitu, kiti → viti." },
      { instruction: "Jetzt hängen wir ein Adjektiv an. Es steht hinten und nimmt dieselbe Vorsilbe wie das Nomen.",
        q: "„schöne Menschen“", build: "watu + wa- + zuri", a: "watu wazuri",
        explain: "Das wa- des Nomens wiederholt sich am Adjektiv. Deshalb watu wazuri, aber vitu vizuri." }
    ],
    exercises: [
      { type: "translate", q: "Plural von „mtoto“", a: "watoto" },
      { type: "translate", q: "Plural von „kitabu“", a: "vitabu" },
      { type: "choice", q: "Zu welcher Klasse gehört „Kiswahili“?",
        options: ["1 (Menschen)", "7 (Dinge/Sprachen)", "9 (Lehnwörter)", "14 (Abstrakta)"], a: 1,
        why: "Sprachen tragen das Ki- der Klasse 7 — deshalb Kiswahili, Kiingereza, Kifaransa." },
      { type: "translate", q: "gute Bücher", a: "vitabu vizuri", hint: "Das Adjektiv steht hinten und nimmt dieselbe Vorsilbe." },
      { type: "translate", q: "schöne Menschen", a: "watu wazuri" },
      { type: "choice", q: "Was ist „kitoto“?",
        options: ["ein Lehrer", "ein Kleinkind", "ein Buch", "eine Sprache"], a: 1,
        why: "Klasse 7 dient auch als Verkleinerung: mtoto (Kind) → kitoto (Kleinkind)." }
    ]
  },

  /* ============================ 4 ============================ */
  {
    id: "l04",
    title: "Vitenzi — das Verb als Baukasten",
    goal: "Verben im Präsens bilden: Subjektpräfix + Tempus + Stamm.",
    mwalimu: [
      { sw: "Unafanya nini?", de: "Was machst du?" },
      { sw: "", de: "Das ist die Lektion, nach der Swahili plötzlich Sinn ergibt. Ein Verb ist hier kein Wort, das man auswendig lernt — es ist ein Bausatz mit fester Reihenfolge." },
      { sw: "", de: "<b>Subjekt + Zeit + (Objekt) + Stamm.</b> Immer diese Reihenfolge. Wenn ihr die sechs Subjektvorsilben könnt und eine Zeitvorsilbe, könnt ihr jedes Verb in jeder Person bilden. Ohne Ausnahmen, ohne Tabellen." }
    ],
    grammar: [
      { h: "Die sechs Subjektpräfixe",
        body: "<b>ni-</b> ich · <b>u-</b> du · <b>a-</b> er/sie<br>" +
              "<b>tu-</b> wir · <b>m-</b> ihr · <b>wa-</b> sie<br>" +
              "Diese sechs sind die Grundlage von allem. Lernt sie heute." },
      { h: "Die Präsensvorsilbe -na-",
        body: "ni + na + soma = <b>ninasoma</b> (ich lese / ich bin am Lesen)<br>" +
              "u + na + soma = <b>unasoma</b><br>" +
              "a + na + soma = <b>anasoma</b><br>" +
              "tu + na + soma = <b>tunasoma</b><br>" +
              "m + na + soma = <b>mnasoma</b><br>" +
              "wa + na + soma = <b>wanasoma</b>" },
      { h: "Der Infinitiv steckt schon drin",
        body: "<b>kusoma</b> heißt „lesen“. Das <b>ku-</b> ist die Infinitivvorsilbe (Klasse 15). " +
              "Der Stamm ist also <b>soma</b>. Wenn ihr ein Verb im Wörterbuch seht, " +
              "streicht ihr das ku- und habt euren Baustein." },
      { h: "Eine Handvoll Sonderfälle",
        body: "Einsilbige Stämme behalten das ku-, weil sie sonst zu kurz wären:<br>" +
              "<b>kula</b> (essen) → ni<b>naku</b>la · <b>kunywa</b> (trinken) → ni<b>naku</b>nywa<br>" +
              "<b>kuja</b> (kommen) → ni<b>naku</b>ja · <b>kwenda</b> (gehen) → ni<b>nakw</b>enda<br>" +
              "Das sind vier Verben. Mehr müsst ihr euch hier nicht merken." }
    ],
    vocab: ["kusoma", "kufanya", "kwenda", "kula", "kunywa", "kutaka", "kupenda", "kujua", "nini"],
    examples: [
      { sw: "Ninasoma Kiswahili.", de: "Ich lerne Swahili.", gloss: "ni-na-soma" },
      { sw: "Unafanya nini?", de: "Was machst du?", gloss: "u-na-fanya nini" },
      { sw: "Anakwenda sokoni.", de: "Er/sie geht zum Markt.", gloss: "a-na-kw-enda" },
      { sw: "Tunakula ugali.", de: "Wir essen Ugali.", gloss: "tu-na-ku-la — einsilbig, ku- bleibt" },
      { sw: "Wanapenda muziki.", de: "Sie mögen Musik.", gloss: "wa-na-penda" }
    ],
    culture: "Im Alltag hört ihr oft <b>nasoma</b> statt <b>ninasoma</b> — das ni- wird " +
             "verschluckt. Beides ist richtig, aber schreibt die volle Form, bis sie sitzt.",
    practice: [
      { instruction: "Der Baukasten. Steck die drei Teile in genau dieser Reihenfolge zusammen: Subjekt, Zeit, Stamm.",
        q: "„ich lese“", build: "ni + na + soma", a: "ninasoma",
        explain: "Immer diese Reihenfolge. Wenn du das hast, hast du das ganze Verbsystem." },
      { instruction: "Noch einmal, andere Person. Nur das erste Stück ändert sich.",
        q: "„wir machen“", build: "tu + na + fanya", a: "tunafanya",
        explain: "tu- heißt wir. Der Rest bleibt exakt gleich." },
      { instruction: "Jetzt ein einsilbiges Verb. Achtung — hier kommt ein Stück dazu.",
        q: "„sie essen“ (Stamm: -la)", build: "wa + na + ku + la", a: "wanakula",
        explain: "Der Stamm -la ist zu kurz, um die Betonung zu tragen. Darum bleibt das ku- des Infinitivs stehen." }
    ],
    exercises: [
      { type: "translate", q: "ich lese / ich lerne", a: "ninasoma" },
      { type: "translate", q: "wir gehen", a: "tunakwenda" },
      { type: "translate", q: "sie (Plural) essen", a: "wanakula", hint: "kula ist einsilbig — das ku- bleibt." },
      { type: "choice", q: "Warum heißt es „ninakula“ und nicht „ninala“?",
        options: ["Weil kula unregelmäßig ist", "Weil der Stamm -la- einsilbig ist und ku- zur Stütze bleibt",
                  "Weil es ein Lehnwort ist", "Weil ni- ein k verlangt"], a: 1,
        why: "Einsilbige Stämme (la, nywa, ja, wa) behalten das ku- in -na-, -li-, -ta- und -me-." },
      { type: "translate", q: "Was machst du?", a: "Unafanya nini" },
      { type: "translate", q: "er/sie trinkt Tee", a: "anakunywa chai" }
    ]
  },

  /* ============================ 5 ============================ */
  {
    id: "l05",
    title: "Hapana — die Verneinung",
    goal: "Im Präsens verneinen — und die zwei Fallen dabei kennen.",
    mwalimu: [
      { sw: "Sielewi. Sema pole pole, tafadhali.", de: "Ich verstehe nicht. Sprich bitte langsam." },
      { sw: "", de: "Diesen Satz werdet ihr in Dar öfter brauchen als jeden anderen. Lernt ihn heute auswendig." },
      { sw: "", de: "Die Verneinung im Präsens ist die einzige Stelle, an der Swahili zwei Dinge gleichzeitig tut: Es tauscht die Subjektvorsilbe aus <i>und</i> es ändert den Endvokal. Danach wird es wieder einfach, versprochen." }
    ],
    grammar: [
      { h: "Zwei Änderungen auf einmal",
        body: "1. Die Subjektvorsilbe wird zur Verneinungsform.<br>" +
              "2. Das <b>-na-</b> verschwindet ersatzlos.<br>" +
              "3. Der Endvokal <b>-a</b> wird zu <b>-i</b>.<br><br>" +
              "ninasoma → <b>sisomi</b> (ich lese nicht)" },
      { h: "Die verneinten Subjektpräfixe",
        body: "<b>si-</b> ich nicht · <b>hu-</b> du nicht · <b>ha-</b> er/sie nicht<br>" +
              "<b>hatu-</b> wir nicht · <b>ham-</b> ihr nicht · <b>hawa-</b> sie nicht<br><br>" +
              "sisomi · husomi · hasomi · hatusomi · hamsomi · hawasomi<br>" +
              "<i>Erkennt ihr si- und hu- wieder? Genau die steckten schon in Sijambo und Hujambo.</i>" },
      { h: "Falle: arabischstämmige Verben",
        body: "Verben, die nicht auf <b>-a</b> enden, stammen aus dem Arabischen. " +
              "Ihr Endvokal ändert sich <b>nie</b>:<br>" +
              "kusafiri → <b>sisafiri</b> (nicht *sisafirii)<br>" +
              "kurudi → <b>sirudi</b> · kujibu → <b>sijibu</b> · kufikiri → <b>sifikiri</b>" },
      { h: "Die nützlichsten verneinten Formen",
        body: "<b>Sielewi.</b> Ich verstehe nicht.<br>" +
              "<b>Sijui.</b> Ich weiß nicht.<br>" +
              "<b>Sitaki.</b> Ich will nicht. (höflich: Asante, sitaki)<br>" +
              "<b>Siwezi.</b> Ich kann nicht.<br>" +
              "<b>Sina.</b> Ich habe nicht." }
    ],
    vocab: ["kuelewa", "kujua", "kutaka", "kuweza", "Hapana", "Samahani", "Tafadhali", "Pole pole"],
    examples: [
      { sw: "Sielewi Kiswahili vizuri.", de: "Ich verstehe Swahili nicht gut.", gloss: "si-elew-i" },
      { sw: "Hajui jibu.", de: "Er/sie weiß die Antwort nicht.", gloss: "ha-ju-i" },
      { sw: "Hatuli nyama.", de: "Wir essen kein Fleisch.", gloss: "hatu-l-i — einsilbig, hier OHNE ku-" },
      { sw: "Sisafiri leo.", de: "Ich reise heute nicht.", gloss: "arabisch — Endvokal -i bleibt" }
    ],
    culture: "Ein direktes „Hapana“ wirkt schroff. Tansanier verpacken Absagen: " +
             "<b>Asante, lakini sitaki.</b> (Danke, aber ich möchte nicht.) " +
             "Oder auf dem Markt einfach lächelnd <b>Asante!</b> im Weitergehen.",
    practice: [
      { instruction: "Zwei Dinge auf einmal: Die Vorsilbe wird zur Verneinungsform, und der Endvokal -a wird zu -i. Das -na- fällt ganz weg.",
        q: "Verneine „ninaelewa“ (ich verstehe)", build: "si + elew + i", a: "sielewi",
        explain: "Sielewi. Merk dir diesen Satz gut — du wirst ihn in Dar ständig brauchen." },
      { instruction: "Dieselbe Regel, andere Person.",
        q: "Verneine „unajua“ (du weißt)", build: "hu + ju + i", a: "hujui",
        explain: "hu- heißt „du … nicht“. Genau das hu-, das schon in Hujambo steckte." },
      { instruction: "Und jetzt die Falle. Dieses Verb kommt aus dem Arabischen — schau auf den Endvokal.",
        q: "Verneine „ninasafiri“ (ich reise)", build: "si + safiri", a: "sisafiri",
        explain: "Arabischstämmige Verben enden nicht auf -a und ändern ihren Endvokal nie. Also sisafiri, nicht sisafirii." }
    ],
    exercises: [
      { type: "translate", q: "Ich verstehe nicht.", a: "Sielewi" },
      { type: "translate", q: "Ich weiß nicht.", a: "Sijui" },
      { type: "translate", q: "du liest nicht", a: "husomi" },
      { type: "choice", q: "Wie heißt die Verneinung von „ninasafiri“ (ich reise)?",
        options: ["sisafiri", "sisafirii", "sinasafiri", "hasafiri"], a: 0,
        why: "kusafiri ist arabischstämmig — der Endvokal -i bleibt unverändert." },
      { type: "choice", q: "Warum heißt es „hatuli“ und nicht „hatukuli“?",
        options: ["Tippfehler", "In der Präsens-Verneinung fällt das ku- der einsilbigen Verben weg",
                  "kula ist doch nicht einsilbig", "Weil hatu- schon ein u enthält"], a: 1,
        why: "Das ku- bleibt nur in -na-, -li-, -ta-, -me-. In der Präsens-Verneinung fällt es weg: sili, huli, hali." },
      { type: "translate", q: "Wir wollen nicht.", a: "Hatutaki" }
    ]
  },

  /* ============================ 6 ============================ */
  {
    id: "l06",
    title: "Jana na kesho — Vergangenheit und Zukunft",
    goal: "-li- und -ta- sicher verwenden, auch verneint.",
    mwalimu: [
      { sw: "Jana nilikwenda sokoni. Kesho nitakwenda kazini.", de: "Gestern ging ich zum Markt. Morgen gehe ich zur Arbeit." },
      { sw: "", de: "Hier zahlt sich der Baukasten aus: Ihr tauscht nur <i>ein</i> Stück in der Mitte aus. Aus -na- wird -li- für gestern und -ta- für morgen. Der Rest bleibt, wie er war." }
    ],
    grammar: [
      { h: "-li- = Vergangenheit",
        body: "ni<b>li</b>soma · u<b>li</b>soma · a<b>li</b>soma · tu<b>li</b>soma · m<b>li</b>soma · wa<b>li</b>soma<br>" +
              "Einsilbige behalten ku-: ni<b>liku</b>la, ni<b>likw</b>enda." },
      { h: "-ta- = Zukunft",
        body: "ni<b>ta</b>soma · u<b>ta</b>soma · a<b>ta</b>soma · tu<b>ta</b>soma · m<b>ta</b>soma · wa<b>ta</b>soma<br>" +
              "Ebenso mit ku-: ni<b>taku</b>la, ni<b>takw</b>enda." },
      { h: "Verneint: -li- wird zu -ku-",
        body: "nilisoma → <b>sikusoma</b> (ich las nicht)<br>" +
              "Das ist der einzige Stolperstein. Merkt euch: <i>li wird ku</i>.<br>" +
              "sikusoma · hukusoma · hakusoma · hatukusoma · hamkusoma · hawakusoma<br>" +
              "<i>Der Endvokal bleibt hier bei -a!</i> Nur im Präsens wird er zu -i." },
      { h: "Verneint: -ta- bleibt -ta-",
        body: "nitasoma → <b>sitasoma</b> (ich werde nicht lesen)<br>" +
              "sitasoma · hutasoma · hatasoma · hatutasoma · hamtasoma · hawatasoma<br>" +
              "Die einfachste Verneinung, die Swahili zu bieten hat." }
    ],
    vocab: ["jana", "kesho", "leo", "juzi", "kufika", "kuondoka", "kurudi", "kununua"],
    examples: [
      { sw: "Nilifika jana jioni.", de: "Ich bin gestern Abend angekommen.", gloss: "ni-li-fika" },
      { sw: "Tutaonana kesho.", de: "Wir sehen uns morgen.", gloss: "tu-ta-on-an-a — das -an- heißt „einander“" },
      { sw: "Sikununua chochote.", de: "Ich habe nichts gekauft.", gloss: "si-ku-nunua" },
      { sw: "Hatatarudi leo.", de: "Er/sie wird heute nicht zurückkommen.", gloss: "ha-ta-rudi" }
    ],
    culture: "<b>Kesho</b> ist in Tansania dehnbar. Wenn ein Handwerker „kesho“ sagt, kann das " +
             "morgen heißen — oder demnächst. Fragt lieber konkret nach: <b>Saa ngapi kesho?</b>",
    practice: [
      { instruction: "Nur ein Stück in der Mitte austauschen: aus -na- wird -li-.",
        q: "„ich las“", build: "ni + li + soma", a: "nilisoma",
        explain: "Mehr passiert nicht. Der Baukasten bleibt derselbe." },
      { instruction: "Jetzt verneint. Hier sitzt der einzige Stolperstein der Vergangenheit.",
        q: "Verneine „nilikwenda“ (ich ging)", build: "si + kw + enda", a: "sikwenda",
        explain: "Das -li- wird zu -ku-. Und weil enda mit einem Vokal beginnt, wird ku- zu kw-: sikwenda." },
      { instruction: "Zum Schluss die Zukunft — und ein Wort, mit dem du dich verabschieden kannst.",
        q: "„wir werden uns sehen“", build: "tu + ta + on + an + a", a: "tutaonana",
        explain: "Das -an- in der Mitte heißt „einander“. Tutaonana ist das übliche „bis bald“." }
    ],
    exercises: [
      { type: "translate", q: "ich ging / ich bin gegangen", a: "nilikwenda" },
      { type: "translate", q: "wir werden essen", a: "tutakula" },
      { type: "translate", q: "Ich habe nicht gelesen.", a: "Sikusoma" },
      { type: "choice", q: "Wie lautet die Verneinung von „alifika“ (er kam an)?",
        options: ["hafiki", "hakufika", "hatafika", "hajafika"], a: 1,
        why: "In der Vergangenheit wird -li- zu -ku-: a-li-fika → ha-ku-fika." },
      { type: "translate", q: "Sie (Plural) werden nicht kommen.", a: "Hawatakuja" },
      { type: "translate", q: "Wir sehen uns morgen.", a: "Tutaonana kesho" }
    ]
  },

  /* ============================ 7 ============================ */
  {
    id: "l07",
    title: "Nimefika — Perfekt und „noch nicht“",
    goal: "-me- für abgeschlossene Handlungen mit Gegenwartsbezug, -ja- für „noch nicht“.",
    mwalimu: [
      { sw: "Nimefika Dar. Nimechoka sana!", de: "Ich bin in Dar angekommen. Ich bin sehr müde!" },
      { sw: "", de: "<b>-me-</b> ist keine bloße Vergangenheit. Es beschreibt einen Zustand, der jetzt noch gilt. <i>Nimefika</i> heißt nicht „ich kam an“, sondern „ich bin da“." },
      { sw: "", de: "Und die Verneinung hat eine eigene Bedeutung: <b>-ja-</b> heißt nicht einfach „nicht“, sondern <b>„noch nicht“</b>. Das ist eine der elegantesten Stellen der Sprache." }
    ],
    grammar: [
      { h: "-me- = Perfekt / resultierender Zustand",
        body: "ni<b>me</b>fika = ich bin angekommen (und bin jetzt hier)<br>" +
              "ni<b>me</b>choka = ich bin müde geworden → <i>ich bin müde</i><br>" +
              "ni<b>me</b>elewa = ich habe verstanden<br>" +
              "a<b>me</b>lala = er/sie schläft (ist eingeschlafen)<br>" +
              "Einsilbige mit ku-: ni<b>meku</b>la (ich habe gegessen)." },
      { h: "-ja- = noch nicht",
        body: "nimekula → <b>sijala</b> (ich habe noch nicht gegessen)<br>" +
              "sijala · hujala · hajala · hatujala · hamjala · hawajala<br><br>" +
              "<b>Hajafika bado.</b> Er/sie ist noch nicht angekommen.<br>" +
              "<b>Sijaelewa.</b> Ich habe es noch nicht verstanden.<br>" +
              "Das Wörtchen <b>bado</b> („noch“) verstärkt das gern." },
      { h: "Der feine Unterschied",
        body: "<b>Sikula.</b> → Ich habe nicht gegessen. (Punkt, erledigt)<br>" +
              "<b>Sijala.</b> → Ich habe noch nicht gegessen. (aber ich werde)<br>" +
              "Im Deutschen braucht es ein Extrawort. Swahili baut es in die Vorsilbe ein." },
      { h: "Bonus: -mesha- für „schon“",
        body: "<b>Nimeshafika.</b> Ich bin schon angekommen.<br>" +
              "<b>Umeshakula?</b> Hast du schon gegessen?<br>" +
              "Das -sha- kommt von <i>kwisha</i> (beenden). Sehr gebräuchlich in Dar." }
    ],
    vocab: ["kufika", "kula", "kuelewa", "kulala", "bado", "kumaliza", "kuanza"],
    examples: [
      { sw: "Nimefika!", de: "Ich bin da!", gloss: "ni-me-fika" },
      { sw: "Umeshakula?", de: "Hast du schon gegessen?", gloss: "u-me-sha-ku-la" },
      { sw: "Bado sijala.", de: "Ich habe noch nicht gegessen.", gloss: "si-ja-la" },
      { sw: "Hajafika bado.", de: "Er/sie ist noch nicht da.", gloss: "ha-ja-fika" }
    ],
    culture: "<b>Umeshakula?</b> ist in Tansania eine echte Frage, keine Floskel — und oft " +
             "eine Einladung. Wenn ihr „bado“ antwortet, kann es gut sein, dass gleich ein " +
             "Teller vor euch steht.",
    practice: [
      { instruction: "-me- beschreibt einen Zustand, der jetzt noch gilt. Bau die Form.",
        q: "„ich bin angekommen“", build: "ni + me + fika", a: "nimefika",
        explain: "Nicht „ich kam an“, sondern „ich bin da“. Dieser Unterschied ist der Kern von -me-." },
      { instruction: "Jetzt verneint — und achte darauf, was das im Deutschen bedeutet.",
        q: "Verneine „nimekula“ (ich habe gegessen)", build: "si + ja + la", a: "sijala",
        explain: "sijala heißt nicht „ich habe nicht gegessen“, sondern „ich habe NOCH NICHT gegessen“. Das steckt in der Vorsilbe -ja-." },
      { instruction: "Dieselbe Vorsilbe in der dritten Person. Sehr nützlich, wenn man auf jemanden wartet.",
        q: "„er/sie ist noch nicht angekommen“", build: "ha + ja + fika", a: "hajafika",
        explain: "Oft mit bado verstärkt: Hajafika bado." }
    ],
    exercises: [
      { type: "translate", q: "Ich bin angekommen.", a: "Nimefika" },
      { type: "translate", q: "Ich habe noch nicht gegessen.", a: "Sijala" },
      { type: "choice", q: "Was ist der Unterschied zwischen „sikula“ und „sijala“?",
        options: ["Keiner, beide heißen dasselbe", "sikula = ich aß nicht; sijala = ich habe noch nicht gegessen",
                  "sikula ist Zukunft", "sijala ist höflicher"], a: 1,
        why: "-ku- verneint die abgeschlossene Vergangenheit, -ja- bedeutet „noch nicht“." },
      { type: "translate", q: "Hast du schon gegessen?", a: "Umeshakula" },
      { type: "translate", q: "Er/sie ist noch nicht angekommen.", a: "Hajafika" },
      { type: "translate", q: "Ich habe verstanden.", a: "Nimeelewa" }
    ]
  },

  /* ============================ 8 ============================ */
  {
    id: "l08",
    title: "Nyumba nzuri — Adjektive und Klasse 9/10",
    goal: "Adjektive korrekt angleichen und die große Klasse 9/10 beherrschen.",
    mwalimu: [
      { sw: "Nyumba yangu ni ndogo lakini nzuri.", de: "Mein Haus ist klein, aber schön." },
      { sw: "", de: "Klasse 9/10 ist die größte Gruppe überhaupt: fast alle Tiere, fast alle Lehnwörter und sehr viel Alltägliches. Ihr Trick: <b>Singular und Plural sehen gleich aus.</b> nyumba ist ein Haus und viele Häuser." },
      { sw: "", de: "Und eine gute Nachricht: Viele Adjektive kommen aus dem Arabischen und verändern sich überhaupt nicht. Die könnt ihr sofort benutzen." }
    ],
    grammar: [
      { h: "Klasse 9/10 — Singular = Plural",
        body: "<b>nyumba</b> Haus/Häuser · <b>simu</b> Handy/Handys · <b>meza</b> Tisch/Tische<br>" +
              "<b>ndizi</b> Banane/Bananen · <b>barabara</b> Straße/Straßen · <b>pesa</b> Geld<br>" +
              "Ob Singular oder Plural gemeint ist, zeigt nur das Verb:<br>" +
              "Nyumba <b>i</b>nauzwa. (Ein Haus wird verkauft.)<br>" +
              "Nyumba <b>zi</b>nauzwa. (Häuser werden verkauft.)" },
      { h: "Adjektivangleichung im Überblick",
        body: "mtu <b>m</b>zuri · watu <b>wa</b>zuri (Kl. 1/2)<br>" +
              "mti <b>m</b>zuri · miti <b>mi</b>zuri (Kl. 3/4)<br>" +
              "gari zuri · magari <b>ma</b>zuri (Kl. 5/6)<br>" +
              "kitu <b>ki</b>zuri · vitu <b>vi</b>zuri (Kl. 7/8)<br>" +
              "nyumba <b>n</b>zuri · nyumba <b>n</b>zuri (Kl. 9/10)" },
      { h: "Die Abkürzung: unveränderliche Adjektive",
        body: "Arabische Lehnwörter kongruieren nicht. Nie. Bei keiner Klasse:<br>" +
              "<b>safi</b> sauber · <b>rahisi</b> billig · <b>ghali</b> teuer · <b>tayari</b> fertig<br>" +
              "<b>muhimu</b> wichtig · <b>hodari</b> tüchtig · <b>bora</b> hervorragend · <b>hatari</b> gefährlich<br><br>" +
              "mtu safi · kitu safi · nyumba safi · magari safi — immer gleich.<br>" +
              "<i>Wenn ihr euch bei der Kongruenz unsicher seid, greift zu diesen.</i>" }
    ],
    vocab: ["nyumba", "meza", "simu", "-zuri", "-kubwa", "-dogo", "-pya", "safi", "ghali", "rahisi", "muhimu"],
    examples: [
      { sw: "Nyumba nzuri sana.", de: "Ein sehr schönes Haus.", gloss: "n-zuri, Kl. 9" },
      { sw: "Vitu vingi.", de: "Viele Dinge.", gloss: "vi-ingi → vingi" },
      { sw: "Chakula kitamu!", de: "Leckeres Essen!", gloss: "ki-tamu, Kl. 7" },
      { sw: "Gari hili ni ghali.", de: "Dieses Auto ist teuer.", gloss: "ghali bleibt unverändert" }
    ],
    culture: "<b>Safi!</b> ist in Dar auch ein Ausruf: „Top!“, „Perfekt!“. Auf <i>Mambo?</i> " +
             "könnt ihr jederzeit mit <i>Safi!</i> antworten.",
    practice: [
      { instruction: "Das Adjektiv nimmt die Vorsilbe des Nomens. Klasse 9 nimmt n-.",
        q: "„ein schönes Haus“", build: "nyumba + n- + zuri", a: "nyumba nzuri",
        explain: "nyumba gehört zu Klasse 9, darum nzuri." },
      { instruction: "Dasselbe Adjektiv, andere Klasse. Schau nur auf die Vorsilbe des Nomens.",
        q: "„gute Bücher“", build: "vitabu + vi- + zuri", a: "vitabu vizuri",
        explain: "vitabu ist Klasse 8, also vizuri. Das Adjektiv spiegelt immer das Nomen." },
      { instruction: "Und jetzt die Abkürzung: Dieses Adjektiv kommt aus dem Arabischen.",
        q: "„ein sauberes Zimmer“ (chumba, Kl. 7)", build: "chumba + safi", a: "chumba safi",
        explain: "safi verändert sich nie, bei keiner Klasse. Wenn du bei der Kongruenz unsicher bist, greif zu diesen Adjektiven." }
    ],
    exercises: [
      { type: "translate", q: "ein schönes Haus", a: "nyumba nzuri" },
      { type: "translate", q: "gute Bücher", a: "vitabu vizuri" },
      { type: "choice", q: "Welche Form ist richtig: „ein sauberes Zimmer“ (chumba, Kl. 7)?",
        options: ["chumba kisafi", "chumba safi", "chumba chasafi", "chumba visafi"], a: 1,
        why: "safi ist arabisch und verändert sich nie — unabhängig von der Klasse." },
      { type: "translate", q: "großes Auto (gari, Kl. 5)", a: "gari kubwa", hint: "Klasse 5 hat keine Adjektivvorsilbe." },
      { type: "translate", q: "Das Essen ist sehr lecker.", a: "Chakula ni kitamu sana" },
      { type: "choice", q: "Wie viele Häuser meint „nyumba“?",
        options: ["Immer eins", "Immer mehrere", "Eins oder mehrere — nur das Verb verrät es", "Kommt auf das Adjektiv an"], a: 2,
        why: "Klasse 9 und 10 sind formgleich. Die Zahl zeigt sich an der Subjektvorsilbe des Verbs (i- vs. zi-)." }
    ]
  },

  /* ============================ 9 ============================ */
  {
    id: "l09",
    title: "Changu na chako — Besitz ausdrücken",
    goal: "Possessivpronomen und das Verbindungs-a beherrschen.",
    mwalimu: [
      { sw: "Kitabu changu, nyumba yangu, watoto wangu.", de: "Mein Buch, mein Haus, meine Kinder." },
      { sw: "", de: "Dreimal „mein“ — dreimal eine andere Form. Aber keine Sorge: Der Stamm ist immer derselbe, nämlich <b>-angu</b>. Nur die Vorsilbe wechselt, und zwar nach der Klasse des <i>besessenen</i> Dings, nicht nach dem Besitzer." },
      { sw: "", de: "Das ist der Unterschied zum Deutschen. Bei uns richtet sich „mein/meine“ nach dem Ding. Im Swahili auch — nur dass es eben Klassen statt Geschlechter sind." }
    ],
    grammar: [
      { h: "Die sechs Stämme",
        body: "<b>-angu</b> mein · <b>-ako</b> dein · <b>-ake</b> sein/ihr<br>" +
              "<b>-etu</b> unser · <b>-enu</b> euer · <b>-ao</b> ihr (Plural)" },
      { h: "Die Vorsilbe kommt von der Klasse",
        body: "Kl. 1: mtoto <b>w</b>angu · Kl. 2: watoto <b>w</b>angu<br>" +
              "Kl. 3: mti <b>w</b>angu · Kl. 4: miti <b>y</b>angu<br>" +
              "Kl. 5: gari <b>l</b>angu · Kl. 6: magari <b>y</b>angu<br>" +
              "Kl. 7: kitabu <b>ch</b>angu · Kl. 8: vitabu <b>vy</b>angu<br>" +
              "Kl. 9: nyumba <b>y</b>angu · Kl. 10: nyumba <b>z</b>angu" },
      { h: "Das Verbindungs-a (Genitiv)",
        body: "„X von Y“ wird mit einem kleinen <b>-a</b> gebaut, das dieselbe Vorsilbe trägt:<br>" +
              "kitabu <b>cha</b> mwalimu = das Buch des Lehrers<br>" +
              "nyumba <b>ya</b> baba = Vaters Haus<br>" +
              "watoto <b>wa</b> shule = Schulkinder<br>" +
              "magari <b>ya</b> polisi = Polizeiautos<br>" +
              "uwanja <b>wa</b> ndege = Flughafen (Feld der Flugzeuge)" },
      { h: "Familienmitglieder verschmelzen",
        body: "Bei nahen Verwandten wird zusammengezogen:<br>" +
              "<b>mwanangu</b> mein Kind · <b>mwenzangu</b> mein Gefährte<br>" +
              "<b>mama yangu</b> meine Mutter · <b>baba yako</b> dein Vater" }
    ],
    vocab: ["kitabu", "nyumba", "gari", "mtoto", "mama", "baba", "rafiki", "mpenzi"],
    examples: [
      { sw: "Hii ni nyumba yetu.", de: "Das ist unser Haus.", gloss: "y-etu, Kl. 9" },
      { sw: "Vitabu vyangu viko wapi?", de: "Wo sind meine Bücher?", gloss: "vy-angu, Kl. 8" },
      { sw: "Rafiki yangu anatoka Arusha.", de: "Mein Freund kommt aus Arusha.", gloss: "rafiki ist Kl. 9 → yangu" },
      { sw: "Gari la mwalimu ni jeupe.", de: "Das Auto des Lehrers ist weiß.", gloss: "l-a, Kl. 5" }
    ],
    culture: "<b>Mpenzi wangu</b> heißt „mein Schatz“. Unter Freunden hört ihr eher " +
             "<b>rafiki yangu</b> oder das sehr gebräuchliche <b>mwenzangu</b> („mein Gefährte“).",
    practice: [
      { instruction: "Die Vorsilbe richtet sich nach dem besessenen Ding, nicht nach dir. Klasse 7 nimmt ch-.",
        q: "„mein Buch“", build: "kitabu + ch- + angu", a: "kitabu changu",
        explain: "kitabu ist Klasse 7, also changu. Der Stamm -angu bleibt dabei immer gleich." },
      { instruction: "Anderes Ding, andere Klasse — derselbe Gedankengang.",
        q: "„unser Haus“", build: "nyumba + y- + etu", a: "nyumba yetu",
        explain: "nyumba ist Klasse 9, also yetu." },
      { instruction: "Zum Schluss der Genitiv. Das kleine -a trägt dieselbe Vorsilbe.",
        q: "„das Buch des Lehrers“", build: "kitabu + cha + mwalimu", a: "kitabu cha mwalimu",
        explain: "Klasse 7 nimmt cha. Bei nyumba wäre es ya, bei watoto wa." }
    ],
    exercises: [
      { type: "translate", q: "mein Buch (kitabu, Kl. 7)", a: "kitabu changu" },
      { type: "translate", q: "unser Haus (nyumba, Kl. 9)", a: "nyumba yetu" },
      { type: "translate", q: "meine Kinder (watoto, Kl. 2)", a: "watoto wangu" },
      { type: "choice", q: "„das Buch des Lehrers“ heißt …",
        options: ["kitabu wa mwalimu", "kitabu cha mwalimu", "kitabu ya mwalimu", "kitabu la mwalimu"], a: 1,
        why: "kitabu ist Klasse 7 — und Klasse 7 nimmt cha-." },
      { type: "translate", q: "meine Bücher", a: "vitabu vyangu" },
      { type: "choice", q: "Wonach richtet sich die Vorsilbe bei -angu?",
        options: ["Nach dem Besitzer", "Nach der Klasse des besessenen Dings", "Nach dem Verb", "Sie ist immer gleich"], a: 1,
        why: "Immer nach dem Ding, das besessen wird: kitabu changu, aber nyumba yangu." }
    ]
  },

  /* ============================ 10 ============================ */
  {
    id: "l10",
    title: "Namba na bei — Zahlen und der Markt",
    goal: "Zählen, nach Preisen fragen und handeln.",
    mwalimu: [
      { sw: "Sokoni lazima ujue namba. Vinginevyo utalipa bei ya mzungu!", de: "Auf dem Markt musst du Zahlen können. Sonst zahlst du den Mzungu-Preis!" },
      { sw: "", de: "Das ist ernst gemeint und freundlich zugleich. Wer auf dem Kariakoo-Markt auf Swahili nach dem Preis fragt, zahlt schlicht weniger. Es ist die Investition, die sich am schnellsten auszahlt." }
    ],
    grammar: [
      { h: "Eins bis zehn",
        body: "<b>moja</b> 1 · <b>mbili</b> 2 · <b>tatu</b> 3 · <b>nne</b> 4 · <b>tano</b> 5<br>" +
              "<b>sita</b> 6 · <b>saba</b> 7 · <b>nane</b> 8 · <b>tisa</b> 9 · <b>kumi</b> 10" },
      { h: "Weiterzählen ist reine Addition",
        body: "11 = kumi <b>na</b> moja · 12 = kumi na mbili · 20 = <b>ishirini</b><br>" +
              "25 = ishirini na tano · 30 = thelathini · 40 = arobaini · 50 = hamsini<br>" +
              "100 = <b>mia</b> moja · 200 = mia mbili · 1000 = <b>elfu</b> moja<br>" +
              "5000 = elfu tano" },
      { h: "Nur manche Zahlen kongruieren",
        body: "Die Bantu-Zahlen 1, 2, 3, 4, 5 und 8 nehmen die Klassenvorsilbe:<br>" +
              "watu <b>wa</b>wili (zwei Menschen) · vitu <b>vi</b>wili · nyumba mbili<br>" +
              "watu <b>wa</b>tatu · vitabu <b>vi</b>tatu<br><br>" +
              "Die arabischen Zahlen 6, 7, 9, 10 bleiben unverändert:<br>" +
              "watu sita · vitu sita · nyumba sita — immer gleich." },
      { h: "Auf dem Markt",
        body: "<b>Bei gani?</b> Was kostet das?<br>" +
              "<b>Shilingi ngapi?</b> Wie viele Schilling?<br>" +
              "<b>Ghali sana!</b> Viel zu teuer!<br>" +
              "<b>Punguza kidogo.</b> Mach ein bisschen runter.<br>" +
              "<b>Nipe bei ya mwisho.</b> Gib mir deinen letzten Preis.<br>" +
              "<b>Nitalipa elfu tatu.</b> Ich zahle 3000." }
    ],
    vocab: ["moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa", "kumi",
            "mia", "elfu", "bei", "shilingi", "pesa", "Bei gani?", "Punguza bei", "ghali", "soko"],
    examples: [
      { sw: "Ndizi bei gani?", de: "Was kosten die Bananen?", gloss: "Wörtlich: Bananen Preis welcher?" },
      { sw: "Shilingi elfu mbili.", de: "2000 Schilling.", gloss: "elfu mbili = zwei Tausend" },
      { sw: "Aa, ghali sana! Punguza kidogo.", de: "Ach, viel zu teuer! Mach ein bisschen runter.", gloss: "Der normale Anfang jeder Verhandlung" },
      { sw: "Nina watoto wawili.", de: "Ich habe zwei Kinder.", gloss: "wa-wili, kongruiert mit watoto" }
    ],
    culture: "Handeln ist auf Märkten wie Kariakoo erwartet, im Supermarkt und bei " +
             "Festpreisschildern nicht. Faustregel: Der erste Preis an einen Mzungu liegt " +
             "oft beim Doppelten. Freundlich bleiben, lachen, langsam runterhandeln — " +
             "wer wütend wird, verliert.",
    practice: [
      { instruction: "Diese Zahl kongruiert — sie nimmt die Vorsilbe des Nomens.",
        q: "„zwei Menschen“", build: "watu + wa- + wili", a: "watu wawili",
        explain: "mbili wird zu wawili, weil watu zu Klasse 2 gehört. Bei Dingen hieße es vitu viwili." },
      { instruction: "Und diese Zahl kongruiert nicht. Sie kommt aus dem Arabischen.",
        q: "„sechs Menschen“", build: "watu + sita", a: "watu sita",
        explain: "6, 7, 9 und 10 bleiben unverändert. Nur 1, 2, 3, 4, 5 und 8 nehmen die Vorsilbe." },
      { instruction: "Jetzt ein Preis, wie du ihn auf dem Markt hören wirst.",
        q: "„2000 Schilling“", build: "shilingi + elfu + mbili", a: "shilingi elfu mbili",
        explain: "elfu heißt tausend, die Zahl steht dahinter: elfu mbili = zwei Tausend." }
    ],
    exercises: [
      { type: "translate", q: "Was kostet das? (wörtl. Preis welcher?)", a: "Bei gani" },
      { type: "translate", q: "zweitausend", a: "elfu mbili" },
      { type: "translate", q: "zwei Kinder", a: "watoto wawili", hint: "mbili kongruiert: wa- für Klasse 2." },
      { type: "choice", q: "Wie heißt „sechs Menschen“?",
        options: ["watu wasita", "watu sita", "watu wowote", "watu masita"], a: 1,
        why: "sita ist arabisch und kongruiert nicht — im Gegensatz zu mbili, tatu, nne, tano, nane." },
      { type: "translate", q: "Viel zu teuer!", a: "Ghali sana" },
      { type: "translate", q: "fünfundzwanzig", a: "ishirini na tano" }
    ]
  },

  /* ============================ 11 ============================ */
  {
    id: "l11",
    title: "Saa ngapi? — Die Swahili-Uhr",
    goal: "Die um sechs Stunden verschobene Zeitrechnung verstehen und verwenden.",
    mwalimu: [
      { sw: "Tutaonana saa tatu asubuhi.", de: "Wir sehen uns um … neun Uhr morgens." },
      { sw: "", de: "Habt ihr gestutzt? <i>Saa tatu</i> heißt wörtlich „Stunde drei“ — gemeint ist aber 9 Uhr. Das ist die wichtigste Lektion dieses Kurses für euren Alltag, und die meisten Apps erwähnen sie nie." },
      { sw: "", de: "Der Grund ist einfach: Am Äquator geht die Sonne das ganze Jahr gegen 6 Uhr auf. Also beginnt der Tag dort — und die erste Stunde des Tages ist 7 Uhr. <b>Rechnet immer sechs Stunden dazu oder ab.</b>" }
    ],
    grammar: [
      { h: "Die Umrechnung",
        body: "<table class='tbl'><tr><th>Swahili</th><th>Unsere Uhr</th></tr>" +
              "<tr><td>saa moja asubuhi</td><td>7:00</td></tr>" +
              "<tr><td>saa mbili asubuhi</td><td>8:00</td></tr>" +
              "<tr><td>saa tatu asubuhi</td><td>9:00</td></tr>" +
              "<tr><td>saa nne asubuhi</td><td>10:00</td></tr>" +
              "<tr><td>saa tano asubuhi</td><td>11:00</td></tr>" +
              "<tr><td>saa sita mchana</td><td>12:00 (Mittag)</td></tr>" +
              "<tr><td>saa saba mchana</td><td>13:00</td></tr>" +
              "<tr><td>saa nane mchana</td><td>14:00</td></tr>" +
              "<tr><td>saa kumi jioni</td><td>16:00</td></tr>" +
              "<tr><td>saa kumi na mbili jioni</td><td>18:00</td></tr>" +
              "<tr><td>saa moja usiku</td><td>19:00</td></tr>" +
              "<tr><td>saa sita usiku</td><td>24:00 (Mitternacht)</td></tr></table>" },
      { h: "Die Tageszeit muss dazu",
        body: "Weil die Zahl allein zweideutig ist, hängt man immer an:<br>" +
              "<b>asubuhi</b> morgens (ca. 7–12) · <b>mchana</b> mittags/nachmittags (12–16)<br>" +
              "<b>jioni</b> abends (16–19) · <b>usiku</b> nachts (19–7)<br>" +
              "<b>alfajiri</b> Morgendämmerung (ca. 4–6)" },
      { h: "Minuten",
        body: "<b>saa tatu na robo</b> = viertel nach (9:15)<br>" +
              "<b>saa tatu na nusu</b> = halb (9:30)<br>" +
              "<b>saa tatu kasorobo</b> = viertel vor (8:45)<br>" +
              "<b>saa tatu na dakika kumi</b> = 9:10" },
      { h: "Die Notbremse",
        body: "Wenn ihr unsicher seid, fragt nach: <b>Saa ngapi kwa saa ya Ulaya?</b> " +
              "(Wie viel Uhr nach europäischer Zeit?) Das versteht in Dar jeder, " +
              "und es erspart verpasste Termine." }
    ],
    vocab: ["saa", "Saa ngapi?", "asubuhi", "mchana", "jioni", "usiku", "alfajiri", "dakika", "leo", "kesho"],
    examples: [
      { sw: "Saa ngapi sasa?", de: "Wie spät ist es jetzt?", gloss: "wörtl.: Stunde wie viele jetzt?" },
      { sw: "Saa nne asubuhi.", de: "Zehn Uhr morgens.", gloss: "4 + 6 = 10" },
      { sw: "Basi linaondoka saa mbili asubuhi.", de: "Der Bus fährt um acht Uhr morgens ab.", gloss: "2 + 6 = 8" },
      { sw: "Tutakutana saa kumi na mbili jioni.", de: "Wir treffen uns um 18 Uhr.", gloss: "12 + 6 = 18" }
    ],
    culture: "In Behörden, Fahrplänen und im Fernsehen wird oft die internationale Zeit " +
             "benutzt, im Gespräch fast immer die Swahili-Zeit. Wenn jemand einen Termin " +
             "nennt, der unmöglich klingt, ist meist die Swahili-Uhr gemeint.",
    practice: [
      { instruction: "Rechne um: unsere Uhrzeit minus sechs ergibt die Swahili-Stunde. Und vergiss die Tageszeit nicht.",
        q: "„9 Uhr morgens“ auf Swahili", build: "9 − 6 = 3  →  saa ___ asubuhi", a: "saa tatu asubuhi",
        explain: "9 minus 6 ist 3, also saa tatu. Das asubuhi ist Pflicht, sonst bleibt die Zeit zweideutig." },
      { instruction: "Jetzt andersherum. Jemand nennt dir eine Zeit — wann ist das bei uns?",
        q: "„saa nane mchana“ ist wie viel Uhr?", build: "8 plus 6 = ?", a: "14 Uhr, 14, 14:00, zwei Uhr nachmittags",
        explain: "8 plus 6 ist 14. Wenn dir jemand in Dar „saa nane“ nennt, ist 14 Uhr gemeint." },
      { instruction: "Noch eine Umrechnung — diese kommt beim Verabreden ständig vor.",
        q: "„18 Uhr“ auf Swahili", build: "18 − 6 = 12  →  saa ___ jioni", a: "saa kumi na mbili jioni",
        explain: "12 heißt kumi na mbili. 18 Uhr ist die zwölfte und letzte Stunde des Swahili-Tages." }
    ],
    exercises: [
      { type: "choice", q: "Jemand sagt „saa tatu asubuhi“. Wann ist das?",
        options: ["3 Uhr morgens", "9 Uhr morgens", "15 Uhr", "13 Uhr"], a: 1,
        why: "Zur Swahili-Stunde immer 6 addieren: 3 + 6 = 9 Uhr." },
      { type: "choice", q: "Wie sagt man „14 Uhr“ auf Swahili?",
        options: ["saa kumi na nne", "saa nane mchana", "saa mbili mchana", "saa saba jioni"], a: 1,
        why: "14 − 6 = 8, also saa nane. Dazu die Tageszeit mchana." },
      { type: "translate", q: "Wie spät ist es?", a: "Saa ngapi" },
      { type: "choice", q: "„saa sita mchana“ ist …",
        options: ["6 Uhr morgens", "12 Uhr mittags", "18 Uhr", "6 Uhr abends"], a: 1,
        why: "6 + 6 = 12. Mittag ist im Swahili die sechste Stunde des Tages." },
      { type: "translate", q: "sieben Uhr morgens (Swahili-Zeit)", a: "saa moja asubuhi",
        hint: "7 − 6 = 1 — die erste Stunde des Tages." }
    ]
  },

  /* ============================ 12 ============================ */
  {
    id: "l12",
    title: "Sokoni — Orte und der Alltag in Dar",
    goal: "Mit -ni Ortsangaben bilden und sich in der Stadt zurechtfinden.",
    mwalimu: [
      { sw: "Uko wapi? — Niko nyumbani. Ninakwenda sokoni.", de: "Wo bist du? — Ich bin zu Hause. Ich gehe zum Markt." },
      { sw: "", de: "Zum Abschluss ein Werkzeug, das euch täglich begegnet: die Endung <b>-ni</b>. Sie hängt sich ans Nomen und macht daraus eine Ortsangabe — je nach Zusammenhang „in“, „an“, „zu“ oder „nach“." },
      { sw: "", de: "Hongera! Ihr habt jetzt das Grundgerüst. Alles Weitere sind Erweiterungen dieses Systems. Sasa, tuanze kufanya mazoezi — jetzt lasst uns üben." }
    ],
    grammar: [
      { h: "Die Ortsendung -ni",
        body: "nyumba → <b>nyumbani</b> zu Hause, nach Hause<br>" +
              "soko → <b>sokoni</b> auf dem Markt, zum Markt<br>" +
              "kazi → <b>kazini</b> bei der Arbeit, zur Arbeit<br>" +
              "shule → <b>shuleni</b> in der Schule<br>" +
              "mji → <b>mjini</b> in der Stadt<br>" +
              "duka → <b>dukani</b> im Laden<br>" +
              "Achtung: Bei Eigennamen und ein paar Wörtern geht das nicht — " +
              "man sagt <i>Dar es Salaam</i>, nicht *Dar es Salaamni." },
      { h: "„sich befinden“ — die -ko-Formen",
        body: "Für Ortsangaben braucht es ein besonderes Verb:<br>" +
              "<b>niko</b> ich bin (da) · <b>uko</b> du bist · <b>yuko</b> er/sie ist<br>" +
              "<b>tuko</b> wir sind · <b>mko</b> ihr seid · <b>wako</b> sie sind<br><br>" +
              "<b>Uko wapi?</b> Wo bist du?<br>" +
              "<b>Niko njiani.</b> Ich bin unterwegs.<br>" +
              "Verneint: <b>siko, huko, hayuko, hatuko, hamko, hawako</b>." },
      { h: "„haben“ — kuwa na",
        body: "Ebenfalls unregelmäßig und täglich gebraucht:<br>" +
              "<b>nina</b> ich habe · <b>una</b> du hast · <b>ana</b> er/sie hat<br>" +
              "<b>tuna</b> wir haben · <b>mna</b> ihr habt · <b>wana</b> sie haben<br>" +
              "Verneint: <b>sina, huna, hana, hatuna, hamna, hawana</b><br>" +
              "<b>Nina njaa.</b> Ich habe Hunger. <b>Nina kiu.</b> Ich habe Durst." },
      { h: "Unterwegs in Dar",
        body: "<b>Daladala hii inakwenda wapi?</b> Wohin fährt dieser Minibus?<br>" +
              "<b>Inakwenda Posta.</b> Er fährt nach Posta. (zentraler Knotenpunkt)<br>" +
              "<b>Shusha hapa, tafadhali.</b> Lass mich bitte hier raus.<br>" +
              "<b>Nauli ni ngapi?</b> Wie viel kostet die Fahrt?<br>" +
              "<b>Nipeleke Kariakoo.</b> Bring mich nach Kariakoo." }
    ],
    vocab: ["nyumba", "soko", "kazi", "shule", "duka", "daladala", "bajaji", "bodaboda",
            "stendi", "barabara", "wapi", "Shusha hapa", "mji"],
    examples: [
      { sw: "Niko nyumbani.", de: "Ich bin zu Hause.", gloss: "ni-ko + nyumba-ni" },
      { sw: "Anakwenda kazini.", de: "Er/sie geht zur Arbeit.", gloss: "kazi-ni" },
      { sw: "Tuko sokoni sasa.", de: "Wir sind jetzt auf dem Markt.", gloss: "tu-ko + soko-ni" },
      { sw: "Nina njaa sana.", de: "Ich habe großen Hunger.", gloss: "nina = ich habe" },
      { sw: "Daladala inakwenda wapi?", de: "Wohin fährt der Minibus?", gloss: "i-na-kw-enda — Kl. 9, darum i-" }
    ],
    culture: "Daladala haben keine Haltestellen im engen Sinn — man winkt sie heran und ruft " +
             "das Ziel. Der Schaffner (<i>konda</i>) ruft es aus dem Fenster. Zum Aussteigen " +
             "klopft man ans Dach oder ruft <b>Shusha!</b>",
    practice: [
      { instruction: "Häng die Ortsendung an. Mehr ist es nicht.",
        q: "„auf dem Markt“ (von soko)", build: "soko + -ni", a: "sokoni",
        explain: "Genauso: kazi → kazini, shule → shuleni, nyumba → nyumbani." },
      { instruction: "Jetzt mit dem Verb für „sich befinden“. Das ist nicht ni, sondern eine eigene Form.",
        q: "„Ich bin zu Hause.“", build: "ni + ko + nyumbani", a: "Niko nyumbani",
        explain: "niko, uko, yuko, tuko, mko, wako. Für Ortsangaben nimmt man nie ni." },
      { instruction: "Zum Abschluss die Frage, die du im Daladala brauchst. Achtung bei der Vorsilbe — ein Bus ist keine Person.",
        q: "„Wohin fährt der Daladala?“", build: "daladala + i + na + kw + enda + wapi", a: "Daladala inakwenda wapi",
        explain: "daladala gehört zu Klasse 9, also i- und nicht a-. Ein Ding bekommt nie die Personenvorsilbe." }
    ],
    exercises: [
      { type: "translate", q: "zu Hause (von nyumba)", a: "nyumbani" },
      { type: "translate", q: "auf dem Markt (von soko)", a: "sokoni" },
      { type: "translate", q: "Wo bist du?", a: "Uko wapi" },
      { type: "translate", q: "Ich bin zu Hause.", a: "Niko nyumbani" },
      { type: "translate", q: "Ich habe Hunger.", a: "Nina njaa" },
      { type: "choice", q: "Wie fragt man im Daladala: „Wohin fährt er?“",
        options: ["Unakwenda wapi?", "Inakwenda wapi?", "Anakwenda wapi?", "Zinakwenda wapi?"], a: 1,
        why: "Daladala gehört zu Klasse 9 — die Subjektvorsilbe ist i-, nicht a- (das wäre eine Person)." },
      { type: "translate", q: "Lass mich hier raus. (2 Wörter)", a: "Shusha hapa" }
    ]
  }
];
