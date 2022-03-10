// Comment
//* Highlighted
//! Deprecated / Red
//? Question / Blue
//// Obsolete / Strikeout
//TODO: ToDos / orange


const logEvent = (text, type = 0, reset = true) => {
    let colorCode = '';
    switch (type) {
        default:
        case 0: // White / Reset
            colorCode = '\u001b[37m';
            break;
        case 1: // Purple
            colorCode = '\u001b[35m';
            break;
        case 2: // Yellow
            colorCode = '\u001b[33m';
            break;
        case 3: // Red
            colorCode = '\u001b[31m';
    }
    console.log(`${colorCode}${text}${reset ? '\u001b[37m' : ''}`);
};


require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));
app.get('/', (req, res) => res.status(206).render('home'));
app.get('*', (req, res) => res.status(404).render('error404'));


app.listen(process.env.PORT, () => {
    logEvent('Server is launching...', 1, 1);
});