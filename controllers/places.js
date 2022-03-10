"use strict";
const router = require('express').Router();

const db = require('../models/mockPlacesData');

// Add routing here
router.get('/', (req, res) => res.status(206).render('places/index', { data: db }));

module.exports = router;