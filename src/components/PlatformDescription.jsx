import React from "react";

const PlatformDescription = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Experience Comprehensive A320 Learning
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Our platform provides an interactive and comprehensive learning
        experience designed specifically for A320 pilots and aviation
        professionals. Test your knowledge, track your progress, and master
        critical systems.
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-3">✓</span>
          <span className="text-gray-700">
            Real-time test results and detailed performance analytics
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-3">✓</span>
          <span className="text-gray-700">
            Track progress with visual score breakdowns and insights
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-3">✓</span>
          <span className="text-gray-700">
            Practice unlimited scenarios with instant feedback
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 font-bold mr-3">✓</span>
          <span className="text-gray-700">
            Detailed time tracking for exam preparation
          </span>
        </li>
      </ul>

      <p className="text-gray-600 leading-relaxed">
        Whether you're preparing for your type rating or maintaining your
        proficiency, our platform adapts to your learning pace and provides the
        tools you need to succeed.
      </p>
    </div>
  );
};

export default PlatformDescription;
