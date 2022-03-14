

// document.querySelector("#yell").addEventListener("click", run)


// function run(){
//   const fName = document.querySelector("#firstName").value
//   const fMiddle = document.querySelector("#firstMiddle").value
//   const lMiddle = document.querySelector("#lastMiddle").value
//   const lName = document.querySelector("#lastName").value

//   document.querySelector("#placeToYell").innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`

// }


// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }





// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }


// const sayIt = window.speechSynthesis;

// document.querySelector("#yell").addEventListener("click", run)

// function run(){
//   const fName = document.querySelector("#firstName").value
//   const fMiddle = document.querySelector("#firstMiddle").value
//   const lMiddle = document.querySelector("#lastMiddle").value
//   const lName = document.querySelector("#lastName").value

//   const yellText = `${fName} ${fMiddle} ${lMiddle} ${lName}`

//   document.querySelector("#placeToYell").innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText)

//   sayIt.speak(yellThis)
// }

const sayIt = window.speechSynthesis;

document.querySelector("#yell").addEventListener("click", run)


function run(){
  const fName = document.querySelector("#firstName").value

  const fMiddleName = document.querySelector("#firstMiddle").value

  const lMiddleName = document.querySelector("#lastMiddle").value

  const lName = document.querySelector("#lastName").value

  const yellText = `${fName} ${fMiddleName} ${lMiddleName} ${lName}`

  document.querySelector("#placeToYell").innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText)

  sayIt.speak(yellThis)
  
}