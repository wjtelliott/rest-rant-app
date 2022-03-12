const React = require('react');
const Default = require('../default');

const indexPage = ({data}) => {

    let formattedPlaceCards = data.map( e => {
        return (
            <div key={`${e.name}Card`} id='card' className='card ta-c'>
                <p className='cardTitle' key={`${e.name}Paragraph`}><a className='ft-2 c-w' href={`/places?index=${e.uid}`}>{e.name}</a></p>
                <img onClick={`/places?index=${e.uid}`} key={`${e.name}Image`} src={e.pic} alt={e.name} className='img-w'/>
            </div>
        )
    });

    return (
        <Default title='REST-Rant Places'>
            <head>
                <link rel='stylesheet' href='css/bstraplite.css'/>
            </head>
            <main key='indexMain'>
                <p className='ta-c ft-3' key='indexParagraph'>REST-Rant Places</p>
                <div className='container'>{formattedPlaceCards}</div>
            </main>
        </Default>
    );
};

module.exports = indexPage;