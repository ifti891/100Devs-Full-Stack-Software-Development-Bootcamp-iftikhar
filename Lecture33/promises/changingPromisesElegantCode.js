// Changing Promises

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then(response => {

    return response.json();
  })
  .then(json => {
    console.log(json[0].name);
  });

