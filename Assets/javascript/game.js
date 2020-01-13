var alphabet = ["a", "b", "c", "d", "e", "f", "g",
                "h", "i", "j", "k", "l", "m","n",
                "o", "p", "q", "r", "s", "t", "u",
                "v", "w", "x", "y", "z"];

var wins = 0;
var losses =0;
var left = 10;
var guessesSoFar = [];
var guesses = "";
var psychicLetter = "";


// Randomly chosses a letter from the alphabet array.  This is the psychic's letter
var newLetter = function() {
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicLetter);
};

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");

};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var newGame = function(){
    left = 10;
    guessesSoFar = [];
    newLetter();
  
};

document.onkeyup = function(event) {
    var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0){
        if (userGuess == psychicLetter){
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            alertWin();
            
        }
    }else if (left == 0){
        losses++;
        document.getElementById("losses").innerHTML = "losses:" + losses;
        alertLoss();
       
    }
};

var alertWin = function() {
    alert("Congratulations I was thinking of " + psychicLetter + ".");
    newGame ();
};

var alertLoss = function(){
    alert("I'm sorry you have lost, I was thinking of " + psychicLetter + ".");
    newGame ();
};