import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-3">
                    <img src="media/images/largestBroker.svg" alt="Award Image1" />
                </div>
                <div className="col-6 p-3 mt-5">
                    <h1>Largest stock broker in India </h1>
                    <p className="mb-5">
                        1.6+ crore customers contributing to 15% of daily retail exchange volumes in India daily by trading and invsting in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                           <ul>
                              <li><p>Futures and Options</p></li>
                              <li><p>Commodity derivatives</p></li>
                              <li> <p>Currency derivatives</p></li>                           
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                              <li> <p>Stocks and IPOs</p></li>
                              <li><p>Direct mutual funds</p></li>
                              <li> <p>Bonds and Govt. Securities</p></li>                           
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="Press Logos" style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;