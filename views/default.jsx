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
            {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link> */}
            {/* <!-- Latest compiled and minified CSS --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
            {/* <!-- jQuery library --> */}
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
            {/* <!-- Latest compiled JavaScript --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
            <link rel='stylesheet' href='/css/main.css'/>
        </head>
        <body>
            <header className='d-s show-top'>
                <h1 className='ptb-1'>REST-Rant</h1>
                <NavBar></NavBar>
            </header>
            {html.children}
            <footer>FOOTER</footer>
        </body>
        </html>
    );
};

module.exports = Default;