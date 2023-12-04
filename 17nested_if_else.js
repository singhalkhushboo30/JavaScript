// nested if else

// winning number 19

// 19 your guess is high
// 17 your guess is too low
// 20 your guess is too high

let winningNumber=19;
let userGuess=prompt("Guess a number");   // prompt takes input of string data type
console.log(typeof userGuess, userGuess);

//let userGuess=+prompt("Guess a number");   // prompt now takes input of number data type
//console.log(typeof userGuess, userGuess);


//Nested if else- another if else in if or else
if(userGuess===winningNumber){
    console.log("Your guess is right.");
}
else{
    if(userGuess<winningNumber){
        console.log("Your guess is too low.");
    }
    else{
        console.log("Your guess is too high.");
    }
    
}
