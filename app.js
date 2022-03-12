// Comment
//* Highlighted
//! Deprecated / Red
//? Question / Blue
//// Obsolete / Strikeout
//TODO: ToDos / orange

require('dotenv').config();
const express = require('express');
const app = express();
const logEvent = require('./assets/logEvents');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));
app.get('/', (req, res) => res.status(206).render('home'));
app.get('*', (req, res) => res.status(404).render('error404'));


app.listen(process.env.PORT, () => {
    logEvent('Server is launching...', 1, 1);
});