import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-5">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p className='fs-6 text-muted'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{textDecoration: "none"}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-7 mb-5">
                    <div className="row">
                        <div className="col d-flex align-items-center p-1">
                            <img src="media/images/pricing0.svg" alt="pricing" style={{ width: "100px" }}/>
                            <p className="mb-0 mt-3 ms-0 text-muted"  style={{ fontSize: "9px" }} >Free account<br />opening</p>
                        </div>
                         <div className="col d-flex align-items-center p-1">
                            <img src="media/images/pricing0.svg" alt="pricing" style={{ width: "100px" }}/>
                            <p className="mb-0 mt-3 ms-0 text-muted" style={{ fontSize: "9px" }}>Free equity delivery<br />and direct mutual funds</p>
                        </div>
                        <div className="col d-flex align-items-center p-1">
                            <img src="media/images/pricing0.svg" alt="pricing" style={{ width: "100px" }}/>
                            <p className="mb-0 ms-0 mt-3 text-muted" style={{ fontSize: "9px" }}>Intraday and<br />F&Q</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;