"use strict";
const router = require('express').Router();

// Add routing here
router.get('/', (req, res) => {
    res.status(206).send('GET /places');
});

module.exports = router;