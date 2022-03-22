const util = require('../../assets/controllerUtil');
const db = require('../../models');

const homePage = (req, res) => {

    if ((index = req.query?.index) == null) {
        db.Place.find()
            .then( places => res.render('places/index', { data: places }))
            .catch(err => {
                console.log(err);
                util.render404(res);
            });
    } else {
        db.Place.findById(index)
            .then( place => {

                // Readable for future maintainers
                const isJsonReq = req.query?.json != null ?? false;
                if (place == null) util.render404(res, 'Unable to find place index specified', isJsonReq)
                else {
                    if (isJsonReq) res.status(200).send(util.formatJsonData(place, req.query.json))
                    else res.status(200).render('places/read', { data: place });
                }

                return;

                //! Nested tern method, same logic outcome
                req.query?.json != null ?
                    place == null ? util.render404(res, null, true)
                    : res.status(200).send(util.formatJsonData(place, req.query.json))
                : place == null ? util.render404(res, 'Unable to find place index specified')
                    : res.render('places/read', { data: place });
            })
            .catch( err => {
                console.log(err);
                util.render404(res);
            });
    }
};

const newPage = ({res}) => res.status(206).render('places/new');

const editPage = (req, res) => {
    db.Place.findById(req.query?.index)
        .then ( place => res.render('places/update', { data : place }))
        .catch( err => res.status(404).render('error404'));
};


module.exports = {homePage, newPage, editPage};