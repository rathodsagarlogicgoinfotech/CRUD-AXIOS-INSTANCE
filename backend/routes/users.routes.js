const { Router } = require("express");
module.exports = userRoutes = Router();
const {
  getUsers,
  signupUser,
  loginUser,
} = require("../controllers/users.controllers");

userRoutes.get("/", getUsers);
userRoutes.post("/create", signupUser);
userRoutes.post("/login", loginUser);
