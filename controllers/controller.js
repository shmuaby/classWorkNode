const {
  addProduct,
  returnProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  additionOrSubProduct,
} = require("../Dal/dal");

const allProducts = require("../Dal/products");

const getProducts = (req, res) => {
  const allProducts = getAllProducts();
  res.send(allProducts);
};

const returnTheProduct = (req, res) => {
  allProducts.forEach((element) => {
    if (element.id === req.params.id) {
      const returnIt = returnProduct();
      res.send(returnIt);
    }
  });
};

const addNewProduct = (req, res) => {
  try {
    const user = req.body;
    if (typeof user !== "object") throw new Error("not a good info");
    addProduct(user);
    return res.send(allProducts);
  } catch (error) {
    res.status(400).send(error.massage);
  }
};

const updateTheProduct = (req, res) => {
  const user = req.body.id;
  allProducts.forEach((element) => {
    if (element.id === req.params.id) {
      updateProduct(user);
      res.send(updateProduct);
    }
  });
};

const deleteTheProduct = (req, res) => {
  const UserID = req.params.id;
  const userIndex = allProducts.findIndex((user) => user.id === UserID);
  if (userIndex !== -1) {
    deleteProduct(userIndex);
    res.status(204).send();
  } else {
    res.status(404).send({ message: "User not found" });
  }
};

const addOrSubProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const { action } = req.body;

  const productIndex = allProducts.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    res.status(404).send({ error: "Product not found" });
  } else {
    if (action === "increase") {
      additionOrSubProduct(productIndex);
    } else if (action === "decrease") {
      if (allProducts[productIndex].quantity > 0) {
        additionOrSubProduct(productIndex);
      }
    }
    res.send(allProducts[productIndex]);
  }
};

module.exports.getProducts = getProducts;
module.exports.returnTheProduct = returnTheProduct;
module.exports.addNewProduct = addNewProduct;
module.exports.updateTheProduct = updateTheProduct;
module.exports.deleteTheProduct = deleteTheProduct;
module.exports.addOrSubProduct = addOrSubProduct;
