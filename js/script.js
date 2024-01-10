

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

// buttons
// const buttons = document.querySelectorAll('btn'); // nodelist of all buttons
const btn = document.createElement('btn');

const rockButton = document.querySelector('#btn-rock');
if (rockButton) {
    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
}
const paperButton = document.querySelector('#btn-paper');
if (paperButton) {
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
}

const scissorsButton = document.querySelector('#btn-scissors');
if (scissorsButton) {
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 1) {
        return "rock";
    } else if (random == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    return prompt("Let's play RPS! What do you choose?");
}

function playRound(playerHand, computerHand) {
    if (playerHand == computerHand) {
        console.log(playerHand + " = " + computerHand);
        return "It's a draw!";
    } else if (playerHand == "rock") {
        if (computerHand == "scissors") {
            playerScore++;
            console.log(playerHand + " > " + computerHand);
            return "You Win! Rock beats Scissors";
        } else {
            computerScore++;
            console.log(playerHand + " < " + computerHand);
            return "You Lose :( Paper beats Rock";
        }
    } else if (playerHand == "paper") {
        if (computerHand == "rock") {
            playerScore++;
            console.log(playerHand + " > " + computerHand);
            return "You Win! Paper beats Rock";
        } else {
            computerScore++;
            console.log(playerHand + " < " + computerHand);
            return "You Lose :( Scissors beats Paper";
        }
    } else if (playerHand == "scissors") {
        if (computerHand == "paper") {
            playerScore++;
            console.log(playerHand + " > " + computerHand);
            return "You Win! Scissors beats Paper";
        } else {
            computerScore++;
            console.log(playerHand + " < " + computerHand);
            return "You Lose :( Rock beats Scissors";
        }
    } else {
        console.log("Misinput!");
        return "Misinput! Try again!";
    }
}

function game() {
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = getPlayerChoice().toLowerCase();
    let result = playRound(playerChoice, computerChoice);
    if (result.includes("You Win!")) {
        playerScore++;
    } else if (result.includes("You Lose")) {
        computerScore++;
    }
    console.log("Score: Player - " + playerScore + ", Computer - " + computerScore);
}

game();