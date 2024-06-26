const ItemServices = require("../services/itemservice.js");

class ItemControl {
  constructor() {
    this.itemService = new ItemServices();
    this.itemShow = this.itemShow.bind(this);
    this.itemPut = this.itemPut.bind(this);
  }

  async itemShow(req, res) {
    const data = await this.itemService.itemDisplay();
    res.json(data.rows);
  }

  async itemPut(req, res) {
    const { order_id, product_id, quantity, price } = req.body;
    const data = await this.itemService.itemInsert(
      order_id,
      product_id,
      quantity,
      price
    );
    res.json({ INSERTED: data.rows });
  }
}

module.exports = new ItemControl();
