const { hash } = require("crypto");
const UserServices = require("../services/uservice.js");
const bcrypt = require("bcrypt");

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
    if (data.rows.length < 0) {
      const data = await this.userService.userInput(username, hashed, email);
      console.log(hashed);
      res.json(data.rows);
    } else {
      res.json("The User already registered");
    }
  }

  async userLog(req, res) {
    const { password, email } = req.body;
    const data = await this.userService.userLogin(password, email);
    res.json(data.rows);
  }
}

module.exports = new UserControl();
