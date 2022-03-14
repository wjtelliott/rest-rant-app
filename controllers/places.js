const router = require('express').Router();

const db = require('../models/mockPlacesData');

const util = require('../assets/controllerUtil');

router.get('/', (req, res) => {
    //* I know people won't like this init in the IF

    if ((index = req.query?.index) == null) res.status(206).render('places/index', { data: db });
    else {
        if (isNaN(Number(index))) util.render404(res);
        else {
            let uid = util.getDatabaseData(index, db);
            uid !== -1 ?
                req.query?.json != null ? res.status(200).send(util.formatJsonData(db[uid])) : res.status(206).render('places/read', { data: db[uid] })
                : util.render404(res, `Unable to find the place index specified.`);
        }
    }
});

router.post('/', (req, res) => {

    let defaultPicture = 'https://cdn.vox-cdn.com/thumbor/NUeFZ9TtolyWpOu_-4x1QpjxtYk=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66921789/ostia2.21.jpeg';
    let newVal = {
        name: req.body?.name || 'Unnamed',
        pic: req.body?.pic || defaultPicture,
        city: req.body?.city || 'No city',
        state: req.body?.state || 'No state',
        cuisines: req.body?.cuisines || 'No specialty',
        uid: db.length,
        archived: false
    };

    db.push(newVal);

    res.redirect(302, '/places');
});

router.get('/new', (req, res) => res.status(206).render('places/new'));

module.exports = router;