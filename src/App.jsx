import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import TestChoosePage from "./pages/TestChoosePage";
import Footer from "./components/Footer";
import MembershipPage from "./pages/MembershipPage";
import AboutUsPage from "./components/AboutUs";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/testChooser" element={<TestChoosePage />} />

        <Route path="/memberships" element={<MembershipPage />} />

        <Route path="/about-us" element={<AboutUsPage />} />

        <Route path="/contact-us" element={<ContactUsPage />} />
        
        <Route path="/faq" element={<FAQPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
