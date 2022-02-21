document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

    if(day === "Wednesday" || day === "Friday"){
      document.write('CLASS DAY');
    }else if(day === "Saturday" || day === "Sunday"){
      document.write('Weekend');
    }else{
      document.write('Booring');
    }

    document.getElementById('placeToSee').innerText = value;
}


// if (day === "Wednesday" || day === "Friday"){
//   alert("It A Class Day")
// } 
// else(day === "Saturday" || day === "Sunday"){
//   alert("Weekend")
// } 
// else{
//   alert("Boooooooring")
// }