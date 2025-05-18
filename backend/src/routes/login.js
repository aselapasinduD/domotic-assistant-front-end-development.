const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secretKey = process.env.SECRET || "my-secret-8965165"

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // TODO: Implement login logic
    // 1. Validate input
    // 2. Check user exists
    // 3. Verify password
    // 4. Generate JWT token
    // 5. Send response

    // TODO 1 - Validate is the email and password
    if(!email || !password){
      return res.status(400).json({message: "Email and password are required", error: true});
    }
    if(!isValidEmail(email)){
      return res.status(400).json({message: "Required valid email address", error: true});
    }
    // console.log("Validate Pass");

    // TODO 2 - Check is the user are exist in DB.
    const user = await dbFunctions.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({message: "User not found", error: true});
    }
    // console.log("User Found: ", user);

    // TODO 3 - Compare hashed passwords to check is the correct password is this.
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({message: "Invalid credentials", error: true});
    }

    // TODO 4 - Generate JWT token.
    const token = jwt.sign(user, secretKey, { expiresIn: '1m' });
    
    // TODO 5 - Send the response.
    res.status(200).json({ message: 'Login successful', error: false, token});
    // res.status(501).json({ message: 'Login route not implemented yet' });
  } catch (error) {
    console.log('Error during login', error.message);
    res.status(500).json({ message: 'Error during login', error: true});
  }
});

module.exports = router; 