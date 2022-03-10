const React = require('react');
const Default = require('./default');

const homePage = () => {
    return (
        <Default title='Home Page'>
            <main>
                <h1>Home Page</h1>
            </main>
        </Default>
    );
};

module.exports = homePage;