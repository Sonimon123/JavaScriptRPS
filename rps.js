let rounds = 0;
let keepGoing = true;
let playerScore = 0;
let compScore = 0;

const pScore = document.querySelector(".pscore")
const cScore = document.querySelector(".cscore")
const message = document.querySelector(".message")

function increasePlayerScore() {
    playerScore += 1;
    pScore.textContent = `Player Score: ${playerScore}`;
    if (playerScore >= 5) {
        alert("You Win!");
        resetGame()
    }
}

function increaseCompScore() {
    compScore += 1;
    cScore.textContent = `Computer Score: ${compScore}`;
    if (compScore >= 5) {
        alert("You Lose!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score: ${compScore}`;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
        default:
            throw new Error("getComputerChoice() giving out of range value")
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 'You Tied this Round';
                break;
            case 'paper':
                increaseCompScore();
                return 'You Lose! Paper beats Rock';            
                break;
            case 'scissors':
                increasePlayerScore();
                return 'You Win! Rock beats Scissors';
        }
    }
    else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock':
                increasePlayerScore();
                return 'You Win! Paper beats Rock';
                break;
            case 'paper':
                return 'You Tied this Round';
                break;
            case 'scissors':
                increaseCompScore();    
                return 'You Lose! Scissors beats Paper'
        }
    }
    else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                increaseCompScore();
                return 'You Lose! Rock beats Scissors';
                break;
            case 'paper':
                increasePlayerScore();
                return 'You Win! Scissors beats Paper';
                break;
            case 'scissors':
                return 'You Tied this Round'
        }
    }
    else {
        return "This isn't a valid move"
    }
}

// Tests
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        message.textContent = playRound(button.id, getComputerChoice())
    })
})