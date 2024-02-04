let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch(button.id) {
            case 'btn-rock':
                playRound("rock", getComputerChoice());
                updateScore();
                break;
            case 'btn-paper':
                playRound("paper", getComputerChoice());
                updateScore();
                break;
            case 'btn-scissors':
                playRound("scissors", getComputerChoice());
                updateScore();
                break;
        }
    });
});

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

function updateScore() {
    document.getElementById('#score').innerHTML = "Score: Player - " + playerScore + ", Comp - " + computerScore;
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
    // while(playerScore <= 5 || computerScore <= 5) {
        computerChoice = getComputerChoice().toLowerCase();
        playerChoice = getPlayerChoice().toLowerCase();
        let result = playRound(playerChoice, computerChoice);
        if (result.includes("You Win!")) {
            playerScore++;
        } else if (result.includes("You Lose")) {
            computerScore++;
        }
        console.log("Score: Player - " + playerScore + ", Computer - " + computerScore);
    // }
}

game();