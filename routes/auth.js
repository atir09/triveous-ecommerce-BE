// ...........Importing NPM Packages............
const express = require('express');

// ............Importing Controller Functions..........
const { registerUser,loginUser } = require('../controllers/auth');


// Defining Login Route
const authRouter = express.Router();

// Route to register a new user
authRouter.post('/register', registerUser);

// Route to log in an existing user and obtain a token
authRouter.post('/login', loginUser);

module.exports = {authRouter};