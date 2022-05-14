// Combining multiple promises

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');

const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then(responses => {
  for (const response of responses) {
    console.log(`${response.url}:  ${response.status}`);

  }
})

  .catch(error => {
    console.log(`Failed to fetch: ${error}`)
  });
  