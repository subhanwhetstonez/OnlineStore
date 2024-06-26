const UserServices = require("../services/uservice.js");

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
    res.json(data.rows);
  }

  async userLog(req, res) {
    const { password } = req.body;
    const data = await this.userService.userLogin(password);
    res.json(data.rows);
  }
}

module.exports = new UserControl();
