const logEvent = require('./logEvents');

const getDatabaseIndex = (index, db) => {
    let uid = -1;
    for (let i = 0; i < db.length; i++) if (Number(db[i].uid) === Number(index)) { uid = db.indexOf(db[i]); break; }
    return db[uid]?.archived ? -1 : uid;
}

const saveData = (res, db, index, userData) => {
    
    // Do not edit uid, archived properties
    let newData = db[index];

    newData.name = userData.name || newData.name;
    newData.pic = userData.pic || newData.pic;
    newData.city = userData.city || newData.city;
    newData.state = userData.state || newData.state;
    newData.cuisines = userData.cuisines || newData.cuisines;

    // TODO: This should be returned & NOT edit as a param
    db[index] = newData;
    
    setDatabaseData(db);

    res.status(200).redirect(`/places?index=${index}`);
}

const getDatabaseData = () => {
    logEvent('Getting database from JSON in process env', 1, 1);
    return JSON.parse(process.env.db);
}
const setDatabaseData = newObject => {
    process.env.db = JSON.stringify(newObject);
    logEvent('Saving database in process env', 1, 1);
}

const formatJsonData = (data, token) => {

    let tokenDB = JSON.parse(process.env.tokens);

    // Check valid token
    if (tokenDB[token] == undefined) {
        logEvent(`Unauthorized JSON request '${token}'`, 2, 1)
        return { data: '403 unauthorized access' };
    }

    if (tokenDB[token].isAuthor) return data;

    let returnData = {
        name: '',
        city: '',
        state: '',
        cuisines: '',
        pic: ''
    };

    if (tokenDB[token].isAdmin) {
        returnData.archived = '';
        returnData.uid = '';
    }

    for (const [key, value] of Object.entries(data)) if (returnData[key] != null) returnData[key] = value;
    return returnData;
}

const render404 = (res, msg, json = false) => {
    logEvent(`404 has been caught. JSON=>${isNaN(+json)}`, 2, 1);
    if (json) return res.status(404).send({'data':'404 unknown json endpoint'})
    if (msg != null) return res.status(404).render('error404', {errorMsg: msg});
    res.status(404).render('error404')
}


module.exports = {getDatabaseIndex, formatJsonData, render404, saveData, getDatabaseData, setDatabaseData};