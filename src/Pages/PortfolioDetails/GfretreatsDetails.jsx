import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-retreats.png";
import detailbg1 from "../../assets/img/portfolio/ppr1.png";
import detailbg2 from "../../assets/img/portfolio/ppr2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const GfretreatsDetails = () => {
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
        heading={"Gluten Free Retreats"}
        page="Gluten Free Retreats"
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
                    content: "Personal Project",
                  },
                  {
                    title: "Date",
                    content: "June 2025",
                  },
                  {
                    title: "Category",
                    content: "Website Design & Branding",
                  },
                  {
                    title: "Website",
                    content: (
                      <a
                        href="https://glutenfreeretreats.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFA4FF", textTransform: "lowercase" }} 
                      >
                        glutenfreeretreats.com
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
              Gluten Free Retreats is a personal passion project aimed at creating a safe and rejuvenating travel experience for 
              individuals with gluten sensitivities. The goal was to design a website that not only introduced the concept of 
              gluten-free wellness retreats but also began building a community of like-minded travelers. I took on the 
              full scope of the project—from branding and visual identity to website design and functional development 
              on the Shopify platform.
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
                The biggest challenge was creating a compelling online presence for a completely new concept with no direct 
                competitors to benchmark against. Since the retreats were still in the idea phase, 
                it was critical to design a website that could both inspire confidence and generate early interest without 
                traditional e-commerce transactions. Additionally, adapting Shopify—a platform primarily built for product 
                sales—to effectively present and validate a service-based offering required inventive customization, 
                especially to track user interest and gather actionable feedback through waitlist forms.
              
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              <p className="fz-16 pra">
              To address these challenges, I designed a clean, welcoming site that reflects the relaxing and health-focused ethos 
              of the retreats. I developed a full branding system to create trust and recognition from the outset. On the technical 
              side, I customized the Shopify layout to showcase retreat "rooms" as individual listings, and implemented waitlist 
              forms on each page. These forms allowed visitors to express interest, helping to gather data and measure 
              demand before launching full bookings.
              </p>
            </div>
         {/*    <div
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
      </section>
    </>
  );
};

export default GfretreatsDetails;
