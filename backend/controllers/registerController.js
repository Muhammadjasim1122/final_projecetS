const User = require("../models/User");  // ✅ not ../../
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: "User already exists" });

    // Hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(201).json({ token, user: { username, email } });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
