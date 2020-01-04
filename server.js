const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.POST || 4000;
require('dotenv').config();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Route
app.use('/api/todos', require('./route/api/todos'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
