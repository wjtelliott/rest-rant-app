const React = require('react');
const Default = require('../default');

const detailsPage = ({data}) => {

    return (
        <Default title={`REST-Rant ${data.name}`}>
            <head><link rel='stylesheet' href='css/bstraplite.css'/></head>
            <main key={`${data.name}Main`} className='m-a ta-c'>
                <h2 key={`${data.name}Title`}>{data.name}</h2>
                <p key={`${data.city}`}>City: {data.city}</p>
                <p key={`${data.state}`}>State: {data.state}</p>
                <p key={`${data.cuisines}`}>Cuisines: {data.cuisines}</p>
                <img key={`${data.name}Image`} src={data.pic} alt={data.name}/>
            </main>
        </Default>
    );
};

module.exports = detailsPage;