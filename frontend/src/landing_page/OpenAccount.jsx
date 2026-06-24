import React from 'react';
import Button from '@mui/material/Button';

function OpenAccount() {
    return ( 
        <div className="container p-5">
            <div className="row text-center mt-5">
                <h1 mt-5>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Button variant="contained" className="p-2 mb-5" style={{width:"20%",margin:" 0 auto"}}>Sign up Now</Button>
            </div>
        </div>
    );
}

export default OpenAccount;