let memoryCard = document.querySelectorAll(".card");

let flippedCard = false;
let firstCard: any, secondCard: any;
let points = 0;

//Skapar event listener
for (let i = 0; i < memoryCard.length; i++) {
  memoryCard[i].addEventListener("click", flip);
}

//Funktion för att flippa korten
function flip(this: any) {
  console.log("Kortet flippat");
  this.classList.add("flipped");

  //Om inget card flippas
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  flippedCard = false;

  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    console.log("En match!");
    points++;
    console.log(points);
  }

  if(points === 6) {
    console.log("High Score!");
  }

  noMatch();
}

function noMatch(this: any) {
  if (firstCard.dataset.framework !== secondCard.dataset.framework) {
    console.log("Ingen match");

    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }, 1000);
  }
}

