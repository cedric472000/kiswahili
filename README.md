# Kiswahili — Lern-App für Dar es Salaam

Swahili lernen mit dem, was Duolingo weglässt: Grammatikregeln vor Vokabeln,
Nomenklassen bei jedem Substantiv, ein Verbkonjugator, der die Morpheme zeigt,
und ein Wortschatz, der auf den Alltag in Dar es Salaam zugeschnitten ist.

## Starten

Zum Lernen: **https://cedric472000.github.io/kiswahili/** — dort lässt sie sich
aufs Handy installieren und läuft danach offline.

Zum Entwickeln: `index.html` doppelklicken. Das war's — kein Node, kein npm,
kein Build-Schritt, keine Internetverbindung nötig. (Service Worker und
Installieren gibt es per `file://` nicht; das braucht die Web-Adresse.)

Beim ersten Start legt ihr je ein Profil an. Der Fortschritt landet im
`localStorage` des Browsers und bleibt dort. Wichtig: Immer **denselben Browser**
benutzen, sonst liegt der Fortschritt woanders.

## Was drin ist

| Bereich | Inhalt |
|---|---|
| **Lektionen** | 24 aufeinander aufbauende Einheiten, je ~21 Schritte (siehe unten) |
| **Vokabeln** | 395 Einträge in 13 Themen, Spaced Repetition nach Leitner (7 Fächer) |
| **Grammatik** | 15 durchsuchbare Kapitel, inkl. Verberweiterungen und Relativsätzen |
| **Konjugator** | 44 Verben × 10 Zeiten × Person × Objekt × Verneinung, mit Zerlegung |
| **Drills** | Konjugations-Drill und Nomenklassen-Drill (Plural raten) |

Mwalimu Amani ist eine **erfundene** Lehrerfigur aus Kariakoo, Dar es Salaam.
Sie spricht von Lektion zu Lektion mehr Swahili, damit sich das Ohr gewöhnt.

### Wie eine Lektion abläuft

Eine Lektion ist keine lange Seite, sondern eine Folge einzelner Schritte — eine
Sache pro Seite, weiterklicken. Die Reihenfolge ist immer dieselbe:

1. **Einstieg** — Amani begrüßt und sagt, worum es geht
2. **Erklärung** — die Grammatikblöcke, einer nach dem anderen
3. **Beispielsätze** — dieselbe Regel in echten Sätzen
4. **Wortschatz** — die Wörter dazu, in Häppchen zu sechs
5. **Aus Dar** — Amanis Alltagshinweis
6. **Üben** — drei geführte Aufgaben mit Anleitung und sichtbaren Bausteinen.
   **Hier wird nichts gezählt**; man darf raten, sich die Lösung zeigen lassen
   und es nochmal versuchen.
7. **Abfrage** — erst jetzt wird gewertet, sechs Aufgaben
8. **Ergebnis** — Prozentzahl, die nur nach oben korrigiert wird

Das ergibt rund 21 Schritte pro Lektion. Die erste gewertete Frage kommt
frühestens an Schritt 14. Über *Ganze Lektion als Text* kommt man jederzeit zu
einer Lesefassung ohne Übungen — zum Nachschlagen und Wiederholen.

Alle Inhalte folgen dem tansanischen Standard (*Kiswahili sanifu*), nicht dem
kenianischen — das ist der Unterschied, der vor Ort auffällt.

### Der Kursaufbau

Die 24 Lektionen stehen in sechs Abschnitten; die Lektionsliste zeigt sie
als Kapitel (`LEKTIONSGRUPPEN` in `js/app.js`):

| | Lektionen | Inhalt |
|---|---|---|
| **Erste Worte** | 1–3 | Grüßen, sich vorstellen, Nomenklassen |
| **Das Verb** | 4–7 | Baukasten, Verneinung, Zeitformen, Perfekt |
| **Alltag in Dar** | 8–12 | Adjektive, Besitz, Zahlen, Uhrzeit, Orte |
| **Verberweiterungen** | 13–16 | -ia/-ea für jemanden, Passiv -wa, Veranlassung -sha, Zustand -ika und Gegenseitigkeit -ana |
| **Sätze verbinden** | 17–20 | Relativsätze mit amba- und im Verb, Bedingungen mit -ki-/-sipo-, Unwirkliches mit -nge-/-ngali- |
| **Draußen in Dar** | 21–24 | Beim Arzt, Wohnen und Reparieren, Arbeit und Papiere, unterwegs |

