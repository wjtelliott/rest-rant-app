const React = require('react');

const navBar = () => {
    let navLinks = [
        {path: '/', text: 'Home'},
        {path: '/places', text: 'Places Index'},
        {path: '/places/new', text: 'New Place'},
        {path: '/', text: 'Contact Us*'},
    ];
    return (
        <ul>{navLinks.map(e => (<li><a className='c-w' href={e.path}>{e.text}</a></li>))}</ul>
    );
};

module.exports = navBar;