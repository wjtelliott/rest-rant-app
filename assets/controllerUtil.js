const logEvent = require('./logEvents');

const formatJsonData = (data, token) => {

    let tokenDB = JSON.parse(process.env.tokens);

    // If we have authoring priv token, give the whole JSON
    if (tokenDB[token]?.isAuthor) return data;

    // Check valid token
    if (tokenDB[token] == undefined || (!tokenDB[token].isAdmin && data.archived)) {
        logEvent(`Unauthorized JSON request '${token}'`, 2, 1)
        return { data: '403 unauthorized access' };
    }

    let returnData = {
        name: '',
        city: '',
        state: '',
        cuisines: '',
        pic: ''
    };

    if (tokenDB[token].isAdmin) returnData.archived = ''

    for (const [key, value] of Object.entries(data._doc)) if (returnData[key] != null) returnData[key] = value;
    return returnData;
}

const render404 = (res, msg, json = false) => {

    logEvent(`404 has been caught. JSON=>${isNaN(+json)}`, 2, 1);

    if (json) return res.status(404).send({'data':'404 unknown json endpoint'})
    if (msg != null) return res.status(404).render('error404', {errorMsg: msg});
    
    res.status(404).render('error404')
}


module.exports = {formatJsonData, render404};