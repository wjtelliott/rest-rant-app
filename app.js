// Comment
//* Highlighted
//! Deprecated / Red
//? Question / Blue
//// Obsolete / Strikeout
//TODO: ToDos / orange

require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const logEvent = require('./assets/logEvents');

////app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routing
app.use('/places', require('./controllers/places'));
app.get('/', (req, res) => res.status(206).render('home'));
app.get('*', (req, res) => {
    logEvent('404 has been caught in main dir', 2, 1);
    res.status(404).render('error404')
});


// Server launcher
app.listen(process.env.PORT, () => {
    logEvent('Server is launching...', 1, 1);
});