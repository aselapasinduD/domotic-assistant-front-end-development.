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
    res.status(501).json({ message: 'Get account route not implemented yet' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error: error.message });
  }
});


module.exports = router; 