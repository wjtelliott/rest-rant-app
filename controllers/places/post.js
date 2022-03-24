const util = require('../../assets/controllerUtil');
const db = require('../../models')

const newPlace = (req, res) => {
    db.Place.create(req.body)
        .then(()=>res.status(200).redirect('/places'))
        .catch( err => {
            if (err && err.name == 'ValidationError') {
                // custom message
                let validationError = err.toString();



                return res.render('places/new', { retryData: req.body, message: validationError });
            } else {
                util.render404(res);
            }
        });
};

module.exports = {newPlace};