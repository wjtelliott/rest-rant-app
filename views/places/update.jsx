const React = require('react');
const Default = require('../default');

const editPage = ({data}) => {

    return (
        <Default title={`New Page`}>
            <head>
                <link rel='stylesheet' href='/css/bstraplite.css'/>
            </head>
            <main key={`main`}>

                <h1 className='ta-c ft-4'>Edit a place</h1>

                <form className='m-a ta-c ptb-2 ft-2' method='POST' action={`/places?index=${data.uid}&_method=PUT`}>
                    <div className='container w-30'>
                        <div className='form-group w-100'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' value={data.name} required />
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' id='pic' name='pic' value={data.pic} />
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' value={data.city}/>
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id='state' name='state' value={data.state}/>
                        </div>
                        <div className='form-group w-100'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' value={data.cuisines} required />
                        </div>
                    </div>
                    <input className='btn btn-primary w-30 ft-2' type='submit' value='Save Changes'/>
                </form>
            </main>
        </Default>
    );
};

module.exports = editPage;