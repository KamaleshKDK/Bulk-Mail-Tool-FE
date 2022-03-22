// import Button  from './Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import NavBar from './NavBar';
import Text from './Text';
// import background from '../img/bulk.png'



function Home() {
    return (
        <>
            <NavBar fixed="fixed-top" />
            <div className="imgDiv">
                <div className="sloganDiv">
                    {/* <p className="slg1">START YOUR DREAM ADVENTURE</p> */}
                    {/* <p className="slg2">Own Experiences not Bikes</p> */}
                    {/* <Link to="/book"><button type="button" className="btn btn-info bkBtn">BOOK NOW</button>
                    </Link> */}

                </div>
            </div>
                    {/* <Button/> */}
            {/* <img className='backgroung-img'  src={background} alt="backgound image"/> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        
                        {/* <h3 className="animate-charcter">Bulk Mail</h3> */}
                    </div>
                </div>
            </div>
<br></br>
         
            <Text/>

          {/* <Button/> */}

        </>

    )
}

export default Home