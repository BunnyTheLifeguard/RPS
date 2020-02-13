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
  const results = document.querySelector('#results');
  
  const buttons = document.querySelectorAll('button');
  const final = document.createElement('h2');
  final.classList.add('final');

  var scoreP = 0;
  var scoreB =0;
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      game = playRound(String(button.id), computerPlay());

      const msg = document.createElement('p');
      msg.classList.add('msg');
      const scP = document.createElement('p');
      scP.classList.add('scP');
      const scB = document.createElement('p');
      scB.classList.add('scB');
      
      msg.textContent = game.message;
      results.appendChild(msg);
      scoreP += game.pointsPlayer;
      scP.textContent = scoreP;
      results.appendChild(scP);
      scoreB += game.pointsBot;
      scB.textContent = scoreB;
      results.appendChild(scB);

      if (scoreP == 5 || scoreB == 5) {
        if (scoreP > scoreB) {
          final.textContent = 'You won!'
          results.appendChild(final);
        } else {
          final.textContent = 'Skynet won! RUN!!!'
          results.appendChild(final);
        }
      }
    });    
  });
  
//   console.log("Final Scoreboard: " + playerScore + " : " + botScore);
//   if (playerScore > botScore) {
//     console.log("The winner: YOU");
//   } else {
//     console.log("The winner: Skynet!!! :O");
//   }
}

game();
