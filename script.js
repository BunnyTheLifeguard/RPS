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

console.log("Test");
console.log(computerPlay());
