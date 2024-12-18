const express = require('express');
const {  loginUser } = require('../controllers/authController'); // Ensure correct path and named exports

const router = express.Router();


// Login route
router.post('/login', loginUser);

module.exports = router;
