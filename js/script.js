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
