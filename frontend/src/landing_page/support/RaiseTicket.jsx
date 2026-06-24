import React from 'react';


function RaiseTicket() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-4">
                <h1 className="fs-2">To create a ticket, select a relevant topoic</h1>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 className="mb-4">
                        <i className="fa-solid fa-circle-plus me-2"></i>
                        Account Opening
                    </h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#" className="text-decoration-none">Online Account Opening</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Offline Account Opening</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Company, Partnership and HUF Account Opening</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">NRI Account Opening</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Charges at Zerodha</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Getting Started</a></li>
                    </ul>
                </div>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 className="mb-4">
                        <i className="fa-solid fa-user me-2"></i>
                        Your Zerodha Account
                    </h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#" className="text-decoration-none">Login Credentials</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Account Modification and Segment Addition</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">DP ID and Bank Details</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Your Profile</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Transfer and Conversion of Shares</a></li>
                    </ul>
                </div>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 className="mb-4">
                        <i className="fa-solid fa-chart-column me-2"></i>
                        Your Zerodha Account
                    </h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#" className="text-decoration-none">Margin/leverage, Product and Order types</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Kite Web and Mobile</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Trading FAQs</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Corporate Actions</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Sentinel</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Kite API</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Pi and other platforms</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Stockreports+</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">GTT</a></li>
                    </ul>
                </div>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 className="mb-4">
                        <i className="fa-solid fa-wallet me-2"></i>
                        Funds
                    </h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#" className="text-decoration-none">Adding Funds</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Fund Withdrawal</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">eMandates</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Adding Bank Accounts</a></li>
                    </ul>  
                </div>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 className="mb-4">
                        <i class="fa-solid fa-circle-notch me-2"></i>
                        Console
                    </h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#" className="text-decoration-none">Reports</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Ledger</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Portfolio</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">60 Day Challenge</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">IPO</a></li>
                        <li className="mb-3"><a href="#" className="text-decoration-none">Referral Program</a></li>
                    </ul>
                </div>
                <div className="col-4 p-5 mt-2 mb-2">
                    <h5 className="mb-4">
                        <i className="fa-regular fa-circle me-2"></i>
                        Coin
                    </h5>
                    <ul className="list-unstyled">
                    <li className="mb-3"><a href="#" className="text-decoration-none">Understanding Mutual Funds</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">About Coin</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">Buying and Selling through Coin</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">Starting an SIP</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">Managing your Portfolio</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">Coin App</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">Moving to Coin</a></li>
                    <li className="mb-3"><a href="#" className="text-decoration-none">Government Securities</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default RaiseTicket;