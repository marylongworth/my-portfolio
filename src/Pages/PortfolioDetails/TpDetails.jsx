import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-tp.png";
import detailbg1 from "../../assets/img/portfolio/port-detials2.png";
import detailbg2 from "../../assets/img/portfolio/port-detials2.png";
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
              <div className="port__itembox">
                <div className="port__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>Conall Horgan</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>Aug, 2023</p>
                  </div>
                </div>
                <div className="port__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>Website Design</p>
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
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Brief</h3>
              <p className="fz-16 pra ttext__one">
                My client needed a website to sell new HR tech software
              </p>
              <p className="fz-16 pra">
                ..
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
              Build a webiste for a client who offers consulting on identifying and retaining top staff in their organisations.
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over Latin words, combined with a handful of model
                sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
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

export default TpDetails;
