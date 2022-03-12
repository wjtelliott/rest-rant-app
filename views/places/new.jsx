const React = require('react');
const Default = require('../default');

const newPlacePage = () => {

    return (
        <Default title={`New Page`}>
            <main key={`main`}>
                <h2 key={`title`}>{data.name}</h2>
                <p key={`city`}>City: {data.city}</p>
                <p key={`state`}>State: {data.state}</p>
                <p key={`cuisines`}>Cuisines: {data.cuisines}</p>
                <img key={`imageURL`} src={data.pic} alt={data.name}/>

                {
                    //TODO: Create a new button and allow changes for POST
                }
            </main>
        </Default>
    );
};

module.exports = newPlacePage;