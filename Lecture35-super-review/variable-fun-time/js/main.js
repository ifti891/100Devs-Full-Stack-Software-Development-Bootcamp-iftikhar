//--- Easy
//create a variable and assign it a number

let num = 20;


//minus 10 from that number

num = num - 10


//print that number to the console

console.log(num -10)
//--- Medium
//create a variable that holds a value from the input

// let numFromInput = Number(document.querySelector("#danceDanceRevolution").value)

//add 25 to that number

// numFromInput += 25 
//alert that number
// alert(numFromInput)
//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', addTwo)

function addTwo(){

  let numFromInput = Number(document.querySelector("#danceDanceRevolution").value)

  numFromInput += 25 

  console.log(num + numFromInput)
}