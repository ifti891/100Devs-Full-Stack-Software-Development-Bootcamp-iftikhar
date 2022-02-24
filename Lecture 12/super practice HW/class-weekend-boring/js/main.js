
document.querySelector('#check').addEventListener('click', check)


function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  let output = ''

  if(day === "tuesday" || day === "thursday"){
    output = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    output = "Its The Weekend"
  }else{
    output = "BORING"
  }
  document.getElementById('placeToSee').innerText = output
}




// document.querySelector("#check").addEventListener("click", check)

// function check() {
//   const day = document.querySelector("#day").value.toLowerCase()
//   let output = ''

//   if (day === "wednesday" || day === "friday") {
//     output = "CLASS DAYYYYY"
//   }else if( day === "saturday" || day === "sunday"){
//     output = "Weekend"
//   }else {
//     output = "Boooooring"
//   }
//   document.getElementbyId("placeToSee").innerText = output;
// }






// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()
//   var output

//     if(day === "wednesday" || day === "friday"){
//       output = 'CLASS DAY';
//     }else if(day === "saturday" || day === "sunday"){
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