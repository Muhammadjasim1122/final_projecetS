const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  path: { type: String, required: true },
  name: { type: String, required: true }
}, { _id: false }); // Disable _id in subdocument

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastSelectedExercise: {
    type: exerciseSchema,
    default: null // This will hold the last selected exercise details
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
