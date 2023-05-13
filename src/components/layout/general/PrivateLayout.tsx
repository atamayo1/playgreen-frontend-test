import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PrivateLayout = () => {
  return (
    <>
      <section className="layout__content">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default PrivateLayout;
