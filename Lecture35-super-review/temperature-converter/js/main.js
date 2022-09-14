//Write your pseduo code first! 


document.querySelector('h1').addEventListener('click', cToF)

function cToF(){

  // need the value in c
  let temp = Number(document.querySelector('input').value)

  // convert to f
  temp = temp * 1.8 + 32


  //show the value
  document.querySelector('h2').innerText = temp
}


