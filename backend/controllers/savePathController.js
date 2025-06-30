const User = require("../models/User");

const saveSelectedExercisePath = async (req, res) => {
  const { path, name } = req.body;
  const userId = req.user.id || req.user._id;

  console.log("🆔 User ID:", userId);
  console.log("📦 Path & Name:", path, name);

  if (!userId || !path || !name) {
    return res.status(400).json({ error: "Missing user ID, path, or name" });
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          lastSelectedExercise: {
            path,
            name
          }
        }
      },
      { new: true }
    );

    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ Exercise path saved for:", user.email);
    console.log("📁 New lastSelectedExercise:", user.lastSelectedExercise);

    res.json({
      message: "Exercise saved successfully",
      updatedUser: user
    });
  } catch (err) {
    console.error("❌ Error saving selected exercise:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { saveSelectedExercisePath };
