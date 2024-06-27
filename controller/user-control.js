const { hash } = require("crypto");
const UserServices = require("../services/uservice.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../modules/config.js");

class UserControl {
  constructor() {
    this.userService = new UserServices();
    this.userShow = this.userShow.bind(this);
    this.userPut = this.userPut.bind(this);
    this.userLog = this.userLog.bind(this);
  }

  async userShow(req, res) {
    const data = await this.userService.userDisplay();
    // res.json(data.rows);
    res.render("pages/user", { users: data.rows });
  }

  async userPut(req, res) {
    const { username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const data = await this.userService.userInput(username, hashed, email);
    const userId = data.rows[0].id;

    const jwToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });

    console.log(hashed);
    res.json({ userId, jwToken });
  }

  async userLog(req, res) {
    // const { password, email } = req.body;

    const data = await this.userService.userLogin(hashed, email);

    if (data.rows.length === 0) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const userId = data.rows[0].id;
    const jwToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ userId, jwToken });
  }
}

module.exports = new UserControl();
