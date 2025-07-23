import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-gfgg.png";
import detailbg1 from "../../assets/img/portfolio/port-gfgg1.png";
import detailbg2 from "../../assets/img/portfolio/port-gfgg2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const GfggDetails = () => {
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
        heading={"Gluten Free Galway Girl"}
        page="Brand & Web Design, Social Media Marketing & Ecommerce"
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
                    content: "May 2020 - Present",
                  },
                  {
                    title: "Category",
                    content: "Web & Product Design & Social Media Marketing",
                  },
                  {
                    title: "Website",
                    content: (
                      <a
                        href="https://glutenfreegalwaygirl.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFA4FF", textTransform: "lowercase" }} 
                      >
                        glutenfreegalwaygirl.com
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
              <h3 className="text__boxhead">The Brief</h3>
              <p className="fz-16 pra ttext__one">
                This project came about from a dream, I woke up dreaming about the cookie monster eating gluten free cookies.
                It was the start of the covid lockdown, with extra time on my hands, I started designing gluten free t-shirts and pins.
                I built this site and started an Instagram account. 
              </p>
              <p className="fz-16 pra">
              Gluten Free living is a challenge for people who are restricted to 
              this diet for medical reasons. This website needs to be a source of 
              inspiration for new coeliacs. 
              A place where they can look up recipes and read about gluten free experiences
               around Galway and the world.
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <ul className="challenge__list">
                <li>
                Many food blogs are slow to load and a there is a lot of text on recipe pages. 
                This means there is too much scrolling and the user usually you drop off before getting to the recipe.
                </li>
                <li>
                A recipe filter is really important that can filter our the types of meals and allergens.
                Clear and simple easy navigation, users needs to know where they are at all times.
                </li>
                <li>
                The challenge for a new brand to sell products is big when people don't know you and know if they can trust your site. The blog is also a was to raise awareness for Coeliac Disease and gluten free living.
                Build an email subscriber list up from 0. Social media is without a doubt an extremely powerful tool, however you can't rely on it to be around for ever. 
                </li>
                <li>Building up an engaged email subscriber list of people who are genuinely interested in this brand is key to long-lasting success.

                </li>
                <li>Many print on demand stores use the product image that is generated by the app. It is important to use real life images for products so the user can get a feel for what the product might look on or in real life.

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
                I implemented simple recipe pages, where the ingredients are listed on the left and directions are on the right side. 
                This makes it really easy for the user to follow along while they are baking.
              </p>

              <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          ><img src={detailbg1} alt="img" /></div>

              <p className="fz-16 pra">Blog posts are super important for search engine optimisation. Writing blogs about experiences with 
                Coeliac disease and gluten free options in Galway and abroad will drive traffic to the site.</p>
              <p className="fz-16 pra">Trust and credibility in the site and products must be there. After each order the customer receives an email with the promise of a discount code if they give a review. The product reviews will help reassure customers and get more sales. 
                Shipping and refund policy will also increase credibility.</p>

                <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          ><img src={detailbg2} alt="img" /></div>
                
                <p className="fz-16 pra">I found that users did not use the static newsletter sign up on previous versions of the store. After adding a popup banner on the scroll on the homepage has been much more effective in getting email signups.</p>
                <p className="fz-16 pra">A clear and obvious navigation is essential on a food blog, so the user can pop back to the blog or recipes that they want.
                I used the Place-it website to create to get real life mockups of all the product images to provide a good first impression so that they are interested to explore the</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="portfolidetails__section cmn__bg pt-120 pb-120">
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

export default GfggDetails;
