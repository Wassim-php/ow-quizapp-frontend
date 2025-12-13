// src/components/FeatureCard.jsx (Updated)
import React from 'react';

// Custom Icon Component to mimic the design's icon style
const IconPlaceholder = ({ iconStyle }) => (
  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
    <div className={`w-6 h-6 rounded-full border-2 border-current ${iconStyle} flex items-center justify-center`}>
      <div className={`w-2 h-2 rounded-full ${iconStyle}`}></div>
    </div>
  </div>
);

const FeatureCard = ({ iconName, iconStyle, title, description, isVisible, index }) => {
  // Calculate the delay for each card (100ms * index for sequential appearance)
  const delay = index * 300;

  // Define the animation classes based on the parent's visibility state
  const cardAnimationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8';

  return (
    <div
      className={`
        bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl 
        transition-all duration-500 ease-out 
        ${cardAnimationClasses}
        hover:shadow-2xl hover:border-blue-500 border border-transparent
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      
      {/* Icon */}
      <IconPlaceholder iconStyle={iconStyle} />

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;