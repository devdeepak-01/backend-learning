// Load environment variables
require('dotenv').config();

// Core Modules
const express = require('express');

// Local Modules
const connectDB = require('./db/connect');
const tasks = require('./routes/task');

const app = express();

// Port
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test Route
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

// Task Routes
app.use('/v1/api/tasks', tasks);

// Start Server
const start = async () => {
    try {

        // Connect Database
        await connectDB();
        console.log('✅ MongoDB Connected Successfully');

        // Start Express Server
        app.listen(port, () => {
            console.log(`🚀 Server is listening on port ${port}`);
        });

    } catch (error) {

        console.log('❌ Database Connection Failed');
        console.log(error);

    }
};

start();