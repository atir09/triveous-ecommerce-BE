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


// ........Swagger Specs...



/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user and obtain a JWT token for authentication.
 *     requestBody:
 *       description: User registration details.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username for the new user.
 *               email:
 *                 type: string
 *                 description: The email of the new user.
 *               password:
 *                 type: string
 *                 description: The password for the new user.
 *     responses:
 *       200:
 *         description: User registered successfully, with a JWT token.
 *       400:
 *         description: Invalid request or validation error.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Log in as an existing user
 *     description: Log in as an existing user and obtain a JWT token for authentication.
 *     requestBody:
 *       description: User login credentials.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the existing user.
 *               password:
 *                 type: string
 *                 description: The password of the existing user.
 *     responses:
 *       200:
 *         description: User logged in successfully, with a JWT token.
 *       401:
 *         description: Invalid credentials.
 *       500:
 *         description: Internal server error.
 */