Die ersten zwölf bauen das Grundgerüst, die zweiten zwölf machen daraus
eine Sprache, mit der man Nebensätze bildet und Behördenaushänge liest.
Die letzten vier bringen kaum neue Grammatik, sondern setzen Bekanntes in
den Situationen zusammen, die in Dar wirklich vorkommen.

## Welche Vokabeln wann drankommen

Neue Wörter werden nicht zufällig gezogen. Die Reihenfolge hat vier Stufen:

1. **Deine aktuelle Lektion** — die Wörter aller Lektionen, die du angefangen
   oder abgeschlossen hast, plus die nächste offene. Wer bei Lektion 1 ist,
   lernt also zuerst *Hujambo, Shikamoo, Asante*.
2. **Alltagswortschatz** — rund 130 Wörter aus `data/lernfolge.js`, geordnet
   nach Nützlichkeit für die ersten Wochen in Dar: Höflichkeit, Fragewörter,
   Kernverben, Zahlen und Geld, Alltagsessen, Uhrzeit, Unterwegs, Zuhause,
   Gesundheit.
3. **Spätere Lektionen** — deren Wörter, in Lektionsreihenfolge.
4. **Der Rest** — nach Themen gewichtet; Spezialgerichte, Körperteile und
   Tiere zuletzt.

Als „angefangen" gilt eine Lektion, sobald man ihre Wortschatzseite gesehen
hat. Steht ein Wort an mehreren Stellen, zählt die früheste.

In einer Sitzung kommen erst die fälligen Wiederholungen, dann die neuen
Wörter. Ein Wort, das man noch nie gesehen hat, wird zuerst **vorgestellt**
und erst danach abgefragt. Auf der Vokabelseite zeigt *Als Nächstes neu*,
welche Wörter als Nächstes drankommen.

### Falsche Antworten kommen sofort wieder (wie bei Anki)

Wer ein Wort falsch beantwortet, bekommt es **in derselben Sitzung** erneut —
drei Karten später, damit man es nicht einfach abschreibt. Die Karte verlässt
die Sitzung erst, wenn sie saß. Nach vier Versuchen wird sie durchgewunken und
kommt am nächsten Tag wieder, damit niemand wegen eines Tippfehlers festhängt.

Dafür sorgen zwei Dinge in `js/srs.js`:

- `grade()` — der **erste** Versuch. Falsch heißt: Fach sinkt um zwei Stufen
  und die Karte ist **sofort wieder fällig** (nicht erst in Tagen). Nur dieser
  erste Versuch zählt für Fach, Streak und Trefferquote.
- `relearn()` — jede **Wiederholung** danach. Richtig heißt Fach 1, also
  morgen wieder; falsch heißt Fach 0 und sofort wieder. Die Trefferquote
  bleibt unberührt, sonst würde Üben die Statistik schönen.

Dasselbe gilt in den Lektionen: Eine falsch beantwortete Abfrage wird ans
Ende der Lektion nachgereicht (höchstens zweimal). Für die Prozentzahl zählt
nur der erste Versuch.

Umsortieren heißt: Zeilen in `data/lernfolge.js` verschieben.

## Gestaltung

**Aufgebaut wie eine App, nicht wie eine Website.** Das ist der wichtigere
Teil der Gestaltung — die Farben sind nur die Oberfläche:

- **Navigation immer sichtbar.** Ab 900 px eine feste Spalte links
  (Wortmarke, sechs Bereiche mit Strichsymbolen, unten Profil und der
  Hell/Dunkel-Schalter). Darunter eine Tab-Leiste am unteren Bildschirmrand
  mit fünf Bereichen — Daumenreichweite, wie in jeder Telefon-App. Beides
  baut `renderShell()` in `js/app.js`, damit es nur eine Quelle gibt.
