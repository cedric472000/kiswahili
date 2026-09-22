/* Referenzgrammatik zum Nachschlagen. Volltextsuchbar über title + tags + body. */
window.KS = window.KS || {};

KS.grammar = [
  {
    id: "g-aussprache",
    title: "Aussprache & Betonung",
    tags: "aussprache betonung vokale laute lesen schreiben",
    sections: [
      { h: "Die gute Nachricht",
        body: "Swahili wird gelesen, wie es geschrieben wird — vollständig lautgetreu. " +
              "Es gibt <b>keine Töne</b> (anders als bei vielen afrikanischen Sprachen) und nur " +
              "fünf reine Vokale wie im Italienischen oder Spanischen:<br>" +
              "<b>a</b> wie in Vater · <b>e</b> wie in Bett · <b>i</b> wie in Biene · " +
              "<b>o</b> wie in Sonne · <b>u</b> wie in Buch<br>" +
              "Vokale werden nie verschluckt und nie zu Schwa abgeschwächt." },
      { h: "Betonung",
        body: "<b>Immer auf der vorletzten Silbe.</b> Ohne Ausnahme.<br>" +
              "ki-<b>TA</b>-bu · ni-na-<b>SO</b>-ma · Ki-swa-<b>HI</b>-li · " +
              "Da-r es Sa-<b>LAA</b>-m · ha-ku-<b>NA</b> ma-<b>TA</b>-ta<br>" +
              "Kommt eine Endung dazu, wandert die Betonung mit: " +
              "<i>NYUM-ba</i> → <i>nyum-BA-ni</i>." },
      { h: "Besondere Buchstaben",
        body: "<b>ny</b> wie in Cognac / span. ñ — nyumba, nyama<br>" +
              "<b>ng'</b> ist EIN Laut wie in „Ding“, ohne hörbares g danach — ng'ombe<br>" +
              "<b>ng</b> ohne Apostroph = ng + g wie in „Finger“ — ninge<br>" +
              "<b>dh</b> stimmhaftes th wie engl. „this“ — dhahabu<br>" +
              "<b>th</b> stimmloses th wie engl. „think“ — thelathini<br>" +
              "<b>gh</b> Reibelaut hinten im Rachen — ghali<br>" +
              "<b>r</b> gerollt (Zungenspitze), nicht deutsch im Rachen" },
      { h: "Konsonantenkombinationen am Wortanfang",
        body: "<b>mb, nd, ng, nj, mv, nz</b> stehen oft am Wortanfang und werden " +
              "zusammen gesprochen — kein Vokal dazwischen schieben:<br>" +
              "<i>mbwa</i> (Hund), <i>ndizi</i> (Banane), <i>njia</i> (Weg), <i>mvua</i> (Regen)<br>" +
              "Das ist für deutsche Zungen die einzige echte Hürde. Übt: m-bwa, n-dizi." }
    ]
  },
  {
    id: "g-klassen",
    title: "Nomenklassen — die vollständige Übersicht",
    tags: "nomenklassen klassen substantiv plural kongruenz konkordanz m wa ki vi",
    sections: [
      { h: "Was Nomenklassen sind",
        body: "Swahili kennt kein Geschlecht, sondern rund 15 Klassen. Jedes Nomen gehört " +
              "zu einer davon, und diese Klasse bestimmt die Vorsilbe von Adjektiv, Verb, " +
              "Possessiv, Demonstrativ und Zahlwort. Die Klassen sind meist paarweise " +
              "organisiert: eine für Singular, eine für Plural." },
      { h: "Die Klassenpaare",
        body: "<table class='tbl'>" +
              "<tr><th>Kl.</th><th>Vorsilbe</th><th>Bedeutungskern</th><th>Beispiel</th></tr>" +
              "<tr><td>1/2</td><td>m- / wa-</td><td>Menschen</td><td>mtoto / watoto</td></tr>" +
              "<tr><td>3/4</td><td>m- / mi-</td><td>Bäume, Pflanzen, Körperteile, Naturkräfte</td><td>mti / miti</td></tr>" +
              "<tr><td>5/6</td><td>ji- / ma-</td><td>Früchte, Paarweises, Großes, viele Lehnwörter</td><td>gari / magari</td></tr>" +
              "<tr><td>7/8</td><td>ki- / vi-</td><td>Dinge, Werkzeuge, Sprachen, Verkleinerungen</td><td>kitu / vitu</td></tr>" +
              "<tr><td>9/10</td><td>n- / n-</td><td>Tiere, Lehnwörter, sehr viel Alltag</td><td>nyumba / nyumba</td></tr>" +
              "<tr><td>11/10</td><td>u- / n-</td><td>Langes, Dünnes, Flächiges</td><td>ukuta / kuta</td></tr>" +
              "<tr><td>14</td><td>u-</td><td>Abstrakta, Länder (kein Plural)</td><td>uhuru, Ujerumani</td></tr>" +
              "<tr><td>15</td><td>ku-</td><td>Infinitive als Nomen</td><td>kusoma</td></tr>" +
              "<tr><td>16/17/18</td><td>pa- / ku- / mu-</td><td>Orte</td><td>mahali, nyumbani</td></tr>" +
              "</table>" },
      { h: "Die komplette Kongruenztabelle",
        body: "<table class='tbl'>" +
              "<tr><th>Kl.</th><th>Beispiel</th><th>Adjektiv</th><th>Verb-Subjekt</th><th>Possessiv</th><th>-a</th><th>dieser</th></tr>" +
              "<tr><td>1</td><td>mtoto</td><td>mzuri</td><td>a-</td><td>wangu</td><td>wa</td><td>huyu</td></tr>" +
              "<tr><td>2</td><td>watoto</td><td>wazuri</td><td>wa-</td><td>wangu</td><td>wa</td><td>hawa</td></tr>" +
              "<tr><td>3</td><td>mti</td><td>mzuri</td><td>u-</td><td>wangu</td><td>wa</td><td>huu</td></tr>" +
              "<tr><td>4</td><td>miti</td><td>mizuri</td><td>i-</td><td>yangu</td><td>ya</td><td>hii</td></tr>" +
              "<tr><td>5</td><td>gari</td><td>zuri</td><td>li-</td><td>langu</td><td>la</td><td>hili</td></tr>" +
              "<tr><td>6</td><td>magari</td><td>mazuri</td><td>ya-</td><td>yangu</td><td>ya</td><td>haya</td></tr>" +
              "<tr><td>7</td><td>kitu</td><td>kizuri</td><td>ki-</td><td>changu</td><td>cha</td><td>hiki</td></tr>" +
              "<tr><td>8</td><td>vitu</td><td>vizuri</td><td>vi-</td><td>vyangu</td><td>vya</td><td>hivi</td></tr>" +
              "<tr><td>9</td><td>nyumba</td><td>nzuri</td><td>i-</td><td>yangu</td><td>ya</td><td>hii</td></tr>" +
              "<tr><td>10</td><td>nyumba</td><td>nzuri</td><td>zi-</td><td>zangu</td><td>za</td><td>hizi</td></tr>" +
              "<tr><td>11</td><td>ukuta</td><td>mzuri</td><td>u-</td><td>wangu</td><td>wa</td><td>huu</td></tr>" +
              "<tr><td>14</td><td>uhuru</td><td>mzuri</td><td>u-</td><td>wangu</td><td>wa</td><td>huu</td></tr>" +
              "<tr><td>16</td><td>mahali</td><td>pazuri</td><td>pa-</td><td>pangu</td><td>pa</td><td>hapa</td></tr>" +
              "</table>" },
      { h: "Lautveränderungen, die man kennen muss",
        body: "<b>m-</b> wird vor Vokal zu <b>mw-</b>: mw-alimu, mw-anafunzi<br>" +
              "<b>ki-</b> wird vor Vokal zu <b>ch-</b>: ch-akula (statt *ki-akula)<br>" +
              "<b>vi-</b> wird vor Vokal zu <b>vy-</b>: vy-akula<br>" +
              "<b>ku-</b> wird vor Vokal zu <b>kw-</b>: kw-enda<br>" +
              "<b>n-</b> verschwindet oder verändert den Folgekonsonanten: " +
              "n + zuri = nzuri, aber n + kubwa = kubwa (kein n)" },
      { h: "Der praktische Rat",
        body: "Lernt jedes Nomen im Paar mit seinem Plural. Wer <i>mtoto/watoto</i> lernt, " +
              "hat die Klasse gratis dazu. Wer nur <i>mtoto</i> lernt, muss die Klasse später " +
              "einzeln nachlernen — und das ist die eigentliche Arbeit." }
    ]
  },
  {
    id: "g-verb",
    title: "Der Verbbaukasten",
    tags: "verb aufbau morpheme struktur konjugation stamm infinitiv",
    sections: [
      { h: "Die feste Reihenfolge",
        body: "<div class='formula'>Subjekt + Tempus + (Objekt) + (ku-) + Stamm + (Erweiterungen) + Endvokal</div>" +
              "Diese Reihenfolge gilt immer. Wer sie kennt, kann jede Form zerlegen und jede Form bauen." },
      { h: "Beispiele der Zerlegung",
        body: "<b>ni-na-soma</b> → ich + Präsens + lesen = ich lese<br>" +
              "<b>a-li-ki-soma</b> → er/sie + Vergangenheit + es(Kl.7) + lesen = er/sie las es<br>" +
              "<b>tu-ta-kw-enda</b> → wir + Futur + ku + gehen = wir werden gehen<br>" +
              "<b>ni-me-mw-ona</b> → ich + Perfekt + ihn/sie + sehen = ich habe ihn/sie gesehen<br>" +
              "<b>ha-wa-ta-ni-saidi-a</b> → nicht + sie + Futur + mir + helfen = sie werden mir nicht helfen" },
      { h: "Subjektpräfixe",
        body: "<b>Personen:</b> ni- (ich), u- (du), a- (er/sie), tu- (wir), m- (ihr), wa- (sie)<br>" +
              "<b>Sachklassen:</b> Kl.3 u-, Kl.4 i-, Kl.5 li-, Kl.6 ya-, Kl.7 ki-, Kl.8 vi-, " +
              "Kl.9 i-, Kl.10 zi-, Kl.11/14 u-<br>" +
              "Wichtig: Ein Ding bekommt <i>nie</i> a-. „Das Auto fährt“ heißt <b>gari linakwenda</b>, " +
              "nicht *gari anakwenda." },
      { h: "Objektinfixe",
        body: "ni- (mich), ku- (dich), m-/mw- (ihn/sie), tu- (uns), wa- (euch/sie)<br>" +
              "Sachen: ki-/vi-, i-/zi-, li-/ya- je nach Klasse<br>" +
              "Steht zwischen Tempusmarker und Stamm: ni-na-<b>ku</b>-penda = ich liebe dich." },
      { h: "Einsilbige Stämme",
        body: "<b>-la</b> (essen), <b>-nywa</b> (trinken), <b>-ja</b> (kommen), <b>-wa</b> (sein), " +
              "<b>-enda</b> (gehen) behalten das ku- des Infinitivs in <b>-na-, -li-, -ta-, -me-</b>:<br>" +
              "ninakula, nilikula, nitakula, nimekula<br>" +
              "Es fällt weg, sobald ein Objektinfix da ist oder in Verneinung/Konjunktiv:<br>" +
              "sili (ich esse nicht), nile (dass ich esse)" }
    ]
  },
  {
    id: "g-tempora",
    title: "Tempora & Aspekte — alle Marker",
    tags: "zeiten tempus na li ta me ki ka nge hu konjunktiv gegenwart vergangenheit zukunft",
    sections: [
      { h: "Übersicht",
        body: "<table class='tbl'>" +
              "<tr><th>Marker</th><th>Bedeutung</th><th>Beispiel</th><th>Verneint</th></tr>" +
              "<tr><td>-na-</td><td>Gegenwart / Verlauf</td><td>ninasoma</td><td>sisomi</td></tr>" +
              "<tr><td>-li-</td><td>Vergangenheit</td><td>nilisoma</td><td>sikusoma</td></tr>" +
              "<tr><td>-ta-</td><td>Zukunft</td><td>nitasoma</td><td>sitasoma</td></tr>" +
              "<tr><td>-me-</td><td>Perfekt / Zustand</td><td>nimesoma</td><td>sijasoma („noch nicht“)</td></tr>" +
              "<tr><td>-mesha-</td><td>schon</td><td>nimeshasoma</td><td>—</td></tr>" +
              "<tr><td>-ki-</td><td>wenn / während</td><td>nikisoma</td><td>nisiposoma</td></tr>" +
              "<tr><td>-ka-</td><td>und dann (Anreihung)</td><td>nikasoma</td><td>—</td></tr>" +
              "<tr><td>-nge-</td><td>würde (Konjunktiv)</td><td>ningesoma</td><td>singesoma</td></tr>" +
              "<tr><td>-ngali-</td><td>hätte (irreal, Vergangenheit)</td><td>ningalisoma</td><td>singalisoma</td></tr>" +
              "<tr><td>hu-</td><td>gewohnheitsmäßig</td><td>husoma</td><td>—</td></tr>" +
              "<tr><td>(keiner) + -e</td><td>Konjunktiv / Aufforderung</td><td>nisome</td><td>nisisome</td></tr>" +
              "</table>" },
      { h: "hu- ist der Sonderfall",
        body: "Die Gewohnheitsform <b>hu-</b> steht <i>ohne</i> Subjektpräfix und gilt für alle Personen:<br>" +
              "<b>husoma</b> = ich/du/er/wir/ihr/sie lese(n) für gewöhnlich<br>" +
              "<b>Watu husema …</b> Die Leute sagen für gewöhnlich …<br>" +
              "Wer das Subjekt braucht, nennt es separat: <i>Mimi husoma kila siku.</i>" },
      { h: "-ki- im Alltag",
        body: "<b>Ukitaka, twende.</b> Wenn du willst, lass uns gehen.<br>" +
              "<b>Nikifika, nitakupigia simu.</b> Wenn ich ankomme, rufe ich dich an.<br>" +
              "<b>Nilimwona akicheza.</b> Ich sah ihn/sie tanzen (wörtl.: während er/sie tanzte)." },
      { h: "-ka- verkettet Handlungen",
        body: "Nur die erste Handlung bekommt ein echtes Tempus, alle folgenden -ka-:<br>" +
              "<b>Nilikwenda sokoni, nikanunua ndizi, nikarudi nyumbani.</b><br>" +
              "Ich ging zum Markt, kaufte Bananen und kehrte nach Hause zurück." },
      { h: "Konjunktiv: der Endvokal wird -e",
        body: "<b>Twende!</b> Lass uns gehen! (tu-end-e)<br>" +
              "<b>Nikusaidie?</b> Soll ich dir helfen? (ni-ku-saidi-e)<br>" +
              "<b>Anataka nisome.</b> Er/sie will, dass ich lese.<br>" +
              "Nach <i>lazima</i> (müssen), <i>inabidi</i>, <i>kutaka kwamba</i> steht immer der Konjunktiv:<br>" +
              "<b>Lazima uende.</b> Du musst gehen." }
    ]
  },
  {
    id: "g-verneinung",
    title: "Verneinung — alle Formen",
    tags: "verneinung negation nicht si hu ha nein kein",
    sections: [
      { h: "Die verneinten Subjektpräfixe",
        body: "<b>si-</b> ich · <b>hu-</b> du · <b>ha-</b> er/sie · " +
              "<b>hatu-</b> wir · <b>ham-</b> ihr · <b>hawa-</b> sie<br>" +
              "Sachklassen: ha- + Subjektpräfix → haki- (Kl.7), havi- (Kl.8), " +
              "hai- (Kl.9), hazi- (Kl.10), hali- (Kl.5), haya- (Kl.6)" },
      { h: "Die vier Grundmuster",
        body: "<table class='tbl'>" +
              "<tr><th>Zeit</th><th>Positiv</th><th>Negativ</th><th>Was passiert</th></tr>" +
              "<tr><td>Präsens</td><td>ninasoma</td><td><b>sisomi</b></td><td>-na- fällt weg, -a wird -i</td></tr>" +
              "<tr><td>Vergangenheit</td><td>nilisoma</td><td><b>sikusoma</b></td><td>-li- wird -ku-</td></tr>" +
              "<tr><td>Zukunft</td><td>nitasoma</td><td><b>sitasoma</b></td><td>nur das Präfix ändert sich</td></tr>" +
              "<tr><td>Perfekt</td><td>nimesoma</td><td><b>sijasoma</b></td><td>-me- wird -ja- = „noch nicht“</td></tr>" +
              "</table>" },
      { h: "Die Falle: arabischstämmige Verben",
        body: "Verben, die nicht auf -a enden, ändern ihren Endvokal nie:<br>" +
              "kusafiri → <b>sisafiri</b> · kurudi → <b>sirudi</b> · kujibu → <b>sijibu</b><br>" +
              "kufikiri → <b>sifikiri</b> · kuhitaji → <b>sihitaji</b> · kusahau → <b>sisahau</b><br>" +
              "Bantu-Verben dagegen: kupenda → sipendi, kusoma → sisomi." },
      { h: "Unregelmäßige Verneinungen",
        body: "<b>ni</b> (ist) → <b>si</b> (ist nicht): Huyu si mwalimu.<br>" +
              "<b>nina</b> (ich habe) → <b>sina</b> (ich habe nicht)<br>" +
              "<b>niko</b> (ich bin da) → <b>siko</b> (ich bin nicht da)<br>" +
              "<b>kuna</b> (es gibt) → <b>hakuna</b> (es gibt nicht)" },
      { h: "Verneinter Befehl",
        body: "<b>Usiende!</b> Geh nicht! · <b>Msiende!</b> Geht nicht!<br>" +
              "<b>Usijali.</b> Mach dir keine Sorgen. · <b>Usiwe na wasiwasi.</b> Keine Sorge.<br>" +
              "Gebildet aus Konjunktiv + -si-." }
    ]
  },
  {
    id: "g-erweiterungen",
    title: "Verberweiterungen — der große Hebel",
    tags: "erweiterungen extensionen ableitung passiv kausativ applikativ reziprok stativ",
    sections: [
      { h: "Warum das so wichtig ist",
        body: "Zwischen Stamm und Endvokal lassen sich Silben einschieben, die die Bedeutung " +
              "systematisch verändern. Aus einem gelernten Verb werden so fünf bis zehn. " +
              "Das ist der effizienteste Weg, den Wortschatz zu vergrößern — und Duolingo " +
              "erwähnt es nie." },
      { h: "Die sechs wichtigsten",
        body: "<table class='tbl'>" +
              "<tr><th>Endung</th><th>Funktion</th><th>Beispiel</th></tr>" +
              "<tr><td>-i- / -e-</td><td>für jemanden tun (Applikativ)</td><td>pika kochen → pik<b>i</b>a für jdn. kochen</td></tr>" +
              "<tr><td>-w-</td><td>Passiv</td><td>penda lieben → pend<b>w</b>a geliebt werden</td></tr>" +
              "<tr><td>-k-</td><td>Zustand / Möglichkeit</td><td>vunja brechen → vunj<b>ik</b>a kaputt sein</td></tr>" +
              "<tr><td>-sh- / -z-</td><td>veranlassen (Kausativ)</td><td>soma lesen → som<b>esh</b>a unterrichten</td></tr>" +
              "<tr><td>-an-</td><td>einander (Reziprok)</td><td>ona sehen → on<b>an</b>a einander sehen</td></tr>" +
              "<tr><td>-ji-</td><td>sich selbst (vor dem Stamm!)</td><td>funza lehren → <b>ji</b>funza lernen</td></tr>" +
              "</table>" },
      { h: "Eine Wurzel, viele Wörter",
        body: "Von <b>-fung-</b> (schließen, binden):<br>" +
              "<b>kufunga</b> schließen · <b>kufungua</b> öffnen (umgekehrte Handlung, -u-)<br>" +
              "<b>kufungwa</b> geschlossen/eingesperrt werden · <b>kufungia</b> für jdn. schließen<br>" +
              "<b>kufungika</b> schließbar sein · <b>kufungisha</b> schließen lassen<br><br>" +
              "Von <b>-pend-</b> (mögen):<br>" +
              "<b>kupenda</b> lieben · <b>kupendwa</b> geliebt werden · <b>kupendana</b> einander lieben<br>" +
              "<b>kupendeza</b> gefallen · <b>kupendelea</b> bevorzugen" },
      { h: "Praktisch im Alltag",
        body: "<b>Tutaonana!</b> Wir sehen uns! (on-<b>an</b>-a)<br>" +
              "<b>Ninakupendeza?</b> Gefalle ich dir? (pend-<b>ez</b>-a)<br>" +
              "<b>Nisaidie, tafadhali.</b> Hilf mir bitte. (saidi-<b>e</b>, Applikativ + Konjunktiv)<br>" +
              "<b>Duka limefungwa.</b> Der Laden ist geschlossen. (fung-<b>w</b>-a, Passiv)" }
    ]
  },
  {
    id: "g-adjektive",
    title: "Adjektive & Kongruenz",
    tags: "adjektiv eigenschaft kongruenz angleichung zuri kubwa safi",
    sections: [
      { h: "Grundregel",
        body: "Das Adjektiv steht <b>hinter</b> dem Nomen und übernimmt dessen Klassenvorsilbe:<br>" +
              "mtu <b>m</b>zuri · watu <b>wa</b>zuri · kitu <b>ki</b>zuri · vitu <b>vi</b>zuri · nyumba <b>n</b>zuri" },
      { h: "Adjektive, die kongruieren (Bantu)",
        body: "-zuri gut · -baya schlecht · -kubwa groß · -dogo klein · -refu lang · -fupi kurz<br>" +
              "-pya neu · -eupe weiß · -eusi schwarz · -ekundu rot · -gumu hart · -tamu süß<br>" +
              "-chafu schmutzig · -zito schwer · -ingi viel · -chache wenig · -ingine andere" },
      { h: "Adjektive, die NICHT kongruieren (arabisch)",
        body: "safi sauber · rahisi billig/leicht · ghali teuer · tayari fertig · muhimu wichtig<br>" +
              "hodari tüchtig · bora hervorragend · kamili vollständig · sahihi korrekt · hatari gefährlich<br>" +
              "<i>Diese sind der Rettungsanker, wenn man sich bei der Kongruenz unsicher ist.</i>" },
      { h: "Stolperfallen",
        body: "Vor Vokal verschmilzt die Vorsilbe:<br>" +
              "wa + ingi = <b>wengi</b> (viele Menschen) · vi + ingi = <b>vingi</b><br>" +
              "mi + ingi = <b>mingi</b> · ma + ingi = <b>mengi</b><br>" +
              "wa + eupe = <b>weupe</b> · ki + eusi = <b>cheusi</b>" },
      { h: "Vergleiche",
        body: "<b>kuliko</b> = als: Yeye ni mrefu <b>kuliko</b> mimi. (Er ist größer als ich.)<br>" +
              "<b>zaidi</b> = mehr: Ninapenda chai <b>zaidi</b>. (Ich mag Tee lieber.)<br>" +
              "Superlativ mit <b>kuliko wote</b>: Yeye ni mzuri kuliko wote. (Er/sie ist der/die Schönste.)" }
    ]
  },
  {
    id: "g-possessiv",
    title: "Possessiva, Genitiv-a & Demonstrativa",
    tags: "possessiv besitz mein dein genitiv dieser jener demonstrativ",
    sections: [
      { h: "Possessivstämme",
        body: "<b>-angu</b> mein · <b>-ako</b> dein · <b>-ake</b> sein/ihr · " +
              "<b>-etu</b> unser · <b>-enu</b> euer · <b>-ao</b> ihr (Pl.)<br><br>" +
              "Die Vorsilbe richtet sich nach der Klasse des <i>besessenen</i> Dings:<br>" +
              "mtoto <b>w</b>angu · vitabu <b>vy</b>angu · nyumba <b>y</b>angu · gari <b>l</b>angu" },
      { h: "Das Verbindungs-a",
        body: "kitabu <b>cha</b> mwalimu = das Buch des Lehrers<br>" +
              "nyumba <b>ya</b> baba = Vaters Haus<br>" +
              "watoto <b>wa</b> shule = Schulkinder<br>" +
              "chumba <b>cha</b> kulala = Schlafzimmer (Zimmer des Schlafens)<br>" +
              "uwanja <b>wa</b> ndege = Flughafen<br>" +
              "maji <b>ya</b> kunywa = Trinkwasser" },
      { h: "Demonstrativa: drei Reihen",
        body: "<table class='tbl'>" +
              "<tr><th>Kl.</th><th>dieser (nah)</th><th>jener (fern)</th><th>der erwähnte</th></tr>" +
              "<tr><td>1</td><td>huyu</td><td>yule</td><td>huyo</td></tr>" +
              "<tr><td>2</td><td>hawa</td><td>wale</td><td>hao</td></tr>" +
              "<tr><td>3</td><td>huu</td><td>ule</td><td>huo</td></tr>" +
              "<tr><td>4</td><td>hii</td><td>ile</td><td>hiyo</td></tr>" +
              "<tr><td>5</td><td>hili</td><td>lile</td><td>hilo</td></tr>" +
              "<tr><td>6</td><td>haya</td><td>yale</td><td>hayo</td></tr>" +
              "<tr><td>7</td><td>hiki</td><td>kile</td><td>hicho</td></tr>" +
              "<tr><td>8</td><td>hivi</td><td>vile</td><td>hivyo</td></tr>" +
              "<tr><td>9</td><td>hii</td><td>ile</td><td>hiyo</td></tr>" +
              "<tr><td>10</td><td>hizi</td><td>zile</td><td>hizo</td></tr>" +
              "</table>" +
              "Die dritte Reihe (huyo, hicho …) meint „der/das, wovon wir gerade sprachen“ — " +
              "im Deutschen gibt es dafür keine eigene Form." },
      { h: "Merkhilfe",
        body: "Die Nah-Reihe beginnt immer mit <b>h</b> und wiederholt dann den Vokal der " +
              "Klassenvorsilbe: ki → h<b>i</b>k<b>i</b>, vi → h<b>i</b>v<b>i</b>, wa → h<b>a</b>w<b>a</b>.<br>" +
              "Die Fern-Reihe endet immer auf <b>-le</b>." }
    ]
  },
  {
    id: "g-sein-haben",
    title: "sein, haben, sich befinden, es gibt",
    tags: "sein haben ni si kuwa na niko kuna hakuna existenz",
    sections: [
      { h: "„sein“ im Präsens: ni / si",
        body: "<b>ni</b> gilt für alle Personen und Klassen: Mimi <b>ni</b> mwalimu. Wao <b>ni</b> wanafunzi.<br>" +
              "<b>si</b> ist die Verneinung: Huyu <b>si</b> daktari.<br>" +
              "In anderen Zeiten wird das Verb <i>kuwa</i> benutzt: nilikuwa (ich war), " +
              "nitakuwa (ich werde sein), nimekuwa (ich bin geworden)." },
      { h: "„haben“: kuwa na",
        body: "<b>nina</b> ich habe · <b>una</b> du hast · <b>ana</b> er/sie hat<br>" +
              "<b>tuna</b> wir haben · <b>mna</b> ihr habt · <b>wana</b> sie haben<br><br>" +
              "Verneint: <b>sina, huna, hana, hatuna, hamna, hawana</b><br>" +
              "Vergangenheit: <b>nilikuwa na</b> … · Zukunft: <b>nitakuwa na</b> …<br><br>" +
              "<b>Nina njaa.</b> Ich habe Hunger. · <b>Nina kiu.</b> Ich habe Durst.<br>" +
              "<b>Nina baridi.</b> Mir ist kalt. · <b>Ana miaka ishirini.</b> Er/sie ist 20." },
      { h: "„sich befinden“: -ko / -po / -mo",
        body: "<b>niko, uko, yuko, tuko, mko, wako</b> (allgemeiner Ort)<br>" +
              "Verneint: siko, huko, hayuko, hatuko, hamko, hawako<br><br>" +
              "<b>-po</b> = an einem bestimmten Ort · <b>-mo</b> = darin<br>" +
              "<b>Uko wapi?</b> Wo bist du? · <b>Niko njiani.</b> Ich bin unterwegs.<br>" +
              "<b>Yupo?</b> Ist er/sie da? — die typische Frage am Telefon." },
      { h: "„es gibt“: kuna / hakuna",
        body: "<b>Kuna maji?</b> Gibt es Wasser?<br>" +
              "<b>Hakuna umeme.</b> Es gibt keinen Strom.<br>" +
              "<b>Kuna tatizo?</b> Gibt es ein Problem?<br>" +
              "<b>Hakuna shida.</b> Kein Problem. (gebräuchlicher als „hakuna matata“)" }
    ]
  },
  {
    id: "g-relativ",
    title: "Relativsätze",
    tags: "relativsatz der die das amba welcher bezug",
    sections: [
      { h: "Zwei Wege",
        body: "Swahili kennt zwei Arten, „der/die/das“ als Bezugswort auszudrücken. " +
              "Beide sind korrekt, die erste ist leichter." },
      { h: "1. Mit amba-",
        body: "Das Bezugswort trägt die Klassenvorsilbe:<br>" +
              "Kl.1 <b>ambaye</b> · Kl.2 <b>ambao</b> · Kl.7 <b>ambacho</b> · Kl.8 <b>ambavyo</b><br>" +
              "Kl.9 <b>ambayo</b> · Kl.10 <b>ambazo</b> · Kl.5 <b>ambalo</b> · Kl.6 <b>ambayo</b><br><br>" +
              "<b>Mtu ambaye ninamjua.</b> Der Mensch, den ich kenne.<br>" +
              "<b>Kitabu ambacho nilisoma.</b> Das Buch, das ich gelesen habe." },
      { h: "2. Eingeschoben ins Verb",
        body: "Eleganter und häufiger im geschriebenen Swahili — das Bezugsmorphem " +
              "steht zwischen Tempusmarker und Stamm:<br>" +
              "<b>Kitabu ni<u>li</u>cho<u>ki</u>soma.</b> Das Buch, das ich gelesen habe.<br>" +
              "<b>Mtu ninayemjua.</b> Der Mensch, den ich kenne.<br>" +
              "<b>Watu wanaofanya kazi.</b> Die Leute, die arbeiten.<br><br>" +
              "Funktioniert nur mit -na-, -li- und -ta-. Für andere Zeiten nimmt man amba-." },
      { h: "Empfehlung",
        body: "Für den Anfang reicht <b>amba-</b> vollständig aus. Ihr werdet überall verstanden. " +
              "Die eingeschobene Form lernt ihr am besten passiv — erkennen genügt, " +
              "bis ihr sicherer seid." }
    ]
  },
  {
    id: "g-fragen",
    title: "Fragen stellen",
    tags: "frage fragewort nani nini wapi lini ngapi gani je kwa nini",
    sections: [
      { h: "Die Fragewörter",
        body: "<b>nani</b> wer · <b>nini</b> was · <b>wapi</b> wo/wohin · <b>lini</b> wann<br>" +
              "<b>kwa nini</b> warum · <b>vipi</b> wie · <b>ngapi</b> wie viele · <b>gani</b> welche Art<br>" +
              "<b>-je</b> wie (wird ans Verb gehängt)" },
      { h: "Sie stehen am Satzende",
        body: "Anders als im Deutschen bleibt die Wortstellung gleich — das Fragewort " +
              "rückt einfach an die Stelle, wo sonst die Antwort stünde:<br>" +
              "<b>Unakwenda wapi?</b> Wohin gehst du?<br>" +
              "<b>Unafanya nini?</b> Was machst du?<br>" +
              "<b>Huyu ni nani?</b> Wer ist das?<br>" +
              "<b>Utarudi lini?</b> Wann kommst du zurück?<br>" +
              "<b>Watoto wangapi?</b> Wie viele Kinder?" },
      { h: "Ja/Nein-Fragen",
        body: "Brauchen gar nichts — nur die Betonung steigt:<br>" +
              "<b>Unaelewa?</b> Verstehst du?<br>" +
              "Optional mit <b>je</b> am Satzanfang: <b>Je, unaelewa?</b> " +
              "(etwas förmlicher, wie ein gesprochenes Fragezeichen)" },
      { h: "-je angehängt",
        body: "<b>Unaitwaje?</b> Wie heißt du?<br>" +
              "<b>Umelalaje?</b> Wie hast du geschlafen? (typischer Morgengruß)<br>" +
              "<b>Kwaje?</b> Wieso denn?" }
    ]
  },
  {
    id: "g-zeit",
    title: "Die Swahili-Uhrzeit",
    tags: "uhrzeit zeit saa stunde verschoben sechs umrechnen termin",
    sections: [
      { h: "Sechs Stunden Versatz",
        body: "Am Äquator geht die Sonne ganzjährig gegen 6 Uhr auf. Dort beginnt der " +
              "Swahili-Tag. Die erste Stunde (<i>saa moja</i>) ist also 7 Uhr.<br>" +
              "<div class='formula'>Swahili-Stunde + 6 = unsere Uhrzeit</div>" },
      { h: "Umrechnungstabelle",
        body: "<table class='tbl'>" +
              "<tr><th>Swahili</th><th>Unsere Uhr</th><th>Swahili</th><th>Unsere Uhr</th></tr>" +
              "<tr><td>saa moja</td><td>7:00 / 19:00</td><td>saa saba</td><td>13:00 / 1:00</td></tr>" +
              "<tr><td>saa mbili</td><td>8:00 / 20:00</td><td>saa nane</td><td>14:00 / 2:00</td></tr>" +
              "<tr><td>saa tatu</td><td>9:00 / 21:00</td><td>saa tisa</td><td>15:00 / 3:00</td></tr>" +
              "<tr><td>saa nne</td><td>10:00 / 22:00</td><td>saa kumi</td><td>16:00 / 4:00</td></tr>" +
              "<tr><td>saa tano</td><td>11:00 / 23:00</td><td>saa kumi na moja</td><td>17:00 / 5:00</td></tr>" +
              "<tr><td>saa sita</td><td>12:00 / 0:00</td><td>saa kumi na mbili</td><td>18:00 / 6:00</td></tr>" +
              "</table>" },
      { h: "Tageszeit ist Pflicht",
        body: "<b>asubuhi</b> morgens · <b>mchana</b> mittags/nachmittags · " +
              "<b>jioni</b> abends · <b>usiku</b> nachts · <b>alfajiri</b> Morgendämmerung<br>" +
              "Ohne diesen Zusatz bleibt die Zeit zweideutig." },
      { h: "Minuten",
        body: "<b>na robo</b> viertel nach · <b>na nusu</b> halb · <b>kasorobo</b> viertel vor<br>" +
              "<b>na dakika kumi</b> zehn Minuten nach · <b>kasoro dakika tano</b> fünf vor" },
      { h: "Im Zweifel nachfragen",
        body: "<b>Saa ngapi kwa saa ya Ulaya?</b> Wie viel Uhr nach europäischer Zeit?<br>" +
              "Das versteht in Dar jeder und verhindert verpasste Termine." }
    ]
  },
  {
    id: "g-zahlen",
    title: "Zahlen",
    tags: "zahlen zaehlen namba moja mbili kumi mia elfu datum",
    sections: [
      { h: "Grundzahlen",
        body: "1 moja · 2 mbili · 3 tatu · 4 nne · 5 tano · 6 sita · 7 saba · 8 nane · 9 tisa · 10 kumi<br>" +
              "11 kumi na moja · 12 kumi na mbili · … · 19 kumi na tisa<br>" +
              "20 ishirini · 30 thelathini · 40 arobaini · 50 hamsini · 60 sitini<br>" +
              "70 sabini · 80 themanini · 90 tisini · 100 mia · 1000 elfu" },
      { h: "Zusammensetzen",
        body: "Alles mit <b>na</b> verbinden:<br>" +
              "25 = ishirini na tano · 147 = mia moja arobaini na saba<br>" +
              "2500 = elfu mbili na mia tano · 10.000 = elfu kumi" },
      { h: "Welche Zahlen kongruieren",
        body: "Nur die Bantu-Zahlen <b>1, 2, 3, 4, 5, 8</b>:<br>" +
              "watu wawili · vitu viwili · miti mitatu · magari manne<br><br>" +
              "Die arabischen <b>6, 7, 9, 10</b> und alle höheren bleiben unverändert:<br>" +
              "watu sita · vitu saba · nyumba kumi" },
      { h: "Ordnungszahlen",
        body: "Mit dem Verbindungs-a gebildet: <b>wa kwanza</b> (erster), <b>wa pili</b> (zweiter), " +
              "<b>wa tatu</b> (dritter) …<br>" +
              "mtu wa kwanza · kitabu cha pili · siku ya tatu" }
    ]
  },
  {
    id: "g-orte",
    title: "Ortsangaben mit -ni",
    tags: "ort lokativ ni nyumbani sokoni richtung wo wohin",
    sections: [
      { h: "Die Endung -ni",
        body: "Angehängt an ein Nomen macht sie daraus eine Ortsangabe. Je nach Zusammenhang " +
              "bedeutet sie „in“, „an“, „auf“, „zu“ oder „nach“:<br>" +
              "nyumba → <b>nyumbani</b> · soko → <b>sokoni</b> · kazi → <b>kazini</b><br>" +
              "shule → <b>shuleni</b> · mji → <b>mjini</b> · duka → <b>dukani</b><br>" +
              "njia → <b>njiani</b> (unterwegs) · meza → <b>mezani</b> (auf dem Tisch)" },
      { h: "Wo es nicht geht",
        body: "Eigennamen bekommen kein -ni: <i>Ninakwenda Dar es Salaam</i>, nicht *Dar es Salaamni.<br>" +
              "Bei Orten mit eigener Ortsbedeutung ebenso: <i>mahali</i> (Ort) bleibt wie es ist." },
      { h: "Die drei Ortsklassen",
        body: "<b>-po</b> (Kl.16) genauer Ort · <b>-ko</b> (Kl.17) allgemeiner Ort/Richtung · " +
              "<b>-mo</b> (Kl.18) innerhalb<br>" +
              "<b>Yupo hapa.</b> Er/sie ist genau hier.<br>" +
              "<b>Yuko Dar.</b> Er/sie ist in Dar (irgendwo dort).<br>" +
              "<b>Yumo ndani.</b> Er/sie ist drinnen." },
      { h: "Richtungswörter",
        body: "<b>hapa</b> hier · <b>pale</b> dort · <b>huku</b> hierher · <b>kule</b> dorthin<br>" +
              "<b>juu</b> oben · <b>chini</b> unten · <b>ndani</b> drinnen · <b>nje</b> draußen<br>" +
              "<b>mbele</b> vorne · <b>nyuma</b> hinten · <b>karibu</b> nah · <b>mbali</b> weit<br>" +
              "<b>kushoto</b> links · <b>kulia</b> rechts · <b>moja kwa moja</b> geradeaus" }
    ]
  },
  {
    id: "g-tansania",
    title: "Tansanisches Swahili — was vor Ort zählt",
    tags: "tansania dar es salaam sanifu kenia sheng register hoeflichkeit dialekt",
    sections: [
      { h: "Kiswahili sanifu",
        body: "Die Standardsprache beruht auf dem <i>Kiunguja</i>, dem Dialekt von Sansibar-Stadt. " +
              "Gepflegt wird sie von <b>BAKITA</b> (Nationaler Swahili-Rat) und dem " +
              "<b>TUKI</b>-Institut der Universität Dar es Salaam.<br>" +
              "Tansanier sind stolz darauf und empfinden kenianisches Swahili oder " +
              "<i>Sheng</i> (Nairobi-Slang) oft als nachlässig. Achtet darauf, woher eure " +
              "Lernquellen stammen — der Duolingo-Kurs ist kenianisch geprägt." },
      { h: "Höflichkeit ist nicht optional",
        body: "<b>Shikamoo</b> an Ältere ist Pflicht, nicht Zierde.<br>" +
              "<b>Pole</b> drückt Mitgefühl aus und wird viel häufiger benutzt als bei uns: " +
              "Pole na kazi (bei der Arbeit), Pole na safari (nach einer Reise), " +
              "Pole sana (bei jedem Missgeschick).<br>" +
              "<b>Karibu</b> hört ihr ständig — antwortet immer mit <b>Asante</b>." },
      { h: "Straßensprache in Dar",
        body: "<b>Mambo? / Vipi? / Za leo?</b> → <b>Poa · Safi · Bomba · Shwari · Freshi</b><br>" +
              "<b>Mzee</b> unter Freunden auch scherzhaft als Anrede<br>" +
              "<b>Bongo</b> = Dar es Salaam (daher Bongo Flava)<br>" +
              "<b>Hamna noma</b> = kein Problem<br>" +
              "Diese Formen sind für Freunde und Gleichaltrige — nicht für Behörden, " +
              "nicht für Ältere, nicht im Büro." },
      { h: "Deutsche Spuren",
        body: "Aus der Zeit von Deutsch-Ostafrika sind ein paar Wörter geblieben:<br>" +
              "<b>shule</b> (Schule) · <b>hela</b> (Geld, von „Heller“) · <b>bunduki</b> ist " +
              "dagegen arabisch, kein Germanismus." },
      { h: "Was euch täglich begegnet",
        body: "<b>Mzungu</b> ruft man euch hinterher — meist neutral beschreibend, " +
              "nicht abwertend. Kinder rufen es begeistert.<br>" +
              "<b>Bei ya mzungu</b> ist der erhöhte Preis für Ausländer. Das beste " +
              "Gegenmittel ist ein Satz Swahili." }
    ]
  }
];
