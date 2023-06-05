//* ------ Selectors ------- */
const selectionArticle = document.querySelector(".selection");

//? Secilen elemanlarin tasiyicisi
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//? message
const messagePar = document.querySelector(".message");

//? Scores
const scoreCardSelection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");

//? Modal
const modalCardSection = document.querySelector(".modal-card");
const finalMessagepar = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-again");

//* ------- Variables ------- */
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");

//? Colors
const YELLOW = "#ffc538";
const RED = " #fb778b";
const GREEN = "#5ab7ac";

//* ------- Event Listeners ------- */
//! tek bir event ile cozulmus oldu.
selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
    calculateResult();
  }
});

playAgainBtn.addEventListener("click", () => {
  modalCardSection.classList.remove("show");
  window.location.reload(); // cok tercih edilmez ama burda sorun olmaz
});
//* ------- Functions ------- */
const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
};

const calculateResult = () => {
  if (userSelectImg.alt === pcSelectImg.alt) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcSelectImg.alt === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcSelectImg.alt === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcSelectImg.alt === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "It's a draw";
  scoreCardSelection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};
const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSelection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSelection.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
};

const openModal = () => {
  modalCardSection.classList.add("show");

  if (yourScoreSpan.textContent === "10") {
    finalMessagepar.textContent = "You Win";
    document.querySelector(".modal").style.backgroundColor = GREEN;
    playAgainBtn.style.color = GREEN;
  } else {
    finalMessagepar.textContent = "You Lost";
    document.querySelector(".modal").style.backgroundColor = RED;
    playAgainBtn.style.color = RED;
  }
};
//? Local Storage veri yazma
// localStorage.setItem ("highScore" , pcScorespan)

//* Ilkel Yontem

// //?Resimler
// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");

// rockImg.addEventListener("click", () => {
//   image.src = "./assets/rock.png";
//   image.alt = "rock";
//   yourChoiceDiv.appendChild(image);
// });
// paperImg.addEventListener("click", () => {
//   image.src = "./assets/paper.png";
//   image.alt = "paper";
//   yourChoiceDiv.appendChild(image);
// });
// scissorImg.addEventListener("click", () => {
//   image.src = "./assets/scissor.png";
//   image.alt = "scissor";
//   yourChoiceDiv.appendChild(image);
// });
