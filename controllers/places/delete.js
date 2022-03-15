const util = require('../../assets/controllerUtil');

const deletePlace = (req, res) => {
    let db = JSON.parse(process.env.db);
    if ((index = req.query?.index) == null) util.render404(res);
    else if (isNaN(index)) util.render404(res);
    else if ((indexData = util.getDatabaseData(index, db)) === -1) util.render404(res, `Could not find index specified`);
    else {
        db[indexData].archived = true;
        process.env.db = JSON.stringify(db);
        return res.status(200).redirect('/places');
    }
};

module.exports = {deletePlace};