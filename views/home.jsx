const React = require('react');
const Default = require('./default');

const homePage = () => {

    // TODO: We need to have this more dynamic

    return (
        <Default>
            <body className='bg-b'>
                <head>
                    <link rel='stylesheet' href='css/bstraplite.css'/>
                </head>
                <main className='tc-w ta-c ft-2'>
                    <h1 className='ft-4'>REST-Rant !</h1>
                    <h2 className='ft-3'>Where all your restaurant review needs live</h2>
                    <img className='m-a db hero' src='https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/b8/46/6d/london-stock.jpg' alt='hero'/>

                    <div className='container m-a'>
                        <div className='card w-80'>
                            <p className='cardTitle'>This is a card title, and text about a restaurant of the week</p>
                            {/* <div className='container w-30 d-ib'>
                                <p>Restaurant of the week award winner:</p>
                                <p>Some info about this restaurant:</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora facilis harum magnam rem dolore facere corrupti praesentium accusamus temporibus delectus distinctio aperiam ut minima quos dolores, obcaecati incidunt non?</p>
                            </div> */}
                            <span className='d-ib w-40 plr-2 va'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, natus hic dolores dolore quod deleniti autem, unde quisquam totam temporibus necessitatibus aspernatur eius error repellendus non sunt blanditiis porro tempore.</span>
                            <img className='d-ib w-40 plr-2' src='https://www.nsportage.com/uploads/1/2/4/3/124382046/published/lake-3-option.jpg?1550102284' alt='no image'/>
                        </div>
                        <div className='card w-40'>
                            <p className='cardTitle'>REST-Rant</p>
                            <p className='tc-l'>This is some placeholder text on what this website is for:</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos enim velit laboriosam fuga deleniti eligendi sit, nesciunt quibusdam eveniet, odio suscipit dicta. Quas eveniet quam, dicta quidem voluptate quos.</p>
                        </div>
                        <div className='card w-40'>
                            <p className='cardTitle'>Here is another card title</p>
                            <p>Here is some more placeholder text</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consequuntur, impedit eaque nobis corrupti quaerat totam. Ipsam repudiandae quis aliquam, dolores esse quasi exercitationem voluptatibus, dignissimos voluptates nisi sit maiores?</p>
                        </div>
                    </div>
                </main>
            </body>
        </Default>
    );
};

module.exports = homePage;