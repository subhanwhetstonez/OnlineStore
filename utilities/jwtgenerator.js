const jwt = require("jsonwebtoken");
const { pool } = require("../modules/db");
const pg = require("pg");

class JwtGen {
  constructor() {
    this.db = pool;
  }
  async generator(id) {
    const payload = this.db.user.id;
    return jwt.sign(payload, 23223, { expiresIn: "1hr" });
  }
}

module.exports = JwtGen;
