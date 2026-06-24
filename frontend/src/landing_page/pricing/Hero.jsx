import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center mt-5 p-5">
                <h1 className="fs-4 ">Charges</h1>
                <h3 className="fs-5 mt-3 text-muted">List of all charges and taxes</h3>
            </div>
            <div className="row p-5 mt-4 text-center">
               <div className=" col p-4">
                  <img src="media/images/pricingEquity.svg" alt="pricing"/>
                  <h1 className="fs-3">Free equity delivery</h1>
                  <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
               </div>
               <div className="col p-4">
                  <img src="media/images/intradayTrades.svg" alt="pricing"/>
                  <h1 className="fs-4 text-small">Intraday and F&O trades</h1>
                  <p className="text-muted">
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                  </p>
               </div>
                <div className="col p-4">
                    <img src="media/images/pricingMF.svg" alt="pricing" />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
               </div>

            </div>
        </div>
    );
}

export default Hero;