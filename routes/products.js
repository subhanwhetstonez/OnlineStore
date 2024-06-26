const express = require("express");
const router = express.Router();
const ProductControl = require("../controller/product-control.js");

router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

router.route("/").get(ProductControl.productShow);
router.route("/create").post(ProductControl.productPut);

module.exports = router;
