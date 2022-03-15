
const getDatabaseData = (index, db) => {
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
    
    process.env.db = JSON.stringify(db);

    res.status(200).redirect('/places');
}

const formatJsonData = (data, token) => {

    let tokenDB = {
        'token': {
            isAdmin: false
        },
        'token2': {
            isAdmin: true
        }
    }

    // Check valid token
    if (tokenDB[token] == undefined) return { data: '403 unauthorized access' };

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
    if (json) return res.status(404).send({'data':'404 unknown json endpoint'})
    if (msg != null) return res.status(404).render('error404', {errorMsg: msg});
    res.status(404).render('error404')
}


module.exports = {getDatabaseData, formatJsonData, render404, saveData};