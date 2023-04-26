const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    // Function generates a random number between 0 and 2 
    // which is used to index into choices array
    // returns random item from array

    let index = Math.floor(Math.random() * 3);

    return choices[index];
}