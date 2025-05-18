const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const { authMiddleware } = require("../utils/index");

// Get account details
router.get('/',authMiddleware, async (req, res) => {
  try {
    // TODO: Implement get account logic
    //get user details from request that was added by authMiddleware
    //return user details
    
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: 'User not found', error: true});
    }

    res.status(200).json({ message: 'Account details fetched successfully', user , error: false });
    // res.status(501).json({ message: 'Get account route not implemented yet' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error: error.message });
  }
});


module.exports = router; 