const React = require('react');

const navBar = () => {
    let navLinks = [
        {path: '/', text: 'Home'},
        {path: '/places', text: 'Places Index'},
        {path: '/places/new', text: 'New Place'},
        {path: '/', text: 'Contact Us*'},
    ];
    
    return (<ul key='NavUL'>{navLinks.map(e => (<li key={`${e.text}Li`}><a key={`${e.text}LiA`} className='c-w' href={e.path}>{e.text}</a></li>))}</ul>);
};

module.exports = navBar;