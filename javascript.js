function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    console.log(rand);
    if (rand === 1) {
        return "Rock";
    } else if (rand === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let compHand = getComputerChoice();
let playerHand = window.prompt("Let's play RPS! What do you choose?");

function playerSelection(playerHand, compHand) {
    if (playerHand === compHand) {
        return "It's a draw!";
    } else if (playerHand === "Rock") {
        if (compHand === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose :( Paper beats Rock";
        }
    } else if (playerHand === "Paper") {
        if (compHand === "Rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose :( Scissors beats Paper";
        }
    } else if (playerHand === "Scissors") {
        if (compHand === "Paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose :( Rock beats Scissors";
        }
    } else {
        return "Misinput! Try again!";
    }
}
console.log("CompHand = " + compHand);
console.log("PlayerHand = " + playerHand);
console.log(playerSelection());