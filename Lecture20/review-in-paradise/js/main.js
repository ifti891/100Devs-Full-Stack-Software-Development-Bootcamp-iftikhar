// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = "Daminos";

favFood = "gushtaba";

alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// let stringyVar = "hello twitch";

// alter( stringyVar[1]) ;



// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.


function threeNumbers(num1, num2, num3){
  let output = (num1/num2) * num3;
  alert(output);
}

threeNumbers(6, 2, 2);


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.


function oneNumber(num){
  let output = Math.cbrt(num);
  console.log(output);
}

oneNumber(9);


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerMonths(month){


  if(month === "June" || month === "July" || month === "August"){
    alert("YAY");
  } else {
    alert("Booo");
  }
}


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFIve(num){
  for(let i = 1; i <= num; i++){
    if( i % 5 !== 0){
      console.log(i);
    }
  }
}