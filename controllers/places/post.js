const newPlace = (req, res) => {
    let db = JSON.parse(process.env.db);
    let defaultPicture = 'https://cdn.vox-cdn.com/thumbor/NUeFZ9TtolyWpOu_-4x1QpjxtYk=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66921789/ostia2.21.jpeg';
    let newVal = {
        name: req.body?.name || 'Unnamed',
        pic: req.body?.pic || defaultPicture,
        city: req.body?.city || 'No city',
        state: req.body?.state || 'No state',
        cuisines: req.body?.cuisines || 'No specialty',
        uid: db.length,
        archived: false
    };

    db.push(newVal);
    process.env.db = JSON.stringify(db);
    res.redirect(302, '/places');
};

module.exports = {newPlace};