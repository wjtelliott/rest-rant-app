const util = require('../../assets/controllerUtil');
const db = require('../../models');

const updatePlace = (req, res) => {
    db.Place.updateOne({ _id: req.query?.index }, {"$set":{...req.body}})
        .then(res.status(200).redirect(`places?index=${req.query?.index}`))
        .catch(err => console.log(err));
};

module.exports = {updatePlace};