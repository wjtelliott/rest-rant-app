const util = require('../../assets/controllerUtil');
const db = require('../../models');

const deletePlace = (req, res) => {
    db.Place.updateOne({_id: req.query?.index}, {"$set": {'archived': true}})
        .then(res.redirect('/places'))
        .catch(err => console.log(err));
};

module.exports = {deletePlace};