//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNumAndAlert (num1,  num2){

    alert(num1 - num2)
}

// subTwoNumAndAlert(60, 20)

//create a function that divides three numbers and console logs the quotient

function dividesThreeConsoleLogs(zebra, forest, unicorn){
  console.log(zebra/forest/unicorn)
}

// dividesThreeConsoleLogs(100, 10, 2)


//create a function that multiplys three numbers and returns the product

function multiplyThreeNumbersProduct(num1, num2,num3){
  return num1 * num2 * num3
}

// let product = multiplyThreeNumbersProduct(2, 2, 2)

// alert(product)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(num1, num2, num3){
  return (num1 + num2) / num3
}

addTwoAndDivide(5, 5, 2)

console.log(addTwoAndDivide)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
