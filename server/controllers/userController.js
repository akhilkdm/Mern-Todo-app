
const { registerService, loginService } = require("../services/userService");

const register = async (req, res) => {
  try {
    const user = await registerService(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("User already exists");
  }
};

const login = async (req, res) => {
  try {
    const user = await loginService(req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(500).json("Invalid email or password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, login };
