import { createHashRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Components/Shared/Footer/Footer";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Portfolio from "../Pages/Portfolio/Portfolio";
import PortfolioDetails from "../Pages/PortfolioDetails/PortfolioDetails";

// Portfolio detail pages
import GlugoDetails from "../Pages/PortfolioDetails/GlugoDetails";
import GfggDetails from "../Pages/PortfolioDetails/GfggDetails";
import TpDetails from "../Pages/PortfolioDetails/TpDetails";
import PprDetails from "../Pages/PortfolioDetails/PprDetails";
import DandWDetails from "../Pages/PortfolioDetails/DandWDetails";
import GfretreatsDetails from "../Pages/PortfolioDetails/GfretreatsDetails";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "all-services", element: <AllServices /> },
        { path: "service-details", element: <ServiceDetails /> },
        { path: "all-blog", element: <AllBlogs /> },
        { path: "blog-details", element: <BlogDetails /> },
        { path: "contact", element: <Contact /> },
        { path: "footer", element: <Footer /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "portfolio-details", element: <PortfolioDetails /> },
        { path: "glugo-details", element: <GlugoDetails /> },
        { path: "gfgg-details", element: <GfggDetails /> },
        { path: "ppr-details", element: <PprDetails /> },
        { path: "tp-details", element: <TpDetails /> },
        { path: "dandw-details", element: <DandWDetails /> },
        { path: "gfretreats-details", element: <GfretreatsDetails /> },
      ],
    },
  ],
  {
    basename: "/my-portfolio",
  }
);
