//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoAlert(num1, num2){
  let difference = num1 - num2;
  alert(difference)
}
subTwoAlert(7-3)

//create a function that divides three numbers and console logs the quotient

function divideThreeAndLog(n1, n2, n3){
  result = console.log(n1 / n2 / n3)

  alert(result)
}

divideThreeAndLog(20, 2, 2)

//create a function that multiplys three numbers and returns the product

function multiThree(num1, num2, num3){
  let result = num1 * num2 * num3;
  return result;
}
let returnMulti = multiThree(2, 2, 2)
console.log(returnMulti)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function sumAndRemainder(n1, n2, n3){
  return (n1 +n2 ) % n3
}
sumAndRemainder(2, 3, 2)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function mathOut(n1, n2, n3, n4 ){
  let multiTwoResult = n1 + n2
  
  if(multiTwoResult > 100){
    console.log(multiTwoResult + n3 + n4)

  }else if(multiTwoResult < 100){
    console.log(multiTwoResult - n3 - n4)
  }else{
    alert(n1*n2*n3) % n4
  }
}