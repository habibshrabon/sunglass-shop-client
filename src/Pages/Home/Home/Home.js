import React from "react";
// import Testimonial from "../../Dashboard/Testimonial/Testimonial";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Products />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
