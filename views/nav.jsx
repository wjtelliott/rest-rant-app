const React = require('react');

const navBar = () => {
    let navLinks = [
        {path: '/', text: 'Home'},
        {path: '/places', text: 'Places Index'},
        {path: '/', text: 'About*'},
        {path: '/', text: 'Contact Us*'},
    ];
    return (
        <ul>{navLinks.map(e => (<li><a href={e.path}>{e.text}</a></li>))}</ul>
    );
};

module.exports = navBar;