const express = require('express');

const app = express();

const PORT = process.env.POST || 4000;

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
