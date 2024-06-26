const OrderServices = require("../services/orderservice.js");

class OrderControl {
  constructor() {
    this.orderService = new OrderServices();
    this.orderShow = this.orderShow.bind(this);
    this.orderPut = this.orderPut.bind(this);
  }

  async orderShow(req, res) {
    const data = await this.orderService.orderDisplay();
    res.json(data.rows);
  }

  async orderPut(req, res) {
    const { user_id, total } = req.body;
    const data = await this.orderService.orderInsert(user_id, total);
    res.json({ INSERTED: data.rows });
  }
}

module.exports = new OrderControl();
