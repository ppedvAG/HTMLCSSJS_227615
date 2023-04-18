// Ich bin ein einziliger Kommentar

/*
    Mehrzeiliger 
    Kommentar
*/

// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht

// Können texte, variablen Zahlen usw direkt in der Konsole der dev-Tools des Browsers eingeben

// Dafür müssen wir die console ansprechen
console.log("Hallo Welt!"); // einfache Ausgabe
console.error("Da lief was schief"); // Wird als Fehler ausgegeben
console.info("Ich bin eine Information!"); // Wird im Firefox mit Info Zeichen dargestellt  

// Variable definieren:

// Modernen Varianten:
let firstName = "Max";
// Syntax:
// let identifier = Wert;
// identifier muss mit Buchstaben, _ oder $ beginnen
// Identifier ist Case Sensitive
let age = 18;
// Variablen die mit let definiert wurden dürfen verändert werden

// Alternative zu let:
const lastName = "Mustermann";
// Funktioniert wir let, kann aber nicht neuzugewiesen werden

// Wie gebe ich diese Variablen in der Konsole aus?
console.log(firstName);

// Mit weiterem String kombinieren
console.log("Hallo " + firstName + " " +lastName);

// Interpolierter String:
console.log(`Hallo ${firstName} ${lastName}`);

// Wenn wir Anführungszeichen im String benutzen wollen:
console.log('er sagt: "Hallo Welt!"');
console.log("er sagt: 'Hallo Welt!'");

// ++ Inkrement => +1
// -- Dekrement => -1
let zahl = 12;
zahl *= 4;
let auchZahl = -12.5;
auchZahl++;

// null
// Ist die absichtliche Zuweisung KEINES Wertes
// Bedeutet die Abwesenheit von Daten
let nichts = null;

// undefined:
let test;
// Bedeutet, dass die Variable definiert, aber nie initialisiert wurde

// NaN
// Not a Number
// für ungültige Mathematische Operationen
console.log(test + 50);

// typeof(variable/wert)
console.log(typeof(firstName));

// Definiere zwei Variablen vom Type number
// Führe eine beliebige Arithmetische Operation mit den beiden Variablen aus und weise das Ergebnis
// einer Konstanten zu
// Lass die Konstante in der Konsole ausgeben

let zahl1 = 20;
let zahl2 = 30;
const zahl3 = zahl1 + zahl2;
console.log(zahl3);
