//Create an array of movies with at least three movies.

let niceArray = ["The fight next door", "Big mom crazy", 22, "The best movie"];


//Using the array from above, store the first movie in a variable

let  firstMove = niceArray[0];




//Get the length of the original array and store it in a new variable

let newOrignalArray = niceArray.length;

console.log(newOrignalArray);

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

newOrignalArray = niceArray[niceArray.length - 1];
console.log(newOrignalArray);