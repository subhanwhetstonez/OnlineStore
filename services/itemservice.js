const express = require("express");
const pool = require("../modules/db.js");
const { Query } = require("pg");

class ItemServices {
  constructor() {
    this.db = pool;
  }

  async itemDisplay() {
    const result = await this.db.query(`SELECT * FROM order_items`);
    return result;
  }

  async itemInsert(order_id, product_id, quantity, price) {
    const result = await this.db.query(
      `INSERT INTO products (order_id, product_id, quantity, price) VALUES ('${order_id}','${product_id}','${quantity}','${price}')`
    );
    return result;
  }
}

module.exports = ItemServices;
