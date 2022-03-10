const React = require('react');
const Default = require('./default');

const error404 = () => {
    return (
        <Default title='Error 404'>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry! We can't find the page you were looking for.</p>
            </main>
        </Default>
    );
};

module.exports = error404;