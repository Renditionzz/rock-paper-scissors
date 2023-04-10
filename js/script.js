
function getComputerChoice(){
    const randomNumber = Math.round(Math.random() * 2);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber];
}

let winLoss = {
    win:0,
    loss:0
}
function playRound(){
    const results = document.querySelector(".results");
    const player = this.textContent;
    const computerSelection = getComputerChoice();

    if (player == "🪨"){
        if (computerSelection == "Rock"){
            results.textContent = "Tie!";
        } else if (computerSelection == "Paper"){
            results.textContent = "You lose! Paper beats Rock!";
            winLoss.loss++;
        } else {
            results.textContent = "You win! Rock beats Scissors!";
            winLoss.win++;
        }
    } else if (player == "📃"){
        if (computerSelection == "Rock"){
            results.textContent = "You win! Paper beats Rock!"
            winLoss.win++;
        } else if (computerSelection == "Paper"){
            results.textContent = "Tie!";
        } else {
            results.textContent = "You lose! Scissors beats Paper!";
            winLoss.loss++;
        }
    } else if (player == "✂️"){
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
    scoreHandler();

}

function scoreHandler(){
    const winContainer = document.querySelector(".wins");
    const lossContainer = document.querySelector(".losses");
    if (winLoss.win == 5){
        alert("Player wins!");
        winLoss.win = 0;
        winLoss.loss = 0;
    } else if (winLoss.loss == 5){
        alert("Computer Wins!");
        winLoss.win = 0;
        winLoss.loss = 0;
    }
    winContainer.textContent = winLoss.win;
    lossContainer.textContent = winLoss.loss;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playRound))