- **Konzentrationsmodus.** Während Lektion, Vokabelabfrage und Drills setzt
  `focusAn()` die Klasse `body.focus`: Navigationsspalte, Tab-Leiste und Fuß
  verschwinden. Übrig bleiben eine Kopfzeile mit Abbruchkreuz, Fortschritts-
  balken und Phase — und die Aufgabe. Die Ergebnisseite holt die Navigation
  zurück (`focusAus()`), und der Router hebt den Modus bei jedem
  Seitenwechsel auf.
- **Die Startseite ist ein Dashboard**, keine Linksammlung: Begrüßung von
  Amani mit Streak, genau eine Hauptaktion, darunter zwei Aufgabenkarten
  (Karteikarten mit Fortschrittsring, nächste Lektion), vier Kennzahlen,
  vier Werkzeugkacheln, Sprichwort des Tages.
- **Die Lektionsliste ist ein Kurs** in drei Abschnitten (Erste Worte,
  Das Verb, Alltag in Dar) mit Fortschrittsring oben, Häkchen für
  Erledigtes, Prozentzahl und einer Markierung *Weiter hier*.
- **Weiter-Leiste klebt unten** (`position: sticky`), damit man bei langen
  Erklärungen nicht erst ans Seitenende scrollen muss.

| Token | Hex (hell) | Rolle |
|---|---|---|
| `--accent` | `#0E7C6B` | Ozean-Petrol — Swahili, Hauptschaltflächen, Fortschritt |
| `--accent-2` | `#E0683F` | Koralle — Verlauf in Logo und Band, Streak, Abfragephase |
| `--amber` | `#B4791B` | Übungsphase |
| `--ink` | `#101828` | Schrift |
| `--bg` / `--surface` | `#F6F7F9` / `#FFFFFF` | Grund und Karten |

**Wortmarke.** Ein abgerundetes Quadrat mit Farbverlauf (Petrol → Koralle)
und einem weißen **K**, daneben *Ki**swahili***. Die frühere Zeile
*Dar es Salaam 2027* darunter ist weg — es geht um die Sprache, nicht um
den Umzugstermin.

**Keine harten Konturen.** Frühere Fassungen hatten schwarze Umrisse und
versetzte Schatten, angelehnt an die Tingatinga-Malerei aus Dar es Salaam.
Das war zu grell — die Kombination aus Schwarz, Gelb und Orange erinnerte
eher an eine Werbeseite als an eine Lern-App. Jetzt: 1 px Linien, weiche
Schatten, runde Ecken (10 / 12 / 16 / 22 px).

**Swahili sichtbar machen.** Früher über eine Serifenschrift, jetzt über
Farbe und Schriftschnitt: Swahili steht im Akzentton und etwas kräftiger,
Deutsch in normaler Textfarbe. Das bleibt ruhiger und liest sich besser.

**Phasenfarben.** Lernen = Akzent, Üben = Bernstein, Abfrage = Koralle,
Ergebnis = Grün — jeweils als dezente Pille, nicht als Blockfarbe.

**Schrift.** Webfonts sind im Artefakt durch die Sicherheitsrichtlinie
gesperrt. Die Wirkung kommt deshalb aus dem Systemschriftsatz, aus Gewicht
und aus enger Laufweite bei Überschriften.

**Dunkelmodus** ist vollständig gepflegt und folgt sowohl der
Systemeinstellung als auch einem ausdrücklichen Umschalter (`data-theme`).

## Die Hauptfassung: GitHub Pages

> **https://cedric472000.github.io/kiswahili/**

Das ist die Fassung zum Benutzen. Sie ist **installierbar** (eigenes Icon,
keine Browserleiste) und **läuft offline** — siehe *Als App aufs Handy* oben.
Jeder Push auf `main` ist nach ein bis zwei Minuten live; eine Versionsauswahl
gibt es nicht und braucht es nicht.

### Daneben: die Artefakt-Fassung

> https://claude.ai/code/artifact/7fe40d10-7da3-4dd9-ada5-7a4727a07b7d

Dieselbe App, veröffentlicht über claude.ai. Sie bleibt als Reserve bestehen,
ist aber **nicht** installierbar und **nicht** offline-fähig: Im Sandbox-Rahmen
sind Service Worker gesperrt. Wer schon damit gelernt hat, holt seinen
Fortschritt per *Profil → Fortschritt kopieren* dort heraus und in die
installierte App hinein.

