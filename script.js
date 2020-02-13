function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() {
  rng = getRandomInt(0, 3);
  if (rng == 0) {
    result = "Rock";
  } else if (rng == 1) {
    result = "Paper";
  } else {
    result = "Scissors";
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  const playerLow = playerSelection.toLowerCase();
  const playerCap = playerLow.charAt(0).toUpperCase() + playerLow.slice(1);
  scoreBot = 0;
  scorePlayer = 0;
  if (playerCap == computerSelection) {
    result = "Tie!";
  } else if (playerCap == "Rock" && computerSelection == "Paper") {
    result = "Paper beats rock. You lost.";
    scoreBot = 1;
  } else if (playerCap == "Rock" && computerSelection == "Scissors") {
    result = "Rock beats scissors. You won.";
    scorePlayer = 1;
  } else if (playerCap == "Paper" && computerSelection == "Rock") {
    result = "Paper beats rock. You won.";
    scorePlayer = 1;
  } else if (playerCap == "Paper" && computerSelection == "Scissors") {
    result = "Scissors beats paper. You lost.";
    scoreBot = 1;
  } else if (playerCap == "Scissors" && computerSelection == "Rock") {
    result = "Rock beats scissors. You lost.";
    scoreBot = 1;
  } else {
    result = "Scissors beats paper. You won.";
    scorePlayer = 1;
  }
  return {
    message: result,
    pointsPlayer: scorePlayer,
    pointsBot: scoreBot
  };
}

function game() {
  round = 0;
  let playerScore = 0;
  let botScore = 0;
  while (round < 5) {
    let choice = prompt("Rock, Paper or Scissors?");
    let roundResults = playRound(choice, computerPlay());
    let msg = roundResults.message;
    playerScore += roundResults.pointsPlayer;
    botScore += roundResults.pointsBot;
    console.log(msg);
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + botScore);
    console.log("");
    round++;
  }
  console.log("Final Scoreboard: " + playerScore + " : " + botScore);
  if (playerScore > botScore) {
    console.log("The winner: YOU");
  } else {
    console.log("The winner: Skynet!!! :O");
  }
}

game();
