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
  },

  /* ============================ 13 ============================ */
  {
    id: "l13",
    title: "Ninakupikia — etwas für jemanden tun",
    goal: "Mit der Endung -ia/-ea sagen, für wen oder wozu etwas geschieht.",
    mwalimu: [
      { sw: "Karibu tena. Ninakupikia chakula.", de: "Willkommen zurück. Ich koche dir Essen." },
      { sw: "", de: "Ihr habt das Grundgerüst. Jetzt kommt das, was Swahili wirklich mächtig macht: die <b>Verberweiterungen</b>. Man hängt eine Silbe an den Stamm — und das Verb bedeutet etwas Neues." },
      { sw: "", de: "Wir fangen mit der nützlichsten an. Im Deutschen sagt ihr „für dich“ als eigenes Wort. Im Swahili steckt das <b>im Verb</b>: kupika = kochen, <b>kupikia</b> = für jemanden kochen." }
    ],
    grammar: [
      { h: "Die Anwendungsform: -ia oder -ea",
        body: "Vor das End-a kommt <b>-i-</b> oder <b>-e-</b>. Was davon, entscheidet der " +
              "Vokal <b>direkt vor dem End-a</b>:<br><br>" +
              "a, i, u → <b>-ia</b>:<br>" +
              "kupik<b>a</b> → kupik<b>ia</b> · kuandik<b>a</b> → kuandik<b>ia</b> · kulip<b>a</b> → kulip<b>ia</b><br><br>" +
              "e, o → <b>-ea</b>:<br>" +
              "kul<b>e</b>ta → kulet<b>ea</b> · kus<b>o</b>ma → kusom<b>ea</b><br><br>" +
              "Bei <i>kuleta</i> zählt also das <b>e</b>, nicht das End-a." },
      { h: "Stämme, die auf einen Vokal enden: -lia / -lea",
        body: "Endet der Stamm selbst auf einen Vokal, schiebt sich ein <b>-l-</b> dazwischen:<br>" +
              "kununu<b>a</b> → kununu<b>lia</b><br>" +
              "kufungu<b>a</b> → kufungu<b>lia</b><br>" +
              "kut<b>oa</b> → kuto<b>lea</b><br>" +
              "Ohne das -l- ließen sich die Vokale nicht auseinanderhalten." },
      { h: "Für wen? Das steht als Objekt im Verb",
        body: "Die Anwendungsform allein sagt nur, <i>dass</i> es für jemanden ist. " +
              "<b>Wer</b> das ist, steckt im Objektinfix — genau dort, wo ihr es schon kennt:<br><br>" +
              "ni-na-<b>ku</b>-pikia = ich koche <b>für dich</b><br>" +
              "a-me-<b>ni</b>-letea = er/sie hat <b>mir</b> gebracht<br>" +
              "tu-ta-<b>wa</b>-nunulia = wir werden <b>für sie</b> kaufen<br><br>" +
              "Ohne Objekt klingt es unvollständig — so wie „ich koche für“ im Deutschen." },
      { h: "Nicht nur „für wen“, auch „wozu“",
        body: "<b>Nitakulipia nauli.</b> Ich bezahle dir die Fahrt. (kulipa → kulipia)<br>" +
              "<b>Ninasomea mtihani.</b> Ich lerne für die Prüfung.<br>" +
              "<b>Nipunguzie bei.</b> Mach mir den Preis billiger. — der Satz in Kariakoo." }
    ],
    vocab: ["kupikia", "kuletea", "kununulia", "kuandikia", "kuuzia", "kulipia",
            "kupika", "kuleta", "kununua", "kuandika"],
    examples: [
      { sw: "Ninakupikia chakula.", de: "Ich koche dir Essen.", gloss: "ni-na-ku-pik-ia" },
      { sw: "Ameniletea maji.", de: "Er/sie hat mir Wasser gebracht.", gloss: "a-me-ni-let-ea" },
      { sw: "Nitakununulia matunda.", de: "Ich werde dir Obst kaufen.", gloss: "ni-ta-ku-nunu-lia" },
      { sw: "Ananiandikia barua.", de: "Er/sie schreibt mir einen Brief.", gloss: "a-na-ni-andik-ia" },
      { sw: "Nitakulipia nauli.", de: "Ich bezahle dir die Fahrt.", gloss: "kulipa → kulipia" }
    ],
    culture: "Im Laden und im Daladala hört ihr die Anwendungsform ständig: <b>Nipunguzie bei</b> " +
             "(mach mir den Preis billiger), <b>Nifungulie mlango</b> (mach mir die Tür auf), " +
             "<b>Nipe</b> (gib mir). Wer sie beherrscht, klingt sofort weniger nach Lehrbuch.",
    practice: [
      { instruction: "Häng die Anwendungsform an. Schau auf den Vokal direkt vor dem End-a: i heißt -ia.",
        q: "„für jemanden kochen“ (Grundform von kupika)", build: "ku + pik + ia", a: "kupikia",
        explain: "Vor dem End-a steht i, also -ia. Genauso kuandika → kuandikia, kulipa → kulipia." },
      { instruction: "Jetzt komplett. Denk an das Objektinfix — wer bekommt das Essen?",
        q: "„Ich koche für dich.“ (ein Wort)", build: "ni + na + ku + pik + ia", a: "Ninakupikia",
        explain: "ku- ist „dich“. Ohne das Objekt bliebe offen, für wen gekocht wird." },
      { instruction: "Diesmal mit e-Vokal und im Perfekt. kuleta hat vor dem End-a ein e.",
        q: "„Er hat mir Wasser gebracht.“ (2 Wörter)", build: "a + me + ni + let + ea + maji",
        a: "Ameniletea maji",
        explain: "kuleta → kuletea, weil vor dem End-a ein e steht. ni- = mir." }
    ],
    exercises: [
      { type: "translate", q: "Ich koche für dich. (ein Wort)", a: "Ninakupikia" },
      { type: "translate", q: "Grundform: „jemandem bringen“ (von kuleta)", a: "kuletea" },
      { type: "choice", q: "Welche Anwendungsform hat kusoma?",
        options: ["kusomia", "kusomea", "kusomlia", "kusomwa"], a: 1,
        why: "Vor dem End-a steht o — also -ea. Nur bei a, i, u wird es -ia." },
      { type: "choice", q: "kununua endet auf einen Vokal. Wie lautet die Anwendungsform?",
        options: ["kununuia", "kununulia", "kununuea", "kununuwa"], a: 1,
        why: "Stämme auf Vokal schieben ein -l- ein: -lia bzw. -lea." },
      { type: "translate", q: "Er hat mir Wasser gebracht. (2 Wörter)", a: "Ameniletea maji" },
      { type: "translate", q: "Ich werde für dich bezahlen. (ein Wort)", a: "Nitakulipia" }
    ]
  },

  /* ============================ 14 ============================ */
  {
    id: "l14",
    title: "Chakula kimepikwa — das Passiv",
    goal: "Mit -wa sagen, dass etwas getan wird, ohne zu nennen, wer es tut.",
    mwalimu: [
      { sw: "Chakula kimepikwa. Karibu chakula!", de: "Das Essen ist gekocht. Guten Appetit!" },
      { sw: "", de: "Die zweite Erweiterung dreht den Satz um. Nicht mehr: <i>jemand kocht das Essen</i>, sondern: <i>das Essen wird gekocht</i>. Dafür kommt ein <b>-w-</b> vor das End-a." },
      { sw: "", de: "Und jetzt eine kleine Überraschung: Dieses Passiv benutzt ihr seit Lektion 2, ohne es zu wissen. <b>Ninaitwa Cedric</b> heißt wörtlich „ich <b>werde genannt</b> Cedric“." }
    ],
    grammar: [
      { h: "Die Passivform: -wa vor dem End-a",
        body: "kupik<b>a</b> → kupik<b>wa</b> gekocht werden<br>" +
              "kuandik<b>a</b> → kuandik<b>wa</b> geschrieben werden<br>" +
              "kuuz<b>a</b> → kuuz<b>wa</b> verkauft werden<br>" +
              "kufany<b>a</b> → kufany<b>wa</b> gemacht werden<br>" +
              "kupend<b>a</b> → kupend<b>wa</b> geliebt werden<br><br>" +
              "Der Rest des Verbs bleibt, wie ihr ihn kennt: Subjekt, Zeit, Stamm." },
      { h: "Stämme auf Vokal: -liwa / -lewa",
        body: "Dasselbe -l- wie bei der Anwendungsform:<br>" +
              "kununu<b>a</b> → kununu<b>liwa</b><br>" +
              "kut<b>oa</b> → kuto<b>lewa</b><br>" +
              "kul<b>a</b> → ku<b>liwa</b> (gegessen werden)<br>" +
              "kunyw<b>a</b> → kunyw<b>ewa</b> (getrunken werden)" },
      { h: "Wer es tut, kommt mit na",
        body: "Soll der Täter doch genannt werden, hängt man ihn mit <b>na</b> an:<br>" +
              "<b>Chakula kinapikwa na mama.</b> Das Essen wird von Mama gekocht.<br>" +
              "<b>Barua iliandikwa na Amani.</b> Der Brief wurde von Amani geschrieben.<br><br>" +
              "Meistens lässt man ihn aber weg — genau dafür gibt es das Passiv." },
      { h: "Zwei Passive, die ihr längst benutzt",
        body: "<b>Ninaitwa Cedric.</b> Ich heiße Cedric. — kuita (rufen, nennen) → kuitwa<br>" +
              "<b>Nilizaliwa mwaka 1995.</b> Ich wurde 1995 geboren. — kuzaa (gebären) → kuzaliwa<br><br>" +
              "Im Swahili gibt es kein eigenes Wort für „heißen“. Man <i>wird genannt</i>." }
    ],
    vocab: ["kuitwa", "kuzaliwa", "kufanywa", "kuuzwa", "kuandikwa", "kupikwa",
            "kufanya", "kuuza"],
    examples: [
      { sw: "Chakula kimepikwa.", de: "Das Essen ist gekocht.", gloss: "ki-me-pik-wa — Kl. 7, darum ki-" },
      { sw: "Ninaitwa Amani.", de: "Ich heiße Amani.", gloss: "wörtlich: ich werde genannt" },
      { sw: "Nilizaliwa Dar es Salaam.", de: "Ich wurde in Dar es Salaam geboren.", gloss: "ni-li-zali-wa" },
      { sw: "Samaki wanauzwa sokoni.", de: "Fisch wird auf dem Markt verkauft.", gloss: "wa-na-uz-wa" },
      { sw: "Barua iliandikwa na Amani.", de: "Der Brief wurde von Amani geschrieben.", gloss: "na = von" }
    ],
    culture: "Auf Schildern und in Ansagen steht fast alles im Passiv: <b>Hapa hapavutwi sigara</b> " +
             "(hier wird nicht geraucht), <b>Imefungwa</b> (geschlossen), <b>Inauzwa</b> (zu verkaufen). " +
             "Wer das Passiv erkennt, liest Dar es Salaam plötzlich mit.",
    practice: [
      { instruction: "Setz ein -w- vor das End-a. Mehr ist es nicht.",
        q: "„gekocht werden“ (Grundform von kupika)", build: "ku + pik + wa", a: "kupikwa",
        explain: "Genauso kuandika → kuandikwa, kuuza → kuuzwa." },
      { instruction: "Jetzt im Satz. chakula gehört zu Klasse 7 — die Vorsilbe ist ki-.",
        q: "„Das Essen ist gekocht.“ (2 Wörter)", build: "chakula + ki + me + pik + wa",
        a: "Chakula kimepikwa",
        explain: "ki- für Klasse 7, -me- für das Perfekt: es ist fertig und das Ergebnis zählt." },
      { instruction: "Und der Satz, den du seit Lektion 2 sagst — jetzt weißt du, warum er so aussieht.",
        q: "„Ich heiße Cedric.“ (2 Wörter)", build: "ni + na + it + wa + Cedric", a: "Ninaitwa Cedric",
        explain: "kuita = rufen, nennen. Ninaitwa = ich werde genannt. Ein Passiv, mitten im Alltag." }
    ],
    exercises: [
      { type: "translate", q: "Grundform: „verkauft werden“ (von kuuza)", a: "kuuzwa" },
      { type: "translate", q: "Das Essen ist gekocht. (2 Wörter)", a: "Chakula kimepikwa" },
      { type: "choice", q: "Warum heißt „ich heiße“ auf Swahili Ninaitwa?",
        options: ["Weil es ein besonderes Verb für Namen gibt",
                  "Weil es wörtlich „ich werde genannt“ heißt — ein Passiv",
                  "Weil kuita unregelmäßig ist",
                  "Weil der Name immer Objekt ist"], a: 1,
        why: "kuita = rufen, nennen. Das Passiv kuitwa = genannt werden. Ein eigenes Wort für „heißen“ gibt es nicht." },
      { type: "choice", q: "kula endet auf einen Vokal. Wie lautet das Passiv?",
        options: ["kulwa", "kuliwa", "kulewa", "kulika"], a: 1,
        why: "Stämme auf Vokal bekommen -liwa: kula → kuliwa, gegessen werden." },
      { type: "translate", q: "Ich wurde in Dar es Salaam geboren. (4 Wörter)", a: "Nilizaliwa Dar es Salaam" },
      { type: "translate", q: "Fisch wird auf dem Markt verkauft. (3 Wörter)", a: "Samaki wanauzwa sokoni" }
    ]
  },

  /* ============================ 15 ============================ */
  {
    id: "l15",
    title: "Nionyeshe — jemanden etwas tun lassen",
    goal: "Mit -sha/-za Verben bilden, die ein Veranlassen ausdrücken: zeigen, füttern, erinnern.",
    mwalimu: [
      { sw: "Nionyeshe njia, tafadhali.", de: "Zeig mir bitte den Weg." },
      { sw: "", de: "Die dritte Erweiterung macht aus „etwas tun“ ein „jemanden etwas tun lassen“. Aus <i>sehen</i> wird <b>zeigen</b>, aus <i>essen</i> wird <b>füttern</b>, aus <i>sich erinnern</i> wird <b>erinnern</b>." },
      { sw: "", de: "Ich sage es offen: Diese Form ist <b>weniger regelmäßig</b> als die anderen. Lernt sie als Wörter. Das Muster hilft euch beim Erkennen — nicht beim Raten." }
    ],
    grammar: [
      { h: "Die Veranlassungsform: meist -sha, -isha oder -esha",
        body: "kusoma (lernen) → <b>kusomesha</b> lehren, zur Schule schicken<br>" +
              "kula (essen) → <b>kulisha</b> füttern<br>" +
              "kukumbuka (sich erinnern) → <b>kukumbusha</b> jemanden erinnern<br>" +
              "kuona (sehen) → <b>kuonyesha</b> zeigen<br>" +
              "kufunda (lehren, veraltet) → <b>kufundisha</b> unterrichten<br><br>" +
              "Ihr seht: Das Grundmuster ist erkennbar, die Details schwanken." },
      { h: "Manche nehmen -za",
        body: "kupenda (mögen) → <b>kupendeza</b> gefallen, ansprechend sein<br>" +
              "kuelea (klar sein) → <b>kueleza</b> erklären, klarmachen<br><br>" +
              "<b>Inapendeza!</b> Das gefällt mir!<br>" +
              "<b>Nieleze tafadhali.</b> Erklär es mir bitte." },
      { h: "Was sich ändert: ein neues Objekt kommt dazu",
        body: "Vorher gab es einen Handelnden, jetzt zwei:<br><br>" +
              "<b>Mtoto anasoma.</b> Das Kind lernt.<br>" +
              "<b>Mwalimu anamsomesha mtoto.</b> Der Lehrer unterrichtet das Kind.<br><br>" +
              "<b>Ninakula.</b> Ich esse.<br>" +
              "<b>Ninalisha mbwa.</b> Ich füttere den Hund." },
      { h: "Drei Sätze für jeden Tag",
        body: "<b>Nionyeshe …</b> Zeig mir …<br>" +
              "<b>Nikumbushe …</b> Erinnere mich an …<br>" +
              "<b>Nieleze …</b> Erklär mir …<br><br>" +
              "Alle drei stehen im Möglichkeitsmodus (Endung -e) — das ist die höfliche Bitte, " +
              "die ihr aus Lektion 4 kennt." }
    ],
    vocab: ["kuonyesha", "kulisha", "kukumbusha", "kupendeza", "kueleza", "kusomesha",
            "kufundisha", "kukumbuka"],
    examples: [
      { sw: "Mwalimu ananifundisha Kiswahili.", de: "Der Lehrer unterrichtet mich in Swahili.", gloss: "a-na-ni-fundisha" },
      { sw: "Nionyeshe njia, tafadhali.", de: "Zeig mir bitte den Weg.", gloss: "ni- = mir, -e = Bitte" },
      { sw: "Nikumbushe kesho.", de: "Erinnere mich morgen.", gloss: "kukumbuka → kukumbusha" },
      { sw: "Ninalisha mbwa.", de: "Ich füttere den Hund.", gloss: "kula → kulisha" },
      { sw: "Chakula hiki kinapendeza.", de: "Dieses Essen ist ansprechend.", gloss: "kupenda → kupendeza" }
    ],
    culture: "<b>Nionyeshe</b> ist im Alltag Gold wert: im Laden auf etwas hinter der Theke zeigen, " +
             "beim Bajaji-Fahrer nach dem Weg fragen, im Büro um ein Dokument bitten. Ein Wort, " +
             "das fast immer weiterhilft — und höflicher wirkt als Zeigen mit dem Finger.",
    practice: [
      { instruction: "Aus „essen“ wird „essen lassen“. Der Stamm ist nur l-, das Verb ist ja einsilbig.",
        q: "„füttern“ (Grundform, von kula)", build: "ku + l + isha", a: "kulisha",
        explain: "kula → kulisha: jemanden essen lassen. Ninalisha mbwa = Ich füttere den Hund." },
      { instruction: "Jetzt ein ganzer Satz mit Objektinfix. Wen unterrichtet der Lehrer?",
        q: "„Der Lehrer unterrichtet mich.“ (2 Wörter)", build: "mwalimu + a + na + ni + fundisha",
        a: "Mwalimu ananifundisha",
        explain: "ni- = mich. Ohne Objektinfix bliebe offen, wer unterrichtet wird." },
      { instruction: "Und die höfliche Bitte: Endung -e statt -a, das Objekt steht vorn.",
        q: "„Zeig mir den Weg.“ (2 Wörter)", build: "ni + onyeshe + njia", a: "Nionyeshe njia",
        explain: "Der Möglichkeitsmodus aus Lektion 4, hier als Bitte. Nionyeshe, Nikumbushe, Nieleze." }
    ],
    exercises: [
      { type: "translate", q: "Grundform: „füttern“ (von kula)", a: "kulisha" },
      { type: "translate", q: "Zeig mir den Weg. (2 Wörter)", a: "Nionyeshe njia" },
      { type: "choice", q: "Was macht die Veranlassungsform mit dem Satz?",
        options: ["Sie verneint ihn",
                  "Sie bringt einen zweiten Beteiligten hinein — jemand lässt jemanden etwas tun",
                  "Sie schiebt ihn in die Vergangenheit",
                  "Sie macht aus dem Objekt ein Subjekt"], a: 1,
        why: "Mtoto anasoma (das Kind lernt) → Mwalimu anamsomesha mtoto (der Lehrer lässt das Kind lernen)." },
      { type: "translate", q: "Erinnere mich morgen. (2 Wörter)", a: "Nikumbushe kesho" },
      { type: "choice", q: "Welches Verb heißt „erklären“?",
        options: ["kuelewa", "kueleza", "kuuliza", "kuonyesha"], a: 1,
        why: "kuelewa = verstehen, kueleza = erklären (verständlich machen). Ein Buchstabe, zwei Rollen." },
      { type: "translate", q: "Ich füttere den Hund. (2 Wörter)", a: "Ninalisha mbwa" }
    ]
  },

  /* ============================ 16 ============================ */
  {
    id: "l16",
    title: "Imeharibika — von selbst und einander",
    goal: "Mit -ika sagen, dass etwas in einem Zustand ist, und mit -ana, dass zwei es miteinander tun.",
    mwalimu: [
      { sw: "Simu yangu imeharibika. Lakini tutaonana kesho!", de: "Mein Handy ist kaputt. Aber wir sehen uns morgen!" },
      { sw: "", de: "Zwei Erweiterungen zum Abschluss. Die erste sagt: etwas <b>ist</b> in einem Zustand — ohne Schuldigen. Die zweite: zwei Leute tun es <b>miteinander</b>." },
      { sw: "", de: "Und ihr kennt sie beide schon aus dem Abschied: <b>Tutaonana!</b> — wir werden einander sehen." }
    ],
    grammar: [
      { h: "Die Zustandsform -ika / -eka",
        body: "kuvunja (zerbrechen) → <b>kuvunjika</b> kaputtgehen, zerbrochen sein<br>" +
              "kuharibu (beschädigen) → <b>kuharibika</b> kaputtgehen<br>" +
              "kufungua (öffnen) → <b>kufunguka</b> aufgehen<br><br>" +
              "<b>Kikombe kimevunjika.</b> Die Tasse ist zerbrochen.<br>" +
              "<b>Simu yangu imeharibika.</b> Mein Handy ist kaputtgegangen." },
      { h: "Zustand oder Passiv? Der Unterschied ist die Schuldfrage",
        body: "<b>Simu ime<u>haribiwa</u>.</b> Das Handy wurde kaputt gemacht. (jemand war es)<br>" +
              "<b>Simu ime<u>haribika</u>.</b> Das Handy ist kaputtgegangen. (es ist einfach so)<br><br>" +
              "Im Alltag nimmt man fast immer die Zustandsform. Wer -iwa sagt, schiebt " +
              "jemandem die Schuld zu — das will man selten." },
      { h: "-ika heißt auch: es lässt sich",
        body: "kupata (bekommen) → <b>kupatikana</b> erhältlich sein<br>" +
              "kuona (sehen) → <b>kuonekana</b> sichtbar sein, erscheinen<br>" +
              "kujua (kennen) → <b>kujulikana</b> bekannt sein<br><br>" +
              "<b>Chakula kinapatikana hapa.</b> Essen gibt es hier.<br>" +
              "<b>Haionekani.</b> Man sieht es nicht." },
      { h: "Die Gegenseitigkeitsform -ana: einander",
        body: "kuona → <b>kuonana</b> sich sehen, sich treffen<br>" +
              "kusaidia → <b>kusaidiana</b> einander helfen<br>" +
              "kupenda → <b>kupendana</b> einander lieben<br>" +
              "kupiga → <b>kupigana</b> sich schlagen, kämpfen<br><br>" +
              "<b>Tutaonana kesho!</b> Wir sehen uns morgen!<br>" +
              "<b>Tunasaidiana kazini.</b> Wir helfen einander bei der Arbeit." }
    ],
    vocab: ["kuvunja", "kuvunjika", "kuharibika", "kupatikana", "kuonekana", "kujulikana",
            "kuonana", "kusaidiana"],
    examples: [
      { sw: "Kikombe kimevunjika.", de: "Die Tasse ist zerbrochen.", gloss: "ki-me-vunj-ika" },
      { sw: "Simu yangu imeharibika.", de: "Mein Handy ist kaputtgegangen.", gloss: "i-me-harib-ika — Kl. 9" },
      { sw: "Chakula kinapatikana hapa.", de: "Essen ist hier erhältlich.", gloss: "kupata → kupatikana" },
      { sw: "Tutaonana kesho!", de: "Wir sehen uns morgen!", gloss: "tu-ta-on-ana" },
      { sw: "Tunasaidiana kazini.", de: "Wir helfen einander bei der Arbeit.", gloss: "kusaidia → kusaidiana" }
    ],
    culture: "<b>Umeme umekatika</b> — der Strom ist weg. Diesen Satz werdet ihr in Dar öfter sagen, " +
             "als euch lieb ist. Auch er steht in der Zustandsform: Niemand hat den Strom abgestellt, " +
             "er ist eben gegangen. Genau diese Haltung steckt in der Endung -ika.",
    practice: [
      { instruction: "Zustandsform: -ika statt End-a. kikombe ist Klasse 7, also ki-.",
        q: "„Die Tasse ist zerbrochen.“ (2 Wörter)", build: "kikombe + ki + me + vunj + ika",
        a: "Kikombe kimevunjika",
        explain: "Nicht „jemand hat sie zerbrochen“, sondern: sie ist zerbrochen. Das -me- zeigt den Zustand jetzt." },
      { instruction: "Jetzt dein Handy. simu gehört zu Klasse 9 — die Vorsilbe ist i-.",
        q: "„Mein Handy ist kaputtgegangen.“ (3 Wörter)", build: "simu + yangu + i + me + harib + ika",
        a: "Simu yangu imeharibika",
        explain: "yangu = mein, für Klasse 9. Und imeharibika, nicht imeharibiwa — niemand ist schuld." },
      { instruction: "Zum Schluss die Gegenseitigkeit. Genau so verabschiedet man sich.",
        q: "„Wir sehen uns morgen!“ (2 Wörter)", build: "tu + ta + on + ana + kesho", a: "Tutaonana kesho",
        explain: "kuona → kuonana: einander sehen. Tutaonana ist der normale Abschied." }
    ],
    exercises: [
      { type: "translate", q: "Wir sehen uns morgen! (2 Wörter)", a: "Tutaonana kesho" },
      { type: "choice", q: "Das Handy ist einfach kaputt — niemand ist schuld. Was sagst du?",
        options: ["Simu imeharibiwa", "Simu imeharibika", "Simu inaharibu", "Simu imeharibisha"], a: 1,
        why: "-ika ist die Zustandsform: es ist kaputtgegangen. -iwa wäre Passiv: jemand hat es kaputt gemacht." },
      { type: "translate", q: "Die Tasse ist zerbrochen. (2 Wörter)", a: "Kikombe kimevunjika" },
      { type: "choice", q: "Was bedeutet kusaidiana?",
        options: ["viel helfen", "einander helfen", "geholfen werden", "helfen lassen"], a: 1,
        why: "-ana ist die Gegenseitigkeitsform: kusaidia (helfen) → kusaidiana (einander helfen)." },
      { type: "translate", q: "Essen ist hier erhältlich. (3 Wörter)", a: "Chakula kinapatikana hapa" },
      { type: "translate", q: "Wir helfen einander bei der Arbeit. (2 Wörter)", a: "Tunasaidiana kazini" }
    ]
  },

  /* ============================ 17 ============================ */
  {
    id: "l17",
    title: "Mtu ambaye — Sätze verbinden",
    goal: "Mit amba- zwei Aussagen zu einer verbinden: der Mann, der hier arbeitet.",
    mwalimu: [
      { sw: "Rafiki ambaye ninamjua anakaa Kariakoo.", de: "Der Freund, den ich kenne, wohnt in Kariakoo." },
      { sw: "", de: "Bisher habt ihr kurze Sätze gebaut. Jetzt hängen wir sie aneinander: <b>der Mensch, <u>der</u> hier arbeitet</b> — das Buch, <b><u>das</u></b> ich gekauft habe." },
      { sw: "", de: "Dafür gibt es im Swahili zwei Wege. Wir nehmen zuerst den einfachen: <b>amba-</b> plus Klassenzeichen. Er funktioniert immer, in jeder Zeit, auch verneint." }
    ],
    grammar: [
      { h: "amba- plus Klassenzeichen",
        body: "Das Bezugswort bestimmt die Endung — dieselbe Kongruenz wie überall:<br><br>" +
              "Person (Kl. 1) → <b>ambaye</b> · Personen (Kl. 2) → <b>ambao</b><br>" +
              "Kl. 5 → <b>ambalo</b> · Kl. 6 → <b>ambayo</b><br>" +
              "Kl. 7 → <b>ambacho</b> · Kl. 8 → <b>ambavyo</b><br>" +
              "Kl. 9 → <b>ambayo</b> · Kl. 10 → <b>ambazo</b><br><br>" +
              "Die Endungen sind dieselben Silben, die ihr schon von <i>-angu, -ake</i> und " +
              "den Demonstrativa kennt." },
      { h: "Die Wortstellung ist einfach",
        body: "<b>Bezugswort + amba- + ganz normaler Satz.</b><br><br>" +
              "<b>Mtu ambaye anafanya kazi hapa.</b> Der Mensch, der hier arbeitet.<br>" +
              "<b>Kitabu ambacho nilinunua.</b> Das Buch, das ich gekauft habe.<br>" +
              "<b>Nyumba ambayo tunakaa.</b> Das Haus, in dem wir wohnen.<br><br>" +
              "Hinter amba- ändert sich am Verb nichts. Das macht diesen Weg so bequem." },
      { h: "Wenn das Bezugswort das Objekt ist",
        body: "Dann steht zusätzlich das Objektinfix im Verb — so wie sonst auch:<br><br>" +
              "<b>Rafiki ambaye nina<u>m</u>jua.</b> Der Freund, den ich kenne.<br>" +
              "<b>Chakula ambacho nina<u>ki</u>penda.</b> Das Essen, das ich mag.<br><br>" +
              "Faustregel: Steht das Bezugswort für den Handelnden, braucht es kein Objektinfix. " +
              "Ist es das Ziel der Handlung, schon." },
      { h: "Warum amba- immer geht",
        body: "Es gibt noch einen zweiten Weg (nächste Lektion), der das Zeichen ins Verb schiebt. " +
              "Der kann aber <b>kein Perfekt</b> und <b>keine Verneinung</b>. amba- kann beides:<br><br>" +
              "<b>Mtu ambaye amefika.</b> Der Mensch, der angekommen ist.<br>" +
              "<b>Watu ambao hawaelewi.</b> Die Leute, die nicht verstehen.<br><br>" +
              "Im Zweifel also: amba-." }
    ],
    vocab: ["ambaye", "mtu", "kitabu", "rafiki", "jirani", "kufanya", "kujua", "kununua"],
    examples: [
      { sw: "Mtu ambaye anafanya kazi hapa ni rafiki yangu.", de: "Der Mann, der hier arbeitet, ist mein Freund.", gloss: "amba + ye — Kl. 1" },
      { sw: "Kitabu ambacho nilinunua ni kizuri.", de: "Das Buch, das ich gekauft habe, ist gut.", gloss: "amba + cho — Kl. 7" },
      { sw: "Rafiki ambaye ninamjua anakaa Kariakoo.", de: "Der Freund, den ich kenne, wohnt in Kariakoo.", gloss: "-m- = ihn, weil Objekt" },
      { sw: "Nyumba ambayo tunakaa ni kubwa.", de: "Das Haus, in dem wir wohnen, ist groß.", gloss: "amba + yo — Kl. 9" },
      { sw: "Watu ambao hawaelewi wanauliza.", de: "Die Leute, die nicht verstehen, fragen.", gloss: "verneint — hier geht nur amba-" }
    ],
    culture: "Im gesprochenen Dar hört ihr beide Wege durcheinander. amba- gilt als etwas " +
             "deutlicher und wird gern genommen, wenn der Satz länger wird oder man sichergehen " +
             "will, verstanden zu werden. Für euch ist es der Weg, mit dem ihr nie falsch liegt.",
    practice: [
      { instruction: "Bezugswort, dann amba- mit dem passenden Zeichen, dann ein ganz normaler Satz. mtu ist Klasse 1.",
        q: "„der Mensch, der hier arbeitet“ (5 Wörter)",
        build: "mtu + ambaye + a + na + fanya + kazi + hapa", a: "Mtu ambaye anafanya kazi hapa",
        explain: "Kl. 1 → ambaye. Dahinter steht anafanya kazi hapa, unverändert." },
      { instruction: "Jetzt Klasse 7. Welches Zeichen gehört zu kitabu?",
        q: "„das Buch, das ich gekauft habe“ (3 Wörter)",
        build: "kitabu + ambacho + ni + li + nunua", a: "Kitabu ambacho nilinunua",
        explain: "Kl. 7 → ambacho, wie ki- in kizuri. Das Verb bleibt nilinunua." },
      { instruction: "Und jetzt ist der Freund nicht der Handelnde, sondern das Ziel — dann kommt das Objektinfix dazu.",
        q: "„der Freund, den ich kenne“ (3 Wörter)",
        build: "rafiki + ambaye + ni + na + m + jua", a: "Rafiki ambaye ninamjua",
        explain: "-m- = ihn. Ohne das Infix hieße es: der Freund, der weiß." }
    ],
    exercises: [
      { type: "choice", q: "Welche amba-Form gehört zu kitabu (Klasse 7)?",
        options: ["ambaye", "ambayo", "ambacho", "ambalo"], a: 2,
        why: "Klasse 7 hat ki-/ch-: kitabu, kizuri, ambacho." },
      { type: "translate", q: "der Mensch, der hier arbeitet (5 Wörter)", a: "Mtu ambaye anafanya kazi hapa" },
      { type: "translate", q: "das Buch, das ich gekauft habe (3 Wörter)", a: "Kitabu ambacho nilinunua" },
      { type: "choice", q: "Wann musst du amba- nehmen und kannst nicht ins Verb ausweichen?",
        options: ["Bei Personen", "Im Perfekt und bei Verneinung", "In der Gegenwart", "Bei Klasse 9"], a: 1,
        why: "Das Relativzeichen im Verb gibt es nur bei -na-, -li- und -ta-. Perfekt und Verneinung verlangen amba-." },
      { type: "translate", q: "der Freund, den ich kenne (3 Wörter)", a: "Rafiki ambaye ninamjua" },
      { type: "translate", q: "Das Haus, in dem wir wohnen, ist groß. (5 Wörter)", a: "Nyumba ambayo tunakaa ni kubwa" }
    ]
  },

  /* ============================ 18 ============================ */
  {
    id: "l18",
    title: "Ninayemjua — der Relativsatz im Verb",
    goal: "Den Relativsatz ohne amba- bilden: das Zeichen wandert zwischen Zeit und Stamm.",
    mwalimu: [
      { sw: "Mtu ninayemjua anakaa Kariakoo.", de: "Der Mensch, den ich kenne, wohnt in Kariakoo." },
      { sw: "", de: "Derselbe Satz wie in der letzten Lektion — nur ist amba- verschwunden. Das Zeichen <b>-ye-</b> sitzt jetzt <b>im Verb</b>, zwischen Zeit und Stamm." },
      { sw: "", de: "So klingt es kürzer und flüssiger. Ihr müsst es vor allem <b>verstehen</b> können; sagen dürft ihr weiter amba-, das ist nie falsch." }
    ],
    grammar: [
      { h: "Der Platz: Subjekt – Zeit – Relativzeichen – (Objekt) – Stamm",
        body: "ni-na-<b>ye</b>-m-jua = den ich kenne<br>" +
              "a-na-<b>ye</b>-fanya = der/die macht<br>" +
              "ni-li-<b>cho</b>-soma = das ich gelesen habe<br>" +
              "wa-na-<b>o</b>-kaa = die wohnen<br><br>" +
              "Das Baukastenprinzip aus Lektion 4 — nur mit einem Fach mehr." },
      { h: "Die Relativzeichen",
        body: "Kl. 1 <b>-ye-</b> · Kl. 2 <b>-o-</b><br>" +
              "Kl. 3 <b>-o-</b> · Kl. 4 <b>-yo-</b><br>" +
              "Kl. 5 <b>-lo-</b> · Kl. 6 <b>-yo-</b><br>" +
              "Kl. 7 <b>-cho-</b> · Kl. 8 <b>-vyo-</b><br>" +
              "Kl. 9 <b>-yo-</b> · Kl. 10 <b>-zo-</b><br><br>" +
              "Es sind dieselben Silben wie bei amba- — nur ohne das amba davor." },
      { h: "Die Zukunft ändert sich: -ta- wird -taka-",
        body: "Mit Relativzeichen heißt die Zukunft nicht -ta-, sondern <b>-taka-</b>:<br><br>" +
              "<b>Mtu atakayekuja …</b> Der Mensch, der kommen wird …<br>" +
              "a-<b>taka</b>-ye-kuja<br><br>" +
              "Nur hier. Ohne Relativsatz bleibt es atakuja." },
      { h: "Die Grenze — und ein Satz, der sich lohnt",
        body: "Diesen Weg gibt es nur bei <b>-na-, -li-, -ta(ka)-</b>. Für Perfekt und Verneinung " +
              "nehmt ihr amba- (letzte Lektion).<br><br>" +
              "Ein Sonderfall, den ihr ständig hören werdet — <b>-vyo-</b> im Sinne von „wie“:<br>" +
              "<b>Kama unavyojua …</b> Wie du weißt …<br>" +
              "<b>Kama ninavyoona …</b> Wie ich sehe …" }
    ],
    vocab: ["kujua", "kusoma", "kukaa", "kufika", "mtu", "kitabu", "nyumba", "jirani"],
    examples: [
      { sw: "Mtu ninayemjua anakaa Kariakoo.", de: "Der Mensch, den ich kenne, wohnt in Kariakoo.", gloss: "ni-na-ye-m-jua" },
      { sw: "Kitabu nilichosoma ni kizuri.", de: "Das Buch, das ich gelesen habe, ist gut.", gloss: "ni-li-cho-soma" },
      { sw: "Watu wanaokaa hapa ni wazuri.", de: "Die Leute, die hier wohnen, sind nett.", gloss: "wa-na-o-kaa" },
      { sw: "Mtu atakayekuja ni rafiki yangu.", de: "Der Mensch, der kommen wird, ist mein Freund.", gloss: "a-taka-ye-kuja" },
      { sw: "Kama unavyojua, Dar ina joto.", de: "Wie du weißt, ist es in Dar heiß.", gloss: "-vyo- = wie" }
    ],
    culture: "Diese Kurzform ist der Grund, warum gesprochenes Swahili für Lernende schnell klingt: " +
             "Ein ganzer Nebensatz steckt in einem einzigen Wort. Wer <i>ninayemjua</i> im Ohr hat, " +
             "zerlegt es beim nächsten Mal von allein.",
    practice: [
      { instruction: "Bau das Verb Stück für Stück: ich – Gegenwart – Relativzeichen für Personen – ihn – kennen.",
        q: "„der Mensch, den ich kenne“ (2 Wörter)", build: "mtu + ni + na + ye + m + jua",
        a: "Mtu ninayemjua",
        explain: "-ye- zeigt zurück auf mtu, -m- ist das Objekt. Zusammen: ninayemjua." },
      { instruction: "Jetzt Vergangenheit und Klasse 7. Welches Zeichen gehört zu kitabu?",
        q: "„das Buch, das ich gelesen habe“ (2 Wörter)", build: "kitabu + ni + li + cho + soma",
        a: "Kitabu nilichosoma",
        explain: "Kl. 7 → -cho-. Das ist dasselbe cho wie in ambacho." },
      { instruction: "Und Plural: Personen in der Mehrzahl haben das kürzeste Zeichen von allen.",
        q: "„die Leute, die hier wohnen“ (3 Wörter)", build: "watu + wa + na + o + kaa + hapa",
        a: "Watu wanaokaa hapa",
        explain: "Kl. 2 → -o-. wa-na-o-kaa: die wohnen." }
    ],
    exercises: [
      { type: "translate", q: "der Mensch, den ich kenne (2 Wörter)", a: "Mtu ninayemjua" },
      { type: "translate", q: "das Buch, das ich gelesen habe (2 Wörter)", a: "Kitabu nilichosoma" },
      { type: "choice", q: "Wie heißt die Zukunft im Relativsatz?",
        options: ["-ta- wie immer", "-taka-", "-tale-", "-ngeta-"], a: 1,
        why: "Nur im Relativsatz: atakayekuja = der kommen wird. Sonst bleibt es atakuja." },
      { type: "choice", q: "Welches Relativzeichen gehört zu Klasse 2 (watu)?",
        options: ["-ye-", "-o-", "-cho-", "-zo-"], a: 1,
        why: "Kl. 2 hat -o-: wanaokaa, die wohnen. -ye- wäre Singular." },
      { type: "translate", q: "die Leute, die hier wohnen (3 Wörter)", a: "Watu wanaokaa hapa" },
      { type: "translate", q: "Wie du weißt … (2 Wörter)", a: "Kama unavyojua" }
    ]
  },

  /* ============================ 19 ============================ */
  {
    id: "l19",
    title: "Ukija — wenn und falls",
    goal: "Mit -ki- und -sipo- Bedingungen ausdrücken: wenn du kommst, essen wir.",
    mwalimu: [
      { sw: "Ukija, tutakula. Usipokuja, nitakusubiri.", de: "Wenn du kommst, essen wir. Wenn du nicht kommst, warte ich auf dich." },
      { sw: "", de: "Für „wenn“ braucht Swahili kein eigenes Wort. Es setzt <b>-ki-</b> an die Stelle der Zeit — und fertig ist die Bedingung." },
      { sw: "", de: "Dieselbe Silbe heißt je nach Satz auch <b>während</b>. Ihr merkt: Das Fach für die Zeit ist im Swahili das Fach für alles, was mit dem Verhältnis zur Wirklichkeit zu tun hat." }
    ],
    grammar: [
      { h: "-ki- an der Stelle der Zeit",
        body: "u-<b>ki</b>-ja = wenn du kommst<br>" +
              "ni-<b>ki</b>-pata pesa = wenn ich Geld bekomme<br>" +
              "tu-<b>ki</b>-fika = wenn wir ankommen<br><br>" +
              "<b>Ukija, tutakula.</b> Wenn du kommst, werden wir essen.<br>" +
              "<b>Nikipata pesa, nitanunua gari.</b> Wenn ich Geld bekomme, kaufe ich ein Auto.<br><br>" +
              "Der zweite Satzteil steht meist in der Zukunft — wie im Deutschen." },
      { h: "Verneint: -sipo-",
        body: "u-<b>sipo</b>-kuja = wenn du nicht kommst<br>" +
              "ni-<b>sipo</b>-fika = wenn ich nicht ankomme<br><br>" +
              "<b>Usipokuja, nitakusubiri.</b> Wenn du nicht kommst, warte ich auf dich.<br><br>" +
              "Achtung bei einsilbigen Verben: Das <b>ku-</b> bleibt stehen — usipo<b>ku</b>ja, " +
              "nicht *usipoja. Dieselbe Regel wie in Lektion 4." },
      { h: "-ki- heißt auch „während“",
        body: "Steht der -ki-Satz neben einem Hauptsatz, wird daraus ein Nebenher:<br><br>" +
              "<b>Nilimwona akisoma.</b> Ich sah ihn/sie lesen.<br>" +
              "<b>Ninapika nikiimba.</b> Ich koche und singe dabei.<br><br>" +
              "Was gemeint ist, entscheidet der Zusammenhang — im Zweifel: <i>wenn</i>." },
      { h: "kama und ikiwa: das Wenn zum Danebenstellen",
        body: "Man kann die Bedingung auch mit einem eigenen Wort einleiten:<br><br>" +
              "<b>Kama unataka, twende sokoni.</b> Wenn du willst, lass uns zum Markt gehen.<br>" +
              "<b>Ikiwa mvua inanyesha, tutakaa nyumbani.</b> Falls es regnet, bleiben wir zu Hause.<br><br>" +
              "<b>kama</b> heißt außerdem <i>wie</i> (Kama unavyojua) und <i>ob</i> " +
              "(Sijui kama atakuja — Ich weiß nicht, ob er kommt)." }
    ],
    vocab: ["kama", "ikiwa", "labda", "kuomba", "kusubiri", "kufika", "mvua", "kupata"],
    examples: [
      { sw: "Ukija, tutakula.", de: "Wenn du kommst, essen wir.", gloss: "u-ki-ja" },
      { sw: "Nikipata pesa, nitanunua gari.", de: "Wenn ich Geld bekomme, kaufe ich ein Auto.", gloss: "ni-ki-pata" },
      { sw: "Usipokuja, nitakusubiri.", de: "Wenn du nicht kommst, warte ich auf dich.", gloss: "u-sipo-ku-ja" },
      { sw: "Kama unataka, twende sokoni.", de: "Wenn du willst, lass uns zum Markt gehen.", gloss: "kama + Möglichkeitsform" },
      { sw: "Nilimwona akisoma.", de: "Ich sah ihn/sie lesen.", gloss: "a-ki-soma = während er/sie las" }
    ],
    culture: "<b>Mungu akipenda</b> — so Gott will. Diesen Zusatz hört ihr in Tansania hinter fast " +
             "jedem Plan, der in der Zukunft liegt. Grammatisch ist es genau das hier: a-ki-penda, " +
             "wenn er will. Wer ihn mitspricht, klingt sofort vertrauter.",
    practice: [
      { instruction: "-ki- kommt an die Stelle, wo sonst -na- oder -ta- steht.",
        q: "„wenn du kommst“ (ein Wort)", build: "u + ki + ja", a: "Ukija",
        explain: "u- = du, -ki- = wenn, -ja = kommen. Ganze Bedingung in einem Wort." },
      { instruction: "Jetzt mit Objekt dahinter. Ich, wenn, bekommen, Geld.",
        q: "„wenn ich Geld bekomme“ (2 Wörter)", build: "ni + ki + pata + pesa", a: "Nikipata pesa",
        explain: "Nikipata pesa, nitanunua gari — der zweite Teil steht dann in der Zukunft." },
      { instruction: "Verneint heißt es -sipo-. Und denk an die Regel für einsilbige Verben: kuja behält sein ku-.",
        q: "„wenn du nicht kommst“ (ein Wort)", build: "u + sipo + ku + ja", a: "Usipokuja",
        explain: "Nicht usipoja: kuja ist einsilbig, das ku- bleibt. Genau wie bei nitakuja." }
    ],
    exercises: [
      { type: "translate", q: "wenn du kommst (ein Wort)", a: "Ukija" },
      { type: "translate", q: "wenn ich Geld bekomme (2 Wörter)", a: "Nikipata pesa" },
      { type: "choice", q: "Wie heißt „wenn du nicht kommst“?",
        options: ["Hukija", "Usipokuja", "Usipoja", "Ukijasi"], a: 1,
        why: "Die verneinte Bedingung ist -sipo-, und kuja ist einsilbig — das ku- bleibt stehen." },
      { type: "translate", q: "wenn wir ankommen (ein Wort)", a: "Tukifika" },
      { type: "choice", q: "Was heißt Nilimwona akisoma?",
        options: ["Ich sah, dass er gelesen hatte", "Ich sah ihn lesen", "Ich las mit ihm", "Ich sah ihn nicht lesen"], a: 1,
        why: "-ki- neben einem Hauptsatz heißt „während“: akisoma = während er las, ihn lesend." },
      { type: "translate", q: "So Gott will. (2 Wörter)", a: "Mungu akipenda" }
    ]
  },

  /* ============================ 20 ============================ */
  {
    id: "l20",
    title: "Ningependa — wenn ich könnte",
    goal: "Mit -nge- und -ngali- über Unwirkliches reden — und höflich etwas erbitten.",
    mwalimu: [
      { sw: "Ningependa chai, tafadhali.", de: "Ich hätte gern Tee, bitte." },
      { sw: "", de: "Jetzt das Unwirkliche: <b>hätte</b>, <b>würde</b>, <b>wäre</b>. Im Swahili ist auch das nur eine Silbe im Verb — <b>-nge-</b>." },
      { sw: "", de: "Und sie ist nebenbei die höflichste Form, die ihr kennt. <b>Ningependa …</b> heißt wörtlich „ich würde mögen“ — genau wie euer „ich hätte gern“." }
    ],
    grammar: [
      { h: "-nge-: unwirklich in der Gegenwart",
        body: "ni-<b>nge</b>-penda = ich würde mögen<br>" +
              "ni-<b>nge</b>-kuwa na pesa = wenn ich Geld hätte<br>" +
              "ni-<b>nge</b>-nunua = ich würde kaufen<br><br>" +
              "<b>Ningekuwa na pesa, ningenunua gari.</b><br>" +
              "Hätte ich Geld, würde ich ein Auto kaufen.<br><br>" +
              "Beachtet: <b>beide</b> Satzhälften bekommen -nge-. Im Deutschen ist das genauso " +
              "(hätte … würde), nur fällt es dort nicht so auf." },
      { h: "-ngali-: unwirklich in der Vergangenheit",
        body: "ni-<b>ngali</b>-jua = hätte ich gewusst<br>" +
              "ni-<b>ngali</b>-kuja = wäre ich gekommen<br><br>" +
              "<b>Ningalijua, ningalikuja.</b> Hätte ich es gewusst, wäre ich gekommen.<br><br>" +
              "Im Alltag hört man oft auch -nge- für beides. Verstehen müsst ihr -ngali-, " +
              "sagen dürft ihr -nge-." },
      { h: "Verneint: die verneinte Subjektvorsilbe davor",
        body: "Kein neues Zeichen — ihr nehmt einfach die verneinte Vorsilbe aus Lektion 5:<br><br>" +
              "si + nge + penda → <b>singependa</b> ich würde nicht mögen<br>" +
              "hu + nge + penda → <b>hungependa</b> du würdest nicht mögen<br>" +
              "ha + nge + penda → <b>hangependa</b> er/sie würde nicht mögen<br><br>" +
              "<b>Singekwenda leo.</b> Ich würde heute nicht gehen." },
      { h: "Die höfliche Bitte — das braucht ihr täglich",
        body: "<b>Ningependa chai.</b> Ich hätte gern Tee.<br>" +
              "<b>Ningependa kuona …</b> Ich würde gern … sehen.<br>" +
              "<b>Ungependa kuja?</b> Möchtest du kommen?<br><br>" +
              "Noch höflicher wird es mit <b>Naomba</b> (ich bitte um): <b>Naomba maji.</b><br>" +
              "Beides ist im Restaurant und im Büro Gold wert." }
    ],
    vocab: ["ingawa", "bila", "kwa hiyo", "hata", "hadi", "badala ya", "kupenda", "kuweza"],
    examples: [
      { sw: "Ningependa chai, tafadhali.", de: "Ich hätte gern Tee, bitte.", gloss: "ni-nge-penda" },
      { sw: "Ningekuwa na pesa, ningenunua gari.", de: "Hätte ich Geld, würde ich ein Auto kaufen.", gloss: "beide Hälften mit -nge-" },
      { sw: "Ungependa kuja?", de: "Möchtest du kommen?", gloss: "u-nge-penda" },
      { sw: "Ningalijua, ningalikuja.", de: "Hätte ich es gewusst, wäre ich gekommen.", gloss: "-ngali- = Vergangenheit" },
      { sw: "Singekwenda leo.", de: "Ich würde heute nicht gehen.", gloss: "si + nge + kwenda" }
    ],
    culture: "In Tansania gilt Direktheit schnell als unhöflich. <b>Ningependa</b> und <b>Naomba</b> " +
             "sind deshalb keine Feinheit, sondern Grundausstattung — im Restaurant, im Büro, beim " +
             "Nachbarn. Ein <i>Nipe maji</i> (gib mir Wasser) klingt daneben wie ein Befehl.",
    practice: [
      { instruction: "Die höflichste Form, die du lernen kannst. Ich – würde – mögen.",
        q: "„ich hätte gern“ (ein Wort)", build: "ni + nge + penda", a: "Ningependa",
        explain: "Ningependa chai = Ich hätte gern Tee. Damit bestellt man in ganz Tansania." },
      { instruction: "Jetzt die Bedingung. „Wenn ich Geld hätte“ — kuwa na heißt haben.",
        q: "„wenn ich Geld hätte“ (3 Wörter)", build: "ni + nge + kuwa + na + pesa",
        a: "Ningekuwa na pesa",
        explain: "kuwa ist einsilbig, das ku- bleibt: ningekuwa. Die zweite Hälfte bekäme auch -nge-." },
      { instruction: "Verneint brauchst du kein neues Zeichen — nur die verneinte Vorsilbe si-.",
        q: "„ich würde nicht gehen“ (ein Wort)", build: "si + nge + kwenda", a: "Singekwenda",
        explain: "si + nge + kwenda. Genauso hungependa, hangependa." }
    ],
    exercises: [
      { type: "translate", q: "Ich hätte gern Tee. (2 Wörter)", a: "Ningependa chai" },
      { type: "translate", q: "Möchtest du kommen? (2 Wörter)", a: "Ungependa kuja" },
      { type: "choice", q: "Wie verneint man ningependa?",
        options: ["ningependi", "sitangependa", "singependa", "hakuningependa"], a: 2,
        why: "Verneinte Subjektvorsilbe si- plus -nge-: singependa. Ein eigenes Verneinungszeichen gibt es hier nicht." },
      { type: "translate", q: "wenn ich Geld hätte (3 Wörter)", a: "Ningekuwa na pesa" },
      { type: "choice", q: "Was ist der Unterschied zwischen -nge- und -ngali-?",
        options: ["-ngali- ist höflicher",
                  "-ngali- meint Unwirkliches in der Vergangenheit",
                  "-ngali- ist die Verneinung",
                  "Es gibt keinen"], a: 1,
        why: "Ningependa = ich würde mögen (jetzt). Ningalijua = hätte ich gewusst (damals)." },
      { type: "translate", q: "Ich bitte um Wasser. (2 Wörter)", a: "Naomba maji" }
    ]
  },

  /* ============================ 21 ============================ */
  {
    id: "l21",
    title: "Ninaumwa — beim Arzt",
    goal: "Beschwerden benennen, nach einem Arzt fragen und Anweisungen verstehen.",
    mwalimu: [
      { sw: "Unaumwa nini? — Ninaumwa kichwa.", de: "Wo tut es weh? — Ich habe Kopfschmerzen." },
      { sw: "", de: "Die letzten vier Lektionen sind praktisch. Kein neues Grundgerüst mehr, sondern die Sätze, die ihr in Dar wirklich braucht — angefangen beim wichtigsten Fall: ihr fühlt euch schlecht." },
      { sw: "", de: "Merkt euch vor allem eines: <b>Ninaumwa</b>. Das ist ein Passiv (Lektion 14) — wörtlich „ich werde geschmerzt“. Dahinter kommt einfach das Körperteil." }
    ],
    grammar: [
      { h: "Ninaumwa + Körperteil",
        body: "<b>Ninaumwa kichwa.</b> Ich habe Kopfschmerzen.<br>" +
              "<b>Ninaumwa tumbo.</b> Ich habe Bauchschmerzen.<br>" +
              "<b>Ninaumwa koo.</b> Ich habe Halsschmerzen.<br>" +
              "<b>Ninaumwa jino.</b> Ich habe Zahnschmerzen.<br><br>" +
              "Gefragt wird mit <b>Unaumwa nini?</b> — wörtlich: Was schmerzt dich?<br>" +
              "Auch möglich: <b>Ninaumwa na kichwa</b> — mit na, dasselbe in Grün." },
      { h: "Nina + Krankheit",
        body: "Für Zustände statt Schmerzen nehmt ihr schlicht „haben“:<br><br>" +
              "<b>Nina homa.</b> Ich habe Fieber.<br>" +
              "<b>Nina mafua.</b> Ich bin erkältet.<br>" +
              "<b>Nina kikohozi.</b> Ich habe Husten.<br>" +
              "<b>Ninaharisha.</b> Ich habe Durchfall. (eigenes Verb)<br><br>" +
              "Und der Satz, der im Zweifel alles öffnet: <b>Nahitaji daktari.</b>" },
      { h: "Was der Arzt sagt — der Möglichkeitsmodus als Anweisung",
        body: "Anweisungen kommen fast immer in der Form auf <b>-e</b> aus Lektion 4:<br><br>" +
              "<b>Unywe dawa mara tatu kwa siku.</b> Nimm die Medizin dreimal täglich.<br>" +
              "<b>Upumzike.</b> Ruh dich aus.<br>" +
              "<b>Tupime malaria.</b> Lass uns auf Malaria testen.<br><br>" +
              "Ihr müsst das nicht bilden können — aber erkennen solltet ihr es." },
      { h: "Gute Besserung",
        body: "<b>Pole sana.</b> Mein Beileid, gute Besserung — das tansanische Allzweckwort " +
              "für Mitgefühl.<br>" +
              "<b>Pona haraka!</b> Werd schnell gesund!<br>" +
              "<b>Umepona?</b> Bist du wieder gesund?<br><br>" +
              "<i>Pole</i> hört ihr auch, wenn ihr stolpert, schwer tragt oder im Stau steht." }
    ],
    vocab: ["kuumwa", "mgonjwa", "kikohozi", "mafua", "kuharisha", "kupima", "sindano",
            "kupona", "kupumzika", "daktari", "dawa", "hospitali"],
    examples: [
      { sw: "Ninaumwa kichwa.", de: "Ich habe Kopfschmerzen.", gloss: "ni-na-umwa = ich werde geschmerzt" },
      { sw: "Nina homa tangu jana.", de: "Ich habe seit gestern Fieber.", gloss: "nina = ich habe" },
      { sw: "Nahitaji daktari.", de: "Ich brauche einen Arzt.", gloss: "na-hitaji — Kurzform von ninahitaji" },
      { sw: "Tupime malaria.", de: "Lass uns auf Malaria testen.", gloss: "tu-pim-e — Möglichkeitsmodus" },
      { sw: "Unywe dawa mara tatu kwa siku.", de: "Nimm die Medizin dreimal täglich.", gloss: "u-nyw-e = du sollst trinken" }
    ],
    culture: "Bei Fieber wird in Dar fast immer zuerst auf Malaria getestet — <b>kipimo cha malaria</b>, " +
             "Ergebnis in einer Viertelstunde. Das ist Routine und kein Drama. Private Kliniken sind " +
             "für Ausländer der übliche Weg; nehmt eine Versicherungskarte und Bargeld mit.",
    practice: [
      { instruction: "Das Passiv aus Lektion 14, dahinter das Körperteil. Mehr braucht es nicht.",
        q: "„Ich habe Kopfschmerzen.“ (2 Wörter)", build: "ni + na + umwa + kichwa", a: "Ninaumwa kichwa",
        explain: "Wörtlich: ich werde am Kopf geschmerzt. Genauso: Ninaumwa tumbo, Ninaumwa jino." },
      { instruction: "Für einen Zustand statt eines Schmerzes nimmst du einfach „haben“.",
        q: "„Ich habe Fieber.“ (2 Wörter)", build: "ni + na + homa", a: "Nina homa",
        explain: "nina = ich habe. Genauso Nina mafua, Nina kikohozi." },
      { instruction: "Und der Satz, der im Notfall zählt.",
        q: "„Ich brauche einen Arzt.“ (2 Wörter)", build: "ni + na + hitaji + daktari",
        a: "Ninahitaji daktari",
        explain: "Im Alltag oft verkürzt zu Nahitaji daktari. Beides versteht jeder." }
    ],
    exercises: [
      { type: "translate", q: "Ich habe Kopfschmerzen. (2 Wörter)", a: "Ninaumwa kichwa" },
      { type: "translate", q: "Ich brauche einen Arzt. (2 Wörter)", a: "Ninahitaji daktari, Nahitaji daktari" },
      { type: "choice", q: "Was heißt Unaumwa nini?",
        options: ["Wer ist krank?", "Was schmerzt dich?", "Warum bist du krank?", "Wann wurdest du krank?"], a: 1,
        why: "kuumwa = Schmerzen haben, nini = was. Die übliche Frage des Arztes." },
      { type: "translate", q: "Ich habe Fieber. (2 Wörter)", a: "Nina homa" },
      { type: "choice", q: "Der Arzt sagt: Unywe dawa. Was sollst du tun?",
        options: ["Die Medizin kaufen", "Die Medizin nehmen", "Die Medizin zurückbringen", "Auf die Medizin warten"], a: 1,
        why: "u-nyw-e: der Möglichkeitsmodus von kunywa (trinken) — du sollst sie einnehmen." },
      { type: "translate", q: "Werd schnell gesund! (2 Wörter)", a: "Pona haraka" }
    ]
  },

  /* ============================ 22 ============================ */
  {
    id: "l22",
    title: "Bomba limeharibika — Wohnen und Reparieren",
    goal: "Über Miete, Strom und Wasser reden und melden, wenn etwas kaputt ist.",
    mwalimu: [
      { sw: "Hakuna maji leo. Bomba limeharibika.", de: "Heute gibt es kein Wasser. Das Rohr ist kaputt." },
      { sw: "", de: "Willkommen im tansanischen Alltag. Strom weg, Wasser weg, etwas kaputt — dafür braucht ihr zwei Dinge: <b>kuna / hakuna</b> und die Zustandsform aus Lektion 16." },
      { sw: "", de: "Die gute Nachricht: Beides könnt ihr schon. Hier setzen wir es nur zusammen." }
    ],
    grammar: [
      { h: "kuna und hakuna — es gibt, es gibt nicht",
        body: "<b>Kuna maji.</b> Es gibt Wasser.<br>" +
              "<b>Hakuna maji.</b> Es gibt kein Wasser.<br>" +
              "<b>Kuna tatizo.</b> Es gibt ein Problem.<br>" +
              "<b>Hakuna matata.</b> Kein Problem. — ja, genau das.<br><br>" +
              "Fragend einfach mit der Stimme heben: <b>Kuna maji?</b> Gibt es Wasser?" },
      { h: "Was kaputt ist: die Zustandsform",
        body: "Aus Lektion 16, jetzt praktisch:<br><br>" +
              "<b>Bomba limeharibika.</b> Der Wasserhahn ist kaputt. (Kl. 5 → li-)<br>" +
              "<b>Umeme umekatika.</b> Der Strom ist weg. (Kl. 11 → u-)<br>" +
              "<b>Mlango umevunjika.</b> Die Tür ist kaputt. (Kl. 3 → u-)<br>" +
              "<b>Taa haiwaki.</b> Die Lampe geht nicht an.<br><br>" +
              "Niemand ist schuld — deshalb -ika und nicht das Passiv." },
      { h: "Miete und Vermieter",
        body: "<b>Ninapanga nyumba Mikocheni.</b> Ich miete ein Haus in Mikocheni.<br>" +
              "<b>Kodi ni shilingi ngapi kwa mwezi?</b> Wie hoch ist die Miete pro Monat?<br>" +
              "<b>Nitalipa kodi kesho.</b> Ich zahle die Miete morgen.<br>" +
              "<b>Mwenye nyumba anakuja leo.</b> Der Vermieter kommt heute.<br><br>" +
              "<i>kodi</i> heißt übrigens auch Steuer — der Zusammenhang klärt es." },
      { h: "Den Handwerker holen",
        body: "<b>Ninahitaji fundi.</b> Ich brauche einen Handwerker.<br>" +
              "<b>Fundi bomba</b> Klempner · <b>fundi umeme</b> Elektriker<br>" +
              "<b>Unaweza kuja leo?</b> Kannst du heute kommen?<br>" +
              "<b>Itagharimu kiasi gani?</b> Was wird es kosten?<br><br>" +
              "Preis <b>vor</b> der Arbeit klären — das ist keine Unhöflichkeit, sondern üblich." }
    ],
    vocab: ["kupanga", "kodi", "mwenye nyumba", "fundi", "bomba", "umeme", "maji",
            "kuharibika", "nyumba", "mlango"],
    examples: [
      { sw: "Hakuna maji leo.", de: "Heute gibt es kein Wasser.", gloss: "hakuna = es gibt nicht" },
      { sw: "Bomba limeharibika.", de: "Der Wasserhahn ist kaputt.", gloss: "li-me-harib-ika — Kl. 5" },
      { sw: "Umeme umekatika.", de: "Der Strom ist weg.", gloss: "u-me-kat-ika" },
      { sw: "Ninahitaji fundi bomba.", de: "Ich brauche einen Klempner.", gloss: "fundi + Fachgebiet" },
      { sw: "Kodi ni shilingi ngapi kwa mwezi?", de: "Wie hoch ist die Miete pro Monat?", gloss: "ngapi = wie viel" }
    ],
    culture: "Stromausfälle heißen in Dar <b>mgao</b> — planmäßige Abschaltung. Viele Häuser haben " +
             "Wassertanks auf dem Dach, weil die Leitung nicht durchgehend liefert. Wer ein Haus " +
             "besichtigt, fragt deshalb zuerst: <b>Kuna tanki la maji? Kuna jenereta?</b>",
    practice: [
      { instruction: "Es gibt nicht — ein Wort, das du täglich brauchen wirst.",
        q: "„Es gibt kein Wasser.“ (2 Wörter)", build: "hakuna + maji", a: "Hakuna maji",
        explain: "kuna = es gibt, hakuna = es gibt nicht. Hakuna matata kennst du schon." },
      { instruction: "Jetzt die Zustandsform aus Lektion 16. bomba ist Klasse 5 — welche Vorsilbe?",
        q: "„Der Wasserhahn ist kaputt.“ (2 Wörter)", build: "bomba + li + me + harib + ika",
        a: "Bomba limeharibika",
        explain: "Kl. 5 → li-. Und -ika, weil niemand schuld ist: es ist eben kaputtgegangen." },
      { instruction: "Und jetzt holst du Hilfe.",
        q: "„Ich brauche einen Handwerker.“ (2 Wörter)", build: "ni + na + hitaji + fundi",
        a: "Ninahitaji fundi",
        explain: "Genauer wird es mit dem Fach: fundi bomba (Klempner), fundi umeme (Elektriker)." }
    ],
    exercises: [
      { type: "translate", q: "Es gibt kein Wasser. (2 Wörter)", a: "Hakuna maji" },
      { type: "translate", q: "Der Strom ist weg. (2 Wörter)", a: "Umeme umekatika" },
      { type: "choice", q: "Warum heißt es Bomba limeharibika und nicht limeharibiwa?",
        options: ["Weil bomba Klasse 5 ist",
                  "Weil niemand es kaputt gemacht hat — es ist von selbst kaputtgegangen",
                  "Weil es Vergangenheit ist",
                  "Weil kuharibu unregelmäßig ist"], a: 1,
        why: "-ika ist die Zustandsform. -iwa (Passiv) hieße: jemand hat es kaputt gemacht." },
      { type: "translate", q: "Ich brauche einen Klempner. (3 Wörter)", a: "Ninahitaji fundi bomba" },
      { type: "translate", q: "Der Vermieter kommt heute. (4 Wörter)", a: "Mwenye nyumba anakuja leo" },
      { type: "choice", q: "Was heißt kodi?",
        options: ["Schlüssel", "Miete", "Vertrag", "Nachbar"], a: 1,
        why: "kodi = Miete, im anderen Zusammenhang auch Steuer. Schlüssel wäre ufunguo." }
    ]
  },

  /* ============================ 23 ============================ */
  {
    id: "l23",
    title: "Kazini — Arbeit und Papiere",
    goal: "Im Büro und bei Behörden zurechtkommen: Termine, Dokumente, höfliche Bitten.",
    mwalimu: [
      { sw: "Naomba hati yangu. Mkutano ni lini?", de: "Ich bitte um mein Dokument. Wann ist das Treffen?" },
      { sw: "", de: "Behörden und Büros reden im <b>Passiv</b> — Lektion 14 zahlt sich hier aus. <i>Imefungwa</i> (geschlossen), <i>imeandikwa</i> (geschrieben), <i>inahitajika</i> (wird benötigt)." },
      { sw: "", de: "Und ihr redet höflich: <b>Naomba …</b> öffnet mehr Türen als jede Forderung." }
    ],
    grammar: [
      { h: "Naomba — die Bitte, die immer passt",
        body: "<b>Naomba hati yangu.</b> Ich bitte um mein Dokument.<br>" +
              "<b>Naomba kuongea na …</b> Ich bitte darum, mit … zu sprechen.<br>" +
              "<b>Naomba msaada.</b> Ich bitte um Hilfe.<br><br>" +
              "Wörtlich heißt kuomba bitten oder beten. Im Alltag ist <i>Naomba</i> das " +
              "freundliche „Könnte ich bitte …“." },
      { h: "Nach Zeit und Ort fragen",
        body: "<b>Mkutano ni lini?</b> Wann ist das Treffen?<br>" +
              "<b>Ofisi iko wapi?</b> Wo ist das Büro?<br>" +
              "<b>Mnafungua saa ngapi?</b> Um wie viel Uhr öffnet ihr?<br>" +
              "<b>Nitarudi kesho asubuhi.</b> Ich komme morgen früh wieder.<br><br>" +
              "Alles bekannt: <i>ni lini</i>, <i>iko wapi</i>, <i>saa ngapi</i> aus Lektion 11." },
      { h: "Behördensprache ist Passivsprache",
        body: "<b>Imefungwa.</b> Es ist geschlossen.<br>" +
              "<b>Mkataba umeandikwa.</b> Der Vertrag ist geschrieben.<br>" +
              "<b>Hati inahitajika.</b> Das Dokument wird benötigt.<br>" +
              "<b>Kibali kimetolewa.</b> Die Genehmigung wurde erteilt.<br><br>" +
              "Wer das erkennt, versteht Aushänge und Schalterauskünfte." },
      { h: "Die Papiere, die euch begleiten werden",
        body: "<b>pasipoti</b> Reisepass · <b>hati</b> Dokument, Urkunde<br>" +
              "<b>kibali cha kazi</b> Arbeitserlaubnis · <b>kibali cha ukaazi</b> Aufenthaltserlaubnis<br>" +
              "<b>mkataba</b> Vertrag · <b>nakala</b> Kopie<br><br>" +
              "<b>Nina kibali cha kazi.</b> Ich habe eine Arbeitserlaubnis." }
    ],
    vocab: ["mkataba", "hati", "pasipoti", "kibali", "kazi", "ofisi", "mkutano",
            "kuomba", "mshahara", "barua"],
    examples: [
      { sw: "Naomba hati yangu.", de: "Ich bitte um mein Dokument.", gloss: "na-omba = ich bitte" },
      { sw: "Mkutano ni lini?", de: "Wann ist das Treffen?", gloss: "ni lini = ist wann" },
      { sw: "Mkataba umeandikwa.", de: "Der Vertrag ist geschrieben.", gloss: "u-me-andik-wa — Kl. 3" },
      { sw: "Ofisi imefungwa leo.", de: "Das Büro ist heute geschlossen.", gloss: "i-me-fung-wa — Kl. 9" },
      { sw: "Nina kibali cha kazi.", de: "Ich habe eine Arbeitserlaubnis.", gloss: "cha — Kl. 7 Besitz" }
    ],
    culture: "Behördengänge in Tansania brauchen Geduld und Papier: Bringt immer <b>nakala</b> " +
             "(Kopien) mit, am besten mehrere. Und grüßt am Schalter erst richtig — " +
             "<i>Shikamoo</i> bei älteren Beamten — bevor ihr euer Anliegen nennt. " +
             "Wer direkt mit der Sache anfängt, wartet länger.",
    practice: [
      { instruction: "Die höfliche Bitte. Ein Wort, das im Büro jede Tür öffnet.",
        q: "„Ich bitte um ein Dokument.“ (2 Wörter)", build: "na + omba + hati", a: "Naomba hati",
        explain: "Naomba = ich bitte um. Höflicher als Nataka (ich will) und überall üblich." },
      { instruction: "Jetzt Behördensprache: Passiv, Klasse 3 — mkataba bekommt u-.",
        q: "„Der Vertrag ist geschrieben.“ (2 Wörter)", build: "mkataba + u + me + andik + wa",
        a: "Mkataba umeandikwa",
        explain: "mkataba gehört zu Kl. 3, also u-. -me- für das fertige Ergebnis, -wa fürs Passiv." },
      { instruction: "Und die Frage nach dem Termin — ganz ohne Verb.",
        q: "„Wann ist das Treffen?“ (3 Wörter)", build: "mkutano + ni + lini", a: "Mkutano ni lini",
        explain: "ni = ist, lini = wann. Im Swahili braucht diese Frage kein weiteres Verb." }
    ],
    exercises: [
      { type: "translate", q: "Ich bitte um mein Dokument. (3 Wörter)", a: "Naomba hati yangu" },
      { type: "translate", q: "Wann ist das Treffen? (3 Wörter)", a: "Mkutano ni lini" },
      { type: "choice", q: "Am Schalter steht Imefungwa. Was heißt das?",
        options: ["Es ist offen", "Es ist geschlossen", "Es ist besetzt", "Es ist kaputt"], a: 1,
        why: "kufunga = schließen, kufungwa = geschlossen werden. Imefungwa: es ist geschlossen." },
      { type: "translate", q: "Das Büro ist heute geschlossen. (3 Wörter)", a: "Ofisi imefungwa leo" },
      { type: "choice", q: "Was ist ein kibali cha kazi?",
        options: ["Ein Arbeitsvertrag", "Eine Arbeitserlaubnis", "Ein Gehaltszettel", "Ein Bürogebäude"], a: 1,
        why: "kibali = Genehmigung, cha kazi = der Arbeit. Der Vertrag wäre mkataba." },
      { type: "translate", q: "Ich habe eine Arbeitserlaubnis. (4 Wörter)", a: "Nina kibali cha kazi" }
    ]
  },

  /* ============================ 24 ============================ */
  {
    id: "l24",
    title: "Safarini — unterwegs in Tansania",
    goal: "Fahrkarten kaufen, nach Preis und Ziel fragen, mit Gepäck ankommen.",
    mwalimu: [
      { sw: "Nauli ni ngapi? Basi hili linakwenda wapi?", de: "Was kostet die Fahrt? Wohin fährt dieser Bus?" },
      { sw: "", de: "Die letzte Lektion bringt euch aus dem Haus: Daladala, Bus, Fähre nach Sansibar. Alles, was ihr dafür braucht, habt ihr — wir setzen es nur zusammen." },
      { sw: "", de: "Und dann, rafiki zangu, seid ihr durch. <b>Hongera sana!</b> Der Rest ist Übung, und die macht ihr am besten dort: <i>Karibuni Tanzania.</i>" }
    ],
    grammar: [
      { h: "Die vier Fragen am Busbahnhof",
        body: "<b>Nauli ni ngapi?</b> Was kostet die Fahrt?<br>" +
              "<b>Basi linaondoka saa ngapi?</b> Wann fährt der Bus ab?<br>" +
              "<b>Basi hili linakwenda wapi?</b> Wohin fährt dieser Bus?<br>" +
              "<b>Safari inachukua muda gani?</b> Wie lange dauert die Fahrt?<br><br>" +
              "Alles bekannte Bausteine: ngapi, saa ngapi, wapi, gani." },
      { h: "Die Klasse macht den Unterschied",
        body: "Fahrzeuge sind keine Personen — die Vorsilbe richtet sich nach der Klasse:<br><br>" +
              "<b>basi</b> (Kl. 5) → <b>li</b>naondoka<br>" +
              "<b>daladala</b> (Kl. 9) → <b>i</b>naondoka<br>" +
              "<b>mabasi</b> (Kl. 6) → <b>ya</b>naondoka<br>" +
              "<b>gari</b> (Kl. 5) → <b>li</b>naenda<br><br>" +
              "Wer hier a- sagt, macht aus dem Bus einen Menschen." },
      { h: "Ticket und Gepäck",
        body: "<b>Naomba tikiti mbili za Moshi.</b> Ich bitte um zwei Tickets nach Moshi.<br>" +
              "<b>Nina mzigo mmoja.</b> Ich habe ein Gepäckstück.<br>" +
              "<b>Mzigo wangu uko wapi?</b> Wo ist mein Gepäck?<br>" +
              "<b>Abiria wote wapande.</b> Alle Fahrgäste sollen einsteigen.<br><br>" +
              "Im Daladala zahlt ihr beim Schaffner, im Bus vorher am Schalter." },
      { h: "Unterwegs sagen, was ihr wollt",
        body: "<b>Shusha hapa, tafadhali.</b> Lass mich bitte hier raus.<br>" +
              "<b>Nipeleke Kariakoo.</b> Bring mich nach Kariakoo.<br>" +
              "<b>Twende polepole.</b> Lass uns langsam fahren.<br>" +
              "<b>Simama hapa.</b> Halt hier.<br><br>" +
              "<i>Polepole</i> ist übrigens ein vollwertiger Fahrstil-Wunsch und wird ernst genommen." }
    ],
    vocab: ["tikiti", "nauli", "dereva", "abiria", "mzigo", "basi", "safari",
            "kivuko", "stendi", "kuondoka"],
    examples: [
      { sw: "Nauli ni ngapi?", de: "Was kostet die Fahrt?", gloss: "ngapi = wie viel" },
      { sw: "Basi hili linakwenda wapi?", de: "Wohin fährt dieser Bus?", gloss: "basi Kl. 5 → li-" },
      { sw: "Naomba tikiti mbili za Moshi.", de: "Ich bitte um zwei Tickets nach Moshi.", gloss: "mbili — Kl. 10" },
      { sw: "Mzigo wangu uko wapi?", de: "Wo ist mein Gepäck?", gloss: "mzigo Kl. 3 → wangu, uko" },
      { sw: "Basi linaondoka saa mbili.", de: "Der Bus fährt um acht Uhr ab.", gloss: "Swahili-Uhr: saa mbili = 8 Uhr" }
    ],
    culture: "Die Fähre nach Sansibar und die Kigamboni-Fähre sind zwei Welten: Die eine bucht man " +
             "mit Pass am Schalter, die andere besteigt man mit ein paar Hundert Schilling in der " +
             "Hand. Für Überlandfahrten gilt: Morgens losfahren. Wer nachmittags startet, steht " +
             "im Stau von Dar, bevor die Reise überhaupt anfängt.",
    practice: [
      { instruction: "Die wichtigste Frage überhaupt — und sie kommt ohne Verb aus.",
        q: "„Was kostet die Fahrt?“ (3 Wörter)", build: "nauli + ni + ngapi", a: "Nauli ni ngapi",
        explain: "nauli = Fahrpreis, ni = ist, ngapi = wie viel. Dieselbe Bauweise wie Bei gani?" },
      { instruction: "Jetzt aufpassen: basi gehört zu Klasse 5. Welche Vorsilbe bekommt das Verb?",
        q: "„Wohin fährt dieser Bus?“ (4 Wörter)", build: "basi + hili + li + na + kw + enda + wapi",
        a: "Basi hili linakwenda wapi",
        explain: "Kl. 5 → li-, und das Demonstrativ heißt hili. Mit a- würde der Bus zum Menschen." },
      { instruction: "Und zum Abschluss dein Gepäck. mzigo ist Klasse 3 — mein heißt dann wangu.",
        q: "„Wo ist mein Gepäck?“ (3 Wörter)", build: "mzigo + wangu + u + ko + wapi",
        a: "Mzigo wangu uko wapi",
        explain: "Kl. 3: wangu und uko. Dieselbe Kongruenz wie in mti wangu." }
    ],
    exercises: [
      { type: "translate", q: "Was kostet die Fahrt? (3 Wörter)", a: "Nauli ni ngapi" },
      { type: "choice", q: "Welche Vorsilbe bekommt basi (Klasse 5) im Verb?",
        options: ["a-", "i-", "li-", "ya-"], a: 2,
        why: "Klasse 5 hat li-: Basi linaondoka. a- wäre eine Person, i- Klasse 9, ya- der Plural." },
      { type: "translate", q: "Wohin fährt dieser Bus? (4 Wörter)", a: "Basi hili linakwenda wapi" },
      { type: "translate", q: "Wo ist mein Gepäck? (3 Wörter)", a: "Mzigo wangu uko wapi" },
      { type: "translate", q: "Ich bitte um zwei Tickets. (3 Wörter)", a: "Naomba tikiti mbili" },
      { type: "choice", q: "Der Bus fährt saa mbili. Wann ist das?",
        options: ["Um 2 Uhr", "Um 8 Uhr", "Um 10 Uhr", "Um 12 Uhr"], a: 1,
        why: "Die Swahili-Uhr beginnt bei Sonnenaufgang: saa mbili = zwei Stunden nach 6 Uhr = 8 Uhr." }
    ]
  }
];
