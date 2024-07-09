const router = require("express").Router();
const { adminAuth } = require("../config/config");

router
  .route("/")
  .get((req, res) => {
    console.log(req.body);
    res.status(200).send({ message: "Login Route", status: true });
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCred = await adminAuth.getUserByEmail(email);
      return res
        .status(200)
        .send({ message: "success", userCred, status: true });
    } catch (err) {
      return res.status(404).send({ message: err.message, status: false });
    }
  });

module.exports = router;
