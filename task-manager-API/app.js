// Load environment variables
require('dotenv').config();

// Core Modules
const express = require('express');

// Local Modules
const connectDB = require('./db/connect');
const tasks = require('./routes/task');
const path = require('path');
const app = express();
const notFound=require('./middleware/not-found')
// Port
const port = process.env.PORT;

// Middleware


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());



// Task Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound)
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