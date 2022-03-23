// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let holiday = "Bhaik";
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let myJob ="I'm a software engineer bro"
let lastThree = myJob.slice(-3);
alert(lastThree);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subNumbers(num1, num2, num3, num4, num5){
    let sub = 100 - (num1 + num2 + num3 + num4 + num5);
    alert(Math.abs(sub));
}
subNumbers(10, 20, 30, 40, 50);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowestHighestLog(num1, num2, num3){
    let lowest = Math.min(num1, num2, num3);
    let highest = Math.max(num1, num2, num3);
    console.log(lowest);
    console.log(highest);
}

lowestHighestLog(10, 20, 30);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip(){
  let flip = Math.random();
  if(flip < 0.5){
    return "heads";
  }else{
    return "tails";
  }
}
coinFlip();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function coinFlipHt(num){
  for(let i = 0; i <= num; i++){
    let result = coinFlip();
    console.log(result);
  }
}

coinFlipHt(1);
