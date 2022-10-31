// Rock-Paper-Scissors-Game
const validChoices = ["rock", "paper", "scissors"];

let playerScore = parseInt(0);

let computerScore = parseInt(0);

const getComputerChoice = () => {
    //better Random Choices
    const randomChoice = Math.floor(Math.random() * validChoices.length);
    //const randomChoice = Math.floor(Math.random() * validChoices.length) + 1;
    //overall better way to return choices without if else's
    //just have to figure out how to send errors(maybe dont have too?)
    return validChoices[randomChoice]
    //return validChoices[randomChoice - 1]
    //better if else's
    // if (randomChoice === 1) {
    //     return validChoices[0];
    // } else if (randomChoice === 2) {
    //     return validChoices[1];
    // } else if (randomChoice === 3) {
    //     return validChoices[2];
    // } else {
    //     return `Error: Dumb Bot! [Value: ${input}]`
    // }
    ////////////////////////////////////////////
    //old Random Choices
    // const randomChoice = Math.floor(Math.random() * 3) + 1;
    // old if else's
    // if (randomChoice === 1) {
    //     return "rock";
    // } else if ( randomChoice === 2) {
    //     return "paper";
    // } else if ( randomChoice === 3) {
    //     return "scissors";
    // } else {
    //     return `Error: Dumb Bot! [Value: ${input}]`
    // }
};

const getPlayerChoice = () => {
    const userInput = String(prompt(`Valid Inputs : Rock or Paper or Scissors?
    (case-insensitive or just first character)`));
    const input = userInput.toLowerCase();
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
    // return "You Lose! Paper beats Rock";
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

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

const winner = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        return `Player Won by Total Score of ${playerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer Won by Total Score of ${computerScore}`;
    } else {
        return `Tie with The Player Scoring: ${playerScore} and The Computer Scoring: ${computerScore}`;
    }
}
game();

const restart = () => location.replace(location.href.split('#')[0]);

const main = document.querySelector(".main");

const playerScoreElement = document.querySelector(".player-score");

const computerScoreElement = document.querySelector(".computer-score");

const winnerElement = document.querySelector(".winner");

main.innerHTML = (`Play The Game in Browser's Console`);

playerScoreElement.innerHTML = (`Player's Score: ${playerScore}`);

computerScoreElement.innerHTML = (`Computer's Score: ${computerScore}`);

winnerElement.innerHTML = winner(playerScore, computerScore);

console.log("run restart() function or just click on Restart Button to play again")