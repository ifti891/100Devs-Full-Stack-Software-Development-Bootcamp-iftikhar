//Create an array of movie titles. Loop through the array and each element to the h2.

let movieTitles =["movie1", "movie2", "movie3", "movie4", "movie5"];

for(let i = 0; i < movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let num = [10, 20, 30, 40, 50];

num.forEach((elements, index) {
    num[index] = elements + 3;
})


//Find the average of all the numbers from question three

  let sum = 0;
  num.forEach((num) => sum += num);

  for(let i = 0; i < num.length; i++){
      sum += num[i];
  }
