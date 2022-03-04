// *Variables*
// Create a variable and console log the value

let num = 10

console.log(num)

// Create a variable, add 10 to it, and alert the value

let seconNum = 20

seconNum = seconNum + 10

alert(seconNum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function SubFour(num1, num2, num3, num4){
  alert(num1 - num2 - num3 - num4)
}

subFour(20, 5, 5, 5)
// Create a function that divides one number by another and returns the remainder

function divideOneNum(num1, num2){
  return num1 / num2
}

console.log(10, 2)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function Jumanji()

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeAndDivd(num1, num2, num3){
  let product = (num1 * num2 * num3)
  if (product % 3 === 0){
    alert('ZEBRA')
  }
}

multiplyThreeAndDivd(5, 6, 9)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber(word, num1){
  for(i = 1; i = num1; i++){
    console.log(word)
  }
}

wordNumber(Beautiful, 5)