const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const userModel = require("../models/user.schema");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length == 0) {
      throw new Error("There are no users");
    }
    res.status(200).send({ success: true, users });
  } catch (error) {
    res.status(401).send({ success: false, message: error.message });
  }
};

const signupUser = async (req, res) => {
  try {
    const users = await userModel.find();
    let { email, username, password, phoneno, age, city } = req.body;

    if (!email || !username || !password || !phoneno || !age || !city) {
      throw new Error("Please fill all the fields");
    }

    const existedUser = users.filter((ele) => ele.email == req.body.email);

    if (existedUser.length > 0) {
      throw new Error("User with given email id is already exist");
    }

    const signupUser = await userModel.create({
      email,
      password,
      username,
      phoneno,
      age,
      city,
    });

    res.send({ success: true, message: "Signup Successfully", signupUser });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error.message || "Somwthing went wrong, please try again later",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    if (!req.body.email) {
      throw new Error("Please fill the field");
    }

    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("User doesn't exist with given email id");
    }

    const { username, email } = user;

    const token = jwt.sign({ username, email }, "gfvdhvbdsvbd");
    res.cookie("user", token);
    res.send({ success: true, message: "Login Successfully", user });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: error.message || "Somwthing went wrong, please try again later",
    });
  }
};

module.exports = { getUsers, signupUser, loginUser };
