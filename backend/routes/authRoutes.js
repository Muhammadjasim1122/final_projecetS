const express = require("express");
const router = express.Router();

const { register } = require("../controllers/registerController");
const { login } = require("../controllers/loginController");

const validateRegister = require("../middleware/validateRegister");
const validateLogin = require("../middleware/validateLogin");

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

module.exports = router;
