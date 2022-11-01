// Rock-Paper-Scissors-Game
const validChoices = ["rock", "paper", "scissors"];
const main = document.querySelector(".main");
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
const winnerElement = document.querySelector(".winner");

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
rockBtn.value = validChoices[0];
paperBtn.value = validChoices[1];
scissorsBtn.value = validChoices[2];
console.log(rockBtn.value);
console.log(scissorsBtn.value);
let playerScore = parseInt(0);

let computerScore = parseInt(0);

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomChoice]
};
const computerSelection = getComputerChoice();

// const getPlayerChoice = () => {
//     const userInput = String(prompt(`Valid Inputs : Rock or Paper or Scissors?
//     (case-insensitive or just first character)`));
//     const input = userInput.toLowerCase();
//     if (input === "rock" || input === "paper" || input === "scissors") {
//         return input;
//     } else if (input === "r") {
//         return validChoices[0];
//     } else if (input === "p") {
//         return validChoices[1];
//     } else if (input === "s") {
//         return validChoices[2];
//     } else {
//         return `ERROR: Invalid UserInput! [Value: ${input}]`;
//     }
// };
const getPlayerChoice = () => {
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    } else if (input === "r") {
        return validChoices[0];
    } else if (input === "p") {
        return validChoices[1];
    } else if (input === "s") {
        return validChoices[2];
    } else {
        return `ERROR: Invalid UserInput! [Value: ${input}]`;
    }
};

const playRound = (playerSelection, computerSelection) => {
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            return (`It's a Tie!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else if (playerSelection === "scissors") {
            computerScore++;
            return (`Computer Won!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else if (playerSelection === "paper") {
            playerScore++;
            return (`Player Won!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else {
            return (`Error: Something Went Wrong!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            return (`It's a Tie!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else if (playerSelection === "rock") {
            computerScore++;
            return (`Computer Won!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else if (playerSelection === "scissors") {
            playerScore++;
            return (`Player Won!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else {
            return (`Error: Something Went Wrong!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "scissors") {
            return (`It's a Tie!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else if (playerSelection === "paper") {
            computerScore++;
            return (`Computer Won!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else if (playerSelection === "rock") {
            playerScore++;
            return (`Player Won!!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        } else {
            return (`Error: Something Went Wrong!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
        }
    } else {
        return (`Error: Something Went Wrong!
            Computer's Choice: "${computerSelection}"
            Player's   Choice: "${playerSelection}"`);
    }


};
rockBtn.addEventListener('click', playRound(rockBtn.value, computerSelection));
paperBtn.addEventListener('click', playRound(paperBtn.value, computerSelection));
scissorsBtn.addEventListener('click', playRound(scissorsBtn.value, computerSelection));
// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

const winner = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        return `Player Won by Total Score of ${playerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer Won by Total Score of ${computerScore}`;
    } else {
        return `Tie with The Player Scoring: ${playerScore} and The Computer Scoring: ${computerScore}`;
    }
}
// game();

const restart = () => location.replace(location.href.split('#')[0]);

main.textContent = (`Play The Game in Browser's Console`);

playerScoreElement.textContent = (`Player's Score: ${playerScore}`);

computerScoreElement.textContent = (`Computer's Score: ${computerScore}`);

winnerElement.textContent= winner(playerScore, computerScore);

console.log("run restart() function or just click on Restart Button to play again")