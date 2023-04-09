/*
    Create a function called getComputerChoice() that will let the computer choose between rock, paper,
    and scissors.

    getComputerChoice()
        get random value from 0 to 2
        based on value, get from list at that position
        return that list item
*/

function getComputerChoice(){
    const randomNumber = Math.round(Math.random() * 2);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber];
}

/*
    Create a function that lets the player a single round of Rock Paper Scissors.

    playRound(playerSelection, computerSelection)
        if player picks rock
            if computer picks rock
                tie
            if computer picks scissors
                player wins
            if computer picks paper
                computer wins
        else if player picks paper
            if computer picks rock
                player wins
            if computer picks scissors
                computer wins
            if computer picks paper
                tie
        else if player picks scissors
            if computer picks rock
                computer wins
            else if computer picks paper
                player wins
            else if computer picks scissors
                tie
        else
            invalid answer, try again
        
*/

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    let result;
    if (player == "rock"){
        if (computerSelection == "Rock"){
            result = "Tie!";
        } else if (computerSelection == "Paper"){
            result = "You lose! Paper beats Rock!";
        } else {
            result = "You win! Rock beats Scissors!";
        }
    } else if (player == "paper"){
        if (computerSelection == "Rock"){
            result = "You win! Paper beats Rock!"
        } else if (computerSelection == "Paper"){
            result = "Tie!";
        } else {
            result = "You lose! Scissors beats Paper!"
        }
    } else if (player == "scissors"){
        if (computerSelection == "Rock"){
            result = "You lose! Rock beats Scissors!"
        } else if (computerSelection == "Paper"){
            result = "You win! Scissors beats Paper!"
        } else {
            result = "Tie!";
        }
    } else {
        result = "Invalid, please try again!";
    }
    return result;
}

/*
    Create a function called game() which plays five rounds of rock paper scissors and logs each match in the console.
    game()
        for each iteration up to five iterations
            playMatch()
            log the result
*/

function game(rounds){
    for (let i = 0; i < rounds; i++){
        const computer = getComputerChoice();
        console.log(playRound(player, computer))
    }
}
const player = "Rock";

game(5);