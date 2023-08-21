const express = require("express");
const router = express.Router();
const {
  getProducts,
  returnTheProduct,
  addNewProduct,
  updateTheProduct,
  deleteTheProduct,
  addOrSubProduct,
} = require("../controllers/controller");

// all products
router.get("/products", getProducts);

// return product
router.get("/products/:id", returnTheProduct);

// add product
router.post("/newUser", addNewProduct);

// update product
router.put("/products/:id", updateTheProduct);

// delete Products
router.delete("/products/:id", deleteTheProduct);

// add or sub product
router.patch("/products/:id", addOrSubProduct);

module.exports = router;
