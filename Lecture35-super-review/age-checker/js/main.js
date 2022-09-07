//Create a conditonal that checks their age
let age = 18;
//If under 16, tell them they can not drive


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge)
const p = document.querySelector('p');
function checkAge(){
  let age = Number(document.querySelector('input').value)

  if(age < 16){
    p.innerText = "You can't drive"
  }
  
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  
  else if(age < 18){
    p.innerText = "you can't hate from outside the club"
  }
  //If under 21, tell them they can not drink
  else if (age < 21){
    p.innerText = "you can't drink"
  }
  //If under 25, tell them they can not rent cars affordably
  else if(age < 25){
    p.innerText = "you can't rent cars"
  }
  //If under 30, tell them they can not rent fancy cars affordably
  else if(age < 30){
    p.innerText = "you can't rent fancy cars"
  }
  //If under over 30, tell them there is nothing left to look forward too
  else if(age > 30){
    p.innerText = "There is nothing left you in life"
  };

};