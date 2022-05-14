// Chaining promises

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then(respone => {

  const jsonPromise = respone.json();

  jsonPromise.then(json => {
    console.log(json[0].name)
  });
});