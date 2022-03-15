const util = require('../../assets/controllerUtil');

const homePage = (req, res) => {
    let db = JSON.parse(process.env.db);
    //* I know folks won't like this init in the IF
    if ((index = req.query?.index) == null) return res.status(206).render('places/index', { data: db });
    if (isNaN(Number(index))) return util.render404(res, req.query?.json ?? false);

    let uid = util.getDatabaseData(index, db);

    uid !== -1 ?
        req.query?.json != null ?
            res.status(200).send(util.formatJsonData(db[uid], req.query.json))
            : res.status(206).render('places/read', { data: db[uid], id: uid })
        : util.render404(res, `Unable to find the place index specified.`, req.query?.json ?? false);
};

const newPage = ({res}) => res.status(206).render('places/new');

const editPage = (req, res) => {
    let db = JSON.parse(process.env.db);
    if (((index = req.query?.index) == null) ||
        isNaN(index) ||
        (indexData = util.getDatabaseData(index, db)) === -1) return util.render404(res, 'Could not find index specified');
    res.status(206).render('places/update', {data: db[indexData]});
};


module.exports = {homePage, newPage, editPage};