`artifact.html` ist die Einstiegsdatei dafür: derselbe Inhalt wie `index.html`,
nur ohne `<!DOCTYPE>`/`<head>`/`<body>` — das Gerüst setzt die Veröffentlichung
selbst drumherum. Beide laden exakt dieselben CSS-, Daten- und JS-Dateien;
ändert ihr etwas in `data/`, gilt es nach dem nächsten Veröffentlichen für beide.

**Wichtig:** Lokale Fassung und Web-Fassung haben **getrennten Fortschritt** —
der `localStorage` hängt an der jeweiligen Adresse. Entscheidet euch für eine
als Hauptfassung, oder gleicht per Kopieren/Einfügen ab (siehe unten).

**Achtung, Versionsbindung beim Artefakt.** Beim Umschalten auf *Anyone with
the link* legt claude.ai den Link auf die gerade aktuelle Version fest; die
Zeile *Shared version → Latest*, mit der sich das umstellen ließ, ist aus dem
Freigabe-Fenster verschwunden. Genau deshalb ist GitHub Pages die Hauptfassung:
Dort gibt es das Problem nicht.

## Als App aufs Handy (PWA)

Die App ist installierbar: eigenes Icon auf dem Startbildschirm, eigener
Fenstertitel, keine Browserleiste — und sie **läuft offline**. Dafür sorgen
drei Dateien:

```
manifest.webmanifest   Name, Startadresse, Farben, Vollbild-Modus, Icons
sw.js                  Service Worker: hält alle Dateien offline bereit
icons/                 192 / 512 (Android, maskierbar) und 180 (iPhone)
```

**Voraussetzung ist eine eigene HTTPS-Adresse.** Per `file://` und im
Artefakt-Rahmen sind Service Worker gesperrt — die App läuft dort ganz
normal, nur eben ohne Offline-Cache und ohne Installieren. Die Registrierung
in `index.html` prüft das Protokoll und hält im Zweifel einfach still.
`artifact.html` registriert bewusst gar nichts.

Empfohlener Ort: **GitHub Pages** (kostenlos, HTTPS, feste Adresse, jede
Änderung sofort live). Danach:

- **Android/Chrome** — bietet „App installieren" von selbst an
- **iPhone/Safari** — *Teilen → Zum Home-Bildschirm*

**Beim Veröffentlichen `VERSION` in `sw.js` hochzählen.** Ändert sich diese
Datei, installiert der Browser den Worker neu und wirft alte Caches weg.
Ohne Änderung kann ein Gerät sonst auf einem alten Stand hängen bleiben.

**Zwei Fallen, die beim ersten Update zugeschnappt sind** — beide sind
jetzt behoben und von `test-pwa.js` abgesichert:

1. `cache.addAll()` geht durch den **HTTP-Cache des Browsers**. GitHub Pages
   liefert Dateien mit `max-age`, also hat der neue Worker exakt die alten
   Dateien wieder in den Offline-Speicher gelegt — das Update kam nie an.
   Deshalb holt `install` jede Datei einzeln mit `cache: "reload"`.
2. Übernimmt der neue Worker die Seite, sind die gerade geladenen Skripte
   noch die alten. `index.html` lauscht darum auf `controllerchange` und
   lädt **einmal** neu. Beim allerersten Besuch passiert das nicht.

**Neue Adresse heißt neuer Speicher.** Der `localStorage` hängt an der
Adresse — in der installierten App fängt der Fortschritt bei null an. Vorher
auf jedem Gerät *Profil → Fortschritt kopieren*, nachher einfügen.

Wer später doch in den Play Store will, kann genau diese PWA mit Bubblewrap
zu einer Android-App verpacken; am Quelltext ändert sich dafür nichts.

## Fortschritt zwischen Geräten übertragen

Warum überhaupt getrennt: Es gibt keinen Server und kein Konto. Jeder Browser
speichert den Fortschritt für sich (`localStorage`) — PC, Handy und ein
zweiter Browser auf demselben PC haben also jeweils ihren eigenen Stand.

