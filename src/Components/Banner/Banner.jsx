import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  {
    id: 3,
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/marylongworth/",
  },
  {
    id: 5,
    icon: <Instagram />,
    link: "https://www.instagram.com/minimaz_com/",
  },
];


const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if(!position){
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
             
              <h1>
                <span className="hone"> Developer &</span>
                <span className="d-block designers" data-text="Designer">
                  Designer
                </span>
              </h1>
        {/*       <div className="video__area">
                <img src={bnArrow} className="vid__arrow" alt="img" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Work Process</span>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position  ? "right_up_animat" : "right_up"
              }`}
             
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <div style={{ textTransform: "lowercase" }} >marylongworth100@gmail.com</div>
           {/* 
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={""}>(+02)-574-328-301</Link> */} 
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Let's Connect
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
        <ul className="banner__soci d-grid justify-content-center">
          {socalIcon.map(({ icon, id, link }) => (
            <li key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <i>{icon}</i>
              </a>
            </li>
          ))}
        </ul>

        </div>
      </div>
     {/*  {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )} */}
    </section>
  );
};

export default Banner;
