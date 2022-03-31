const util = require('../../assets/controllerUtil');
const db = require('../../models');

const deletePlace = (req, res) => {
    db.Place.updateOne({_id: req.query?.index}, {"$set": {'archived': true}})
        .then(res.redirect('/places'))
        .catch(err => console.log(err));
};

const deleteComment = (req, res) => {


    console.log(req.body);

    // placeId = place
    // rantId = rant

    res.redirect(`/places?index=${req.body.placeId}`)
}

module.exports = {deletePlace, deleteComment};