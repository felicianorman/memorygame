"use strict";
let memoryCard = document.querySelectorAll(".card");
let displayPoints = document.getElementById("showScore");
let displayTime = document.getElementById("showTime");
//Variabler för flip funktionen
let flippedCard = false;
let firstCard, secondCard;
let lock = false;
let points = 0;
let time = 0;
// Skapar event listener för varje kort
function startGame() {
    for(let i = 0; i < memoryCard.length; i++)memoryCard[i].addEventListener("click", flip);
}
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
        alert(`Du vann! Det tog ${sec} sekunder och du fick ${points} poäng!`);
        clearInterval(clock);
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
let parentDiv = document.getElementById("memory");
let cardDiv = parentDiv.children;
let frag = document.createDocumentFragment();
//Funktion som shufflar korten
function shuffleHTML() {
    while(cardDiv.length)frag.appendChild(cardDiv[Math.floor(Math.random() * cardDiv.length)]);
    parentDiv.appendChild(frag);
}
let sec = 0;
let clock = setInterval(()=>{
    displayTime.innerHTML = String(sec);
    sec++;
}, 1000);
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);
function resetGame() {
    points = 0;
    time = 0;
    clearInterval(clock);
    displayPoints.innerHTML = String(points);
    displayTime.innerHTML = String(time);
    shuffleHTML();
    memoryCard.forEach((card, i)=>{
        setTimeout(()=>{
            card.classList.remove("flipped");
            memoryCard[i].addEventListener("click", flip);
        });
    });
}
startGame();
shuffleHTML();
