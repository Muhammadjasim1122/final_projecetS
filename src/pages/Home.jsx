import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import { Button } from "@mui/material"; // ✅ Add MUI button
import Navbar from "../components/homeComponents/Navbar";
import HeroSection from "../components/homeComponents/HeroSection";
import About from "../components/homeComponents/About";
import FeaturesSection from "../components/homeComponents/FeaturesSection";
import ReviewsSection from "../components/homeComponents/ReviewsSection";
import Blog from "../components/homeComponents/Blog";
import Footer from "../components/homeComponents/Footer";
import "../styles/Home.css";

function Home() {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // ✅ Hook to navigate

  return (
    <div className="home-container" dir={i18n.language === "ur" ? "rtl" : "ltr"}>
      <Navbar />
      <HeroSection />

      {/* ✅ Add the Progress Tracker Button below Hero or wherever you prefer */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/progress")}
        >
          Go to Progress Tracker
        </Button>
      </div>

      <About />
      <FeaturesSection />
      <ReviewsSection />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
