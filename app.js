// Comment
//* Highlighted
//! Deprecated / Red
//? Question / Blue
//// Obsolete / Strikeout
//TODO: ToDos / orange


"use strict";
require('dotenv').config();
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.status(206).send('Hello World');
});


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(process.env.PORT);