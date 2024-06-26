const express = require("express");
const router = express.Router();
const ItemControl = require("../controller/item-control.js");

router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

router.route("/").get(ItemControl.itemShow);
router.route("/create").post(ItemControl.itemPut);

module.exports = router;
