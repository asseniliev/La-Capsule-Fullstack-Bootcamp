var express = require("express");
var router = express.Router();

const data = require('../data');



router.get("/byId/:id", (req, res) => {
  const product = data.find(el => el.id == req.params.id);
  console.log(product);
  res.json({result: true, product: product});
});

router.get("/byBrand/:brand", (req, res) => {
  const products = data.filter(el => el.brand == req.params.brand);
  console.log(products);
  res.json({result: true, products: products});
});

router.get("/byBatchId/:id", (req, res) => {
  const product = data.find(el => el.batches.some(bch => bch.id == req.params.id));
  console.log(product);
  res.json({result: true, product: product});
});

module.exports = router;