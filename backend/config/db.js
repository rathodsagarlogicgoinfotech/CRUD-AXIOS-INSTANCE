const mongoose = require("mongoose");

module.exports = connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/practice")
    .then(() => console.log("Connect with mongodb successfully"))
    .catch(() => console.log("Not connected with database server"));
};
