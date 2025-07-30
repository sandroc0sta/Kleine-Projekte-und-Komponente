let welcomeEl= document.getElementById("welcome-el");

let h2 = welcomeEl. querySelector("h2");
let p= welcomeEl.querySelector("p");
let innerTitle = document.getElementById("inner-title");
let innerText = document.getElementById("inner-text");
let percentageCompleted = 47;
let bottomText = document.getElementById("bottom-text");

let userName= "Sandro Costa!";
let greeting= "Willkommen zurück";

h2.innerText = greeting + ", " + userName + '👋';
p.innerText = "Setzen Sie Ihre Erfahrung fort";
innerTitle.innerText = "Modul 3: Web-Design";
innerText.innerText = "Responsive Layouts mit Flexbox und Grid";
bottomText.innerText = "Prozentsatz abgeschlossen: " + percentageCompleted + "%";