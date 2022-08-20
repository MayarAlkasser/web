class Kategorie {
  constructor(name, url, bname) {
    this.name = name;
    this.bild = new Bild(url, bname);
  }
}

class Tutorial {
  constructor(
    name,
    sprache,
    beschreibung,
    dauer,
    datum,
    url,
    embedCode,
    burl,
    bname
  ) {
    this.name = name;
    this.sprache = sprache;
    this.dauer = dauer;
    this.datum = new Date(datum);
    this.beschreibung = beschreibung;
    this.url = url;
    this.embedCode = embedCode;
    this.kapitelliste = [];
    this.kategorien = [];
    this.bild = new Bild(burl, bname);
  }

  fuegeKategorieHinzu(kap) {
    this.kategorien.push(kap);
  }

  fuegeKapitelHinzu(kat) {
    this.kapitelliste.push(kat);
  }
}

class Kapitel {
  constructor(name, beschreibung, dauer) {
    this.name = name;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    // Tutorial.fuegeKapitelHinzu(this);
  }
}

class Bild {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
}

function getDauerInStundenUndMinuten(dauer) {
  let feld = dauer.split(":");
  return `${feld[0]}h ${feld[1]}min`;
}

//Objekterstellung
let kategorie1 = new Kategorie("Web-Technologien", "/img/web-development-logo.jpg", "bildWeb");
let kategorie2 = new Kategorie("Musik", "/img/music-logo.jpg", "bildMusik");
let kategorie3 = new Kategorie("Games", "/img/games-logo.png", "bildGames");
let kategorie4 = new Kategorie("Koche", "/img/koch-Tutorial.png", "bildKoch");

let kategorieFeld = [kategorie1, kategorie2, kategorie3, kategorie4];

let tutorial3 = new Tutorial(
  "JavaScript",
  "Deutsch",
  "Anfänger-Kurs",
  "04:20",
  "2012-12-31",
  "https://www.w3schools.com/js/",
  "",
  "/img/javascript.PNG",
  "FotoJava"
);
let tutorial2 = new Tutorial(
  "CSS3",
  "Deutsch",
  "Grundlagen CSS3. CSS ist nicht so mächtig wie JavaScript",
  "01:55",
  "2013-07-01",
  "https://www.w3schools.com/css/css_text.asp",
  "",
  "/img/css3-logo.PNG",
  "FotoCSS"
);
let tutorial1 = new Tutorial(
  "HTML5",
  "Deutsch",
  "Basics",
  "02:40",
  "2021-10-01",
  "",
  "qz0aGYrrlhU",
  "/img/html5-logo.PNG",
  "FotoHTML"
);

let tutorialsFled = [tutorial1, tutorial2,tutorial3];

let kapitel1 = new Kapitel("Anfang1", "Einleitung1", "02:20");
let kapitel2 = new Kapitel("Mitte1", "Einleitung1", "03:20");
let kapitel3 = new Kapitel("Ende1", "Einleitung1", "04:20");

tutorial1.fuegeKapitelHinzu(kapitel1);
tutorial1.fuegeKapitelHinzu(kapitel2);
tutorial1.fuegeKapitelHinzu(kapitel3);

let kapitel4 = new Kapitel("Anfang2", "Einleitung2", "02:20");
let kapitel5 = new Kapitel("Mitte2", "Einleitung2", "03:20");
let kapitel6 = new Kapitel("Ende2", "Einleitung2", "04:20");

tutorial2.fuegeKapitelHinzu(kapitel4);
tutorial2.fuegeKapitelHinzu(kapitel5);
tutorial2.fuegeKapitelHinzu(kapitel6);

let kapitel7 = new Kapitel("Anfang3", "Einleitung3", "02:20");
let kapitel8 = new Kapitel("Mitte3", "Einleitung3", "03:20");
let kapitel9 = new Kapitel("Ende3", "Einleitung3", "04:20");

tutorial3.fuegeKapitelHinzu(kapitel7);
tutorial3.fuegeKapitelHinzu(kapitel8);
tutorial3.fuegeKapitelHinzu(kapitel9);

//Objekte hinzufuegen
tutorial1.fuegeKategorieHinzu(kategorie1);
tutorial1.fuegeKategorieHinzu(kategorie3);

tutorial2.fuegeKategorieHinzu(kategorie2);
tutorial2.fuegeKategorieHinzu(kategorie4);

tutorial3.fuegeKategorieHinzu(kategorie1);

//Sortierung
tutorial1.kategorien.sort(function (a, b) {
  if (a.name > b.name) return 1;
  else if (a.name < b.name) return -1;
  else return 0;
});

//Praktikum 8 Aufgabe 2.3
function getTutorialsZuKategorie(kategorieName) {
  let feld = [];
  for (let i = 0; i < tutorialsFled.length; i++) {
    for (let j = 0; j < tutorialsFled[i].kategorien.length; j++) {
      if (tutorialsFled[i].kategorien[j].name === kategorieName){
        feld.push(tutorialsFled[i]);
        break;
      }
    }
  }
  return feld;
}
function getTutorialByName(Tutorialname){
  let erg;
  tutorialsFled.forEach(element => {
    if(Tutorialname === element.name){
      erg= element;
     
    }
  });  
  return erg;
}

module.exports = {
  Tutorial,
  kategorieFeld,
  tutorialsFled,
  getTutorialByName,
  getDauerInStundenUndMinuten,
  getTutorialsZuKategorie,
};
