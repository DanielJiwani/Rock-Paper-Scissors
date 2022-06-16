
function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors']
    return myArray[Math.floor(Math.random()*3)]
}

function rockPaperScissors(playerSelection,computerSelection) {
    let result = '';
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        result = 'Player Wins!'
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        result = 'Computer Wins!'
    } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        result = 'Tie!'
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        result = 'Computer Wins!'
    } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        result = 'Tie!'
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        result = 'Player Wins!'
    } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        result = 'Tie!'
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        result = 'Player Wins!'
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        result = 'Computer Wins!'
    }
    return result;
}

function game() {
    let roundResult = '';
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    for (let i = 1; i <= 5; i++) {
        console.log('Round', i);
        let playerSelection = prompt("Please enter either Paper, Rock or Scissors");
        let lowerCasePlayerChoice = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log('Computer Choice:', computerSelection);
        console.log('Player Choice:', lowerCasePlayerChoice);
        roundResult = rockPaperScissors(lowerCasePlayerChoice,computerSelection);
        console.log(roundResult);
        if (roundResult == 'Player Wins!') {
            playerScore++;
        } else if (roundResult == 'Computer Wins!') {
            computerScore++;
        } else {
            tie++;
        }
    }

    console.log('Total Player Wins:', playerScore);
    console.log('Total Computer Wins:', computerScore);
    console.log('Total Ties:', tie);

    if (playerScore > computerScore) {
        console.log('Player Wins Overall!');
    } else if (playerScore < computerScore) {
        console.log('Computer Wins Overall!');
    } else {
        console.log('There was a tie!');
    }
}
console.log(game())



