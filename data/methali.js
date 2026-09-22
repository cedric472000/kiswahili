/* Methali — Swahili-Sprichwörter.
   Auf einem Kanga steht am unteren Rand immer ein Spruch, das jina.
   Genau diese Rolle haben sie hier: ein Band unter dem Lernfeld.
   Ausgewählt sind Sprichwörter, die zum Lernen passen — Geduld,
   Beharrlichkeit, Fragen dürfen.                                     */
window.KS = window.KS || {};

KS.methali = [
  { sw: "Haraka haraka haina baraka",
    de: "Eile hat keinen Segen",
    note: "Das meistzitierte Sprichwort Tansanias — und die Begründung für „pole pole“." },
  { sw: "Pole pole ndiyo mwendo",
    de: "Langsam, langsam — so kommt man voran",
    note: "Nicht Trägheit, sondern Haltung. Gilt für Verkehr, Verhandlungen und Vokabeln." },
  { sw: "Haba na haba hujaza kibaba",
    de: "Wenig und wenig füllt das Maß",
    note: "Ein kibaba ist ein altes Hohlmaß für Getreide. Zehn Minuten am Tag sind genug." },
  { sw: "Penye nia pana njia",
    de: "Wo ein Wille ist, ist ein Weg" },
  { sw: "Subira huvuta heri",
    de: "Geduld zieht Segen nach sich" },
  { sw: "Elimu ni bahari",
    de: "Bildung ist ein Meer",
    note: "Ohne Ufer — man wird nie fertig, und das ist der Punkt." },
  { sw: "Kuuliza si ujinga",
    de: "Fragen ist keine Dummheit",
    note: "Merk dir den Satz für die ersten Wochen in Dar." },
  { sw: "Mwenda pole hajikwai",
    de: "Wer langsam geht, stolpert nicht" },
  { sw: "Usipoziba ufa utajenga ukuta",
    de: "Verschließt du den Riss nicht, wirst du eine Mauer bauen müssen",
    note: "Kleine Lücken früh schließen — sonst werden sie groß." },
  { sw: "Asiyefunzwa na mamaye hufunzwa na ulimwengu",
    de: "Wen die Mutter nicht lehrt, den lehrt die Welt" },
  { sw: "Mstahimilivu hula mbivu",
    de: "Der Geduldige isst das Reife" },
  { sw: "Kila ndege huruka na mbawa zake",
    de: "Jeder Vogel fliegt mit seinen eigenen Flügeln",
    note: "Vergleich dich nicht — lern in deinem Tempo." },
  { sw: "Mgeni njoo mwenyeji apone",
    de: "Gast, komm — damit der Gastgeber genese",
    note: "Gastfreundschaft nützt beiden Seiten. Sehr tansanisch gedacht." },
  { sw: "Akili ni nywele, kila mtu ana zake",
    de: "Verstand ist wie Haar — jeder hat seinen eigenen" }
];

/* Sprichwort des Tages: wechselt täglich, aber innerhalb eines Tages
   stabil, damit es beim Blättern nicht herumspringt. */
KS.methaliLeo = function () {
  var tag = Math.floor(Date.now() / 864e5);
  return KS.methali[tag % KS.methali.length];
};
