import React from 'react';
import { Check } from 'lucide-react';

const PlatformDescription = () => {
  const benefits = [
    { title: 'In-Depth Knowledge', content: 'Gain a deeper understanding of the A320\'s systems, operations, and procedures.' },
    { title: 'Varied Question Categories', content: 'Encounter questions on diverse topics, including avionics, flight operations, safety protocols, and more.' },
    { title: 'Progressive Difficulty', content: 'Challenge yourself with questions that range from basic to advanced levels, helping you to improve and expand your expertise.' },
  ];

  return (
    <>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        A320 Question Bank: Your Ultimate Resource for Airbus A320 Exam Preparation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Prepare to elevate your understanding of the Airbus A320 with our comprehensive multiple-choice tests.
      </p>
      
      <p className="text-gray-700 font-semibold mb-4">
        By taking these tests, you will benefit from:
      </p>

      <ul className="space-y-4 mb-8">
        {benefits.map((item, index) => (
          <li key={index} className="flex space-x-3 items-start">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <span className="font-medium text-gray-800">{item.title}:</span>
              <span className="text-gray-700 ml-1">{item.content}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlatformDescription;