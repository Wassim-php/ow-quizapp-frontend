import React from "react";
import MobileMockup from "./MobileMockup";
import PlatformDescription from "./PlatformDescription";
import { Link } from "react-router-dom";
import { useInView } from '../hooks/UseInView'; // Assuming the hook path

const A320PlatformPage = () => {
  // 1. Initialize the hook to monitor the main content
  const [sectionRef, isVisible] = useInView({ threshold: 0.5 });

  // 2. Conditional CSS Classes for Animation
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* --- Main Content Section (Animated) --- */}
      <section 
        ref={sectionRef} // Attach the ref here
        className={`py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                    transition-all duration-700 ease-out 
                    ${animationClasses}`} // Apply animation classes
      >
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            About Our Platform
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* --- Mobile Mockup and Description Layout --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <MobileMockup />
          </div>

          {/* Right Side: Platform Description */}
          <div className="lg:pl-10">
            <PlatformDescription />
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <div className="py-12 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Ready to test your knowledge and enhance your proficiency with the
          A320?
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/testChooser">
          <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
            Start Demo Test
          </button>
          </Link>

          <Link to="/about-us">
          <button className="px-6 py-3 text-lg font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default A320PlatformPage;