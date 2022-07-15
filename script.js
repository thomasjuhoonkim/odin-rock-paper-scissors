function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
  randInt = getRndInteger(0, 2);
  if (randInt === 0) {
    return "Rock";
  } else if (randInt === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const OPTIONS = ["rock", "paper", "scissors"];
  if (!OPTIONS.includes(playerSelection)) {
    return "Invalid Player Selection";
  }

  function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  if (playerSelection === computerSelection) {
    return `Tie! Both players played ${capitalize(playerSelection)}!`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else {
    return Exception("Comparison Error");
  }
}

function updateUI(
  playerSelection,
  computerSelection,
  result,
  playerScore,
  computerScore,
  gameResult
) {
  const h2PlayerSelection = document.querySelector(".player-selection");
  const h2ComputerSelection = document.querySelector(".computer-selection");
  const h2Result = document.querySelector(".result");
  const divScoreContainer = document.querySelector(".score-container");
  const h2PlayerScore = document.querySelector(".player-score");
  const h2ComputerScore = document.querySelector(".computer-score");
  const h2GameResult = document.querySelector(".game-result");

  h2PlayerSelection.innerHTML = `Player Selection: ${playerSelection}`;
  h2ComputerSelection.innerHTML = `Computer Selection: ${computerSelection}`;
  h2Result.innerHTML = result;
  divScoreContainer.style.border = "5px solid black";
  divScoreContainer.style.padding = "0 20px";
  h2PlayerScore.innerHTML = `Player Score: ${playerScore}`;
  h2ComputerScore.innerHTML = `Player Computer: ${computerScore}`;
  h2GameResult.innerHTML = gameResult;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const options = document.querySelectorAll(".option");
  options.forEach((option) =>
    option.addEventListener("click", () => {
      // play round
      const playerSelection = option.innerHTML;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      if (result.includes("You Win!")) {
        playerScore++;
      } else if (result.includes("You Lose!")) {
        computerScore++;
      }

      // game result
      let gameResult;
      if (playerScore > computerScore) {
        gameResult = "Player Wins!";
      } else if (playerScore < computerScore) {
        gameResult = "Computer Wins!";
      } else {
        gameResult = "Game is a Tie!";
      }

      updateUI(
        playerSelection,
        computerSelection,
        result,
        playerScore,
        computerScore,
        gameResult
      );
    })
  );
}

// event listeners
// const option = document.querySelectorAll(".option");
// option.forEach((selection) =>
//   selection.addEventListener("click", () => {
//     console.log(selection.innerHTML.toLowerCase());
//     const h2PlayerSelection = document.querySelector(".h2-selection");
//     h2PlayerSelection.innerHTML = `Player Selection: ${selection.innerHTML}`;
//   })
// );

game();
