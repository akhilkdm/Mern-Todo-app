const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerService = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    const newUser = new userModel({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });
    return await newUser.save();
  } catch (error) {
    throw Error(error);
  }
};

const loginService = async (data) => {
  try {
    const user = await userModel.findOne({ email: data.email });
    if (user && (await bcrypt.compare(data.password, user.password))) {
      return user;
    }
  } catch (error) {
    throw Error(error);
  }
};
module.exports = { registerService, loginService };
