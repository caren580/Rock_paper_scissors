const compSection = document.querySelector(".comp-section");
const playerSection = document.querySelector(".player-section");
const scoreSection = document.querySelector(".score");
const computerGuess = compSection.querySelector(".guesses");
const playerGuess = playerSection.querySelector(".guesses");
const scoreDisplay = scoreSection.querySelector("h2");
const computerScoreDisplay = document.querySelector(".computer-score");
const playerScoreDisplay = document.querySelector(".player-score");
const emojiOptions = document.querySelectorAll(".emoji-option");

let playerScore = 0;
let computerScore = 0;
const choices = ["✊🏽", "✋🏽", "✌🏽"];
const results = ["rock", "paper", "scissors"];

emojiOptions.forEach((e) => {
  e.addEventListener("click", function () {
    playerGuess.textContent = e.textContent;
    let computerSelection = getComputerChoice();
    computerGuess.textContent = choices[computerSelection];
    determineWinner(e.textContent, choices[computerSelection]);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

function getComputerChoice() {
  return Math.floor(Math.random() * choices.length);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    scoreDisplay.textContent = "CURRENTLY DRAW";
    return;
  }

  if (playerChoice === "✊🏽") {
    if (computerChoice === "✌🏽") {
      scoreDisplay.textContent = "PLAYER WINS";
      playerScore++;
    } else {
      scoreDisplay.textContent = "COMPUTER WINS";
      computerScore++;
    }
  } else if (playerChoice === "✋🏽") {
    if (computerChoice === "✊🏽") {
      scoreDisplay.textContent = "PLAYER WINS";
      playerScore++;
    } else {
      scoreDisplay.textContent = "COMPUTER WINS";
      computerScore++;
    }
  } else if (playerChoice === "✌🏽") {
    if (computerChoice === "✋🏽") {
      scoreDisplay.textContent = "PLAYER WINS";
      playerScore++;
    } else {
      scoreDisplay.textContent = "COMPUTER WINS";
      computerScore++;
    }
  }
}
