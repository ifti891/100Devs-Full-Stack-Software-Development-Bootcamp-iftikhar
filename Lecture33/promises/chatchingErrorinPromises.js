// Chatching errors

connst = fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then(response => {

    if (!response.ok) {

      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.jason();
  })

  .then(json => {
    console.log(json[0].name);
  })

  .catch(error => {
    console.log(`Could not get products: ${error}`);
  })
  