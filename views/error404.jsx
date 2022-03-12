const React = require('react');
const Default = require('./default');

const error404 = ({errorMsg}) => {
    return (
        <Default title='REST-Rant/404'>
            <head>
                <link rel='stylesheet' href='css/bstraplite.css'/>
            </head>
            <main class='m-a ta-c'>
                <h1>404: PAGE NOT FOUND</h1>
                <p>{errorMsg != null ? errorMsg : `Sorry! We can't find the page you were looking for.`}</p>
                <img src='https://http.cat/404' alt='Error 404 image'/>
            </main>
        </Default>
    );
};

module.exports = error404;