// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = " coffee is bad ";
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let multiWords = "I am the best web dev and eating apple";

if (multiWords.search('apple') !== -1){
  console.log('You found an apple');
}else{
  console.log('You did not find an apple');
}




// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let random = Math.random(); //Math.random returns a number between 0-1
    if( random < 0.33){
      return 'rock'
    }else if ( random < 0.66){
      return 'paper'
    }else{
      return 'scissors'
    }
}

// rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
  let botChoice = rockPaperScissors()
  if( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ){
      console.log('You Win')
  }else if( playerChoice === botChoice ){
      console.log('You Tied')
  }else{
      console.log('You Lose')
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGamesXTimes(arr){
  arr.forEach(coice => checkWin(choice))
}

playGamesXTimes(['rock', 'paper', 'scissors'])