import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList"; 
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-ppr.png";
import detailbg1 from "../../assets/img/portfolio/ppr1.png";
import detailbg2 from "../../assets/img/portfolio/ppr2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons"; 
import loadingGif from "../../assets/img/microinteractions.gif"; 
import wirefreamesGif from "../../assets/img/figma-wireframes.gif"; 

const PprDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  // The rest of your original page
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
            <div
                className="port__itembox"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "2rem",
                }}
              >
                {[
                  {
                    title: "Client",
                    content: "Talent Prospecting",
                  },
                  {
                    title: "Start Date",
                    content: "August, 2024",
                  },
                  {
                    title: "Category",
                    content: "Web App UX & UI Design & Project Management",
                  },
                  {
                    title: "Website",
                    content: (
                      <a
                        href="https://app.positivepeerrecognition.com/auth"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFA4FF", textTransform: "lowercase" }} 
                      >
                        app.positivepeerrecognition.com
                      </a>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#373737",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <h5 style={{ marginBottom: "0.5rem" }}>{item.title}</h5>
                    <p style={{ margin: 0, wordBreak: "break-word" }}>{item.content}</p>
                  </div>
                ))}
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
              Design and launch a web app that enables employees to recognize and celebrate each other’s contributions.
              The goal was to foster a culture of appreciation and boost morale within teams by making peer 
              recognition easy, engaging, and consistent. This app should have the ability to highlight future leaders 
              and help with successon planning for companies.
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
               <p className="fz-16 pra ttext__one">The app needed to be designed and developed is a very short timeframe to be ready for a launch at Web Summit in November 2024.</p>
              <ul className="challenge__list">
                <li>
                  The goal is for the user to take as little as 10 mintues to complete a survey.
                </li>
                <li>
                  Easy for management to set up the teams
                </li>
                  <li>
                  Data analytics are distalyed in an easy to understand way.
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
              To address the tight timeline and user experience goals, I adopted a lean, user-centered design approach. 
              Beginning with user research and stakeholder interviews, I identified key pain points in existing 
              talent management tools which primarily their complexity, time consumption, and low engagement rates.
              </p>
              
              <p className="fz-16 pra ttext__one">
                  I rapidly developed a set of low-fidelity wireframes to establish structure, 
                  followed by high-fidelity, interactive prototypes to validate the user journey. 
                  Feedback was continuously gathered through quick usability testing cycles, 
                  allowing for fast iteration and refinement.
                </p>
                <p className="fz-16 pra ttext__one"><img src={wirefreamesGif} alt="Loading animation" style={{
                        width: "100%",
                        maxWidth: "800px",
                        height: "auto",
                        display: "block",
                      }} /></p>
                <p className="fz-16 pra ttext__one">
                  Administrative setup was streamlined with intuitive forms and smart defaults, allowing managers 
                  to create teams and assign roles in minutes. Employees could complete peer recognition surveys 
                  in under 10 minutes, aligning with the goal of quick, meaningful feedback without workflow disruption.
                </p>
                 
                <p className="fz-16 pra ttext__one">The UI was intentionally kept minimal and approachable. I prioritized intuitive navigation, 
                  clean layouts, and large touch targets to ensure accessibility across desktop and mobile. 
                  Microinteractions, such as subtle hover effects and rewarding animations, were integrated to reinforce 
                  positive user behavior and make the recognition experience feel celebratory and engaging.
                </p>
                  <p className="fz-16 pra ttext__one"><img src={loadingGif} alt="Loading animation"  style={{
                        width: "100%",
                        maxWidth: "800px",
                        height: "auto",
                        display: "block",
                      }} /></p>

                <p className="fz-16 pra ttext__one">I used Bootstrap templating framework to speed up wireframes design 
                  and development to meet the aggressive deadline for Web Summit 2024.
                  This decision allowed me to maintain visual consistency and responsive 
                  behavior without investing time into building a custom design system from scratch.</p>
                <p className="fz-16 pra ttext__one">
                   Mobile optimised if the employee that may need to use a mobile instead of the desktop.
                </p>
              
            </div>
       {/*      <div
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
            </div> */}
          </div>
        </div>
      </section>

    
    </>
  );
};

export default PprDetails;


