// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}


// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');

// Create an express app
const app = express();

// Connect to database
connectToDb();

// Routing 
app.get('/', (req, res) => {
    res.json({hello : "world"});
})

// Start over server
app.listen(process.env.PORT);