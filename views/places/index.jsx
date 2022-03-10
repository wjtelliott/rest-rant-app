const React = require('react');
const Default = require('../default');

const indexPage = ({data}) => {

    let formattedPlaceCards = data.map( e => {
        return (
            <div key={`${e.name}Card`} id='card'>
                <p key={`${e.name}Paragraph`}><a href={`/places/place?index=${e.uid}`}>{e.name}</a></p>
                <img key={`${e.name}Image`} src={e.pic} alt={e.name}/>
            </div>
        )
    });

    return (
        <Default title='index page'>
            <main key='indexMain'>
                <p key='indexParagraph'>Here is the places index page!</p>
                {formattedPlaceCards}
            </main>
        </Default>
    );
};

module.exports = indexPage;