import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Icons for open/close state

const FAQItem = ({ question, answerPlaceholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      
      {/* Question Header (Clickable) */}
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-150">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
        )}
      </button>

      {/* Answer Content (Collapsible) */}
      <div 
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
        // Note: max-h-96 is a utility class, but for truly dynamic content, 
        // you might need a JavaScript solution to calculate height for a smooth transition.
        // For most FAQs, a large static max-height works well.
      >
        <div className="text-gray-600 pb-2">
          {/* PLACEHOLDER CONTENT - Replace this text later */}
          <p className="p-4 bg-gray-50 border border-gray-100 rounded-md">
            {answerPlaceholder}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;