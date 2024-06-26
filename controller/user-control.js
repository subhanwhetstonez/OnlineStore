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
    const data = await this.userService.userInput(username, password, email);
    if (email != 0) {
      const hashed = await bcrypt.hash(password, 10);
      console.log(hashed);
      res.json(data.rows);
    } else {
      res.json("The EMAIL has already registered");
    }
  }

  async userLog(req, res) {
    const { password, email } = req.body;
    const data = await this.userService.userLogin(password, email);
    res.json(data.rows);
  }
}

module.exports = new UserControl();
