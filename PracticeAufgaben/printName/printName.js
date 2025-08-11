let firstName = "Sandro";
let lastName = "Costa";
let fullName = firstName + " " + lastName;

console.log(fullName);

function logName(){
    document.getElementById("name-El").textContent=("Well hello there, " + fullName + "!")
    console.log("Well hello there, " + fullName + "!");
}
logName();