
require('dotenv').config();


const db = require('../models');
const mongoose = require('mongoose');


const seed = async () => {

    console.log("Seeding...");

    let place = await db.Place.findOne()

    let comment = await db.Rant.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    });

    place.comments.push(comment.id);

    await place.save();

    process.exit();

}

seed();