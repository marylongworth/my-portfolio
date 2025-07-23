import React from "react";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import ScrollToTop from "../Components/ScrollToTop";

const Root = () => {
  const location = useLocation();

  console.log("Root layout rendered");

  return (
    <>
    <ScrollToTop />
      {location.pathname === "/" ? (
        <div className={`banner__section`}>
          <Header />
          <Banner />
        </div>
      ) : (
        <Header />
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;


