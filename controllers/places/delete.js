const util = require('../../assets/controllerUtil');

const deletePlace = (req, res) => {
    if ((index = req.query?.index) == null) util.render404(res);
    else if (isNaN(index)) util.render404(res);
    else if ((indexData = util.getDatabaseIndex(index, db = util.getDatabaseData())) === -1) util.render404(res, `Could not find index specified`);
    else {
        db[indexData].archived = true;
        process.env.db = JSON.stringify(db);
        res.status(200).redirect('/places');
    }
};

module.exports = {deletePlace};