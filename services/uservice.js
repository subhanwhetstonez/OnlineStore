const express = require("express");
const pool = require("../modules/db.js");
const { Query } = require("pg");

class UserServices {
  constructor() {
    this.db = pool;
  }

  async userDisplay() {
    const result = await this.db.query(`SELECT * FROM users`);
    return result;
  }

  async userInput(username, password, email) {
    const result = await this.db.query(
      `INSERT INTO users (username, password, email) VALUES ('${username}','${password}','${email}')`
    );
    return result;
  }

  async userLogin(password) {
    const result = await this.db.query(
      `SELECT * FROM users WHERE password = '${password}'`
    );
    return result;
  }
}

module.exports = UserServices;
