/* Konjugationsdaten + Verbliste für den Konjugator. */
window.KS = window.KS || {};

/* ---- Subjektpräfixe (positiv / negativ) ---- */
KS.subjects = [
  { id:"1sg",  label:"ich",            pos:"ni",  neg:"si",    group:"Personen" },
  { id:"2sg",  label:"du",             pos:"u",   neg:"hu",    group:"Personen" },
  { id:"3sg",  label:"er / sie",       pos:"a",   neg:"ha",    group:"Personen" },
  { id:"1pl",  label:"wir",            pos:"tu",  neg:"hatu",  group:"Personen" },
  { id:"2pl",  label:"ihr",            pos:"m",   neg:"ham",   group:"Personen" },
  { id:"3pl",  label:"sie (Plural)",   pos:"wa",  neg:"hawa",  group:"Personen" },
  { id:"cl3",  label:"Kl. 3 (mti …)",  pos:"u",   neg:"hau",   group:"Sachklassen" },
  { id:"cl4",  label:"Kl. 4 (miti …)", pos:"i",   neg:"hai",   group:"Sachklassen" },
  { id:"cl5",  label:"Kl. 5 (gari …)", pos:"li",  neg:"hali",  group:"Sachklassen" },
  { id:"cl6",  label:"Kl. 6 (magari …)",pos:"ya", neg:"haya",  group:"Sachklassen" },
  { id:"cl7",  label:"Kl. 7 (kitu …)", pos:"ki",  neg:"haki",  group:"Sachklassen" },
  { id:"cl8",  label:"Kl. 8 (vitu …)", pos:"vi",  neg:"havi",  group:"Sachklassen" },
  { id:"cl9",  label:"Kl. 9 (nyumba …)",pos:"i",  neg:"hai",   group:"Sachklassen" },
  { id:"cl10", label:"Kl. 10 (nyumba …)",pos:"zi",neg:"hazi",  group:"Sachklassen" }
];

/* ---- Objektinfixe ---- */
KS.objects = [
  { id:"none", label:"— kein Objekt —", pfx:"" },
  { id:"o1sg", label:"mich",            pfx:"ni" },
  { id:"o2sg", label:"dich",            pfx:"ku" },
  { id:"o3sg", label:"ihn / sie",       pfx:"m",  vowelForm:"mw" },
  { id:"o1pl", label:"uns",             pfx:"tu" },
  { id:"o3pl", label:"sie (Personen)",  pfx:"wa" },
  { id:"ocl7", label:"es (Kl. 7, kitu)",pfx:"ki", vowelForm:"ch" },
  { id:"ocl8", label:"sie (Kl. 8, vitu)",pfx:"vi",vowelForm:"vy" },
  { id:"ocl9", label:"es (Kl. 9, nyumba)",pfx:"i",vowelForm:"y" },
  { id:"ocl10",label:"sie (Kl. 10)",    pfx:"zi", vowelForm:"z" },
  { id:"ocl5", label:"es (Kl. 5, gari)",pfx:"li", vowelForm:"l" },
  { id:"ocl6", label:"sie (Kl. 6, magari)",pfx:"ya",vowelForm:"y" }
];

/* ---- Tempora / Modi ----
   keepKu  : einsilbige Verben behalten das ku-
   finalE  : Endvokal wird -e (Konjunktiv)
   finalI  : Endvokal wird -i (Präsens-Verneinung)
   noSubj  : kein Subjektpräfix (hu- Gewohnheitsform)     */
