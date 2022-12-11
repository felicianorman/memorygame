"use strict";
let memoryCard = document.querySelectorAll(".card");
let displayPoints = document.getElementById("showScore");
let displayTime = document.getElementById("showTime");
let flippedCard = false;
let firstCard, secondCard;
let points = 0;
let time = 0;
let lock = false;
//Skapar event listener
for(let i = 0; i < memoryCard.length; i++)memoryCard[i].addEventListener("click", flip);
//Funktion för att flippa korten
function flip() {
    //Hindrar användaren att klicka på mer än två kort samtidigt. Om lock är true så stoppas funktionen här
    if (lock) return;
    console.log("Kortet flippat");
    this.classList.add("flipped");
    //Väntar på att andra kortet ska flippas
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    flippedCard = false;
    checkMatch();
}
//Kontrollerar om det blir en matchning
function checkMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        console.log("En match!");
        //Adderar poäng vid varje match
        points++;
        console.log(points);
        //Visar i DOM:en
        displayPoints.innerHTML = String(points);
    }
    if (points === 6) {
        //Om användaren får full pott
        console.log("High Score!");
        setTimeout(()=>{
            alert("Du vann!");
        }, 1000);
    }
    noMatch();
}
//Om användaren inte får en matchning
function noMatch() {
    if (firstCard.dataset.framework !== secondCard.dataset.framework) {
        console.log("Ingen match");
        lock = true;
        setTimeout(()=>{
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            lock = false;
        }, 1000);
    }
}
//Börjar med att visa 0 poäng
displayPoints.innerHTML = String(points);
displayTime.innerHTML = `${String(time)} s`;

//# sourceMappingURL=index.cd6d870a.js.map
