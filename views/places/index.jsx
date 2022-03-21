const React = require('react');
const Default = require('../default');

const indexPage = ({data}) => {
    
    let formattedPlaceCards = data?.map( e => {
        return e?.archived ? null : (
            <div key={`${e.name}Card`} id='card' className='card w-40 ta-c m-a'>
                <p className='cardTitle' key={`${e.name}Paragraph`}><a className='ft-2 c-w' href={`/places?index=${e.id}`}>{e.name}</a></p>
                <img src={e.pic} alt={e.name} className='img-w'/>
            </div>
        )
    });

    let noData = (<h2>No Place Data!</h2>);
    formattedPlaceCards = formattedPlaceCards?.length < 1 ? noData : formattedPlaceCards ?? noData

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