KS.tenses = [
  { id:"na",   label:"Präsens (-na-)",        de:"ich lese / ich bin am Lesen",
    posMarker:"na", keepKu:true,
    negMarker:"",   negKeepKu:false, finalI:true,
    hint:"Die Standard-Gegenwart. Verneint verschwindet -na- komplett und der Endvokal wird -i." },
  { id:"li",   label:"Vergangenheit (-li-)",  de:"ich las / ich habe gelesen",
    posMarker:"li", keepKu:true,
    negMarker:"ku", negKeepKu:false,
    hint:"Verneint wird -li- zu -ku-: nilisoma → sikusoma." },
  { id:"ta",   label:"Futur (-ta-)",          de:"ich werde lesen",
    posMarker:"ta", keepKu:true,
    negMarker:"ta", negKeepKu:true,
    hint:"Das einfachste Tempus: -ta- bleibt auch in der Verneinung." },
  { id:"me",   label:"Perfekt (-me-)",        de:"ich habe gelesen (und es wirkt nach)",
    posMarker:"me", keepKu:true,
    negMarker:"ja", negKeepKu:false,
    hint:"Verneint wird -me- zu -ja- und heißt „noch nicht“: sijasoma = ich habe noch nicht gelesen." },
  { id:"ki",   label:"Bedingung (-ki-)",      de:"wenn / während ich lese",
    posMarker:"ki", keepKu:false,
    negMarker:"sipo", negKeepKu:false,
    hint:"Ukitaka = wenn du willst. Sehr häufig im Alltag." },
  { id:"ka",   label:"Anreihung (-ka-)",      de:"und dann las ich",
    posMarker:"ka", keepKu:false,
    negMarker:null,
    hint:"Reiht Handlungen aneinander: Nilikwenda sokoni nikanunua ndizi. Keine eigene Verneinung." },
  { id:"nge",  label:"Konjunktiv (-nge-)",    de:"ich würde lesen",
    posMarker:"nge", keepKu:true,
    negMarker:"nge", negKeepKu:true,
    hint:"Ningependa = ich hätte gerne. Die höflichste Art, etwas zu wollen." },
  { id:"hu",   label:"Gewohnheit (hu-)",      de:"ich lese für gewöhnlich",
    posMarker:"hu", keepKu:false, noSubj:true,
    negMarker:null,
    hint:"ACHTUNG: ohne Subjektpräfix! husoma gilt für alle Personen." },
  { id:"subj", label:"Konjunktiv/Aufforderung", de:"dass ich lese / lass mich lesen",
    posMarker:"", keepKu:false, finalE:true,
    negMarker:"si", negKeepKu:false, finalE_neg:true,
    hint:"Twende! = Lass uns gehen! Nikusaidie? = Soll ich dir helfen?" },
  { id:"imp",  label:"Befehlsform",           de:"lies!",
    imperative:true,
    hint:"Singular = purer Stamm (Soma!). Plural = Stamm + -eni (Someni!)." }
];

/* ---- Verbliste für den Konjugator ----
   mono   : einsilbiger Stamm (behält ku- in bestimmten Zeiten)
   arabic : arabischstämmig — Endvokal ändert sich NIE
   irr    : unregelmäßige Sonderformen                                */
KS.verbs = [
  { inf:"kusoma",     stem:"soma",     de:"lesen, lernen" },
  { inf:"kuandika",   stem:"andika",   de:"schreiben" },
  { inf:"kusema",     stem:"sema",     de:"sagen, sprechen" },
  { inf:"kufanya",    stem:"fanya",    de:"machen, tun" },
  { inf:"kupenda",    stem:"penda",    de:"mögen, lieben" },
  { inf:"kutaka",     stem:"taka",     de:"wollen" },
  { inf:"kuona",      stem:"ona",      de:"sehen" },
  { inf:"kusikia",    stem:"sikia",    de:"hören, fühlen" },
  { inf:"kujua",      stem:"jua",      de:"wissen, kennen" },
  { inf:"kuweza",     stem:"weza",     de:"können" },
  { inf:"kupata",     stem:"pata",     de:"bekommen" },
  { inf:"kuleta",     stem:"leta",     de:"bringen" },
  { inf:"kununua",    stem:"nunua",    de:"kaufen" },
  { inf:"kuuza",      stem:"uza",      de:"verkaufen" },
  { inf:"kulipa",     stem:"lipa",     de:"bezahlen" },
  { inf:"kupika",     stem:"pika",     de:"kochen" },
  { inf:"kulala",     stem:"lala",     de:"schlafen" },
  { inf:"kukaa",      stem:"kaa",      de:"wohnen, sitzen, bleiben" },
  { inf:"kufika",     stem:"fika",     de:"ankommen" },
  { inf:"kuondoka",   stem:"ondoka",   de:"weggehen, abfahren" },
  { inf:"kusaidia",   stem:"saidia",   de:"helfen" },
  { inf:"kujifunza",  stem:"jifunza",  de:"lernen" },
  { inf:"kuelewa",    stem:"elewa",    de:"verstehen" },
  { inf:"kuuliza",    stem:"uliza",    de:"fragen" },
  { inf:"kuanza",     stem:"anza",     de:"anfangen" },
  { inf:"kucheza",    stem:"cheza",    de:"spielen, tanzen" },
  { inf:"kutembea",   stem:"tembea",   de:"gehen, spazieren" },
  { inf:"kufungua",   stem:"fungua",   de:"öffnen" },
  { inf:"kupanda",    stem:"panda",    de:"einsteigen, besteigen" },
  { inf:"kushuka",    stem:"shuka",    de:"aussteigen" },
  { inf:"kukumbuka",  stem:"kumbuka",  de:"sich erinnern" },
  { inf:"kuosha",     stem:"osha",     de:"waschen" },

  /* arabischstämmig: Endvokal bleibt immer gleich */
  { inf:"kurudi",     stem:"rudi",     de:"zurückkehren",  arabic:true },
  { inf:"kusubiri",   stem:"subiri",   de:"warten",        arabic:true },
  { inf:"kusafiri",   stem:"safiri",   de:"reisen",        arabic:true },
  { inf:"kuhitaji",   stem:"hitaji",   de:"brauchen",      arabic:true },
  { inf:"kufikiri",   stem:"fikiri",   de:"denken",        arabic:true },
  { inf:"kujibu",     stem:"jibu",     de:"antworten",     arabic:true },
  { inf:"kusahau",    stem:"sahau",    de:"vergessen",     arabic:true },

  /* einsilbig: behalten ku- in -na-, -li-, -ta-, -me-, -nge- */
  { inf:"kula",       stem:"la",       de:"essen",   mono:true },
  { inf:"kunywa",     stem:"nywa",     de:"trinken", mono:true },
  { inf:"kuja",       stem:"ja",       de:"kommen",  mono:true, irr:{ imp:"Njoo!", impPl:"Njooni!" } },
  { inf:"kuwa",       stem:"wa",       de:"sein, werden", mono:true },
  { inf:"kwenda",     stem:"enda",     de:"gehen, fahren", mono:true,
    irr:{ imp:"Nenda!", impPl:"Nendeni!" },
    note:"ku- + enda wird kw-enda: ninakwenda." }
];

