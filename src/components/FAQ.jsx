import React, { useEffect, useState } from 'react';
import FAQItem from './FAQItem';

// Data structure for the questions, with placeholder text for the answers.
const faqData = [
  { question: 'What is A320 Question Bank?', answer: 'Placeholder: Please add the detailed description of the A320 Question Bank platform here.' },
  { question: 'Who is A320 Question Bank for?', answer: 'Placeholder: Describe the target audience, including new pilots, seasoned professionals, and aviation enthusiasts.' },
  { question: 'Can I use A320 Question Bank if I\'m not currently pursuing my type rating?', answer: 'Placeholder: Clarify who can use the content (e.g., recurrent training, general knowledge, non-professional use).' },
  { question: 'How can A320 Question Bank help me prepare for my OPC/LPC or simulator recurrent training?', answer: 'Placeholder: Explain how the platform supports regulatory check flights and recurrent training.' },
  { question: 'What types of questions can I expect?', answer: 'Placeholder: Detail the categories, complexity, and source of the technical questions (e.g., systems, performance, procedures).' },
  { question: 'Is the content updated regularly?', answer: 'Placeholder: Provide information about content maintenance, accuracy, and update frequency.' },
  { question: 'Can I access A320 Question Bank on mobile devices?', answer: 'Placeholder: Confirm mobile responsiveness and access methods (e.g., web app, dedicated app).' },
  { question: 'How much does it cost to access A320 Question Bank?', answer: 'Placeholder: Direct users to the pricing/membership page and briefly mention the subscription model.' },
  { question: 'Is there a demo version available?', answer: 'Placeholder: Confirm or deny the availability of a free trial or demo test version.' },
  { question: 'Can I track my progress on A320 Question Bank?', answer: 'Placeholder: Describe the progress tracking, statistics dashboard, and history features.' },
  { question: 'How do I contact support if I have any issues?', answer: 'Placeholder: Provide contact methods (e.g., contact form, email, support chat).' },
  { question: 'Do you provide explanations for the questions?', answer: 'Placeholder: Explain whether detailed explanations are provided for correct and incorrect answers.' },
];

const FAQ = () => {
  // Animation state for the entire FAQ container
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-6';

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-16 md:py-24 font-sans">
      
      {/* --- FAQ Container (Animated) --- */}
      <div 
        className={`w-full max-w-4xl bg-white rounded-xl shadow-xl p-6 md:p-10 lg:p-12 
                    transition-all duration-700 ease-out 
                    ${animationClasses}`}
      >
        
        {/* --- Header --- */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 border-b-2 border-blue-600 pb-2 inline-block">
            Frequently Asked Questions (FAQ)
          </h1>
        </div>

        {/* --- FAQ List --- */}
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answerPlaceholder={item.answer}
            />
          ))}
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Can't find the answer you're looking for? <a href="/contact-us" className="text-blue-600 hover:text-blue-700 underline">Contact our support team</a>.
        </div>
      </div>
    </div>
  );
};

export default FAQ;