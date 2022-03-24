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

const newRant = (req, res) => {

    // If rant doesn't exist on the body, make it true. If it does exist, make it false
    req.body.rant = req.body?.rant == undefined ? true : false;

    // Defaults aren't kicking in because this is still a String.Empty?
    req.body.author = req.body?.author || db.Rant.defaultAuthor;

    console.log(req.body.author)

    db.Place.findById(req.query?.index)
        .then( place => {
            db.Rant.create(req.body)
                .then(rantCreated => {
                    place.comments.push(rantCreated.id);
                    place.save();
                    res.status(200).redirect(`/places?index=${req.query.index}`)
                })
                .catch(err => {
                    console.log(err);
                    util.render404(res);
                })
        })
        .catch(err => {
            console.log(err);
            util.render404(res);
        })
}

module.exports = {newPlace, newRant};