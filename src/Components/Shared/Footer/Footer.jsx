import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "Linkedin",
    icon: <ArrowRight />,
    link: "https://www.linkedin.com/in/marylongworth/",
  },
  {
    id: 2,
    platfrom: "Instagram",
    icon: <ArrowRight />,
    link: "https://www.instagram.com/minimaz_com/",
  },
  /* {
    id: 3,
    platfrom: "Dribble",
    icon: <ArrowRight />,
    link: "https://dribbble.com/yourusername",
  },
  {
    id: 4,
    platfrom: "Webflow",
    icon: <ArrowRight />,
    link: "https://yourwebflowdomain.webflow.io",
  }, */
];
const Footer = () => {
  return (
    <footer id="footer" className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hi, I’m Mary, Web UX UI Designer & Developer 👋
                </p>
                <a style={{ color: "#FFA4FF", textTransform: "lowercase" }}  href="mailto:marylongworth100@gmail.com">marylongworth100@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom, link }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={link} className="social__footer" target="_blank" rel="noopener noreferrer">
                          {platfrom}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2025 {" "}
              <Link to={"/"} className="base">
                Mary Longworth.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> </a>
              </li>
              <li>
                <a href="#0"> </a>
              </li>
            </ul>
            {/* <a href="/#/#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
