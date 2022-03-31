// *Variables*
// Create a variable and console log the value

const newVariable = "feeling dumped down right now as JS is pushing me against the wall"
console.log(newVariable);


// const var1 = "my good friend"
// console.log(var1)

// Create a variable, add 10 to it, and alert the value


const numVar = 10;

alert(numVar);

// const add10 = 10
// alert(add10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference


function (){
  const sub4 = numVar - 4;
  alert(sub4)
}

// function sub4(){
//   const sub = 10 - 4
//   alert(sub)
// }

// Create a function that divides one number by another and returns the remainder


function div(a, b){
  
  let numbers = a / b;

  return numbers
}

console.log(dive(10, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers(a, b){
  let sum = a + b;

  if(sum > 50){
    alert("Jumanji")
  }
}
addTwoNumbers(60, 10);


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbers(a, b, c){
  let product = a * b * c;

  if(product / 3){
    alert("ZEBRA")
  }
}

multiplyThreeNumbers(21, 9, 3);