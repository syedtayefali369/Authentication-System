const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
// This code defines the routes for user authentication in an Express application.
// It imports the necessary modules, including the Express framework and the authentication controller.