//* ------ Selectors ------- */
//?Resimler
const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor");

//? Secilen elemanlarin tasiyicisi
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//* ------- Variables ------- */
let image = document.createElement("img");
//* ------- Event Listeners ------- */
rockImg.addEventListener("click", () => {
  image.src = "./assets/rock.png";
  image.alt = "rock";
  yourChoiceDiv.appendChild(image);
});
paperImg.addEventListener("click", () => {
  image.src = "./assets/paper.png";
  image.alt = "paper";
  yourChoiceDiv.appendChild(image);
});
scissorImg.addEventListener("click", () => {
  image.src = "./assets/scissor.png";
  image.alt = "scissor";
  yourChoiceDiv.appendChild(image);
});

//* ------- Functions ------- */
