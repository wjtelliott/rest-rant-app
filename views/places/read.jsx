const React = require('react');
const Default = require('../default');

const detailsPage = ({data}) => {

    return (
        <Default title={`REST-Rant ${data.name}`}>
            <head><link rel='stylesheet' href='css/bstraplite.css'/></head>
            <main key={`${data.name}Main`}>
                <div className='container w-60 ptb-2'>
                    <div className='container m-a ta-c d-ib w-30'>
                        <h2 className='db w-100 ft-4' key={`${data.name}Title`}>{data.name}</h2>
                        <p className='ft-2 w-100' key={`${data.city}`}>City: {data.city}</p>
                        <p className='ft-2 w-100' key={`${data.state}`}>State: {data.state}</p>
                        <p className='ft-2 w-100' key={`${data.cuisines}`}>Cuisines: {data.cuisines}</p>
                    </div>
                    <img key={`${data.name}Image`} src={data.pic} alt={data.name}/>
                </div>
                <div className='container w-100'>
                    <p>No comments yet!</p>
                </div>

                <div className='container ta-c'>
                    <a href={`/places/edit?index=${data.id}`} className='btn btn-warning ft-2'>Edit</a>
                    <form method='POST' action={`/places?index=${data.id}&_method=DELETE`}>
                        <button type='submit' className='btn btn-danger ft-2'>Delete</button>
                    </form>
                    <a href={`/places?index=${data.id}&json=token`} className='btn btn-primary ft-2'>JSON - Standard Token</a>
                </div>
            </main>
        </Default>
    );
};

module.exports = detailsPage;