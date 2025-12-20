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
import TermsAndConditions from "./components/TermsAndConditions";
import PracticeTestPage from "./pages/PracticeTestPage";
import ExamTestPage from "./pages/ExamTestPage";
import ChooseCategoryPage from "./pages/ChooseCategoryPage";

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

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        <Route path="/practice-test" element={<PracticeTestPage/>} />

        <Route path="/exam-test" element={<ExamTestPage />} />

        <Route path="/practice-chooser" element={<ChooseCategoryPage testType="practice"/>} />

        <Route path="/exam-chooser" element={<ChooseCategoryPage testType="exam"/>} />

        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
