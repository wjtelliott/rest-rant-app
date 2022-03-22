const React = require('react');
const Default = require('../default');

const newPlacePage = () => {

    return (
        <Default title={`New Page`}>
            <head>
                <link rel='stylesheet' href='/css/bstraplite.css'/>
            </head>
            <main key={`main`}>

                <h1 className='ta-c ft-4'>Add a new place</h1>

                <form className='m-a ta-c ptb-2 ft-2' method='POST' action='/places'>
                    <div className='container w-30'>
                        <div className='form-group w-100'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' required />
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' id='pic' name='pic' />
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' />
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id='state' name='state' />
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' required />
                        </div>

                        <div className='form-group w-100'>
                            <label htmlFor='founded'>Founded</label>
                            <input value={new Date().getFullYear()} type='number' className='form-control' id='founded' name='founded' required />
                        </div>
                    </div>
                    <input className='btn btn-primary w-30 ft-2' type='submit' value='Add Place'/>
                </form>
            </main>
        </Default>
    );
};

module.exports = newPlacePage;