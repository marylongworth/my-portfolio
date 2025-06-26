import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2011 - 2011</span>
                  <div className="expri__cont tx-right">
                    <h4 className="mb-15 text-white">Advanced Web Design</h4>
                    <p className="fz-18 pra d-block">FAS training</p>
                  </div>
                </div>
                <div className="exri__item tx-right">
                  <span className="fz-18 fw-500 base">2009 - 2010</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Environmental Management</h4>
                    <p className="fz-18 pra d-block">Queen's University  Belfast</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2004 - 2007</span>
                  <div className="expri__cont tx-right">
                    <h4 className="mb-15 text-white">Bachelor of Arts (BA)</h4>
                    <p className="fz-18 pra d-block">NUI Galway</p>
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

export default Education;
