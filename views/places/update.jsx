const React = require('react');
const Default = require('../default');

const editPage = ({data}) => {

    return (
        <Default title={`Edit ${data.name} Page`}>
            <main key={`${data.name}Main`}>
                <h2 key={`${data.name}Title`}>{data.name}</h2>
                <p key={`${data.city}`}>City: {data.city}</p>
                <p key={`${data.state}`}>State: {data.state}</p>
                <p key={`${data.cuisines}`}>Cuisines: {data.cuisines}</p>
                <img key={`${data.name}Image`} src={data.pic} alt={data.name}/>

                {
                    //TODO: Create a new button and allow changes
                }
            </main>
        </Default>
    );
};

module.exports = editPage;