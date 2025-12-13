import React, { useEffect, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import A320PlatformPage from "./A320PlatformPage"; 
import FeaturesSection from "./FeaturesSection"; 
import MembershipsSection from "./MembershipsSection"; 
import { Link } from "react-router-dom"; 

const Home = () => {
  const heading = "Master the Airbus A320 Type Rating";
  const subheading =
    "Simplify your A320 study — exam prep, sim training, and technical knowledge all in one place.";
  const features = [
    "1100+ professionally curated questions",
    "Study anywhere on any device",
    "FCOM-backed explanations for every question",
    "Built and updated by current A320 Professionals",
  ];
  
  // 1. State for Hero Content Animation
  const [heroVisible, setHeroVisible] = useState(false);

  // 2. Trigger animation immediately on component mount
  useEffect(() => {
    // A small timeout ensures the transition classes are registered before the state change
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 3. Conditional CSS Classes for Animation
  const heroAnimationClasses = heroVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8';

  return (
    <>
      {/* --- 1. Hero Section (Immediate Load with Fade-In) --- */}
      <div className="relative min-h-screen w-full bg-black flex flex-col justify-center">
        {/* Background Image with Opacity Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/pexels-joerg-mangelsen-337913024-14200682.jpg')`,
            opacity: 0.6,
          }}
        />

        {/* Content Container (Animated) */}
        <div 
          className={`relative z-10 py-32 md:py-40 transition-all duration-1000 ease-out ${heroAnimationClasses}`}
        >
          <main className="flex flex-col items-center justify-center px-8">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 max-w-4xl">
              {heading}
            </h1>

            {/* Subheading */}
            <p className="text-xl text-white text-center mb-12 max-w-3xl leading-relaxed">
              {subheading}
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-blue-400 w-6 h-6 flex-shrink-0" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/testChooser">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Start Demo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* --- 2. Subsequent Sections (Must use useInView internally for scroll animation) --- */}
      
      <A320PlatformPage /> 
      <FeaturesSection />
      <MembershipsSection />

    </>
  );
};

export default Home;