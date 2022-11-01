// Rock-Paper-Scissors-Game
const validChoices = ["rock", "paper", "scissors"];

const playerScoreElement = document.querySelector(".player-score");

const computerScoreElement = document.querySelector(".computer-score");

const winnerElement = document.querySelector(".winner");

const output = document.querySelector("#output");

const choiceBtn = document.querySelectorAll(".choices-btn-container");

// const rockBtn = document.querySelector('.rock-btn');

// const paperBtn = document.querySelector('.paper-btn');

// const scissorsBtn = document.querySelector('.scissors-btn');

// rockBtn.value = validChoices[0];
// paperBtn.value = validChoices[1];
// scissorsBtn.value = validChoices[2];

let playerScore = parseInt(0);

let computerScore = parseInt(0);

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomChoice]
};
const computerSelection = getComputerChoice();
// console.log(choiceBtn)
output.textContent = `${computerSelection}`;

choiceBtn.forEach((choice => {
    choice.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        
        // if (playerChoice == "rock"){
        //     console.log(playerChoice);
        // }
        // else if (playerChoice == "paper"){
        //     console.log(playerChoice);
        // }
        // else if (playerChoice == "scissors")
        // {
        //     console.log(playerChoice);
        // }
        console.log(playerChoice)
        // {once: true}
    },  )
}))


const restart = () => location.replace(location.href.split('#')[0]);