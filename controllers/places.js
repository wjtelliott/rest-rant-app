const router = require('express').Router();

let db = require('../models/mockPlacesData');

const util = require('../assets/controllerUtil');
const res = require('express/lib/response');

router.get('/', (req, res) => {
    //* I know folks won't like this init in the IF
    if ((index = req.query?.index) == null) return res.status(206).render('places/index', { data: db });
    if (isNaN(Number(index))) return util.render404(res, req.query?.json ?? false);

    let uid = util.getDatabaseData(index, db);

    uid !== -1 ?
        req.query?.json != null ?
            res.status(200).send(util.formatJsonData(db[uid], req.query.json))
            : res.status(206).render('places/read', { data: db[uid], id: uid })
        : util.render404(res, `Unable to find the place index specified.`, req.query?.json ?? false);
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

router.delete('/', (req, res) => {
    if ((index = req.query?.index) == null) util.render404(res);
    else if (isNaN(index)) util.render404(res);
    else if ((indexData = util.getDatabaseData(index, db)) === -1) util.render404(res, `Could not find index specified`);
    else {
        db[indexData].archived = true;
        return res.status(200).redirect('/places');
    }
});

router.put('/', (req, res) => {
    if (((index = req.query?.index) == null) ||
        isNaN(index) ||
        (indexData = util.getDatabaseData(index, db)) === -1) return util.render404(res, 'Could not find index specified');
    else util.saveData(res, db, indexData, req.body);
});


router.get('/new', (req, res) => res.status(206).render('places/new'));

router.get('/edit', (req, res) => {
    if (((index = req.query?.index) == null) ||
        isNaN(index) ||
        (indexData = util.getDatabaseData(index, db)) === -1) return util.render404(res, 'Could not find index specified');
    else res.status(206).render('places/update', {data: db[indexData]});
});

module.exports = router;