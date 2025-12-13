import React, { useEffect, useState } from 'react';
// Using Lucide icons for visual accents
import { Target, Lightbulb, UserCheck, Zap, Layers, Globe } from 'lucide-react';
import InfoBox from './InfoBox';
import FeatureBlock from './FeatureBlock';
import { Link } from 'react-router-dom';



const AboutUs = () => {
  // Animation state for the entire page content
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8';

  // --- New Color Scheme ---
  const PRIMARY_BLUE = 'border-blue-700';
  const ACCENT_TEAL = 'border-teal-500';
  const PURPLE_ACCENT = 'border-purple-600';
  const LIGHT_BLUE_ACCENT = 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        {/* --- Header & Title --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">
            About Us
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Your ultimate resource for mastering the technical aspects of the Airbus A320 family of aircraft, including the A318, A319, A320, and A321.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* --- Mission and Vision (Animated Block) --- */}
        <div 
          className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-700 ease-out ${animationClasses}`}
        >
          <InfoBox
            title="Our Mission"
            content="To provide comprehensive and up-to-date technical resources that empower pilots and aviation enthusiasts to excel in their knowledge and skills related to the Airbus A320 family."
            borderColor={PRIMARY_BLUE}
            icon={Target}
          />
          <InfoBox
            title="Our Vision"
            content="To be the leading platform for Airbus A320 technical training, recognized for excellence, reliability, and innovation in aviation education."
            borderColor={ACCENT_TEAL}
            icon={Lightbulb}
          />
        </div>

        {/* --- Who We Help Block (Animated Block) --- */}
        <div 
          className={`p-6 md:p-8 bg-white border-t-8 ${PURPLE_ACCENT} rounded-xl shadow-lg mb-12 transition-all duration-700 ease-out ${animationClasses}`}
          style={{ transitionDelay: '100ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Who We Help</h3>
          <p className="text-gray-600 leading-relaxed">
            If you're a **newly qualified pilot** stepping out of flight school and ready to begin your journey in the airlines, or a **seasoned professional** aiming to enhance your understanding, we offer a comprehensive selection of technical questions and study material to suit your needs. Our platform is also ideal for **aviation enthusiasts** or those interested in learning about the Airbus A320 family without pursuing a professional flying career. From system operations to flight performance, our content is designed to help you grasp the intricate details of the A320 aircraft, whether you're flying it or just passionate about it. Whether you're pursuing your initial type rating, PPC, LPC, UPC, simulator recurrent training, or just checking in, our question bank is built to support you.
          </p>
        </div>

        {/* --- Services, Content, and Why Choose Us (Animated Grid) --- */}
        <div 
          className={`grid lg:grid-cols-3 gap-8 mb-12 transition-all duration-700 ease-out ${animationClasses}`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Our Services */}
          <FeatureBlock title="Our Services" borderColor={PRIMARY_BLUE}>
            <ul className="text-gray-600 space-y-3 list-disc pl-5">
              <li>Comprehensive Question Banks covering all technical aspects of the Airbus A320 family.</li>
              <li>Practice tests and exams tailored for type rating, PPC, LPC, and simulator recurrent training.</li>
              <li>Progress tracking tools to monitor your learning journey and identify areas for improvement.</li>
            </ul>
          </FeatureBlock>

          {/* Expert Content */}
          <FeatureBlock title="Expert Content and Updates" borderColor={ACCENT_TEAL}>
            <p className="text-gray-600 leading-relaxed">
              At A320 Question Bank, we provide **expertly curated questions** and up-to-date information to keep you sharp and confident in all your aviation pursuits.
            </p>
          </FeatureBlock>

          {/* Why Choose Us? */}
          <FeatureBlock title="Why Choose Us?" borderColor={PURPLE_ACCENT}>
            <ul className="text-gray-600 space-y-3 list-disc pl-5">
              <li>**Extensive Coverage:** Comprehensive question banks for all Airbus A320 variants.</li>
              <li>**Expert-Curated Content:** Developed by aviation professionals to ensure accuracy.</li>
              <li>**Flexible Learning:** Access your training materials anytime, anywhere, on any device.</li>
              <li>**Progress Tracking:** Monitor your improvement and focus on areas that need attention.</li>
            </ul>
          </FeatureBlock>
        </div>

        {/* --- CTA and Contact Section (Animated Grid) --- */}
        <div 
          className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-700 ease-out ${animationClasses}`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Ready to Elevate Your Knowledge? (CTA) */}
          <div className={`p-8 rounded-xl text-white shadow-xl ${LIGHT_BLUE_ACCENT} transition duration-300`}>
            <h3 className="text-2xl font-bold mb-3">Ready to Elevate Your Knowledge?</h3>
            <p className="text-blue-100 mb-6">
              Join our community today by creating your **free account** to gain access to a wealth of technical resources tailored to your aviation journey.
            </p>
            <Link to="/register">
            <button className="py-3 px-6 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md">
              Join A320 Question Bank Today
            </button>
            </Link>
          </div>

          {/* Contact & Support */}
          <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact & Support</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions or need assistance, feel free to contact our support team.
            </p>
            <p className="text-gray-600 mb-4">
              Have more questions? Visit our <span className="font-semibold">FAQ page</span> for detailed answers.
            </p>
            <Link to="/contact-us">
            <button className="py-2 px-6 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutUs;