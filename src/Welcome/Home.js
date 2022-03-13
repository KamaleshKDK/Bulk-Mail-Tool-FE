import React from 'react';
import Button from './Button';
import './home.css';
import background from '../img/bulk.png'
import Text from './Text';


function Home() {
    return (
        <>
        <img className='backgroung-img'  src={background} alt="backgound image"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        
                        <h3 className="animate-charcter">Bulk Mail</h3>
                    </div>
                </div>
            </div>
<br></br>
         
            <Text/>

          <Button/>

        </>

    )
}

export default Home