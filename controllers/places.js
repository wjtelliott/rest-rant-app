const router = require('express').Router();

const db = require('../models/mockPlacesData');

// Add routing here
router.get('/', (req, res) => res.status(206).render('places/index', { data: db }));
router.get('/place', (req, res) => {
    let index = req.query?.index;
    if (isNaN(Number(index))) res.status(404).render('error404');
    else {
        let uid = -1;
        for (let i = 0; i < db.length; i++)
            if (Number(db[i].uid) === Number(index)) { uid = db.indexOf(db[i]); break; }
        uid !== -1 ? res.status(206).render('places/placeDetails', { data: db[uid] }) : res.status(404).render('error404');
    }
});


module.exports = router;