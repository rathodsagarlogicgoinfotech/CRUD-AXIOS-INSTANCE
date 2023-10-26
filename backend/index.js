const express = require("express");
const usersRoutes = require("./routes/users.routes");
const cookieParser = require("cookie-parser");
const connect = require("./config/db");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use("/users", usersRoutes);
app.use(cookieParser());
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connect();
});
