const MAX = 2;
const MIN = 0;
const NUMBERS_OF_ROUNDS = 5;



function getPlayerChoice() {
  const playerChoice = prompt("It's your turn to pick (Rock, Paper, Scissor)");
  return playerChoice[0].toUpperCase() + playerChoice.slice(1).toLocaleLowerCase();
}

// console.log(getPlayerChoice());



function getComputerChoice() {
  const arrayOfChoice = ['Rock', 'Paper', 'Scissor'];
  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return arrayOfChoice[randomNumber];
}

// console.log(getComputerChoice());
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection();
  const computerChoice = computerSelection();
  console.log(playerChoice);
  console.log(computerChoice);
  switch (playerChoice) {
    case 'Rock':
      if(computerChoice === 'Rock') {
        return "It's draw"
      } else if(computerChoice === 'Paper') {
        computerScore++;
        return "You Lose! Paper beats Rock"
      } else if(computerChoice === 'Scissor') {
        playerScore++;
        return "You Win! Rock beats Paper"
      }
      break;
    case 'Paper':
      if(computerChoice === 'Paper') {
        return "It's draw"
      } else if(computerChoice === 'Scissor') {
        computerScore--;
        return "You Lose! Scissor beats Papper"
      } else if(computerChoice === 'Rock') {
        playerScore++;
        return "You Win! Papper beats Rock"
      }
    case 'Scissor':
      if(computerChoice === 'Scissor') {
        return "It's draw"
      } else if(computerChoice === 'Rock') {
        computerScore--;
        return "You Lose! Rock beats Scissor"
      } else if(computerChoice === 'Paper') {
        playerScore++;
        return "You Win! Scissor beats Paper"
      }
      break;
      default:
        return "Please enter valid data (Rock, Paper, Scissor)";
    }
}



function game(playRound) {
  for(let i = 0; i < NUMBERS_OF_ROUNDS; i++) {
    console.log(playRound(getPlayerChoice,getComputerChoice));
    console.log(playerScore, computerScore);
  }
}

game(playRound);