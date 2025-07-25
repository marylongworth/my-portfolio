import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img src={logo} alt="img" />
        </Link>
        <p>
          I am currently working in a startup in Ireland. I love working in a fast pace environment, creating, building things and working with others.
          I'm a highly skilled and creative individual, happiest when I am dreaming of new ideas and bringing them to life on the web.
          I'm a native English speaker, learning Spainish also. 
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            {/* <div className="content">
              <span className="address d-block"> address </span>
              <span className="textp"> Victoria Street London, </span>
            </div> */}
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link style={{ color: "#FFA4FF", textTransform: "lowercase" }} className="textp"> marylongworth100@gmail.com </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            {/* <div className="content">
              <span className="address d-block"> call now </span>
              <Link className="textp"> +98 4758 2154 021 </Link>
            </div> */}
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socialIcons.map(({ icon, id, url }) => (
              <li key={id}>
                <a key={id} href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
              </li>
            ))}
          </ul>
        </div>
       {/*  <Link
          to={""}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let's Chat </span>
        </Link> */}
      </div>
    </div>
  );
};

export default Drawer;
