document.querySelector("#check").addEventListener('click', check)

function check() {
  const day = document.querySelector("#day").value
  var output = ''

  if (day === "Wednesday" || day === "Friday") {
    output = "CLASS DAYYYYY";
  }else if(day === "Saturday" || day === "Sunday"){
    output = "Weekend";
  }else {
    output = "BoooRooring";
  }
  document.getElementbyId("placeToSee").innerText = output;
}



// document.querySelector('#check').addEventListener('click', check)


// function check() {

//   const day = document.querySelector('#day').value
//   var output = ''

//     if(day === "Wednesday" || day === "Friday"){
//       output = 'CLASS DAY';
//     }else if(day === "Saturday" || day === "Sunday"){
//       output = 'Weekend';
//     }else{
//       output = 'Booring';
//     }

//     document.getElementById('placeToSee').innerText = output;
// }





// if (day === "Wednesday" || day === "Friday"){
//   alert("It A Class Day")
// } 
// else(day === "Saturday" || day === "Sunday"){
//   alert("Weekend")
// } 
// else{
//   alert("Boooooooring")
// }