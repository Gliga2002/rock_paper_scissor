const MAX = 2;
const MIN = 0;
const NUMBERS_OF_ROUNDS = 5;

const itemContainer = document.querySelector('.item-container');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const mainContainer = document.querySelector('#main-container');

const clickedAudio = document.querySelector('#startbuttonsound');
const winnerAudio = document.querySelector('#winningsound');
const losingAudio = document.querySelector('#losingsound');

const startGameContainer = document.querySelector('#startgame');
const mainElement = document.querySelector('main');

let previousClickedUserEl;
let previousClickedComputerEl;




startGameContainer.addEventListener('click', function(e) {
  const target = e.target.closest('#startbutton');
  if(!target) return;
  startGameContainer.classList.add('hidden');
  mainElement.classList.remove('hidden');
})



itemContainer.addEventListener('click', function(e) {
  if(previousClickedUserEl !== undefined) previousClickedUserEl.classList.remove('clicked-player')

  const clickedItem = e.target.closest('.item');

  if(!clickedItem) return;
  
  clickedItem.classList.add('clicked-player');
  previousClickedUserEl = clickedItem;
  const clickedItemText = clickedItem.textContent.trim();
  playRound(clickedItemText, getComputerChoice);
  console.log(playerScore);
  console.log(computerScore);

  playerScoreEl.textContent = `Score: ${playerScore}`;
  computerScoreEl.textContent = `Score: ${computerScore}`;

  clickedAudio.currentTime = 0;
  clickedAudio.play();


  if(playerScore === NUMBERS_OF_ROUNDS) {
    mainContainer.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('flex--center-column', 'gap-15');
    div.innerHTML = `<img class="logo-md" src="https://tmcerlean.github.io/rock-paper-scissors/images/user.png" alt="men" />
    <p id="player-score" class="subheading subheading-white to-upper-case">YOU WIN ${playerScore} : ${computerScore}</p>
    <a onclick ="window.location.reload()" href="#index.html" id="endbutton">Play Again?
        </a>
    `
    mainContainer.appendChild(div);
    winnerAudio.play();
  } else if(computerScore === NUMBERS_OF_ROUNDS) {
    mainContainer.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('flex--center-column','gap-15');
    div.innerHTML = `<img class="logo-md" src="https://tmcerlean.github.io/rock-paper-scissors/images/robot.png" alt="robot" />
    <p id="player-score" class="subheading subheading-white to-upper-case">YOU LOST ${playerScore} : ${computerScore}</p>
    <a onclick ="window.location.reload()" href="#" id="endbutton">Play Again?
    </a>`


    mainContainer.appendChild(div);
    losingAudio.play();

    
  }

  
})




// function getPlayerChoice() {
//   const playerChoice = prompt("It's your turn to pick (Rock, Paper, Scissor)");
//   return playerChoice[0].toUpperCase() + playerChoice.slice(1).toLocaleLowerCase();
// }

// console.log(getPlayerChoice());



function getComputerChoice() {
  if(previousClickedComputerEl !== undefined) previousClickedComputerEl.classList.remove('clicked-computer')
  const arrayOfChoice = ['Rock', 'Paper', 'Scissor'];
  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  const computerItemEl = document.querySelector(`#${arrayOfChoice[randomNumber]}`);
  computerItemEl.classList.add('clicked-computer');
  previousClickedComputerEl = computerItemEl;
  return arrayOfChoice[randomNumber];
}

// console.log(getComputerChoice());
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

  const computerChoice = computerSelection();
  console.log(playerSelection);
  console.log(computerChoice);
  switch (playerSelection) {
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
        computerScore++;
        return "You Lose! Scissor beats Papper"
      } else if(computerChoice === 'Rock') {
        playerScore++;
        return "You Win! Papper beats Rock"
      }
    case 'Scissor':
      if(computerChoice === 'Scissor') {
        return "It's draw"
      } else if(computerChoice === 'Rock') {
        computerScore++;
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





// function game(playRound) {
//   for(let i = 0; i < NUMBERS_OF_ROUNDS; i++) {
//     console.log(playRound(getPlayerChoice,getComputerChoice));
//     console.log(playerScore, computerScore);
//   }
// }

// // game(playRound);