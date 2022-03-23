//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ["show1", "show2", "show3"];
tvShows.forEach(show => console.log(show));

//Create and array of numbers

let num = [22, 45, 660, 10, 99, 20];

//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter(n => n % 2 === 0);

console.log(onlyEvens(num))



//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowestAndHighest(arr){
  let sorted = arr.sort((a, b) => a - b);
  alert(sorted[1] + sorted[sorted.length - 2]);
}

sumSecondLowestAndHighest([6, 2, 3, 5, 7]);