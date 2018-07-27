const express = require("express");
const bodyParser = require("body-parser");

// Routes
const loginUser = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

app.route("/api/login").post(loginUser);

app.listen(9000, () => {
  console.log("Server is now running on port: 9000");
});
