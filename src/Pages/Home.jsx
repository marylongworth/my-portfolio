import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Metting from "../Components/Metting/Metting";
//import Services from "../Components/Services/Services";  <Services isHeading={true} />
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
//import Testimonial from "../Components/Testimonial/Testimonial"; <Testimonial />
//import Blogs from "../Components/Blogs/Blogs";      <Blogs />
import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
//import Awards from "../Components/About/Awards";
import Preloader from "../Components/Shared/Preloader/Preloader";
//import Footer from "../Components/Shared/Footer/Footer";


const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {isFetching && <Preloader />}
      
      <MarqueeWapper direction="left" images={images} />
      <About />
      <MarqueeWapper direction="right" images={images2} />
      <Projects />
      <Metting />
      <WorkeProcess />
      <ScrollRestoration/>
    </>
  );
};

export default Home;
