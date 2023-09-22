// ....Importing NPM Packages.....
const jwt = require('jsonwebtoken');

// Importing User Model From "models " folder
const { User } = require('../models/user');

// Controller function to register a new user
const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Check if the username is already in use
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send({ message: 'Email already in use' });
        }

        //Hashing the password using "bcrypt" NPM Package 
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating a new user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        // Creating and sending a JWT token for authentication
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.status(201).send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to log in an existing user and obtain a token
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by username and password
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({ message: 'User not found, Kindly register.' });
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match){
            return res.status(401).send({ message: 'Incorrect Password.' });
        }
        // Create and send a JWT token for authentication
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.status(200).send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