Übertragen per Text, nicht per Datei:

1. Auf dem einen Gerät **Profil → Fortschritt kopieren**
2. Den Text an dich selbst schicken (Mail, Chat)
3. Auf dem anderen Gerät **Profil → Fortschritt einfügen → Einlesen**

Beim Zusammenführen gewinnt pro Vokabel und pro Lektion der jeweils neuere
Stand — es geht nichts verloren, egal in welcher Reihenfolge ihr einlest.

**Warum Text statt Datei, und warum keine Browser-Dialoge:** Die veröffentlichte
Fassung läuft in einem Sandbox-Rahmen ohne `allow-modals` und ohne Downloads.
Dort liefert `confirm()` sofort „abgebrochen", und Datei-Downloads passieren
nicht. Sicherheitsabfragen stehen deshalb direkt auf der Seite, und der
Fortschritt wird kopiert statt heruntergeladen. Bitte kein `confirm()`,
`alert()` oder `<a download>` neu einbauen.

## Inhalte selbst ergänzen

Alles Inhaltliche liegt in `data/` und ist bewusst als lesbares JavaScript
gehalten, nicht als Datenbank.

**Vokabel hinzufügen** — `data/vocab.js`:

```js
{ sw:"kiazi", pl:"viazi", cls:"7/8", de:"Kartoffel", topic:"chakula",
  note:"viazi vitamu = Süßkartoffeln", tag:"tz" }
```

`tag` ist optional: `"tz"` markiert typisch Tansanisches, `"dar"` speziell
Stadtsprachliches.

> **Neue Wörter immer unten anhängen — nie dazwischenschieben.**
> Die `id` wird am Dateiende aus der Position im Array gebildet
> (`v.id = "v" + i`). Wer mittendrin einfügt, verschiebt alle folgenden ids.
> Der Lernfortschritt auf den Geräten ist nach genau diesen ids gespeichert
> und wäre damit zerrissen: Gelerntes verschwindet, fremde Wörter stehen
> plötzlich in Fach 5.

**Verb hinzufügen** — `data/verbs.js`:

```js
{ inf:"kuoga", stem:"oga", de:"duschen, baden" }
{ inf:"kukubali", stem:"kubali", de:"zustimmen", arabic:true }  // Endvokal bleibt
{ inf:"kufa", stem:"fa", de:"sterben", mono:true }              // behält ku-
```

`arabic: true` verhindert den Endvokalwechsel (`sikubali`, nicht *sikubalii*).
`mono: true` sorgt dafür, dass das `ku-` in -na-/-li-/-ta-/-me- erhalten bleibt.

**Lektion oder Grammatikkapitel** — `data/lessons.js` bzw. `data/grammar.js`,
Struktur von den bestehenden Einträgen abschauen.

Jede Lektion hat **zwei** Aufgabenlisten, und die sind nicht dasselbe:

`practice` sind die geführten Übungen vor der Abfrage. Sie zählen nicht und
zeigen die Bausteine mit:

```js
{ instruction: "Steck die drei Teile zusammen — Subjekt, Zeit, Stamm.",
  q: "„ich lese“",
  build: "ni + na + soma",        // optional; mit " + " werden Kacheln daraus
  a: "ninasoma",
  explain: "Immer diese Reihenfolge. Damit hast du das ganze Verbsystem." }
```

Wenn `build` kein `" + "` enthält, wird es als schlichter Hinweiskasten
gezeigt statt als Bausteinkette — praktisch für Rechenhilfen wie
`"9 − 6 = 3  →  saa ___ asubuhi"`. `test-data.js` prüft bei Ketten, ob die
Bausteine zusammengesetzt wirklich die Lösung ergeben.

`exercises` ist die gewertete Abfrage danach, als `type:"translate"` (Freitext)
oder `type:"choice"` (mit `a` als Index der richtigen Option und `why` als
Erklärung).

Bei mehreren gültigen Lösungen einfach durch Komma trennen —
`a: "Nzuri, Njema, Salama"` akzeptiert alle drei.

## Tests

Die Konjugations-Engine und die Inhalte lassen sich ohne Browser prüfen —
Windows Script Host genügt:

