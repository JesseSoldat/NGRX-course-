const { USERS } = require("../db-data");

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = Object.values(USERS).find(user => user.email === email);

  if (user && user.password === password) {
    res.status(200).json({ id: user.id, email: user.email });
  } else {
    res.status(403).send({ err: "login error" });
  }
};

module.exports = loginUser;
