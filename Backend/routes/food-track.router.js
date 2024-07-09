const router = require("express").Router();
const { FoodIntake } = require("../config/dbConfig");

router
  .route("/")
  .get((req, res) => {
    console.log(req.body);
    res.status(200).send({ message: "Food Route", status: true });
  })
  .post(async (req, res) => {
    try {
      const newUser = new FoodIntake({ ...req.body });
      await newUser.save();
      return res
        .status(200)
        .send({ msg: "food created successfully", status: true });
    } catch (err) {
      res.status(401).send({ msg: "Error occured", status: false });
    }
  });

module.exports = router;
