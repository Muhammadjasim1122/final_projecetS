const express = require("express");
const router = express.Router();
const { saveSelectedExercisePath } = require("../controllers/savePathController");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/save-exercise-path", authenticateToken, saveSelectedExercisePath);

module.exports = router;
