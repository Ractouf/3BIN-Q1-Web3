require('dotenv').config();
const express = require('express');
const Phonebook = require('./models/phonebook');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
