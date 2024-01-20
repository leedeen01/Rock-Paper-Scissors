let playerChoices = [];

function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        return "Draw! Retry. Rock, Paper, Scissors?";
    } else {
        if (playerSelection == "ROCK") {
            if (computerSelection == "PAPER") {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
                return "You Lose! Paper beats Rock";
            } else {
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
                return "You win! Rock beats Scissors";
            }
        } else if (playerSelection == "PAPER") {
            if (computerSelection == "SCISSORS") {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
                return "You Lose! Scissors beats Paper";
            } else {
                console.log(parseInt(playerScore.textContent));
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
                return "You win! Paper beats Rock";
            }
        } else {
            if (computerSelection == "ROCK") {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
                return "You Lose! Rock beats Scissors";
            } else {
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
                return "You win! Scissors beats Paper";
            }
        }
    }

}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let content = document.querySelector('.result');
let playerScore = document.querySelector('#player span');
let computerScore = document.querySelector('#computer span');
let announcement = document.querySelector('.announcement');
let game = document.querySelector(".container");
let next = document.querySelector(".game-end");
let retry = document.querySelector(".retry");

retry.addEventListener('click', () => {
    location.reload();
})

rock.addEventListener('click', function act() {
    let computer = getComputerChoice();
    content.textContent = playRound("ROCK", computer);
    if (computerScore.textContent == '5') {
        announcement.textContent = `YOU LOSE! Try Again (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
    } else if (playerScore.textContent == '5') {
        announcement.textContent = `WINNER: PLAYER! (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
    }
});

paper.addEventListener('click', function act() {
    let computer = getComputerChoice();
    content.textContent = playRound("PAPER", computer);
    if (computerScore.textContent == '5') {
        announcement.textContent = `YOU LOSE! Try Again (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
    } else if (playerScore.textContent == '5') {
        announcement.textContent = `WINNER: PLAYER! (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
    }
});

scissors.addEventListener('click', function act() {
    let computer = getComputerChoice();
    content.textContent = playRound("SCISSORS", computer);
    if (computerScore.textContent == '5') {
        announcement.textContent = `YOU LOSE! Try Again (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
    } else if (playerScore.textContent == '5') {
        announcement.textContent = `WINNER: PLAYER! (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
    }
});