/* ---- Nomenklassen-Kongruenztabelle (für Referenz + Drills) ---- */
KS.classes = [
  { cls:"1",  name:"M-/WA- Sg",  sense:"Menschen",                    ex:"mtoto",  adj:"m",   subj:"a",  poss:"w",  a:"wa",  dem:"huyu" },
  { cls:"2",  name:"M-/WA- Pl",  sense:"Menschen",                    ex:"watoto", adj:"wa",  subj:"wa", poss:"w",  a:"wa",  dem:"hawa" },
  { cls:"3",  name:"M-/MI- Sg",  sense:"Bäume, Körperteile, Natur",   ex:"mti",    adj:"m",   subj:"u",  poss:"w",  a:"wa",  dem:"huu" },
  { cls:"4",  name:"M-/MI- Pl",  sense:"Bäume, Körperteile, Natur",   ex:"miti",   adj:"mi",  subj:"i",  poss:"y",  a:"ya",  dem:"hii" },
  { cls:"5",  name:"JI-/MA- Sg", sense:"Früchte, Paare, Großes",      ex:"gari",   adj:"",    subj:"li", poss:"l",  a:"la",  dem:"hili" },
  { cls:"6",  name:"JI-/MA- Pl", sense:"Früchte, Paare, Großes",      ex:"magari", adj:"ma",  subj:"ya", poss:"y",  a:"ya",  dem:"haya" },
  { cls:"7",  name:"KI-/VI- Sg", sense:"Dinge, Werkzeuge, Sprachen",  ex:"kitu",   adj:"ki",  subj:"ki", poss:"ch", a:"cha", dem:"hiki" },
  { cls:"8",  name:"KI-/VI- Pl", sense:"Dinge, Werkzeuge, Sprachen",  ex:"vitu",   adj:"vi",  subj:"vi", poss:"vy", a:"vya", dem:"hivi" },
  { cls:"9",  name:"N- Sg",      sense:"Tiere, Lehnwörter, Diverses", ex:"nyumba", adj:"n",   subj:"i",  poss:"y",  a:"ya",  dem:"hii" },
  { cls:"10", name:"N- Pl",      sense:"Tiere, Lehnwörter, Diverses", ex:"nyumba", adj:"n",   subj:"zi", poss:"z",  a:"za",  dem:"hizi" },
  { cls:"11", name:"U- Sg",      sense:"Langes, Dünnes, Abstraktes",  ex:"ukuta",  adj:"m",   subj:"u",  poss:"w",  a:"wa",  dem:"huu" },
  { cls:"14", name:"U- Abstrakt",sense:"Abstrakta (ohne Plural)",     ex:"uhuru",  adj:"m",   subj:"u",  poss:"w",  a:"wa",  dem:"huu" },
  { cls:"15", name:"KU- Infinitiv",sense:"Verb als Nomen",            ex:"kusoma", adj:"ku",  subj:"ku", poss:"kw", a:"kwa", dem:"huku" },
  { cls:"16", name:"PA- Ort",    sense:"bestimmter Ort",              ex:"mahali", adj:"pa",  subj:"pa", poss:"p",  a:"pa",  dem:"hapa" }
];

/* ---- Possessivstämme ---- */
KS.possessives = [
  { stem:"angu", de:"mein" },
  { stem:"ako",  de:"dein" },
  { stem:"ake",  de:"sein / ihr" },
  { stem:"etu",  de:"unser" },
  { stem:"enu",  de:"euer" },
  { stem:"ao",   de:"ihr (Plural)" }
];
