function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        console.log("Draw! Retry")
        let player = "rock";
        let computer = getComputerChoice();
        return playRound(player, computer);
    } else {
        if (playerSelection == "ROCK") {
            if (computerSelection == "PAPER") {
                return "You Lose! Paper beats Rock";
            } else {
                return "You win! Rock beats Scissors";
            }
        } else if (playerSelection == "PAPER") {
            if (computerSelection == "SCISSORS") {
                return "You Lose! Scissors beats Paper";
            } else {
                return "You win! Paper beats Rock";
            }
        } else {
            if (computerSelection == "ROCK") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You win! Scissors beats Paper";
            }
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));