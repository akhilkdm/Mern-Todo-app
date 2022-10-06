
const { registerService, loginService } = require("../services/userService");
const gnerateToken = require("../utils/generateToken");

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
      const token = gnerateToken(user._id)
      console.log(token)
      res.status(200).json({user, token});
    } else {
      res.status(500).json("Invalid email or password");
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

module.exports = { register, login };
