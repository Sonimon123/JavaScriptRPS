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
                return 'You Lose! Paper beats Rock';
                break;
            case 'scissors':
                return 'You Win! Rock beats Scissors';
        }
    }
    else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'rock':
                return 'You Win! Paper beats Rock';
                break;
            case 'paper':
                return 'You Tied this Round';
                break;
            case 'scissors':
                return 'You Lose! Scissors beats Paper'
        }
    }
    else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'You Lose! Rock beats Scissors';
                break;
            case 'paper':
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

function game() {
    let rounds = 0;
    let keepGoing = true;
    let playerScore = 0;
    let compScore = 0;

    alert("Welcome to Rock Paper Scissors!")

    while (keepGoing) {
        let playerSelection = prompt("Choose your move:");
        let result = playRound(playerSelection, getComputerChoice());

        if (result.includes("Win")) {
            alert(result);
            playerScore += 1;
        }
        else if (result.includes("Lose")) {
            alert(result);
            compScore += 1;
        }
        else {
            alert(result);
            continue;
        }

        rounds += 1;
        
        if (rounds >= 5) {
            alert(`The final score after 5 rounds is: Player - ${playerScore}, Computer - ${compScore}`)
            if (playerScore > compScore) {
                alert("You Win!")
            }
            else if (playerScore < compScore) {
                alert("You Lose! Try again next time!")
            }
            else {
                alert("It's a Tie!")
            }

            keepGoing = false;
        }
    }
    
}

game();