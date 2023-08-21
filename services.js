async function fetchProductsAndUpdate() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const productsFromApi = response.data;
    productsFromApi.forEach((product) => {
      product.quantity = Math.floor(Math.random() * 10) + 1;
    });
    products = productsFromApi;
    console.log("Products updated from API");
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}

fetchProductsAndUpdate();
