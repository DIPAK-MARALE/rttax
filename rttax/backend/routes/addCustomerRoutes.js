// backend/routes/addCustomerRoutes.js

const express = require('express');
const router = express.Router();
const pool = require('../db');

// Route for customer registration
router.post('/register', (req, res) => {
    const { username, phoneNumber, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Insert the new customer into the database
    pool.query('INSERT INTO customers (username, phone_number, email, password) VALUES (?, ?, ?, ?)',
        [username, phoneNumber, email, password],
        (error, results) => {
            if (error) {
                console.error('Error registering customer:', error);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                console.log('Customer registered successfully');
                res.status(201).json({ message: 'Customer registered successfully' });
            }
        }
    );
});

module.exports = router;
