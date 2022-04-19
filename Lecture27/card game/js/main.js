let deckId = " "


fetch(https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if(data.media_type === 'image'){
          document.querySelector("img").src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector("iframe").src = data.url
        }

        
        document.querySelector("h3").innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const choice = document.querySelector('input').value

  console.log(choice);
  
  const url = `https://api.nasa.gov/planetary/apod?api_key=zhayDqkhe4LDCytLL2WsutKSI5ku9XZSk1mRMBzC&date=${choice}`

  
}

// https://deckofcardsapi.com/api
