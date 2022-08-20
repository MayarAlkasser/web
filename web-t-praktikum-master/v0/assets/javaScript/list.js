//Praktikum 7 Aufgabe 3.2.1
let breite = function getViewportWidth() {
    return window.innerWidth || 
    document.documentElement.clientWidth;
}

//console.log(breite());

//Praktikum 7 Aufgabe 3.2.2
console.log(`Die Viewport-Breite beträgt: ${breite()} Pixel.`);


//Praktikum 8 Aufgabe 1
class Kategorie {
    constructor(name,url, bname) {
        this.name = name;
        this.bild = new Bild(url,bname);
    }
}

class Tutorial {
    constructor(name, sprache, beschreibung, dauer, datum, url, embedCode,burl,bname) {
        this.name = name;
        this.sprache = sprache;
        this.dauer = dauer;
        this.datum = new Date(datum);
        this.beschreibung = beschreibung;
        this.url = url;
        this.embedCode = embedCode;
        this.kapitelliste = [];
        this.kategorien = [];
        this.bild = new Bild(burl,bname);
    }
    
    fuegeKategorieHinzu(kap) {
        this.kategorien.push(kap);
    }
    
    fuegeKapitelHinzu(kat) {
        this.kapitelliste.push(kat);
    }
    
}

class Kapitel {
    constructor(name, beschreibung, dauer){
        this.name= name;
        this.beschreibung = beschreibung; 
        this.dauer = dauer;
       // Tutorial.fuegeKapitelHinzu(this);
    }
}

class Bild {
    constructor(url,name){
        this.url = url;
        this.name = name;
    }
    
}

function getDauerInStundenUndMinuten(dauer){
    let feld = dauer.split(":");
    return `${feld[0]}h ${feld[1]}min`;
}

//Objekterstellung
let kategorie1 = new Kategorie("Web-Entwicklung","www.muti.com","bild1");
let kategorie2 = new Kategorie("Datenbanken","www.lolo.com","bild2");
let kategorie3 = new Kategorie("Rechnernetze","www.fofo.com","blid3");
let kategorie4 = new Kategorie("Betriebsysteme","www.soso.com","bild4");

let kategorieFeld = [kategorie1,kategorie2,kategorie3,kategorie4];

let tutorial1 = new Tutorial("JavaScript","Deutsch","Einfuerung","03:12","2020-12-31","www.soso.com","code1","www.bild1.com","Foto1");
let tutorial2 = new Tutorial("CSS","Deutsch","Einfuerung","03:12","2020-07-01","www.fofo.com","code2","www.bild2.com","Foto2");

let tutorialsFled = [tutorial1,tutorial2];

let kapitel1 = new Kapitel("Anfang1","Einleitung1","02:20");
let kapitel2 = new Kapitel("Mitte1","Einleitung1","03:20");
let kapitel3 = new Kapitel("Ende1","Einleitung1","04:20");

tutorial1.fuegeKapitelHinzu(kapitel1);
tutorial1.fuegeKapitelHinzu(kapitel2);
tutorial1.fuegeKapitelHinzu(kapitel3);

let kapitel4 = new Kapitel("Anfang2","Einleitung2","02:20");
let kapitel5 = new Kapitel("Mitte2","Einleitung2","03:20");
let kapitel6 = new Kapitel("Ende2","Einleitung2","04:20");

tutorial2.fuegeKapitelHinzu(kapitel4);
tutorial2.fuegeKapitelHinzu(kapitel5);
tutorial2.fuegeKapitelHinzu(kapitel6);


//Objekte hinzufuegen
tutorial1.fuegeKategorieHinzu(kategorie1);
tutorial1.fuegeKategorieHinzu(kategorie3);

tutorial2.fuegeKategorieHinzu(kategorie2);
tutorial2.fuegeKategorieHinzu(kategorie4);

//Sortierung
tutorial1.kategorien.sort(function(a,b){
    if(a.name > b.name) return 1;
    else if(a.name < b.name) return -1;
    else return 0;

});

//Praktikum 8 Aufgabe 2.3
function getTutorialsZuKategorie(kategorieName) {
    let feld = [];
    for(let i = 0; i < tutorialsFled.length; i++) {
        for (let j = 0; j< tutorialsFled[i].kategorien.length; j++) {
            if (tutorialsFled[i].kategorien[j].name === kategorieName)
                feld.push(tutorialsFled[i]);
        } 
    }
    return feld;
}

//forEach Empfehlung
for (let i = 0; i < kategorieFeld.length; i++) {
    console.log(`Kategorie: ${kategorieFeld[i].name}`);
    console.log(`Bild: ${kategorieFeld[i].bild.name}`);
    let feld = getTutorialsZuKategorie(kategorieFeld[i].name);
    for (let j = 0; j < feld.length; j++) {
        console.log(`\t${feld[j].name} (${feld[j].sprache})\t ${feld[j].datum}\n${feld[j].beschreibung}\n${getDauerInStundenUndMinuten(feld[j].dauer)}\n
        ${feld[j].embedCode}\t${feld[j].url}`);
        for (let y = 0; y < feld[j].kapitelliste.length; y++) {
            console.log(`\t\t${feld[j].kapitelliste[y].dauer}\t${feld[j].kapitelliste[y].name}\t${feld[j].kapitelliste[y].beschreibung}`);
        }
    }
    console.log("[..............]");
}