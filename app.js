const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const flatten = require("array-flatten");
const { Pool } = require("./modules/db.js");
const UserRoute = require("./routes/users.js");
const ProductRoute = require("./routes/products.js");
const OrderRoute = require("./routes/order.js");
const ItemRoute = require("./routes/item.js");
const verifyToken = require("./middleware/auth.js");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
app.set("view engine", "ejs");

// app.use("/", (req, res) => {
//   res.send("Hello the server is RUNNING");
// });

app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.use("/order", OrderRoute);
app.use("/item", ItemRoute);

app.get("/user/register", (req, res) => {
  res.render("pages/register");
});
app.get("/user/dashboard", verifyToken, (req, res) => {
  res.render("pages/dashboard");
});

app.listen(5000, (req, res) => {
  console.log(`The server is running on http://localhost:5000`);
});
