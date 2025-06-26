import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Jan 2024 - Present</span>
                  <div className="expri__cont tx-right">
                    <h4 className="mb-15 text-white">Project Manager</h4>
                    <p className="fz-18 pra d-block">UI UX App Design, Web Development </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Oct 2016 - Jan 2024</span>
                  <div className="expri__cont tx-right">
                    <h4 className="mb-15 text-white">Shopify Developer</h4>
                    <p className="fz-18 pra d-block">Customer support to Dev Manager</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Nov 2014 - Sep 2016</span>
                  <div className="expri__cont tx-right">
                    <h4 className="mb-15 text-white">Web Developer & Digital Designer</h4>
                    <p className="fz-18 pra d-block">iSupply Printing Galway</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
