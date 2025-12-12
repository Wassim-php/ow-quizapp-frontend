import React from "react";
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
  return (
    <>
      <div className="relative min-h-screen w-full bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/pexels-joerg-mangelsen-337913024-14200682.jpg')`,
            opacity: 0.6,
          }}
        />

        <div className="relative z-10">
          <main className="flex flex-col items-center justify-center px-8 pt-32 pb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 max-w-4xl">
              {heading}
            </h1>

            <p className="text-xl text-white text-center mb-12 max-w-3xl leading-relaxed">
              {subheading}
            </p>

            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-blue-400 w-6 h-6 flex-shrink-0" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center gap-2 text-lg">
                Get Started
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link to="/testChooser">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center gap-2 text-lg">
                  Start Demo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>

      <A320PlatformPage />

      <FeaturesSection />

      <MembershipsSection />

      
    </>
  );
};

export default Home;
