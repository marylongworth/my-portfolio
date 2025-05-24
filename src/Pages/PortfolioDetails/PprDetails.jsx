import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-ppr.png";
import detailbg1 from "../../assets/img/portfolio/port-detials2.png";
import detailbg2 from "../../assets/img/portfolio/port-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const PprDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <>

      <PageHeader
        heading={"Positive Peer Recognition"}
        page="Positive Peer Recognition"
      />
      <section className="portfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={detailbg} alt="img" />
            <div className="port__detail__contact">
              <h3>Project Info</h3>
              <div className="port__itembox">
                <div className="port__left">
                  <div className="items mb__cus30">
                    <h5>Client</h5>
                    <p>Talent Prospecting</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>August, 2024</p>
                  </div>
                </div>
                <div className="port__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>Web App UX & UI Design & Project Management</p>
                  </div>
                  <div className="items">
                    <h5>Location</h5>
                    <p>Galway, Ireland</p>
                  </div>
                </div>
              </div>
              <ul className="social d-flex gap-3">
                {socialIcons.map(({ icon, id }) => (
                  <li key={id}>
                    <Link to={""}>
                      <i>{icon}</i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <h3 className="text__boxhead">Brief</h3>
              <p className="fz-16 pra ttext__one">
              Design and launch a digital platform that enables employees to recognize and celebrate each other’s contributions in a positive, public, and structured way. 
              The goal was to foster a culture of appreciation and boost morale within teams by making peer recognition easy, engaging, and consistent.
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
                Challenge is that HR tools out there take time and are not easy to use.
                360 reviews can takes days or weeks. This tool should be simple and quick to log into and use.
              
              </p>
              <ul className="challenge__list">
                <li>
                  The goal is for the user to take as little as 10 mintues to complete a survey.
                </li>
                <li>
                  Easy for management to set up the teams
                </li>
              </ul>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              <p className="fz-16 pra">
              User-Centered Design Approach: Created low- to high-fidelity wireframes and interactive prototypes. 
              Prioritized ease of use with a simple, mobile-friendly interface.
              Designed microinteractions and subtle animations to make the experience feel rewarding.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="thumb">
                <img src={detailbg1} alt="img" />
              </div>
              <div className="thumb">
                <img src={detailbg2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Portfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className=" project__wrapone">
            {projectList
              .slice(0, 2)
              .map(({ heading, id, image, subHeading }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                />
              ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            onClose={closeLightbox}
            currentId={currentId}
          />
        )}
      </section>
    </>
  );
};

export default PprDetails;
