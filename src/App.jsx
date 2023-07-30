import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import LabScale from "./Components/LabScale";
import SeedPilot from "./Components/SeedPilot";
import IndPro from "./Components/IndPro";
import Follow from "./Components/Follow";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <LabScale />
        <SeedPilot />
        <IndPro />
        <Follow />
        <Footer />
      </div>
    </>
  );
}

export default App;
