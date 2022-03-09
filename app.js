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

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(process.env.PORT);