import React, { useState } from "react";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { ScrollRestoration } from "react-router-dom";

const categoryList = [
  {
    id: 1,
    categoryName: "All",
    value: "all",
  },
  {
    id: 2,
    categoryName: "Branding",
    value: "branding_design",
  },
  {
    id: 3,
    categoryName: "App Design",
    value: "app_design",
  },
  {
    id: 4,
    categoryName: "Web Design",
    value: "website_design",
  },
  {
    id: 5,
    categoryName: "UX UI",
    value: "ux_ui",
  },
  {
    id: 7,
    categoryName: "Web Design",
    value: "website_design",
  },
  {
    id: 8,
    categoryName: "Video",
    value: "video_production",
  },
];
const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");

  // ---------- Filer project by category
  let filterProject = [];

  for (const iterator of projectList) {
    for (const cet of iterator.category) {
      if (cet === currentCategory) {
        filterProject.push(iterator);
      }
    }
  }

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHeader heading={"My Work & Portfolio"} page="Work" />
      <section className="project__section pb-120">
        <div className="container">
          <div className="singletab portfolio__filter">
            <ul
              className="tablinks"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              {categoryList.map(({ id, categoryName, value }) => (
                <li
                  key={id}
                  className={`nav-links ${
                    currentCategory === value ? "active" : ""
                  } `}
                >
                  <button
                    className="tablink"
                    onClick={() => setCurrentCategory(value)}
                  >
                    {categoryName}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents project__wrapone">
           {filterProject.map(
            ({ heading, id, image, subHeading, slug }, index) => (
              <ProjectCard
                key={id}
                image={image}
                heading={heading}
                subHeading={subHeading}
                openLightbox={openLightbox}
                index={index}
                slug={slug}
              />
            )
          )}

            </div>
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            setLightboxOpen={setLightboxOpen}
            currentId={currentId}
          />
        )}
      </section>
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default Portfolio;
