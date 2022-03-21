const util = require('../../assets/controllerUtil');
const db = require('../../models')

const newPlace = (req, res) => {
    db.Place.create(req.body)
        .then(res.status(200).redirect('/places'))
        .catch( err => util.render404(res));
};

module.exports = {newPlace};