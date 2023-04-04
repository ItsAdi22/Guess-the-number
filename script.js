"use strict";

let score = Number(document.querySelector(".score").textContent);
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log("shusssss:", secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number :(";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "YOU WON GG :D !!!";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "TOO HIGH :)" : "TOO LOW :)";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST :D";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});