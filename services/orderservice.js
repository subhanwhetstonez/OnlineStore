const express = require("express");
const pool = require("../modules/db.js");
const { Query } = require("pg");

class OrderServices {
  constructor() {
    this.db = pool;
  }

  async orderDisplay() {
    const result = await this.db.query(`SELECT * FROM orders`);
    return result;
  }

  async orderInsert(user_id, total) {
    const result = await this.db.query(
      `INSERT INTO orders (user_id, total) VALUES ('${user_id}','${total}')`
    );
    return result;
  }
}

module.exports = OrderServices;
