import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 p-5">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-4"></div>
        <div className="col-4 p-5 mt-5">
           <h1 className="fs-3 mb-4">{productName}</h1>
           <p className="fs-5 text-muted">{productDescription}</p>
           <div>
                <a href={tryDemo}>Try demo →</a>
                <a href={learnMore} style={{marginLeft:"50px"}}>Learn More →</a>
            </div>
            <div className="mt-3">
                <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg" />
                </a>
                <a href={appStore}>
                    <img src="media/images/appstoreBadge.svg" />
                 </a>
            </div>
        
           
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
