import React from 'react';
import FeatureCard from './FeatureCard';

// Icon data based on the original image (using placeholder SVG paths or names)
// In a real project, you would import icons from a library like Heroicons (@heroicons/react)
const featuresData = [
  {
    id: 1,
    iconName: 'Unrivaled Expertise Icon', // Placeholder for the lightbulb icon
    iconStyle: 'text-blue-400',
    title: 'Unrivaled Expertise',
    description:
      'Our team of aviation experts brings a wealth of experience and deep-rooted knowledge in Airbus A320 operations. Every question and practice test is crafted with precision to mirror real-world scenarios, ensuring you are well-prepared for every challenge that comes your way.',
  },
  {
    id: 2,
    iconName: 'Comprehensive Coverage Icon', // Placeholder for the open book icon
    iconStyle: 'text-blue-400',
    title: 'Comprehensive Coverage',
    description:
      'From actual exam simulations to extensive practice tests, our platform offers a comprehensive suite of resources that cater to all levels of proficiency. We cover every facet of the A320, from its sophisticated avionics to its intricate systems, leaving no stone unturned.',
  },
  {
    id: 3,
    iconName: 'Cutting-Edge Tools Icon', // Placeholder for the gear/atom icon
    iconStyle: 'text-blue-400',
    title: 'Cutting-Edge Learning Tools',
    description:
      'Harness the power of innovation with our state of the art learning tools. Our interactive and user-friendly platform is designed to provide an immersive learning experience, enabling you to grasp complex concepts with ease and efficiency. Join us today and unlock your full potential.',
  },
  {
    id: 4,
    iconName: 'Tailored to Your Needs Icon', // Placeholder for the person & setting icon
    iconStyle: 'text-blue-400',
    title: 'Tailored to Your Needs',
    description:
      'We believe in personalized learning. Our adaptive question bank evolves with your progress, identifying your strengths and areas for improvement, ensuring a tailored learning journey that maximizes your potential.',
  },
  {
    id: 5,
    iconName: 'Community and Support Icon', // Placeholder for the people icon
    iconStyle: 'text-blue-400',
    title: 'Community and Support',
    description:
      'Join a thriving community of aviation enthusiasts and professionals. Our dedicated support team is always on hand to assist you, and our forums provide a space to connect, share insights, and grow together.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-900 py-16 md:py-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Features
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Explore the key features that make our platform the ultimate resource for Airbus A320 exam preparation.
          </p>
        </div>

        {/* --- Features Grid (Responsive Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              iconName={feature.iconName}
              iconStyle={feature.iconStyle}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;