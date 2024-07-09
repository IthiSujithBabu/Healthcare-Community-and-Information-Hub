const express = require("express");
const router = express.Router();
const { adminAuth } = require("../config/config");
const { User } = require("../config/dbConfig");

router
  .route("/")
  .get((req, res) => {
    console.log(req.body);
    res.status(200).send({ message: "Signup Route", status: true });
  })
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const userCred = await adminAuth.createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: username,
        disabled: false,
      });
      const token = await adminAuth.createCustomToken(userCred.uid, {
        name: userCred.displayName,
        email: userCred.email,
      });
      const newUser = new User({ ...userCred });
      await newUser.save();
      return res
        .status(200)
        .send({ message: "SignUp POST", userCred, token, status: true });
    } catch (err) {
      return res
        .status(409)
        .send({ message: err?.code.toUpperCase(), status: false });
    }
  });

module.exports = router;
