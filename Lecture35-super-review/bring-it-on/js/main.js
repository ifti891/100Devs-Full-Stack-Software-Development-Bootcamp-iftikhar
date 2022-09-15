// *Variables*
// Create a variable and console log the value

let newVariable = 5

console.log(newVariable)


// Create a variable, add 10 to it, and alert the value

let Var = 10

Var += 10

alert(Var)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(num1, num2, num3, num4){
  alert(num1, num2, num3, num4)
}



// Create a function that divides one number by another and returns the remainder

function divideNum (num1, num2){
  return num1 % num2

}



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers (num1, num2){
  let sum = num1 + num2;

  if(sum > 50){
    alert("Jumanji")
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


function multiThreeCheck(num1, num2, num3){
  let prod =num1 * num2 * num3;
  if(prod % 3 === 0){
    alert("ZEBRA")
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopWordXTimes(word, num){
  for(let i = 1; i <= num; i++){
    console.log(word)
  }
}