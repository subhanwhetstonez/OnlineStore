const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { Pool } = require("./modules/db.js");
const UserRoute = require("./routes/users.js");
const ProductRoute = require("./routes/products.js");
const OrderRoute = require("./routes/order.js");
const ItemRoute = require("./routes/item.js");

app.use(express.json());
app.set("view engine", "ejs");

// app.use("/", (req, res) => {
//   res.send("Hello the server is RUNNING");
// });

app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.use("/order", OrderRoute);
app.use("/item", ItemRoute);

app.get("/user/login", (req, res) => {
  res.render("pages/login");
});
app.get("/user/register", (req, res) => {
  res.render("pages/register");
});

app.listen(5000, (req, res) => {
  console.log(`The server is running on http://localhost:5000`);
});
