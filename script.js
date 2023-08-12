const MAX = 2;
const MIN = 0;
const NUMBERS_OF_ROUNDS = 5;
const PLAYER_URL = "https://tmcerlean.github.io/rock-paper-scissors/images/user.png";
const COMPUTER_URL= "https://tmcerlean.github.io/rock-paper-scissors/images/robot.png";

let playerScore = 0;
let computerScore = 0;
let previousClickedUserEl;
let previousClickedComputerEl;

const itemContainer = document.querySelector('.item-container');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const mainContainer = document.querySelector('#main-container');

const clickedAudio = document.querySelector('#startbuttonsound');
const winnerAudio = document.querySelector('#winningsound');
const losingAudio = document.querySelector('#losingsound');

const startGameContainer = document.querySelector('#startgame');
const mainElement = document.querySelector('main');



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


  playerScoreEl.textContent = `Score: ${playerScore}`;
  computerScoreEl.textContent = `Score: ${computerScore}`;

  clickedAudio.currentTime = 0;
  clickedAudio.play();


  if(playerScore === NUMBERS_OF_ROUNDS) displayWinner(PLAYER_URL, true);
  if(computerScore === NUMBERS_OF_ROUNDS) displayWinner(COMPUTER_URL, false)

  
})




function getComputerChoice() {
  if(previousClickedComputerEl !== undefined) previousClickedComputerEl.classList.remove('clicked-computer')
  const arrayOfChoice = ['Rock', 'Paper', 'Scissor'];
  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  const computerItemEl = document.querySelector(`#${arrayOfChoice[randomNumber]}`);
  computerItemEl.classList.add('clicked-computer');
  previousClickedComputerEl = computerItemEl;
  return arrayOfChoice[randomNumber];
}





function playRound(playerSelection, computerSelection) {
  const computerChoice = computerSelection();

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

// if winner argument is set to true, player wins, otherwise computer
function displayWinner(url, winner) {
  mainContainer.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('flex--center-column', 'gap-15');
  div.innerHTML = `<img class="logo-md" src=${url} alt=${winner ? 'men': 'robot'} />
  <p id="player-score" class="subheading subheading-white to-upper-case">${winner ? 'YOU WIN' : 'YOU LOST'}  ${playerScore} : ${computerScore}</p>
  <a onclick ="window.location.reload()" href="#index.html" id="endbutton">Play Again?
      </a>
  `
  mainContainer.appendChild(div);
  if(winner) {
    winnerAudio.play();
  } else {
    losingAudio.play();
  }
  
}


