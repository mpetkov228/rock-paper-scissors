const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');
const playerSpan = document.querySelector('.player');
const computerSpan = document.querySelector('.computer');

buttons.forEach(button => button.addEventListener('click', onClick));

let playerScore = 0;
let computerScore = 0;

function onClick(e) {
    if (playerScore == 5 || computerScore == 5) return;

    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let result = playRound(computerChoice, playerChoice);
    addToScore(result);
    resultDiv.textContent = result;

    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;

    determineWinner();
}

function getComputerChoice() {
    // Function generates a random number between 0 and 2 
    // which is used to index into choices array
    // returns random item from array
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

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

function addToScore(roundResult) {
    if (roundResult.includes('Win')) {
        playerScore++;
    } else if (roundResult.includes('Lose')) {
        computerScore++;
    }
}

function determineWinner() {
    if (playerScore == 5) {
        resultDiv.textContent = 'Player Wins!';
    } else if (computerScore == 5) {
        resultDiv.textContent = 'Computer Wins!';
    }
}