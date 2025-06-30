const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser  = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // If path already saved, redirect there. Otherwise go to problem selector.
    const redirectPath = user.lastSelectedExercise?.path || "/selectproblem";

    res.status(200).json({
      token,
      lastSelectedPath: redirectPath // ✅ MATCHING name
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = { login: loginUser };
