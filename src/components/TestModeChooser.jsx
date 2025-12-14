import React, { useEffect, useState } from 'react';
// Using Lucide icons for the card content
import { BookOpen, Clock, CheckCircle } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const TestModeChooser = () => {
  // 1. State for Animation Control
  const [isVisible, setIsVisible] = useState(false);

  // 2. useEffect to trigger the animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // 3. Conditional CSS Classes for Animation
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-6';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 font-sans">
      <div 
        className={`max-w-4xl mx-auto px-4 transition-all duration-700 ease-out ${animationClasses}`}
      >
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Choose Your Test Mode
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Select the mode that best fits your learning goals
          </p>
        </div>

        {/* --- Test Mode Cards (Responsive Grid) --- */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Practice Mode (Deep Teal Scheme) */}
          <div className="bg-teal-700/90 text-white rounded-xl shadow-2xl p-8 flex flex-col justify-between transform hover:scale-[1.02] transition duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-8 w-8 text-teal-300" />
                <h3 className="text-2xl font-bold">
                  Practice Mode
                </h3>
              </div>
              <p className="text-teal-100 font-medium mb-6">Learn & Improve</p>
              
              <p className="text-teal-100 leading-relaxed mb-8">
                Perfect for learning and skill development. Take your time to understand each concept with immediate feedback and detailed explanations.
              </p>

              <ul className="space-y-3 text-teal-100 text-sm mb-10">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-300" />
                  <span>No time limit - learn at your pace</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-300" />
                  <span>Instant feedback with explanations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-300" />
                  <span>See correct answers immediately</span>
                </li>
              </ul>
            </div>
            <Link to="/practice-test">
            <button className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300 shadow-md">
              Start Practice Test
            </button>
            </Link>
          </div>
          
          {/* Card 2: Exam Mode (Vibrant Purple Scheme) */}
          <div className="bg-purple-800/90 text-white rounded-xl shadow-2xl p-8 flex flex-col justify-between transform hover:scale-[1.02] transition duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-8 w-8 text-purple-300" />
                <h3 className="text-2xl font-bold">
                  Exam Mode
                </h3>
              </div>
              <p className="text-purple-100 font-medium mb-6">Test Your Knowledge</p>
              
              <p className="text-purple-100 leading-relaxed mb-8">
                Simulate real exam conditions to test your readiness. Challenge yourself with time constraints and comprehensive evaluation.
              </p>

              <ul className="space-y-3 text-purple-100 text-sm mb-10">
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-300" />
                  <span>60-minute time limit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-300" />
                  <span>No immediate feedback during test</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-300" />
                  <span>Results shown after completion</span>
                </li>
              </ul>
            </div>

            <Link to="/exam-test">
            <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 shadow-md">
              Start Exam Test
            </button>
            </Link>
          </div>

        </div>
        
        {/* --- Footer Note --- */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Both modes use the same question bank. Choose based on your current learning objectives.
        </div>
      </div>
    </div>
  );
};

export default TestModeChooser;