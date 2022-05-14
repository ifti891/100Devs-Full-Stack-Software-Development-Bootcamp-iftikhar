// Promise.any()

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');


Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  
  .then(response => {
    console.log(`${response.url}: ${response.status}`);

  })

  .catch (error => {
  console.log(`Failed to fetch: ${error}`)
});