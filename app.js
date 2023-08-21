const express = require("express");
const app = express();
// const morgan = require("morgan");
const axios = require("axios");
const router = require("./routes/router");
const allProducts = require("./Dal/products");
const port = 8000;

app.use(express.json());
// app.use(morgan("dev"));
app.use(router);

app.listen(port, () => {
  console.log(`server is op and running on http://localhost:${port}`);
});
