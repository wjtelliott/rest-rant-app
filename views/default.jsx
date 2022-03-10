const React = require('react');

const Default = html => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{html.title ?? 'REST-Rant'}</title>
        </head>
        <body>
            {html.children}
        </body>
        </html>
    );
};

module.exports = Default;