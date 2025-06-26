import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-dandw.png";
import detailbg1 from "../../assets/img/portfolio/port-dandw1.png";
import detailbg2 from "../../assets/img/portfolio/port-dandw2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const PortfolioDetails = () => {
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
        heading={"Diamond & Wolf"}
        page="Brand Design & Web Design"
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
                    content: "Friend's Website",
                  },
                  {
                    title: "Date",
                    content: "May 2022",
                  },
                  {
                    title: "Category",
                    content: "Branding Design, Website Design",
                  },
                  {
                    title: "Website",
                    content: (
                      <a
                        href="https://diamondandwolf.myshopify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFA4FF", textTransform: "lowercase" }} 
                      >
                        diamondandwolf.com
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
              Design the branding and logo for website dedicated to nail polish wraps.
              </p>
            </div>
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
              The client is selling nail stickers, the buyer would need to be convinced why they should buy them. 
              The client needed the website and branding to look trendy and luxurious.
              </p>
              <ul className="challenge__list">
                <li>
                One challenge is that the nail wraps take a little practice to apply and need to be done carefully to make sure they last long and get the most customer satisfaction.
                </li>
                <li>
                The users are Women: Age: 16 - 60 and located in Ireland. These users will currently be getting expensive and time consuming shellac and other types of gel nails.
                </li>
                <li>
                Branding and customer experience will be very important for this store, need to keep customers coming back.
                </li>
                <li>The objective of this design will be to have the branding and website be a seamless user experience - expensive and luxurious feel while simple and easy to use.</li>
              </ul>
            </div>
            
              
            <div
                          className="details__bigthumb mb-60"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        ><img src={detailbg1} alt="img" /></div>

            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              


              <p className="fz-16 pra">
              We gave samples to friends to try the nail wraps and give feedback. These friends included women who currently go to nail salons and ones who have no interest in nail art.
              
              </p>

              <p className="fz-16 pra">We found that first time customers will have a hard time getting used to the wraps. The tutorials for applying the stickers need to be obvious so the customer knows what to do. I recommend giving an extra free sample to the customer when they order so that they can practice.</p>
            
              <p className="fz-16 pra">I conducted a lot of research into the competitors in this market and researched websites selling similar products.
              For the client to make a good profit, they will need the user to add multiple products to the cart as they will have a low price.</p>
              <p className="fz-16 pra">The user will need to be encouraged to add multiple nail strips to the cart, possibly by BOGO free offers. Recommend not having the “buy it now” button on the product page and not direct the user to the cart page after they click “add to cart”.</p>
             
              <p className="fz-16 pra">
              Reviews will be a very important part of the site, because the product is not so common users will need reassurance before purchasing. I have researched the best apps for reviews where customers can upload photos of the product and give their rating. It will also be necessary to have an email sent to the customer automatically, so they can give a review after they receive the product and have time to try it out. Incentivise by offering a discount code in the email.</p>
              
              
            <div
                          className="details__bigthumb mb-60"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        ><img src={detailbg2} alt="img" /></div>
              
              <p className="fz-16 pra">To help get repeat customers, a discount code will be added into the packaging to the customer.</p>
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

export default PortfolioDetails;
