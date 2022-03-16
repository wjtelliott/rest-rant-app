const router = require('express').Router();

// Load fake databases into the process var
let db = require('../models/mockPlacesData');
process.env.db = JSON.stringify(db);

let tokens = require('../models/auth');
process.env.tokens = JSON.stringify(tokens);

// Routing files
const gets = require('./places/get');
const puts = require('./places/put');
const deletes = require('./places/delete');
const posts = require('./places/post');

//* Deletes
router.delete('/', deletes.deletePlace);

//* Posts
router.post('/', posts.newPlace);

//* Puts
router.put('/', puts.updatePlace);

//* Gets
router.get('/', gets.homePage);
router.get('/new', gets.newPage);
router.get('/edit', gets.editPage);

module.exports = router;


//! -------------- Deprecated routing, Moved to new files ------------------

//*I'm just keeping these here for my sanity if anything breaks
// router.delete('/', (req, res) => {
//     if ((index = req.query?.index) == null) util.render404(res);
//     else if (isNaN(index)) util.render404(res);
//     else if ((indexData = util.getDatabaseIndex(index, db)) === -1) util.render404(res, `Could not find index specified`);
//     else {
//         db[indexData].archived = true;
//         process.env.db = JSON.stringify(db);
//         return res.status(200).redirect('/places');
//     }
// });

// router.post('/', (req, res) => {

//     let defaultPicture = 'https://cdn.vox-cdn.com/thumbor/NUeFZ9TtolyWpOu_-4x1QpjxtYk=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66921789/ostia2.21.jpeg';
//     let newVal = {
//         name: req.body?.name || 'Unnamed',
//         pic: req.body?.pic || defaultPicture,
//         city: req.body?.city || 'No city',
//         state: req.body?.state || 'No state',
//         cuisines: req.body?.cuisines || 'No specialty',
//         uid: db.length,
//         archived: false
//     };

//     db.push(newVal);

//     res.redirect('/places');
// });

// router.put('/', (req, res) => {
//     if (((index = req.query?.index) == null) ||
//         isNaN(index) ||
//         (indexData = util.getDatabaseIndex(index, db)) === -1) return util.render404(res, 'Could not find index specified');
//     else util.saveData(res, db, indexData, req.body);
// });


// router.get('/', (req, res) => {
//     //* I know folks won't like this init in the IF
//     if ((index = req.query?.index) == null) return res.status(206).render('places/index', { data: db });
//     if (isNaN(Number(index))) return util.render404(res, req.query?.json ?? false);

//     let uid = util.getDatabaseIndex(index, db);

//     uid !== -1 ?
//         req.query?.json != null ?
//             res.status(200).send(util.formatJsonData(db[uid], req.query.json))
//             : res.status(206).render('places/read', { data: db[uid], id: uid })
//         : util.render404(res, `Unable to find the place index specified.`, req.query?.json ?? false);
// });
// router.get('/new', (req, res) => res.status(206).render('places/new'));
// router.get('/edit', (req, res) => {
//     if (((index = req.query?.index) == null) ||
//         isNaN(index) ||
//         (indexData = util.getDatabaseIndex(index, db)) === -1) return util.render404(res, 'Could not find index specified');
//     else res.status(206).render('places/update', {data: db[indexData]});
// });