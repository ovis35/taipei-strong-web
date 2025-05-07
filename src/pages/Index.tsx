
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Classes from "../components/Classes";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
