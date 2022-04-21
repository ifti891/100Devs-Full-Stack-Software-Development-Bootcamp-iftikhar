let deckId = " "


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id

      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  
  
  const url = `https://deckofcardsapi.com/api/deck/w0ix97scd10p/draw/?count=2`

  
}

// https://deckofcardsapi.com/api
