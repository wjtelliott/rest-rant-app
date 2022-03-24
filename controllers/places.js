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
router.post('/rant', posts.newRant);

//* Puts
router.put('/', puts.updatePlace);

//* Gets
router.get('/', gets.homePage);
router.get('/new', gets.newPage);
router.get('/edit', gets.editPage);

module.exports = router;