// Chaining Promise improvement

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise

  .then(response => {
    if (!response.ok) {

      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then(json => {
    console.log(json[0].name);
  });