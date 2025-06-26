import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  navigate,
  slug,
}) => {
  return (
    <div
      className={`project__item  ${index !== 2 && "cus__mb60"}`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
       <Link to={`/${slug}`} className="thumb mb-30 imgc">
        <img src={image} alt="img" />
      </Link>
      <div className="content d-flex align-items-center justify-content-between gap-2">
        <Link to={`/${slug}`} className="project__link">
          <span className="base mb-2 mb-xxl-3 d-block text-uppercase">
            {heading}
          </span>
          <h3>{subHeading}</h3>
        </Link>
        <Link to={`/${slug}`} className="common__icon imgc">
          <ArrowUpRight className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
