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
  if (playerCap == computerSelection) {
    result = "Tie!";
  } else if (playerCap == "Rock" && computerSelection == "Paper") {
    result = "Paper beats rock. You lost.";
  } else if (playerCap == "Rock" && computerSelection == "Scissors") {
    result = "Rock beats scissors. You won.";
  } else if (playerCap == "Paper" && computerSelection == "Rock") {
    result = "Paper beats rock. You won.";
  } else if (playerCap == "Paper" && computerSelection == "Scissors") {
    result = "Scissors beats paper. You lost.";
  } else if (playerCap == "Scissors" && computerSelection == "Rock") {
    result = "Rock beats scissors. You lost.";
  } else if (playerCap == "Scissors" && computerSelection == "Paper") {
    result = "Scissors beats paper. You won.";
  } else {
    result = "Something wrong with uppercase-stuff.";
  }
  return result;
}

//check play function
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
