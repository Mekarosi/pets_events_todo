const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.POST || 4000;

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
