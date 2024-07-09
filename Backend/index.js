const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { initializeDB } = require("./config/dbConfig");

app.use(express.json());
app.use(cors());
app.use("/signup", require("./routes/signup.router"));
app.use("/login", require("./routes/login.router"));
app.use("/food-consumed", require("./routes/food-track.router"));

const PORT = process.env.PORT || 5000;
initializeDB();

app.listen(PORT, (err) => {
  if (err) {
    return console.error(`There was an error ${err}`);
  }
  console.log(`Server is up & running on the PORT ${PORT}`);
});
