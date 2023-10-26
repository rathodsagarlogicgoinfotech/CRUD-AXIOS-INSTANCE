const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  age: { type: Number, required: true },
  phoneno: { type: Number, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  this.password = await bcryptjs.hash(this.password, 10);
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
