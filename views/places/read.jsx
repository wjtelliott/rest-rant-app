const React = require('react');
const Default = require('../default');

const detailsPage = ({data}) => {

    let commentData = (
        <h3 className='inactive'>No comments yet!</h3>
    );

    if (data.comments?.length > 0) {
        commentData = data.comments?.map( rant => {
            return (
                <div className='border rounded w-100 p-2 my-2'>
                    <h2 className='rant'>{rant.rant ? 'RANT' : 'RAVE'}</h2>
                    <h4>{rant.content}</h4>
                    <h3><strong>- {rant.author}</strong></h3>
                    <h4>Rating: {rant.stars}</h4>
                    <form method='POST' action={`/places/rant?_method=DELETE`}>
                        <input type='hidden' value={rant.id} name='rantId'/>
                        <input type='hidden' value={data.id} name='placeId'/>
                        <input type='submit' className='btn btn-danger' value='Delete Comment'/>
                    </form>
                </div>
            );
        });
    }

    return (
        <Default title={`REST-Rant ${data.name}`}>
            <head>
                <link rel='stylesheet' href='css/bstraplite.css'/>
                <link rel="stylesheet" href="/css/detailsPage.css" />
            </head>
            <img className='m-a db hero' src='https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/b8/46/6d/london-stock.jpg' alt='hero'/>

            <div id='overlay'></div>
            <dialog id='window' className='rounded'>
                <form className='m-auto text-center font-size-3 justify-content-evenly' method='POST' action={`/places/rant?index=${data.id}`}>
                    
                    <p>Please enter your name:</p>
                    <input className='form-control w-60 my-3 m-auto' placeholder='Enter Name' id='author' name='author'/>

                    <p>Did you like this place?</p>
                    <input className='d-inline-block form-control form-check-input my-3 m-auto' value='' type='checkbox' id='rant' name='rant'/>

                    <p>How many stars do you rate this?</p>
                    <input className='form-control w-60 my-3 m-auto' type='number' value='3' min='0' max='5' id='stars' name='stars'/>
                    <input className='form-control w-60 my-3 m-auto' placeholder='Comment here!' id='content' name='content'/>
                    <span id='cancelBtn' className='btn btn-danger mx-2 my-2 m-auto'>Cancel</span>
                    <input className='btn btn-success my-2 mx-2 m-auto' value='Submit comment!' type='submit'/>
                </form>
            </dialog>

            <main key={`${data.name}Main`}>
                <div className='container w-60 ptb-2'>
                    <div className='container m-a ta-c d-ib w-50'>
                        <h2 className='db w-100 ft-4' key={`${data.name}Title`}>{data.name}</h2>
                        <p className='ft-2 w-100' key={`${data.city}`}>City: {data.city}</p>
                        <p className='ft-2 w-100' key={`${data.state}`}>State: {data.state}</p>
                        <p className='ft-2 w-100' key={`${data.cuisines}`}>Cuisines: {data.cuisines}</p>
                        <hz/>
                        <p className='ft-3 w-100'>{data.showEstablished()}</p>
                    </div>
                    <img key={`${data.name}Image`} src={data.pic} alt={data.name}/>
                </div>
                <div className='container w-100'>
                    {commentData}
                </div>

                <div className='container ta-c'>
                    <a href={`/places/edit?index=${data.id}`} className='btn btn-warning btn-height-1 mx-1'>Edit</a>
                    <form method='POST' action={`/places?index=${data.id}&_method=DELETE`}>
                        <button type='submit' className='btn btn-danger btn-height-1 mx-1'>Delete</button>
                    </form>
                    <a href={`/places?index=${data.id}&json=token`} className='btn btn-primary btn-height-1 mx-1'>JSON - Standard Token</a>
                    <p id='addBtn' className='btn btn-primary btn-height-1 mx-1'>Add a comment!</p>
                </div>

                
            </main>
            <script src='/scripts/detailsPage.js'/>
            <script src='/scripts/indexPage.js'/>
        </Default>
    );
};

module.exports = detailsPage;