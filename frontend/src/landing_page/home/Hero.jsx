import React from 'react';
import Button from '@mui/material/Button';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
                <h1 mt-5>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Button variant="contained" className="p-2 mb-5" style={{width:"20%",margin:" 0 auto"}}>Sign up Now</Button>
            </div>
        </div>
    );
 }
 
 export default Hero;