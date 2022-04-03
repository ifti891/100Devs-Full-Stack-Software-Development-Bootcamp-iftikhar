//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()
//   let output = " ";
//   if(day === "wednesday" || day === "friday"){
//     output = "CLASS DAY"
//   }else if( day === "saturday" || day === "sunday"){
//     output = "WEEKEND";
//   }else{
//     output = "BOORING";
//   }

//   document.querySelector("#placeToSee").innerText = output

// }


document.querySelector("#check").addEventListener("click", run)

function run(){
  const day = document.querySelector("#day").value.toLowerCase()

  let output = " ";

  if(day === "wednesday" || day === "friday"){
    output = "CLASS DAY";
  }else if(day === "saturday" || day === "sunday"){
    output = "WEEKEND";
  }else{
    output = "BOOORINNG";
  }

  document.querySelector("#placeToSee").innerText = output
}