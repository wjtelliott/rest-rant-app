const util = require('../../assets/controllerUtil');
const newPlace = (req, res) => {
    let db = util.getDatabaseData();
    let defaultPicture = 'https://cdn.vox-cdn.com/thumbor/NUeFZ9TtolyWpOu_-4x1QpjxtYk=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66921789/ostia2.21.jpeg';
    db.push({

        //* We still want to check name and cuisines in the request. Sneaky users can make requests without a form
        name: req.body?.name || 'Unnamed',
        pic: req.body?.pic || defaultPicture,
        city: req.body?.city || 'No city',
        state: req.body?.state || 'No state',
        cuisines: req.body?.cuisines || 'No specialty',
        uid: db.length,
        archived: false
    });
    util.setDatabaseData(db);
    res.status(200).redirect(`/places?index=${db.length - 1}`);
};

module.exports = {newPlace};