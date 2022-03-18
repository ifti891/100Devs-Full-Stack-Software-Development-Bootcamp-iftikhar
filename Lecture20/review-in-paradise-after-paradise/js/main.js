// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let array = [10, 20, 30, 40, 50, 60]

array[0] // 10
array[4] // 50

array[5 - 1] //  60

function checkFirstAndLast(array){
  if( array[0] < array[array.length - 1] ){
    alert("Hi")

  }else if(array[0] > array[array.length ])
}