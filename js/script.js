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
let winLoss = {
    win:0,
    loss:0
}
function playRound(){
    const results = document.querySelector(".results");
    const player = this.textContent;
    const computerSelection = getComputerChoice();

    if (player == "Rock"){
        if (computerSelection == "Rock"){
            results.textContent = "Tie!";
        } else if (computerSelection == "Paper"){
            results.textContent = "You lose! Paper beats Rock!";
            winLoss.loss++;
        } else {
            results.textContent = "You win! Rock beats Scissors!";
            winLoss.win++;
        }
    } else if (player == "Paper"){
        if (computerSelection == "Rock"){
            results.textContent = "You win! Paper beats Rock!"
            winLoss.win++;
        } else if (computerSelection == "Paper"){
            results.textContent = "Tie!";
        } else {
            results.textContent = "You lose! Scissors beats Paper!";
            winLoss.loss++;
        }
    } else if (player == "Scissors"){
        if (computerSelection == "Rock"){
            results.textContent = "You lose! Rock beats Scissors!";
            winLoss.loss++;
        } else if (computerSelection == "Paper"){
            results.textContent = "You win! Scissors beats Paper!";
            winLoss.win++;
        } else {
            results.textContent = "Tie!";
        }
    }
    if (winLoss.win == 5){
        alert("Player wins!");
    } else if (winLoss.loss == 5){
        alert("Computer Wins!");
    }
}

/*
    Create a function called game() which plays five rounds of rock paper scissors and logs each match in the console.
    game()
        for each iteration up to five iterations
            computer chooses a move
            play a round
            log the result
*/
/*
function game(rounds){
    for (let i = 0; i < rounds; i++){
        const computer = getComputerChoice();
        const player = prompt("Please choose Rock, Paper, or Scissors!")
        const result = playRound(player, computer);
        if (!result){
            console.log("You entered an incorrect value. Please try again!");
            return game(rounds);
        }
        console.log(result);
    }
}

game(5);
*/

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playRound))