const ProductServices = require("../services/proservice.js");

class ProductControl {
  constructor() {
    this.productService = new ProductServices();
    this.productShow = this.productShow.bind(this);
    this.productPut = this.productPut.bind(this);
  }

  async productShow(req, res) {
    const data = await this.productService.productDisplay();
    // res.json(data.rows);
    res.render("pages/product", { products: data.rows });
  }

  async productPut(req, res) {
    const { name, description, price, stock } = req.body;
    const data = await this.productService.productInsert(
      name,
      description,
      price,
      stock
    );
    res.json({ INSERTED: data.rows });
  }
}

module.exports = new ProductControl();
