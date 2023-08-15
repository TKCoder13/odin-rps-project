let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 1) {
        return "Rock";
    } else if (random == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    return prompt("Let's play RPS! What do you choose?");
}

function playRound(playerHand, computerHand) {
    if (playerHand == computerHand) {
        return "It's a draw!";
    } else if (playerHand == "rock") {
        if (computerHand == "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose :( Paper beats Rock";
        }
    } else if (playerHand == "paper") {
        if (computerHand == "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose :( Scissors beats Paper";
        }
    } else if (playerHand == "scissors") {
        if (computerHand == "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose :( Rock beats Scissors";
        }
    } else {
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
    console.log("Score is: Player - " + playerScore + ", Computer - " + computerScore);
}

game();
console.log("Final Score is: Player - " + playerScore + ", Computer - " + computerScore);