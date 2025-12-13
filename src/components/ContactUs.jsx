import React, { useEffect, useState } from "react";
// Using Lucide icons for visual accents
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const ContactUs = () => {
  // 1. State for Animation Control
  const [isVisible, setIsVisible] = useState(false);

  // 2. useEffect to trigger the animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // 3. Conditional CSS Classes for Animation (for the main card)
  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-16 pb-16 font-sans">
      {/* --- Main Card (Animated) --- */}
      <div
        className={`w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 md:p-10 lg:p-12
                    transition-all duration-700 ease-out 
                    ${animationClasses}`}
      >
        {/* --- Header --- */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Have questions about our Airbus A320 practice tests, exams, or need
            technical support? Reach out to A320 Question Bank by filling out
            the form below or by sending us an email directly at{" "}
            <a
              href="mailto:info@a320questionbank.com"
              className="text-blue-600 hover:underline font-medium"
            >
              info@a320questionbank.com
            </a>
            . Our team is here to assist you with any inquiries or support
            related to your A320 exam preparation or our system.
          </p>
        </div>

        {/* --- Contact Form --- */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Name and Surname */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Surname"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              required
            />
          </div>

          {/* Email and Subject */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
              required
            />
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-600 appearance-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Subject
              </option>
              <option>Technical Support</option>
              <option>Membership/Billing</option>
              <option>Content Feedback</option>
              <option>General Inquiry</option>
            </select>
          </div>

          {/* Message Area */}
          <div>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col space-y-4 pt-4">
           
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
