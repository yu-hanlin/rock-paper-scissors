function getComputerChoice() {
    let temp = Math.floor(Math.random() * 3);
    switch (temp) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "Rock":
                return 0;
            case "Paper":
                return -1;
            case "Scissors":
                return 1;
        }
    }
    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "Rock":
                return 1;
            case "Paper":
                return 0;
            case "Scissors":
                return -1;
        }
    }
    else {
        switch (computerSelection) {
            case "Rock":
                return -1;
            case "Paper":
                return 1;
            case "Scissors":
                return 0;
        }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let result = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose rock, paper, or scissors");
        console.log("Your choice: " + playerSelection);
        console.log("Computers choice: " + computerSelection);
        result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            userScore += result;
        }
        else if (result == -1) {
            computerScore -= result;
        }
    }
    return "User score: " + userScore + " | Computer score: " + computerScore;
}

console.log(game());