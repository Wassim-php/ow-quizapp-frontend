import React, { useEffect, useState } from 'react';

// Reusable component for each policy section
const PolicySection = ({ title, children }) => {
  return (
    // Applying hover effect: slight lift and shadow increase
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 mb-6 
                    transition-all duration-300 transform 
                    hover:shadow-lg hover:translate-y-[-2px] hover:border-blue-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {children}
      </p>
    </div>
  );
};

const TermsAndConditions = () => {
  // Animation state for the entire page content
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8';

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-16 md:py-24">
      <div 
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${animationClasses}`}
      >
        
        {/* --- Header --- */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-gray-600">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>

        {/* --- Policy Sections --- */}
        <div className="space-y-6">
          
          <PolicySection title="Acceptance of Terms">
            By using the Website, you confirm that you are at least 18 years of age or have the consent of a parent or guardian, you agree to comply with all applicable laws and regulations in connection with your use of the Website.
          </PolicySection>
          
          <PolicySection title="User Accounts">
            To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </PolicySection>
          
          <PolicySection title="Content Use">
            The content provided on this Website, including but not limited to text, graphics, and images, is for informational and educational purposes only. You may not reproduce, distribute, or modify any content without our express written permission.
          </PolicySection>
          
          <PolicySection title="Intellectual Property">
            All intellectual property rights in the content of this Website are owned by us or our licensors. You acknowledge that you do not acquire any ownership rights by using this Website.
          </PolicySection>
          
          <PolicySection title="Limitation of Liability">
            To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the Website. We do not guarantee the accuracy, completeness, or reliability of any content.
          </PolicySection>
          
          <PolicySection title="Refund Policy">
            We maintain a No Refund Policy for all purchases, except in cases of verified errors on our part, such as technical issues preventing access or payment processing mistakes. Refunds will not be granted for dissatisfaction, misuse, or change of mind, as we provide detailed information and demos to showcase our services. Refund requests for eligible cases can be submitted to our support team and will be reviewed on a case-by-case basis. By purchasing, you agree to this policy.
          </PolicySection>
          
          <PolicySection title="Governing Law">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of Cyprus. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Cyprus.
          </PolicySection>
          
          <PolicySection title="Changes to Terms">
            We reserve the right to modify these Terms and Conditions at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of the Website after any such changes constitutes your acceptance of the new terms.
          </PolicySection>

          <PolicySection title="Contact Information">
            If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@a320questionbank.com" className="text-blue-600 hover:underline">info@a320questionbank.com</a> or visit our Contact Us page on the website.
          </PolicySection>
        </div>

        {/* --- Footer Stamp --- */}
        <div className="mt-8 text-sm text-gray-500 flex justify-between">
          <span>Last updated: May 19, 2025</span>
          <a href="/contact-us" className="text-blue-600 hover:underline">Questions? Contact Us</a>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;