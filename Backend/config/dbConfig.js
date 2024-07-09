const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
require("dotenv").config();
const pwd = process.env.DB_PASS;
const uri = `mongodb+srv://Healthcare community and information Hub:${pwd}@Healthcare community and information Hub.blzpf8w.mongodb.net/?retryWrites=true&w=majority&appName=Healthcare community and information Hub`;

async function initializeDB() {
  try {
    await mongoose.connect(uri);
    console.log(`DB is up and running on the port ${process.env.PORT || 5000}`);
  } catch (err) {
    console.log(err.message);
  }
}

const UserSchema = new Schema({}, { strict: false });
const FoodIntakeSchema = new Schema({}, { strict: false });
const User = mongoose.model("User", UserSchema);
const FoodIntake = mongoose.model("FoodIntake", FoodIntakeSchema);

module.exports = { initializeDB, User, FoodIntake };
