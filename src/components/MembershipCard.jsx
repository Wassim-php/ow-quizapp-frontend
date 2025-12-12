import React from 'react';

const MembershipCard = ({ duration, description, price, perMonth, isPopular = false }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-blue-500/50 hover:scale-[1.02]">
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full tracking-wider shadow-md">
          POPULAR
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
        {duration}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6 flex-grow">
        {description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <p className="text-4xl font-extrabold text-gray-900">
          €{price}
          <span className="text-xl font-normal text-gray-500 ml-1">EUR</span>
        </p>
        {perMonth && (
          <p className="text-sm text-gray-500 mt-1">
            €{perMonth} per month
          </p>
        )}
      </div>

      {/* Button */}
      <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2">
        <span>Buy now</span>
        {/* Right Arrow Icon (Placeholder/Simple SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default MembershipCard;