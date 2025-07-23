import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-tp.png";
import detailbg1 from "../../assets/img/portfolio/port-tp1.png";
import detailbg2 from "../../assets/img/portfolio/port-tp2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const TpDetails = () => {
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
        heading={"Talent Prospecting"}
        page="Website Design & Video Production"
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
                    content: "Conall Horgan",
                  },
                  {
                    title: "Date",
                    content: "Aug, 2023",
                  },
                  {
                    title: "Category",
                    content: "Website Design",
                  },
                  {
                    title: "Website",
                    content: (
                      <a
                        href="https://talentprospecting.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFA4FF", textTransform: "lowercase" }} 
                      >
                        talentprospecting.com
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
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Brief</h3>
              <p className="fz-16 pra ttext__one">
                My client needed a website to sell new HR product. Talent Prospecting helps companies create a positive culture, 
                spotlight future leaders & retain their top talent. The project involved end-to-end design, branding refinement, 
                and the setup of lead capture systems to support growth.
              </p>
              <p className="fz-16 pra">
                
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
              The main challenge was positioning the site in a highly competitive 
              recruitment and staffing space while maintaining clarity and trustworthiness.
              Since Talent Prospecting is a new and unfamiliar product, one of the biggest challenges was 
              clearly communicating what it does and why it matters, especially to busy decision makers like CEOs.
              Without a well known brand or existing user base, the site needed to quickly explain the value proposition 
              in a way that felt credible, simple, and actionable. 
              The messaging had to avoid jargon and make it immediately obvious why someone should book a call.
              </p>
              <ul className="challenge__list">
                <li>
                  Professional Layout
                </li>
                <li>
                  Build trust
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
                 I created a short, high-impact explainer video using Adobe Premiere Pro that walks users through the platform's purpose and benefits in under a minute. 
                 Placing this video prominently on the homepage helped reduce friction, increase clarity, and give visitors a quick visual understanding 
                 of how the product works. Combined with streamlined copy and clear CTAs, the video became a central tool for building trust and driving call bookings.
              </p>
              <p> In addition, I helped define and structure case studies that highlight real world results and client success stories. These case studies serve to build credibility 
                with skeptical or time constrained decision-makers, reinforcing trust and making it easier for them to feel confident about booking a call.</p>
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

    {/*   <section className="portfolidetails__section cmn__bg pt-120 pb-120">
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
              .map(({ heading, id, image, subHeading, slug }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                   slug={slug} 
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
      </section> */}
    </>
  );
};

export default TpDetails;
