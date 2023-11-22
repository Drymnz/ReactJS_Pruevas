import React from "react";
import NotFoundImg from "../images/500.png";

const FatalError = () => (
  <React.Fragment>
    <div className="text-center">
      <h1 className="Error_Text">Error: 505 Page Not Found</h1>
      <img src={NotFoundImg} alt="505 NotFound" className="Error_Image" />
    </div>
  </React.Fragment>
);

export default FatalError;
