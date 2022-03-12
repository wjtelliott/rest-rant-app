const React = require('react');
const Default = require('./default');

const homePage = () => {
    return (
        <Default>
            <head>
                <link rel='stylesheet' href='css/bstraplite.css'/>
            </head>
            <main>
                <h1 className='ta-c ft-4'>Home Page</h1>
            </main>
        </Default>
    );
};

module.exports = homePage;