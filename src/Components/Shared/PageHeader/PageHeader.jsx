import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({heading, page}) => {
  return (
    <div className="container pt-60 pb-60">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-8">
          <div className="text-center">
            <h1>{heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
