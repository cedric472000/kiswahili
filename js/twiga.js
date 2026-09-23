/* Twiga — Mwalimu Amani als Massai-Giraffe.

   Die Zeichnung steht genau einmal im Dokument (als unsichtbares
   <svg> mit <symbol>en) und wird ueberall per <use> geholt. So kostet
   ein Avatar im Text nur ein paar Zeichen Markup statt der ganzen
   Zeichnung.

   Warum eine Massai-Giraffe: Sie ist Tansanias Nationaltier und die
   Unterart, die dort lebt. Erkennbar an den eingekerbten, unregelmaessigen
   Flecken (keine glatten Waben wie bei der Netzgiraffe), am dunklen Braun
   auf cremigem Grund und daran, dass die Zeichnung bis auf die Beine
   hinunterreicht.

   Zwei Grundsaetze der Zeichnung:
   1. Der Koerper ist EINE durchgehende Kontur — Hals, Rumpf und Beine in
      einem Zug. Aus Strichen zusammengesetzt zerfaellt die Figur optisch
      in Einzelteile.
   2. Das Volumen kommt aus einem halbdurchsichtigen Verlauf (weiss oben
      links, schwarz unten rechts), der ueber die Form gelegt wird. Der
      wirkt in hell und dunkel gleich gut, ohne zwei Farbsaetze.

   Alle ids tragen das Praefix tw-, damit sie mit nichts kollidieren. */
window.KS = window.KS || {};

(function () {
  "use strict";

  var SPRITE =
  '<svg id="tw-sprite" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
    '<defs>' +
      /* Volumen: Licht oben links, Schatten unten rechts */
      '<radialGradient id="tw-volumen" cx="30%" cy="24%" r="85%">' +
        '<stop offset="0" stop-color="#FFFFFF" stop-opacity=".34"/>' +
        '<stop offset=".45" stop-color="#FFFFFF" stop-opacity="0"/>' +
        '<stop offset="1" stop-color="#000000" stop-opacity=".22"/>' +
      '</radialGradient>' +
      '<linearGradient id="tw-volumen-flach" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#FFFFFF" stop-opacity=".22"/>' +
        '<stop offset=".5" stop-color="#FFFFFF" stop-opacity="0"/>' +
        '<stop offset="1" stop-color="#000000" stop-opacity=".18"/>' +
      '</linearGradient>' +

      /* Fuenf Fleckenformen mit weichen Kerben. Mit Geraden statt Kurven
         werden daraus Sterne; fuenf Formen, damit sich beim Verteilen
         nichts sichtbar wiederholt. */
      '<path id="tw-fleck-a" d="M-4.8,-1.2 C-4.4,-3 -2.6,-3.6 -1.6,-4.4 C-0.4,-5.4 1.6,-4.8 2.4,-3.4 ' +
        'C3.2,-2.2 5,-2 5,-0.4 C5,1 3.5,1.8 3.8,3 C4.1,4.3 2.4,5.3 1,4.8 C-0.4,4.3 -1.2,4.7 -2.4,4.4 ' +
        'C-3.9,4 -4.3,2.6 -3.6,1.4 C-3,0.4 -5.2,0.6 -4.8,-1.2 Z"/>' +
      '<path id="tw-fleck-b" d="M-4.2,-2.2 C-3.4,-4 -1,-4.6 0.6,-4.2 C2.2,-3.8 3.4,-2.6 4.2,-1.4 ' +
        'C5,-0.2 4.3,1.4 4.6,2.6 C4.9,4 3,4.9 1.6,4.4 C0.2,3.9 -1.6,5 -2.8,4 C-4,3 -3.3,1.4 -3.8,0.2 ' +
        'C-4.3,-1 -4.6,-1.2 -4.2,-2.2 Z"/>' +
      '<path id="tw-fleck-c" d="M-3.6,-1.4 C-3.4,-3.1 -1.8,-3.9 -0.4,-3.6 C1,-3.3 2.6,-2.8 3.4,-1.6 ' +
        'C4.2,-0.4 3.3,1 3.6,2.2 C3.9,3.5 2,4.1 0.8,3.6 C-0.4,3.1 -2,3.9 -2.8,2.8 C-3.6,1.7 -2.9,0.4 -3.4,-0.6 Z"/>' +
      '<path id="tw-fleck-d" d="M-4.4,0.4 C-5,-1.4 -3.6,-3.2 -2,-3.8 C-0.4,-4.4 1.2,-5 2.6,-4 ' +
        'C4,-3 4.2,-1.2 4.8,0.2 C5.4,1.6 4.2,3.2 2.8,3.8 C1.4,4.4 0.4,4 -1,4.4 C-2.6,4.9 -3.8,3.6 -3.6,2.2 ' +
        'C-3.5,1.3 -4.1,1.2 -4.4,0.4 Z"/>' +
      '<path id="tw-fleck-e" d="M-3,-3.4 C-1.6,-4.6 1,-4.8 2.4,-3.6 C3.8,-2.4 3.6,-0.8 4.4,0.6 ' +
        'C5.2,2 4,3.6 2.4,4 C0.8,4.4 -0.6,3.6 -2,3.8 C-3.6,4 -4.6,2.6 -4.2,1.2 C-3.8,-0.2 -4.4,-2.2 -3,-3.4 Z"/>' +

      /* Kopfform, zugleich Beschneidung fuer die Flecken */
      '<path id="tw-kopf-form" d="M50 17 C66 17 75 28 75 42 C75 53 73 61 70 68 ' +
        'C67 76 59 81 50 81 C41 81 33 76 30 68 C27 61 25 53 25 42 C25 28 34 17 50 17 Z"/>' +
      '<clipPath id="tw-kopf-clip"><use href="#tw-kopf-form"/></clipPath>' +

      /* Koerper in einem Zug: Hals, Flanke, linkes Bein, zwischen den
         Beinen hindurch, rechtes Bein, andere Flanke wieder hinauf. */
      '<path id="tw-koerper-form" d="M46 30 C42 60, 38 80, 35 98 C27 105, 26 122, 33 134 ' +
        'L32 176 A 6.5 6.5 0 0 0 45 176 L45 138 C49 133, 55 133, 59 138 L59 176 ' +
        'A 6.5 6.5 0 0 0 72 176 L71 134 C78 122, 77 105, 69 98 C66 80, 62 60, 60 30 Z"/>' +
      '<clipPath id="tw-koerper-clip"><use href="#tw-koerper-form"/></clipPath>' +

      /* ---- Der Kopf ---- */
      '<g id="tw-kopf-gruppe">' +
        /* Leicht geneigt: die Symmetrie zu brechen ist der wirksamste
           Griff, damit eine Figur lebendig statt gestellt wirkt. */
        '<g transform="rotate(-7 50 50)">' +
          /* Ohren, verschieden gestellt */
          '<ellipse cx="17" cy="44" rx="14" ry="7.6" transform="rotate(-32 17 44)" fill="var(--tw-coat)"/>' +
          '<ellipse cx="17" cy="44" rx="14" ry="7.6" transform="rotate(-32 17 44)" fill="url(#tw-volumen-flach)"/>' +
          '<ellipse cx="18.5" cy="44.5" rx="8" ry="3.6" transform="rotate(-32 18.5 44.5)" fill="var(--tw-mane)" opacity=".3"/>' +
          '<ellipse cx="83" cy="47.5" rx="13" ry="7" transform="rotate(13 83 47.5)" fill="var(--tw-coat)"/>' +
          '<ellipse cx="83" cy="47.5" rx="13" ry="7" transform="rotate(13 83 47.5)" fill="url(#tw-volumen-flach)"/>' +
          '<ellipse cx="81.5" cy="48" rx="7.4" ry="3.3" transform="rotate(13 81.5 48)" fill="var(--tw-mane)" opacity=".3"/>' +
          /* Hoerner */
          '<path d="M39 27 L36.5 14" stroke="var(--tw-coat)" stroke-width="8" stroke-linecap="round"/>' +
          '<circle cx="36" cy="12" r="6.2" fill="var(--tw-mane)"/>' +
          '<circle cx="36" cy="12" r="6.2" fill="url(#tw-volumen-flach)"/>' +
          '<path d="M61 27 L64 15.5" stroke="var(--tw-coat)" stroke-width="8" stroke-linecap="round"/>' +
          '<circle cx="64.5" cy="13.5" r="5.8" fill="var(--tw-mane)"/>' +
          '<circle cx="64.5" cy="13.5" r="5.8" fill="url(#tw-volumen-flach)"/>' +
          /* Schopf zwischen den Hoernern */
          '<path d="M44 21 C45 13.5 50.5 11.5 52 17 C54 12 58.5 13 57 20 C53 17.5 48 17.5 44 21 Z" fill="var(--tw-mane)"/>' +
          /* Kopf */
          '<use href="#tw-kopf-form" fill="var(--tw-coat)"/>' +
          '<g clip-path="url(#tw-kopf-clip)" fill="var(--tw-patch)" opacity=".85">' +
            '<use href="#tw-fleck-a" transform="translate(31,33) rotate(-20) scale(.62)"/>' +
            '<use href="#tw-fleck-c" transform="translate(69,31) rotate(15) scale(.56)"/>' +
            '<use href="#tw-fleck-e" transform="translate(50,20) rotate(6) scale(.48)"/>' +
          '</g>' +
          /* Schnauze: breit und stumpf, nur wenig heller als das Fell */
          '<path d="M50 53 C62 53, 69 58, 69 66 C69 73, 62.5 79, 50 79 C37.5 79, 31 73, 31 66 C31 58, 38 53, 50 53 Z" fill="var(--tw-muzzle)"/>' +
          '<path d="M50 53 C62 53, 69 58, 69 66 C69 73, 62.5 79, 50 79 C37.5 79, 31 73, 31 66 C31 58, 38 53, 50 53 Z" fill="url(#tw-volumen-flach)"/>' +
          '<use href="#tw-kopf-form" fill="url(#tw-volumen)"/>' +
          /* Wangenroete */
          '<ellipse cx="28" cy="56" rx="6.5" ry="3.8" fill="#E0683F" opacity=".2"/>' +
          '<ellipse cx="72" cy="56" rx="6.5" ry="3.8" fill="#E0683F" opacity=".2"/>' +
          /* Kante, wo die Schnauze aus dem Gesicht tritt */
          '<path d="M33 62 C39 55.5, 61 55.5, 67 62" stroke="#000000" stroke-width="2.4" stroke-linecap="round" fill="none" opacity=".055"/>' +
          /* Nuestern: schraege Schlitze, keine runden Punkte */
          '<ellipse cx="42.6" cy="63.5" rx="3.4" ry="1.9" transform="rotate(-30 42.6 63.5)" fill="var(--tw-mane)" opacity=".6"/>' +
          '<ellipse cx="57.4" cy="63.5" rx="3.4" ry="1.9" transform="rotate(30 57.4 63.5)" fill="var(--tw-mane)" opacity=".6"/>' +
          /* Maul: Rinne von der Nase herunter, dann zwei Boegen */
          '<g stroke="var(--tw-mane)" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".6">' +
            '<path d="M50 65.8 L50 70.5"/>' +
            '<path d="M50 70.5 C50 75.2, 45.4 76.6, 41.6 73.4"/>' +
            '<path d="M50 70.5 C50 75.2, 54.6 76.6, 58.4 73.4"/>' +
          '</g>' +
          /* Augen: gross, Pupillen leicht seitlich — ein Blick, kein Starren */
          '<ellipse cx="38" cy="41" rx="10" ry="11" fill="#FFFFFF"/>' +
          '<ellipse cx="62" cy="41" rx="10" ry="11" fill="#FFFFFF"/>' +
          '<circle cx="40.2" cy="42.4" r="6.2" fill="#2A1A0C"/>' +
          '<circle cx="62" cy="42.4" r="6.2" fill="#2A1A0C"/>' +
          '<circle cx="38.1" cy="39.8" r="2.4" fill="#FFFFFF"/>' +
          '<circle cx="59.9" cy="39.8" r="2.4" fill="#FFFFFF"/>' +
          '<circle cx="42.6" cy="45.6" r="1.2" fill="#FFFFFF" opacity=".65"/>' +
          '<circle cx="64.4" cy="45.6" r="1.2" fill="#FFFFFF" opacity=".65"/>' +
          /* Brauen, die eine hoeher: neugierig statt neutral */
          '<path d="M30.5 28 Q37.5 23.5 44.5 27" stroke="var(--tw-mane)" stroke-width="2.8" stroke-linecap="round" fill="none" opacity=".7"/>' +
          '<path d="M55.5 25.5 Q62.5 21 69.5 25" stroke="var(--tw-mane)" stroke-width="2.8" stroke-linecap="round" fill="none" opacity=".7"/>' +
        '</g>' +
      '</g>' +

      /* ---- Brustbild: Kopf mit Hals ---- */
      '<clipPath id="tw-hals-clip">' +
        '<path d="M37 60 C35 82 33 94 33 112 L67 112 C67 94 65 82 63 60 Z"/>' +
      '</clipPath>' +
      '<g id="tw-brust">' +
        '<path d="M37 60 C35 82 33 94 33 112 L67 112 C67 94 65 82 63 60 Z" fill="var(--tw-coat)"/>' +
        '<g clip-path="url(#tw-hals-clip)" fill="var(--tw-patch)" opacity=".85">' +
          '<use href="#tw-fleck-a" transform="translate(41,92) rotate(-12) scale(.78)"/>' +
          '<use href="#tw-fleck-b" transform="translate(59,100) rotate(10) scale(.72)"/>' +
          '<use href="#tw-fleck-c" transform="translate(44,108) rotate(4) scale(.66)"/>' +
        '</g>' +
        '<path d="M37 60 C35 82 33 94 33 112 L67 112 C67 94 65 82 63 60 Z" fill="url(#tw-volumen-flach)"/>' +
        '<ellipse cx="50" cy="74" rx="20" ry="10" fill="#000000" opacity=".14"/>' +
        '<use href="#tw-kopf-gruppe"/>' +
      '</g>' +
    '</defs>' +

    /* Enger Ausschnitt: der Kopf fuellt den Kreis. Fuer alles unter 40 px
       der einzige Schnitt, der noch traegt. */
    '<symbol id="tw-kopf" viewBox="4 2 92 92"><use href="#tw-brust"/></symbol>' +
    '<symbol id="tw-brustbild" viewBox="0 0 100 112"><use href="#tw-brust"/></symbol>' +

    /* ---- Ganze Figur ---- */
    '<symbol id="tw-figur" viewBox="0 0 110 196">' +
      '<ellipse cx="52" cy="186" rx="33" ry="6" fill="#000000" opacity=".12"/>' +
      '<path d="M30 110 C19 114 15 128 25 139" stroke="var(--tw-coat)" stroke-width="4.5" stroke-linecap="round" fill="none"/>' +
      '<circle cx="25.5" cy="140" r="4.2" fill="var(--tw-mane)"/>' +
      '<use href="#tw-koerper-form" fill="var(--tw-coat)"/>' +
      /* Flecken dicht gesetzt, mit schmalen hellen Gassen dazwischen */
      '<g clip-path="url(#tw-koerper-clip)" fill="var(--tw-patch)" opacity=".88">' +
        '<use href="#tw-fleck-c" transform="translate(53,42) rotate(10) scale(.5)"/>' +
        '<use href="#tw-fleck-e" transform="translate(47,56) rotate(-8) scale(.58)"/>' +
        '<use href="#tw-fleck-a" transform="translate(56,60) rotate(14) scale(.5)"/>' +
        '<use href="#tw-fleck-d" transform="translate(44,72) rotate(6) scale(.64)"/>' +
        '<use href="#tw-fleck-b" transform="translate(57,76) rotate(-12) scale(.56)"/>' +
        '<use href="#tw-fleck-c" transform="translate(47,88) rotate(-4) scale(.68)"/>' +
        '<use href="#tw-fleck-e" transform="translate(61,90) rotate(9) scale(.6)"/>' +
        '<use href="#tw-fleck-a" transform="translate(36,106) rotate(-6) scale(.95)"/>' +
        '<use href="#tw-fleck-d" transform="translate(51,102) rotate(12) scale(1.05)"/>' +
        '<use href="#tw-fleck-b" transform="translate(65,107) rotate(-9) scale(1)"/>' +
        '<use href="#tw-fleck-e" transform="translate(74,118) rotate(5) scale(.88)"/>' +
        '<use href="#tw-fleck-c" transform="translate(33,121) rotate(-14) scale(.85)"/>' +
        '<use href="#tw-fleck-a" transform="translate(47,120) rotate(7) scale(1)"/>' +
        '<use href="#tw-fleck-d" transform="translate(61,124) rotate(-6) scale(.92)"/>' +
        '<use href="#tw-fleck-b" transform="translate(40,134) rotate(11) scale(.8)"/>' +
        '<use href="#tw-fleck-e" transform="translate(56,135) rotate(-10) scale(.76)"/>' +
        '<use href="#tw-fleck-c" transform="translate(38,148) rotate(4) scale(.55)"/>' +
        '<use href="#tw-fleck-a" transform="translate(65,150) rotate(-7) scale(.55)"/>' +
        '<use href="#tw-fleck-d" transform="translate(37,163) rotate(9) scale(.48)"/>' +
        '<use href="#tw-fleck-b" transform="translate(66,165) rotate(-5) scale(.48)"/>' +
      '</g>' +
      '<g clip-path="url(#tw-koerper-clip)" fill="var(--tw-hoof)">' +
        '<rect x="28" y="172" width="20" height="14"/>' +
        '<rect x="55" y="172" width="20" height="14"/>' +
      '</g>' +
      '<use href="#tw-koerper-form" fill="url(#tw-volumen)"/>' +
      '<use href="#tw-kopf-gruppe" transform="translate(23,1) scale(.60)"/>' +
    '</symbol>' +
  '</svg>';

  var eingebaut = false;

  KS.twiga = {
    /* Einmal pro Seite. Ohne das zeigen alle <use> ins Leere. */
    einbauen: function () {
      if (eingebaut || document.getElementById("tw-sprite")) return;
      var halter = document.createElement("div");
      halter.style.position = "absolute";
      halter.style.width = "0";
      halter.style.height = "0";
      halter.style.overflow = "hidden";
      halter.innerHTML = SPRITE;
      document.body.insertBefore(halter, document.body.firstChild);
      eingebaut = true;
    },

    /* Kopf im Quadrat — fuer Avatare */
    kopf: function (px) {
      return '<svg class="twiga" width="' + px + '" height="' + px + '" ' +
             'aria-hidden="true" focusable="false"><use href="#tw-kopf"/></svg>';
    },

    /* Kopf mit Hals, hochkant */
    brustbild: function (px) {
      return '<svg class="twiga" width="' + px + '" height="' + Math.round(px * 1.12) + '" ' +
             'aria-hidden="true" focusable="false"><use href="#tw-brustbild"/></svg>';
    },

    /* Ganze Figur. Hoehe folgt aus dem Seitenverhaeltnis 110:196. */
    figur: function (px) {
      return '<svg class="twiga" width="' + px + '" height="' + Math.round(px * 196 / 110) + '" ' +
             'aria-hidden="true" focusable="false"><use href="#tw-figur"/></svg>';
    }
  };
})();
