//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

https://api.nasa.gov/planetary/apod


fetch(`https://api.nasa.gov/planetary/apo=${data}`)
.then(res => res.json())
.then(data => {
  console.log(data.message)
  document.querySelector("img").src = data.message
})

.catch(err => {
  console.log(`error $(err)`)
})



// document.querySelector("button").addEventListener("click", getDrink)

// function getDrink(){
//     let drink = document.querySelector("input").value

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse respone as JSON
//     .then(data => {
//       console.log(data.drinks[0]);
//       document.querySelector("h2").innerText = data.drinks[0].strDrink
//       document.querySelector("img").src = data.drinks[0].strDrinkThumb
//       document.querySelector("h3").innerText = data.drinks[0].strInstructions
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     });

// }

// fetch("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json())
// .then(data => {
//   console.log(data.message)
//   document.querySelector("img").src = data.message
// })

// .catch(err => {
//   console.log(`error $(err)`)
// })