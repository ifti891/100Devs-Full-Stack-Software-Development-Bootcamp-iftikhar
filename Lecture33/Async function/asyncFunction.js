
// rewrite Promise with async function 

async function fetchProducts() {

  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    if (!response.ok) {
      throw new ERROR(`HTTP error: ${response.status}`);
    }

    const json = await response.json();

    console.log(json[0].name);
  }
  catch(error){
    console.log(`Could not get products: ${error}`);
  }
}

fetchProducts();