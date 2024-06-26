const express = require("express");
const pool = require("../modules/db.js");
const { Query } = require("pg");

class ProductServices {
  constructor() {
    this.db = pool;
  }

  async productDisplay() {
    const result = await this.db.query(`SELECT * FROM products`);
    return result;
  }

  async productInsert(name, description, price, stock) {
    const result = await this.db.query(
      `INSERT INTO products (name, description, price, stock) VALUES ('${name}','${description}','${price}','${stock}')`
    );
    return result;
  }
}

module.exports = ProductServices;
