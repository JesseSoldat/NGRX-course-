const express = require("express");
const bodyParser = require("body-parser");

// Routes
const loginUser = require("./routes/auth");
const { getCourseById } = require("./routes/courses");

const app = express();

app.use(bodyParser.json());

app.route("/api/login").post(loginUser);
app.route("/api/courses/:id").get(getCourseById);

app.listen(9000, () => {
  console.log("Server is now running on port: 9000");
});
