const express = require("express");
const router = express.Router();
const UserControl = require("../controller/user-control.js");

router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

router.route("/").get(UserControl.userShow);

router.route("/register").post(UserControl.userPut);

router
  .route("/login")
  .get((req, res) => {
    res.render("pages/login");
  })
  .post(UserControl.userLog);

module.exports = router;
