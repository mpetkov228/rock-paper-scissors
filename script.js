const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');
const playerSpan = document.querySelector('.player');
const computerSpan = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', onClick));

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

// function game() {
//     // Play 5 rounds of the game
//     // keep score and display winner in the console
//     let computerChoice;
//     let playerChoice;
//     let result;

//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         computerChoice = getComputerChoice();
//         playerChoice = getPlayerChoice();
//         result = playRound(computerChoice, playerChoice);
//         console.log(result);

//         if (result.includes('Win')) {
//             playerScore++;
//         } else if (result.includes('Lose')) {
//             computerScore++;
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log('Player wins the game!');
//         console.log(`Player: ${playerScore} Computer: ${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log('Computer wins the game!');
//         console.log(`Player: ${playerScore} Computer: ${computerScore}`);
//     } else {
//         console.log('Game ends in a tie!');
//         console.log(`Player: ${playerScore} Computer: ${computerScore}`);
//     }
// }