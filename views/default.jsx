const React = require('react');
const path = require('path');
const NavBar = require('./nav');

const Default = html => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{html.title ?? 'REST-Rant'}</title>
            <link rel='stylesheet' href={'./main.css'}/>
            <link rel='stylesheet' href={'../main.css'}/>
        </head>
        <body>
            <header>
                <h1>REST-Rant</h1>
                <NavBar></NavBar>
            </header>
            {html.children}
            <footer>FOOTER</footer>
        </body>
        </html>
    );
};

module.exports = Default;