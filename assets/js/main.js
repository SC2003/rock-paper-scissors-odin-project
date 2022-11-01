// Rock-Paper-Scissors-Game
const validChoices = ["rock", "paper", "scissors"];

const playerScoreElement = document.querySelector(".player-score");

const computerScoreElement = document.querySelector(".computer-score");

const winnerElement = document.querySelector(".winner");

const outputArea = document.querySelector("#output");

const choiceBtn = document.querySelectorAll(".choices-btn-container");

let playerScore = parseInt(0);

let computerScore = parseInt(0);

let tie = parseInt(0);

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomChoice];
}

const getPlayerChoice = (e) => {
    playRound(e.target.id, getComputerChoice());
}

const playRound = (playerSelection, computerSelection) => {
    updateScore();
    stopRound();
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            tie++;
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
            tie++;
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
            tie++;
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

choiceBtn.forEach((choice => {
    choice.addEventListener('click', getPlayerChoice)
}))

const winner = () => {
    if (playerScore > computerScore) {
        return `Player Won by Total Score of ${playerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer Won by Total Score of ${computerScore}`;
    } else {
        return `Tie with The Player Scoring: ${playerScore} and The Computer Scoring: ${computerScore}`;
    }
}

const stopRound = () => {
    if (playerScore + computerScore + tie === 5) {
        setTimeout(() => {
            outputArea.textContent = `Round Ended!! \nClick Restart to Play Again`;
        }, 500);
        Array.prototype.forEach.call(choiceBtn, (e) => {
            e.removeEventListener("click", getPlayerChoice);
        });
        winnerElement.textContent = winner();
    }
    return false;
}
const restart = () => location.replace(location.href.split('#')[0]);