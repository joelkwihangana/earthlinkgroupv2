import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Heroslider from "./components/Heroslider/HeroSlider";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";
//import Testimonials from './components/Testimonials/Testimonials';
import GlobalReach from "./components/GlobalReach/GlobalReach";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import "./App.css";
import CountryExpansionOpportunities from "./components/CountryExpansionOpportunities/CountryExpansionOpportunities";
import "./components/CountryExpansionOpportunities/CountryExpansionOpportunities.css";
import PlacementAccelerator from "./pages/PlacementAccelerator";
import Software from "./pages/Software";
import Tours from "./pages/Tours";
import Border from "./pages/Border";
import Training from "./pages/Training";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heroslider />
                <HeroSection />
                <ServicesPreview />
                <GlobalReach />
                <CountryExpansionOpportunities />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Placement" element={<PlacementAccelerator />} />
          <Route path="/software" element={<Software />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Border" element={<Border />} />
          <Route path="/Training" element={<Training />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
