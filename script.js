const MAX = 2;
const MIN = 0;


function getComputerChoice() {
  const arrayOfChoice = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return arrayOfChoice[randomNumber];
}

console.log(getComputerChoice());