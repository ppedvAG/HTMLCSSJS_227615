// Objects

// An sich eine Sammlung von Schlüssel:Wert Paaren
// Diese Schlüssel nennen wir Properties
// Außer wenn es sich bei den Werten dieser properties um Funktionen handelt
// Dann sprechen wir von Methoden

// Wie initialisiere ich Objekte
// 3. versch. Möglichkeiten:

// 1. object literal
const objectLiteral = {
    "name" : "Max Mustermann",
    "age" : 15,
    "employed" : true,
    "cityOfOrigin" : "Munich"
};
// Property-Namen können auch ohne "" oder '' definiert werden
// Anführungszeichen sind erst absolut notwendig wenn es sich beim prop-Namen nicht um einen gültigen JS
// Identifier handelt
// Kann mit oder ohne trailing Komma definiert werden

// 2. constructor
const constructedObject = new Object();
// Erstellt ein bis dato leeres Objekt

// 3. shorthand
// Gibt es ES6
let person2Name = "Erika Musterfrau";
let person2Age = 22;
let person2Employed = true;
let person2CityOfOrigin = "Vienna";

const shorthandObject = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityOfOrigin
};
// Beim shorthand wird nun der identifier der Variable zum Namen des Props und der Wert der Variable wird der Wert des props

// Wie greife ich auf Props eines Objektes zu?
// 1. Bracket Notation
// Objekte verfügen nicht über indizes
console.log(objectLiteral["name"]); // => Max Mustermann
console.log(shorthandObject["person2Name"]); // => Erika Musterfrau
// Die dot-Notation funktioniert nur mit Prop-Namen, die gültige JS-Identifier sind 
// console.log(objectLiteral.city of Origin);
// Würde nicht gehen, da Leerzeichen im Prop-Namen enthalten sind

// Wie erstelle ich dynamische props?

// dynamische Props sind Props, die wir nach der Erstellung des Objektes hinzufügen
constructedObject.name = "Test Testmann";
constructedObject.age = 45;
constructedObject.employed = false;
constructedObject["cityOfOrigin"] = "Berlin";
// Wir weisen einfach einem Prop einen Wert zu
// Falls das prop noch nicht existiert wird es neuerstellt
// Falls es bereits existiert wird es überschrieben

// Wie erstelle ich einen Objekt-Constructor?
// Constructor sind fast normale Funktionen
// Die Besonderheiten: this und kein return

// Einschub Methoden anfügen
function introduce() {
    console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
}

// Person-Constructor:
// Constructor werden normalerweise mit großbuchstaben benannt
function Person(nameProp, age, employed, cityOfOrigin) {
    this.name = nameProp;
    this.age = age;
    this.employed = employed;
    this.cityOfOrigin = cityOfOrigin;
    this.introduceSelf = introduce;
};

// Wie rufe ich diesen Constructor auf?
// Bei Constructors brauchen wir das new Keyword
const person1 = new Person("Christian Lindner", 49, true, "Cologne");
const person2 = new Person("Luke Skywalker", 24, false, "Tattooin");
// Ohne das new-Keyword wird undefined zurückgegeben, da wir keinen return haben
// d.h. damit der Constructor wie gewollt funktioniert benötigen wir das new-Keyword

console.log(person1.name);
console.log(person2.introduceSelf());

// beispiel mit keyword class:
class PersonAlt {
    xyz = 124;
    constructor(nameProp, age, employed, cityOfOrigin) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
        }

    introduceSelf() {
        console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
    }
}

const person3 = new PersonAlt("Christian nichtLindner", 48, false, "Hamburg");
person3.introduceSelf();

// Übung: 
// Erstelle eine Klasse Auto
// Sie soll folgende Props besitzen:
// marke
// modell
// motorStatus (boolean)
// derzeitigeGeschw
// maximaleGeschw

// derzeitige Geschwindigkeit soll bei der Erstellung immer 0 sein
// motorStatus soll bei der Erstellung immer false sein

// Methoden:
// anAbschalten
// Die Methode soll nur den motorStatus ändern
// Beschleunige(neueGeschw)
// Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschw setzen außer wenn diese die maximale Geschwindigkeit überschreiten würde
