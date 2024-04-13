
// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const addCustomerRoutes = require('./routes/addCustomerRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/customers', addCustomerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
