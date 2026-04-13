import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Brands from "../sections/Brands";
import Features from "../sections/Features";
import Technology from "../sections/Technology";
import Download from "../sections/Download";
import FAQ from "../sections/FAQ";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Brands />
      <Features />
      <Technology />
      <Download />
      <FAQ />

      <Footer />
    </>
  );
};

export default Home;
