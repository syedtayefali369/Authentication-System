const express = require("express");
const authController = require('../controllers/authController');
const { register, login } = authController;
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
// This code defines the routes for user authentication in an Express application.
// It imports the necessary modules, including the Express framework and the authentication controller.