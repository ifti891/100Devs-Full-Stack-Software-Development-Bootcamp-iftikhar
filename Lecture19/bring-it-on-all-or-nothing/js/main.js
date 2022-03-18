// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let QuackQuackKoo = "true";

alert(QuackQuackKoo);


// Declare a variable, reassign it to your favorite color, and console log the value

let favColor = "red";

favColor= "blue";

console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function SumThreeAndDivide(a, b, c, d){
  return (a + b + c) / d
}

SumThreeAndDivide(2, 5, 6, 7);


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function TwoNumbers(a, b){
  console.log( Math.pow(a, b) )
}

// console.log(2, 3);

TwoNumbers(4, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function alertOrLog(b, str){
  // if (b){
  //   alert(str)
  // }else{
  //   console.log(str)
  // }

  b ? alert(str) : console.log(str) //turnery method do one of anything which is true.
}

const alertOrLog = (b, str) => b ? alert(str) : console.log(str) // same as above function

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num){
  for(let i = 1; i <= num; i++){
    console.log(i)
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }else if(i % 3 === 0){
      console.log("Fiz")
    }else if(i % 5 === 0){
      console.log("Buzz")
    }
  }
}

