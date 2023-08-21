const allProducts = require("./products");

// get all products
const getAllProducts = () => allProducts;

// get product by Id
const returnProduct = (product) => {
  res.send(element);
};

// add new product
const addProduct = (product) => {
  allProducts.push(user);
};

// update product
const updateProduct = (product) => {
  allProducts.id = user;
};

// delete product
const deleteProduct = (product) => {
  allProducts.splice(userIndex, 1);
};

// addition/subtraction product
const additionOrSubProduct = () => {
  allProducts[productIndex].quantity++;
  allProducts[productIndex].quantity--;
};

module.exports.getAllProducts = getAllProducts;
module.exports.returnProduct = returnProduct;
module.exports.addProduct = addProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.additionOrSubProduct = additionOrSubProduct;
