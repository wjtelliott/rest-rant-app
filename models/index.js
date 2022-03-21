const mongoose = require('mongoose');
const logEvent = require('../assets/logEvents');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logEvent('Connected to MongoDB', 1, 1))
    .catch(err => logEvent('Connection to MongoDB failed!', 3, 1));

module.exports.Place = require('./placeModel');
