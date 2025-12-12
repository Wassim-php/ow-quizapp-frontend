import React from "react";

// Custom Icon Component to mimic the design's icon style (blue icon inside a white circle)
const IconPlaceholder = ({ iconStyle }) => (
  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
    {/* This div is the actual icon shape/color */}
    <div
      className={`w-6 h-6 rounded-full border-2 border-current ${iconStyle} flex items-center justify-center`}
    >
      {/* Small inner shape to hint at the icon inside */}
      <div className={`w-2 h-2 rounded-full ${iconStyle}`}></div>
    </div>
  </div>
);

const FeatureCard = ({ iconName, iconStyle, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:border-blue-500 border border-transparent">
      {/* Icon */}
      <IconPlaceholder iconStyle={iconStyle} />

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
