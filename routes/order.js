const express = require("express");
const router = express.Router();
const OrderControl = require("../controller/order-control.js");

router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

router.route("/").get(OrderControl.orderShow);
router.route("/create").post(OrderControl.orderPut);

module.exports = router;
