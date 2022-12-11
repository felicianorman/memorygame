let memoryCard = document.querySelectorAll(".memory__card");

//Skapar event listener
for(let i = 0; i < memoryCard.length; i++) {
    memoryCard[i].addEventListener("click", flip);
}

//Funktion för att flippa korten
function flip(this: any) {
    console.log("Klickad");
    this.classList.add("flipped");
}