```bash
cscript //nologo //E:JScript test/test-conj.js
```

```bash
cscript //nologo //E:JScript test/test-data.js
```

```bash
cscript //nologo //E:JScript test/test-steps.js
```

- **`test-conj.js`** — 79 Verbformen gegen bekannt korrekte Lösungen
  (Verneinungen aller Zeiten, einsilbige Verben, arabische Stämme,
  Objektinfixe, Sachklassen, Befehlsformen).
- **`test-data.js`** — Referenzen, Dubletten und Vollständigkeit der Inhalte.
  Prüft unter anderem, ob die angezeigten Bausteine einer geführten Übung
  zusammengesetzt wirklich die angegebene Lösung ergeben.
- **`test-steps.js`** — schneidet `buildSteps` aus `js/app.js` heraus und führt
  es aus, um zu belegen, dass in jeder Lektion Erklärung vor Wortschatz vor
  Üben vor Abfrage steht. Testet den echten Quelltext, keine Nachbildung.
- **`test-lernfolge.js`** — prüft die Reihenfolge neuer Vokabeln am echten
  `js/srs.js`: Lektion 1 zuerst, Alltagswortschatz vor dem Rest, Wiederholungen
  vor neuen Wörtern, keine Spezialgerichte unter den ersten Wörtern. Gibt die
  ersten 40 Wörter zum Anschauen aus.
  `cscript //nologo //E:JScript test/test-lernfolge.js`

- **`test-pwa.js`** — vergleicht die Dateiliste in `sw.js` mit dem, was
  `index.html` tatsächlich lädt, und prüft Manifest, Icons und Einbindung.
  Fängt den Fall ab, dass eine neue Datei dazukommt, aber nicht in den
  Offline-Cache wandert — sonst bliebe die App ohne Netz leer.
  `cscript //nologo //E:JScript test/test-pwa.js`

Dazu kommt **`test/selftest.html`** — einfach im Browser öffnen. Die Seite
klickt Lektion 1 automatisch von vorn bis hinten durch, protokolliert die
Phasenfolge und prüft, dass nach jeder Antwort eine Weiter-Schaltfläche
erscheint und das Ergebnis gespeichert wird. Das deckt ab, was die Skripte
oben nicht können: die tatsächliche Bedienung im Browser.

## Aufbau

```
index.html          Einstieg: Gerüst (Navigationsspalte, Tab-Leiste,
                    Inhaltsspalte) und lädt alles in fester Reihenfolge
css/style.css       Hell- und Dunkelmodus, mobil zuerst
data/vocab.js       395 Vokabeln mit Klasse und Plural (nur unten anhängen!)
data/verbs.js       Konjugationstabellen + 44 Verben
data/lessons.js     24 Lektionen: Mwalimu, Grammatik, Wortschatz,
                    geführte Übungen (practice) und Abfrage (exercises)
data/grammar.js     15 Nachschlagekapitel
data/methali.js     14 Sprichwörter fürs Kanga-Band (Sprichwort des Tages)
data/lernfolge.js   Alltagswortschatz: Reihenfolge neuer Vokabeln
js/storage.js       localStorage, Profile, Export/Import
js/srs.js           Leitner-Algorithmus, Antwortprüfung
js/conjugator.js    Verbformen bauen und in Morpheme zerlegen
js/app.js           Router und alle Ansichten
manifest.webmanifest  Installierbarkeit: Name, Icons, Farben
sw.js               Service Worker: Offline-Cache
icons/              App-Icons (192, 512, apple-touch-icon)
test/               Prüfskripte (siehe oben)
```

Bewusst **ohne ES-Module** geschrieben, damit die Seite auch direkt aus dem
Dateisystem läuft — Module würden per `file://` an der CORS-Sperre scheitern.

## Später: echter Sync

`js/storage.js` ist darauf vorbereitet. Jeder Datensatz trägt `updatedAt`, und
jedes Gerät hat eine `deviceId`. Ein Backend müsste nur `exportProfile()` und
`importProfile()` gegen HTTP-Aufrufe tauschen — die Zusammenführungslogik
(neuerer Stand gewinnt, feldweise) steht schon und wird von den Tests gedeckt.
