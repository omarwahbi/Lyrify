import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <div className="container position-absolute">
        <div className="home-background"></div>
      </div>

      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
