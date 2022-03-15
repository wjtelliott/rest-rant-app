const util = require('../../assets/controllerUtil');

const updatePlace = (req, res) => {
    let db = JSON.parse(process.env.db);
    if (((index = req.query?.index) == null) ||
        isNaN(index) ||
        (indexData = util.getDatabaseData(index, db)) === -1) return util.render404(res, 'Could not find index specified');
    else util.saveData(res, db, indexData, req.body);
};

module.exports = {updatePlace};