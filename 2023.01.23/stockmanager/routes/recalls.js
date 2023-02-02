var express = require("express");
var router = express.Router();

const data = require('../data');

router.get("/byBrand/:brand", (req, res) => {
  const products = data.filter(pr => 
                      pr.brand === req.params.brand && pr.batches.some(bch => bch.recall))
                      .map(pr => pr.id);
  console.log(products);
  res.json({result: true, products: products});
});

router.get("/byTimestamp/:timestamp", (req, res) => {
  const products = data.filter(pr => 
                      pr.batches.some(bch => (new Date(bch.expirationDate)).getTime() == req.params.timestamp && bch.recall))
                       .map(pr => pr.id);
  console.log(products);
  res.json({result: true, products: products});
});

module.exports = router;