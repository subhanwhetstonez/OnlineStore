const express = require("express");
const router = express.Router();
const UserControl = require("../controller/user-control.js");

router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

router.route("/").get(UserControl.userShow);

router.route("/register").post(UserControl.userPut);

router.post("/loginn", UserControl.userLog);

module.exports = router;
