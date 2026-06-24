import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-4">
                <h1 className="fs-3 mb-4">{productName}</h1>
                <p className="fs-5 text-muted">{productDescription}</p>
                <a href={learnMore}>Learn More →</a>
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-7">
                <img
                    src={imageURL}
                    alt={productName}
                    className="img-fluid"
                />
                </div>
            </div>
        </div>

    );
}

export default RightSection;