const express = require('express');
const path = require('path');
// const Review = require('../database/index.js');

const app = express();
const PORT = 3003;

// Refactor this to query database
app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
