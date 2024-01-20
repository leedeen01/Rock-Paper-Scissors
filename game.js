let playerChoices = [];
let playerName ="";

let askName = document.querySelector(".ask-username");
let game = document.querySelector(".container");


function submitForm() {
    playerName = document.getElementById('name').value;
    askName.style.display = "none";
    game.style.display = "flex";
}

// function sendData() {
//     fetch('http://your-java-backend-url/api/endpoint', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ playerName, playerChoices }),
//     }).then(() => {
//         console.log('Request sent to Java backend successfully.');
//         })
//         .catch(error => {
//         console.error('Error:', error);
//         });
// }

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
            playerChoices.push("ROCK");
            if (computerSelection == "PAPER") {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
                return "You Lose! Paper beats Rock";
            } else {
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
                return "You win! Rock beats Scissors";
            }
        } else if (playerSelection == "PAPER") {
            playerChoices.push("PAPER");
            if (computerSelection == "SCISSORS") {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
                return "You Lose! Scissors beats Paper";
            } else {
                console.log(parseInt(playerScore.textContent));
                playerScore.textContent = parseInt(playerScore.textContent) + 1;
                return "You win! Paper beats Rock";
            }
        } else {
            playerChoices.push("SCISSORS");
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
        console.log(playerName);
        // sendData();
    } else if (playerScore.textContent == '5') {
        announcement.textContent = `WINNER: PLAYER! (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
        console.log(playerName);
        // sendData();
    }
});

paper.addEventListener('click', function act() {
    let computer = getComputerChoice();
    content.textContent = playRound("PAPER", computer);
    if (computerScore.textContent == '5') {
        announcement.textContent = `YOU LOSE! Try Again (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
        console.log(playerName);
        // sendData();
    } else if (playerScore.textContent == '5') {
        announcement.textContent = `WINNER: PLAYER! (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
        console.log(playerName);
        // sendData();
    }
});

scissors.addEventListener('click', function act() {
    let computer = getComputerChoice();
    content.textContent = playRound("SCISSORS", computer);
    if (computerScore.textContent == '5') {
        announcement.textContent = `YOU LOSE! Try Again (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
        console.log(playerName);
        // sendData();
    } else if (playerScore.textContent == '5') {
        announcement.textContent = `WINNER: PLAYER! (${computerScore.textContent} vs ${playerScore.textContent})`;
        game.style.display = "none";
        next.style.display = "flex";
        console.log(playerName);
        // sendData();
    }
});
