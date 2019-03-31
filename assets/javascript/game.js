//Arr letters
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Var for wins and losses
var wins = 0;
var losses = 0;
//Var guesses left
var guessesLeft = 9;
//Var letters already guessed
var lettersGuessed = [];
//Var computer guess
var computerLetter = [];


//Initial computer letter using math random and log to verify
document.onload = function () {
    var newLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    computerLetter.push(newLetter);
    console.log(computerLetter[0]);
}


//key up to record guess and log
document.onkeyup = function (event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(computerLetter[0]);

    //player guesses correctly, then add a win
    if ((playerGuess === computerLetter[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerLetter.length = 0;
        //create new computer letter guess
        var newLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        computerLetter.push(newLetter);
        console.log(computerLetter[0]);
    }

    //if wrong guess, take away a remaining guess
    else if ((playerGuess !== computerLetter[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    // Once all guesses are used, add a loss
    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerLetter.length = 0;
        //create new computer letter guess
        var newLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        computerLetter.push(newLetter);
        console.log(computerLetter[0]);
    }
    //link to content in external html
    var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#psychic-game").innerHTML = html;

}