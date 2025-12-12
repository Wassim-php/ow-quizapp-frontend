import React, { useEffect, useState } from 'react';
import { Facebook, Twitter } from 'lucide-react'; 
import { FaPinterestP } from 'react-icons/fa'; 

const Footer = () => {
  
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    // Set a small timeout to ensure Tailwind transitions are recognized
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  // 3. Conditional CSS Classes for Animation
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-4';   

  return (
    <footer 
      className={`
        bg-black py-8 md:py-12 text-white font-sans border-t border-gray-900 
        transition-all duration-700 ease-out 
        ${animationClasses}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          {/* --- Left Section: Logo and Copyright --- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Logo */}
            <div className="text-xl font-bold mb-1">
              A320
            </div>
            <div className="text-sm tracking-widest text-gray-500 mb-6">
              QUESTION BANK
            </div>

            {/* Disclaimer and Copyright */}
            <p className="text-xs text-gray-500 max-w-sm">
              This website is not affiliated with or endorsed by Airbus. A320 is a trademark of Airbus and is used here strictly for educational purposes.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © 2025 A320 Question Bank. All rights reserved.
            </p>

            {/* Developer Credit */}
            <p className="text-xs text-gray-500 mt-4">
              Developed by <a href="#" className="text-blue-500 hover:text-blue-400 transition">Omar Nasrallah</a>
            </p>
          </div>

          
          {/* --- Right Section: Navigation and Social Icons --- */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            
            {/* Navigation Links */}
            <div className="flex space-x-6 text-sm font-medium">
              <a href="#" className="text-gray-300 hover:text-white transition">FAQ</a>
              <a href="#" className="text-gray-300 hover:text-white transition border-b border-gray-300">Terms and Conditions</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white transition">
                <FaPinterestP size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;