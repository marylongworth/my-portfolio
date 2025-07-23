import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/portfolio/port-detailsbig-glugo.png";
import detailbg1 from "../../assets/img/portfolio/glugo1.png";
import detailbg2 from "../../assets/img/portfolio/glugo2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";
import designProcessImg from "../../assets/img/glugo/my-design-process.jpeg"; 
import defineProbImg from "../../assets/img/glugo/define-the-problem.jpeg"; 
import wireframeImg from "../../assets/img/glugo/wireframes-lo-fi.jpeg"; 
import userflowImg from "../../assets/img/glugo/user-flow.jpeg"; 
import styleguideImg from "../../assets/img/glugo/style-guide.jpg"; 


const GlugoDetails = () => {
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
        heading={"GluGo App"}
        page="GluGo App"
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
                    content: "Jun 2022 - Aug 2024",
                  },
                  {
                    title: "Category",
                    content: "Web App UX & UI Design & Project Management",
                  },
                  {
                    title: "Website",
                    content: (
                      <a
                        href="https://glugo.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFA4FF", textTransform: "lowercase" }} 
                      >
                        glugo.app
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
               <h3 className="text__boxhead">Intro</h3>

                <p className="fz-16 pra ttext__one"> I designed and coded Gluten Free finder app using React, TypeScript, 
                  and custom Figma design system.
</p>
              
              <p className="fz-16 pra ttext__one">
      
              I wanted to build an app that will be the trip advisor of gluten free eating and travel. 
              This app would be the ultimate travel companion for people living a gluten free life. 
              It will help people find restaurants nearby that they can eat safely in.
              </p>
              
            </div>

           <img src={designProcessImg} className="details__medium" alt="img" />


<h3 className="text__boxhead">Define The Problem</h3>

<img src={defineProbImg} className="details__medium" alt="img" />

<h3 className="text__boxhead">Problem research & analysis</h3>
 <p className="fz-16 pra ttext__one">
             Is this is something others are also having problems with? 
             Researched other apps, read app reviews, sent out a survey to the gluten free community  </p>


            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
               <h3 className="text__boxhead">Key Findings</h3>
              <p className="fz-16 pra ttext__one">
              At a basic level I wanted to find out if people with gluten intolerances eat out regularly. From the survey I found that 5% eat out 2 or more times per week, 30% eat out once a week, 44% eat out once a month, 14% once every 6 months.
After this I asked them if they were guaranteed that a restaurant was Coeliac safe, would they eat out more often and the response was almost all a ‘yes’.
              </p>
              <p className="fz-16 pra">
              The app “find me gluten free” is a good app for gluten free but it lacks thought out user experience design and style. It is clunky and not very user friendly. The user is bombarded with options on each page and it is difficult to find where to do the basics such as post a review.
The app depends on having active users, if there are no reviews in any of the restaurants nearby, the user may not know which ones are safe to eat out in.
From the survey it was clear many people are wary of travel since being diagnosed
There are often limited choices for gluten free when eating out. Also a big problem is lack of knowledge and awareness of restaurant staff of Coeliac and gluten intolerance
              </p><br></br>
               
               <br></br>
              <p className="fz-16 pra">
              Key findings from research of other apps and their reviews:
              </p>
              <p className="fz-16 pra">
              Users wanting other dietary restriction options/filters
The app will say they have GF but when they go to the restaurant they will not be GF
App crashes and bugs happen often
Design is outdated and not a joy to use
The app should only be for coeliac/gluten sensitive people
              </p>
            </div>

            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution</h3>
              <p className="fz-16 pra">
              I looked at the problems and challenges and came up with solutions. 
              I thought about what features must the app have to solve these problems:
The app should be very user friendly and easy to use.
The app depends on having active users - How to encourage users to add reviews? 
Make it free after x number of reviews. 
Gamify it - have different levels and achievements for having a lot of reviews. </p><br></br>
<p className="fz-16 pra">Issues for people who want to travel 
- Community page that can be location specific so users can see all the local recommendations and reviews.
</p><br></br>
<p className="fz-16 pra">Limited choices 
- there should be an option for reviewers to add tags for the number of GF options, this will be available for a filter option when searching for restaurants also.
</p><br></br>
<p className="fz-16 pra">Restaurant staff awareness -The review process will have ratings for Staff Awareness and service so users can make more informed choices.
Users wanting other dietary restriction options/filters - option for reviewers to go into detail with these in the review process, they can also filter by these in the search.
Some apps will say they have GF options but when they go to the restaurant they will not be GF - App will have a feature to show ‘last verified’ and a ‘recent reviews’ search option.
App crashes and bugs - app will have a feature to quickly and easily report bugs and issues.
Should only be for celiac/gluten sensitive people - There will be a filter option to only show reviews by people with Coeliac etc.
</p>
             
            </div>

            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
               <h3 className="text__boxhead">User Flow</h3>
              <p className="fz-16 pra ttext__one">
              A good flow chart will show you what ways a user can accomplish a task, define the actions they will need to 
              move through the app and spot any underlying issues such as where they might get stuck.
              </p>
              <p className="fz-16 pra">
              Before beginning any design, I always create a user flow chart. This one shows what 
              ways a user can accomplish a task, define the actions they will need to move through 
              the app and spot any underlying issues such as where they might get stuck.
              </p>
              <img src={userflowImg} className="details__medium" alt="img" />
            </div>


            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
               <h3 className="text__boxhead">Wireframe</h3>
              <p className="fz-16 pra ttext__one">
              They are great for figuring out where elements are going to appear on the pages - no need for styles or colors or images.
               These are meant to simple so you can easily map out each page and how the elements will function.
              </p>
              <p className="fz-16 pra">
              The use of this wireframe meant I could quickly map out all the screens and easily make changes where necessary.
              </p>
               <img src={wireframeImg} className="details__medium" alt="img" />
            </div>



            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
               <h3 className="text__boxhead">Style Guide</h3>
              <p className="fz-16 pra ttext__one">
              Before starting the build, it’s important to create the UI style guide. This really helps communicate 
              and collaborate better with the developers and create consistency throughout the app. </p>
              <img src={styleguideImg} className="details__medium" alt="img" />
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
    </>
  );
};

export default GlugoDetails;
