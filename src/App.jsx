import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    console.log("AOS init"); // ✅ Confirm AOS is initializing
    AOS.init();
  }, []);

  console.log("Rendering <App />"); // ✅ Confirm App is rendering

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
