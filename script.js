const MAX = 2;
const MIN = 0;
const NUMBERS_OF_ROUND = 5;



function getPlayerChoice() {
  const userChoice = prompt("It's your turn to pick (Rock, Paper, Scissor)");
  return userChoice[0].toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
}

// console.log(getPlayerChoice());



function getComputerChoice() {
  const arrayOfChoice = ['Rock', 'Paper', 'Scissor'];
  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return arrayOfChoice[randomNumber];
}

// console.log(getComputerChoice());

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
        return "You Lose! Paper beats Rock"
      } else if(computerChoice === 'Scissor') {
        return "You Win! Rock beats Paper"
      }
      break;
    case 'Paper':
      if(computerChoice === 'Paper') {
        return "It's draw"
      } else if(computerChoice === 'Scissor') {
        return "You Lose! Scissor beats Papper"
      } else if(computerChoice === 'Rock') {
        return "You Win! Papper beats Rock"
      }
    case 'Scissor':
      if(computerChoice === 'Scissor') {
        return "It's draw"
      } else if(computerChoice === 'Rock') {
        return "You Lose! Rock beats Scissor"
      } else if(computerChoice === 'Paper') {
        return "You Win! Scissor beats Paper"
      }
      break;
  }
}
console.log(playRound(getPlayerChoice,getComputerChoice));