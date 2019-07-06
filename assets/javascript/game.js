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

// create a reset game variable so the game resets when the user wins or loses
var resetGame = function() {
    guessesLeft = 10;
    randChoice = Math.floor(Math.random() * computerChoices.length); 
    computerGuess = computerChoices[randChoice];
    alert("GAME WAS RESET");
    guessSoFar = [];
}

// an event is triggered when the user presses a key
document.onkeyup = function(event) {

    userGuess = event.key.toLowerCase();
    guessSoFar.push(userGuess);
    guessesLeft--;
    document.getElementById("guessedSoFar").innerHTML = guessSoFar;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

// a function that compares user guess to computer choice and logs result
    if(userGuess === computerGuess) { 
        alert('YOU GUESSED RIGHT!');
        wins++;
        resetGame();
        document.getElementById("wins").innerHTML = wins;
    }
    else if(guessesLeft <= 0) {
        losses++;
        alert('Bad Luck!');
        resetGame();
        document.getElementById("losses").innerHTML = losses;
    }
    console.log("wins " + wins);
    console.log("losses " + losses);
    console.log("Guesses Left " + guessesLeft);
    console.log("Guessed So Far " + guessSoFar);
    }







