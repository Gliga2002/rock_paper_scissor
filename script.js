const MAX = 2;
const MIN = 0;



function getPlayerChoice() {
  const userChoice = prompt("It's your turn to pick (Rock, Paper, Scissor)");
  return userChoice[0].toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
}

// console.log(getPlayerChoice());



function getComputerChoice() {
  const arrayOfChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return arrayOfChoice[randomNumber];
}

// console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }

// console.log(playRound(getPlayerChoice,getComputerChoice))