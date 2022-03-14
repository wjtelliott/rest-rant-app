
const getDatabaseData = (index, db) => {
    let uid = -1;
    for (let i = 0; i < db.length; i++) if (Number(db[i].uid) === Number(index)) { uid = db.indexOf(db[i]); break; }
    return db[uid]?.archived ? -1 : uid;
}

const formatJsonData = data => {
    // We shouldn't get this far with archived data. Double check just in case.
    if (data?.archived) return { data: 'removed' };
    
    
    /**
     * We can use this to format which data our users are allowed access to 
     * by adding its key to the returnData object
     */
    let returnData = {
        name: '',
        city: '',
        state: '',
        cuisines: '',
        pic: ''
    };
    for (const [key, value] of Object.entries(data)) if (returnData[key] != null) returnData[key] = value;
    return returnData;
}

const render404 = (res, msg) => {
    if (msg != null) return res.status(404).render('error404', {errorMsg: msg});
    res.status(404).render('error404')
}


module.exports = {getDatabaseData, formatJsonData, render404};