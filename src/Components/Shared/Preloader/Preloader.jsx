import React from "react";
import manimg from "../../../assets/img/banner/banner-man.png";
const Preloader = () => {
  return (
    <div className="preloader__mary">
      <div className="box text-center">
        <div className="mary mb-10">
          <img src={manimg} alt="img" />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">HELLO</span>
      </div>
    </div>
  );
};

export default Preloader;
