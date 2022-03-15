document.querySelector("#check").addEventListener("click", check);


function check(){
  const day = document.querySelector("#day").value.toLowerCase();

  let output = "";

  if(day === "wednesday" || day === "friday"){
    output = "CLASS DAY";
  }else if (day === "saturday" || day === "sunday"){
    output = "WEEKEND";
  }else{
    output = "BOOORRRRING"
  }

  document.getElementById("placeToSee").innerText = output;
}





// document.querySelector("#check").addEventListener("click", check)


// function check(){
//   const day = document.querySelector("#day").value.toLowerCase()

//   let output = " "

//   if(day === "wednesday" || day === "friday"){
//     output = "CLASS DAY";
//   }else if (day ==="saturday" || day === "sunday"){
//     output = "WEEKEND";
//   }else{
//     output = "booooring";
//   }

//   document.getElementById("placeToSee").innerText = output;
// }







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