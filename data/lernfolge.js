/* Lernfolge für neue Vokabeln.

   Neue Wörter werden nicht zufällig gezogen, sondern in dieser Rangfolge:
     1. Wörter aus Lektionen, die man schon gemacht oder angefangen hat,
        plus die nächste offene Lektion — in Lektionsreihenfolge
     2. der Alltagswortschatz unten — in genau dieser Reihenfolge
     3. Wörter aus späteren Lektionen
     4. alles Übrige, nach Themen gewichtet (Tiere, Körperteile und
        Spezialgerichte kommen zuletzt)

   Die Liste ist nach Nützlichkeit für die ersten Wochen in Dar geordnet,
   nicht alphabetisch. Umsortieren heißt: Zeilen verschieben.
   Jeder Eintrag muss exakt einem sw-Wert aus data/vocab.js entsprechen —
   test/test-data.js prüft das.                                          */
window.KS = window.KS || {};

KS.grundwortschatz = [
  /* Höflichkeit und Verständigung — ohne das geht nichts */
  "Asante", "Tafadhali", "Samahani", "Ndiyo", "Hapana", "Sawa",
  "Karibu", "Habari?", "Nzuri", "Shikamoo", "Marahaba",
  "Pole", "Pole pole", "Kwaheri", "Hakuna shida",

  /* Fragen stellen und Sätze verbinden */
  "nini", "wapi", "nani", "lini", "kwa nini", "Ngapi?",
  "na", "lakini", "sana", "kidogo", "hapa", "sasa", "bado", "pia", "tu",

  /* Die Verben, die man jeden Tag braucht */
  "kutaka", "kwenda", "kuja", "kula", "kunywa", "kujua", "kuelewa",
  "kusema", "kufanya", "kupenda", "kununua", "kulipa", "kuhitaji",
  "kusaidia", "kukaa", "kuona", "kusubiri", "kurudi", "kufika", "kuweza",

  /* Zahlen, Geld, Markt */
  "moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa", "kumi",
  "pesa", "bei", "Bei gani?", "shilingi", "ghali", "rahisi",
  "mia", "elfu", "soko", "duka", "chenji",

  /* Essen und Trinken — das Alltägliche, nicht das Festessen */
  "maji", "chakula", "chai", "kahawa", "wali", "ugali",
  "nyama", "kuku", "samaki", "mkate", "yai", "ndizi", "sukari", "maziwa",

  /* Zeit */
  "leo", "kesho", "jana", "asubuhi", "mchana", "jioni", "usiku",
  "saa", "Saa ngapi?", "siku", "wiki",

  /* Unterwegs in Dar */
  "daladala", "bajaji", "bodaboda", "Unakwenda wapi?", "Shusha hapa",
  "barabara", "stendi", "gari", "mji",

  /* Menschen und Zuhause */
  "mtu", "mtoto", "rafiki", "jina", "mama", "baba", "jirani",
  "nyumba", "chumba", "choo", "ufunguo", "umeme", "simu", "kazi",

  /* Eigenschaften */
  "-zuri", "-baya", "-kubwa", "-dogo", "-pya", "safi", "muhimu", "tayari",

  /* Gesundheit — hoffentlich selten gebraucht, aber dann dringend */
  "Ninaumwa", "dawa", "daktari", "hospitali", "homa", "mbu", "chandarua"
];
