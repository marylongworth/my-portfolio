import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "MaryLongworth100@Gmail.Com",
  },
  // {
  //   id: 4,
  //   system: "Follow",
  //   socalContact: [
  //     {
  //       icon: <Linkedin />,
  //       url: "https://www.linkedin.com/in/marylongworth/",
  //     },
  //     {
  //       icon: <Instagram />,
  //       url: "https://www.instagram.com/glutenfreegalwaygirl",
  //     },
  //   ],
  // },
];

const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                I am currently working in a startup in Ireland. I love working in a fast pace environment, 
                creating, building intuitive interfaces that users will love.
                I'm a highly skilled and creative individual, happiest when I am dreaming of new ideas 
                and bringing them to life on the web.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                 {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">{system}</span>
                            {contact && <a href={`mailto:${contact}`}>{contact}</a>}
                            {Array.isArray(socalContact) && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map(({ icon, url }, index) => (
                                  <li key={index}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                      {icon}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
