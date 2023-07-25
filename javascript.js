function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 1) {
        return "Rock";
    } else if (rand == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    return prompt("Let's play RPS! What do you choose?");
}

let compHand = getComputerChoice().toLowerCase();
let playerHand = getPlayerChoice().toLowerCase();

function playRound() {
    if (playerHand == compHand) {
        return "It's a draw!";
    } else if (playerHand == "rock") {
        if (compHand == "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose :( Paper beats Rock";
        }
    } else if (playerHand == "paper") {
        if (compHand == "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose :( Scissors beats Paper";
        }
    } else if (playerHand == "scissors") {
        if (compHand == "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose :( Rock beats Scissors";
        }
    } else {
        return "Misinput! Try again!";
    }
}
// console.log("CompHand = " + compHand);
// console.log("PlayerHand = " + playerHand);
console.log(playRound());