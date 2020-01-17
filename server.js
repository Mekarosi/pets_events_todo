const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const PORT = process.env.POST || 4000;
const path = require('path');
// require('dotenv').config();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Route
app.use('/api/todos', require('./route/api/todos'));

// Server static assess if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.use('/src/assets', express.static(__dirname + '/src/assets/'));


  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
