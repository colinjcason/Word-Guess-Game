// create variables for user and computer choices
var userGuess = "";
var guessSoFar = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randChoice = Math.floor(Math.random() * computerChoices.length);
var computerGuess = computerChoices[randChoice];
console.log(computerGuess);
var resetGame = function() {
    guessesLeft = 10;
    randChoice = Math.floor(Math.random() * computerChoices.length); 
    computerGuess = computerChoices[randChoice];
    console.log("GAME WAS RESET");
    guessSoFar = [];
}

// an event is triggered when the user presses a key
document.onkeyup = function(event) {

    userGuess = event.key.toLowerCase();
    guessSoFar.push(userGuess);
    guessesLeft--;


    // var computerGuess = computerChoices[Math.floor(math.random()) * computerChoices.length];

    if(userGuess === computerGuess) { 
        console.log('you win');
        wins++;
        resetGame();
    }
    else if(guessesLeft <= 0) {
        losses++;
        console.log('you lose');
        resetGame();
    }
    console.log("wins " + wins);
    console.log("losse " + losses);
    console.log("Guess Left " + guessesLeft);
    console.log("Guessed So Far " + guessSoFar);
}



