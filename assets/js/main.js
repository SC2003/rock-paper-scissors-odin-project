// Rock-Paper-Scissors-Game
const validChoices = ["rock", "paper", "scissors"];
const totalMoves = [1,2,3,4,5];
const playerScoreElement = document.querySelector(".player-score");

const computerScoreElement = document.querySelector(".computer-score");

const winnerElement = document.querySelector(".winner");

let outputArea = document.querySelector("#output");
let output;
const choiceBtn = document.querySelectorAll(".choices-btn-container");
let playerScore = parseInt(0);

let computerScore = parseInt(0);

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomChoice]
    // const randomChoice = Math.floor(Math.random() * validChoices.length) + 1;
    // return validChoices[randomChoice - 1]

}
const getPlayerChoice = (e) => {
    playRound(e.target.id, getComputerChoice());
}
const playRound = (playerSelection, computerSelection) => {

    updateScore();
    winner();
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            outputArea.textContent = (`It's a Tie!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else if (playerSelection === "scissors") {
            computerScore++;
            outputArea.textContent = (`Computer Won!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else if (playerSelection === "paper") {
            playerScore++;
            outputArea.textContent = (`Player Won!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else {
            outputArea.textContent = (`Error: Something Went Wrong!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            outputArea.textContent = (`It's a Tie!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else if (playerSelection === "rock") {
            computerScore++;
            outputArea.textContent = (`Computer Won!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else if (playerSelection === "scissors") {
            playerScore++;
            outputArea.textContent = (`Player Won!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else {
            outputArea.textContent = (`Error: Something Went Wrong!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "scissors") {
            outputArea.textContent = (`It's a Tie!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else if (playerSelection === "paper") {
            computerScore++;
            outputArea.textContent = (`Computer Won!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else if (playerSelection === "rock") {
            playerScore++;
            outputArea.textContent = (`Player Won!!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        } else {
            outputArea.textContent = (`Error: Something Went Wrong!
            \nComputer's Choice: "${computerSelection}"
            \nPlayer's Choice: "${playerSelection}"`);
        }
    } else {
        outputArea.textContent = (`Error: Something Went Wrong!
        \nComputer's Choice: "${computerSelection}"
        \nPlayer's   Choice: "${playerSelection}"`);
    }
};
const updateScore = () => {
    playerScoreElement.textContent = (`Player's Score: ${playerScore}`);

    computerScoreElement.textContent = (`Computer's Score: ${computerScore}`);
};

const game = (e) => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    // totalMoves.forEach(i=>{
    //     const playerSelection = e.target.id;
    //     const computerSelection = getComputerChoice();
    //     if (i === totalMoves[4]);
    //     playRound(playerSelection, computerSelection);
        
    // })
    let i =0;
    while(i<5){
        i++;
        playRound(playerSelection, computerSelection);
        break;
    }
}
choiceBtn.forEach((choice => {
    choice.addEventListener('click', game, false)
}))
// choiceBtn.forEach((choice => {
//     choice.addEventListener('click', getPlayerChoice)
// }))


// choiceBtn.forEach((choice => {
//     choice.addEventListener('click', (e) => {
//         // let playerSelection1 = e.target.id;
//         // let btnEvent = choice;
//         // const computerSelection = getComputerChoice();
//         // // console.log(playerSelection)
//         // // console.log(computerSelection)
//         // // ,{once: true}
//         // playRound(playerSelection, computerSelection);

//         playRound(e.target.id, getComputerChoice());

//         // game(playerSelection1, btnEvent);

//     })
// }))
const winner = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        return `Player Won by Total Score of ${playerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer Won by Total Score of ${computerScore}`;
    } else {
        return `Tie with The Player Scoring: ${playerScore} and The Computer Scoring: ${computerScore}`;
    }
}
const restart = () => location.replace(location.href.split('#')[0]);

winnerElement.textContent = winner(playerScore, computerScore);
// outputArea.textContent = output;
// outputArea.textContent = winner(playerScore, computerScore);