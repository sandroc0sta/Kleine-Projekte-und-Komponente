//EN
// IMPORTANT: For <input> fields, use .value instead of .textContent.
// .textContent works for elements like <p> or <div> that display text.
// .value is the property that holds the text a user types into an input.
// Without .value, you'll always get an empty string from input elements.

//DE
// WICHTIG: Für <input>-Felder immer .value statt .textContent verwenden.
// .textContent funktioniert nur bei Elementen wie <p> oder <div>, die Text anzeigen.
// .value enthält den Text, den der Benutzer in ein Eingabefeld eingibt.
// Ohne .value erhält man bei Input-Elementen immer einen leeren String.


function add() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    document.getElementById("total-el").textContent = "Result: " + "\n" +  (num1 + num2);
}

function subtract() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    document.getElementById("total-el").textContent = "Result: " + "\n" +  (num1 - num2);
}

function multiply() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    document.getElementById("total-el").textContent = "Result: " + "\n" +  (num1 * num2);
}

function divide() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    document.getElementById("total-el").textContent = "Result: " + "\n" + (num1 / num2);
}

// EN
// IMPORTANT: Use Number(...) to convert input values from strings to numbers.
// Input fields return their values as strings by default.
// Without Number(...), "+" would concatenate strings instead of adding numbers,
// and other operations might give unexpected results.
// The parentheses ensure the calculation happens before converting to string output.

// DE
// WICHTIG: Verwenden Sie Number(...), um Eingabewerte von Strings in Zahlen umzuwandeln.
// Eingabefelder liefern ihre Werte standardmäßig als Strings zurück.
// Ohne Number(...) würde "+" Zeichenketten verketten statt Zahlen zu addieren,
// und andere Operationen könnten unerwartete Ergebnisse liefern.
// Die Klammern stellen sicher, dass die Berechnung erfolgt, bevor die Ausgabe als String erfolgt.