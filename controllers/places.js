const router = require('express').Router();

const db = require('../models/mockPlacesData');

const getDatabaseData = index => {
    let uid = -1;
    for (let i = 0; i < db.length; i++) if (Number(db[i].uid) === Number(index)) { uid = db.indexOf(db[i]); break; }
    return uid;
}

// TODO: Create new function for 404 handling
router.get('/', (req, res) => {
    //* I know people won't like this init in the IF

    if ((index = req.query?.index) == null) res.status(206).render('places/index', { data: db });
    else {
        if (isNaN(Number(index))) res.status(404).render('error404');
        else {
            let uid = getDatabaseData(index);
            uid !== -1 ?
                req.query?.json != null ? res.status(200).send(db[uid]) : res.status(206).render('places/read', { data: db[uid] })
                : res.status(404).render('error404', {errorMsg: `Unable to find the place index specified.`});
        }
    }
})


router.get('/new', (req, res) => res.status(206).render('places/index', {data: db}));

module.exports = router;