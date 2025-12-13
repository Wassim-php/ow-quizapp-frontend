import React from "react";
import MembershipCard from "./MembershipCard";
import { useInView } from "../hooks/useInView";
const membershipsData = [
  {
    duration: "14-Day Membership",
    description:
      "Perfect for quick revision — ideal for last-minute brushing up on key subjects before your exam.",
    price: "17",
    perMonth: null,
    isPopular: false,
  },
  {
    duration: "1-Month Membership",
    description:
      "Designed for focused exam study — a full month to prepare thoroughly and build confidence.",
    price: "29",
    perMonth: "29",
    isPopular: true,
  },
  {
    duration: "3-Month Membership",
    description:
      "Best suited for deep learning — plenty of time to review all areas at your own pace.",
    price: "69",
    perMonth: "23",
    isPopular: false,
  },
  {
    duration: "6-Month Membership",
    description:
      "Ideal for consistent, longer-term preparation — stay sharp over several months of practice.",
    price: "89",
    perMonth: "15",
    isPopular: false,
  },
  {
    duration: "12-Month Membership",
    description:
      "Perfect for year-round readiness — get full access to stay updated and revise any time.",
    price: "109",
    perMonth: "9",
    isPopular: false,
  },
];

const MembershipsSection = () => {
  const [sectionRef, isVisible] = useInView({ threshold: 0.1 });

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8';

  return (
    <div className="bg-gray-800 py-16 md:py-24 font-sans text-white">
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${animationClasses}`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Our Memberships</h2>
          <p className="mt-4 text-blue-200 text-lg max-w-3xl mx-auto">
            Our memberships provide access to a comprehensive dashboard where
            users can view their test statistics, history, and results. Members
            also enjoy full access to our extensive question database, enhancing
            their preparation for Airbus A320 exams.
          </p>
        </div>

        {/* Membership Cards Grid (Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipsData.map((membership, index) => (
            <div key={membership.duration} className="relative">
              <MembershipCard
                duration={membership.duration}
                description={membership.description}
                price={membership.price}
                perMonth={membership.perMonth}
                isPopular={membership.isPopular}
                // --- NEW PROP PASSING FOR STAGGERED ANIMATION ---
                isVisible={isVisible}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipsSection;