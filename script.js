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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("You Win!")) {
      playerScore++;
    } else if (result.includes("You Lose!")) {
      computerScore++;
    }
    console.log(`Score:
    Player Score: ${playerScore}
    Computer Score: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Game is a Tie!");
  }
}

game();
