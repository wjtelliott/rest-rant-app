const util = require('../../assets/controllerUtil');

const updatePlace = (req, res) => {
    if (((index = req.query?.index) == null) ||
        isNaN(index) ||
        (indexData = util.getDatabaseIndex(index, db = util.getDatabaseData())) === -1) return util.render404(res, 'Could not find index specified');
    else util.saveData(res, db, indexData, req.body);
};

module.exports = {updatePlace};