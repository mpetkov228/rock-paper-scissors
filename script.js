const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    // Function generates a random number between 0 and 2 
    // which is used to index into choices array
    // returns random item from array

    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

function getPlayerChoice() {
    // Function prompts user for choice
    // returns player choice

    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    return playerChoice;
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

function playRound(computerChoice, playerChoice) {
    switch (computerChoice) {
        case 'rock':
            if (playerChoice == 'rock') {
                return 'It\'s a tie!';
            } else if (playerChoice == 'paper') {
                return 'You Win! Paper beats Rock!';
            } else if (playerChoice == 'scissors') {
                return 'You Lose! Rock beats Scissors!';
            }
        break;
        case 'paper':
            if (playerChoice == 'rock') {
                return 'You Lose! Paper beats Rock!';
            } else if (playerChoice == 'paper') {
                return 'It\'s a tie!';
            } else if (playerChoice == 'scissors') {
                return 'You Win! Scissors beat Paper!';
            }
        break;
        case 'scissors':
            if (playerChoice == 'rock') {
                return 'You Win! Rock beats Scissors!';
            } else if (playerChoice == 'paper') {
                return 'You Lose! Scissors beat Paper!';
            } else if (playerChoice == 'scissors') {
                return 'It\'s a tie!';
            }
        break;
    }
}

playRound(computerChoice, playerChoice);