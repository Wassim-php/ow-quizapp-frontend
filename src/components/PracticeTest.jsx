import React, { useState } from 'react';
import QuestionDisplay from './QuestionDisplay';
// Dummy data for demonstration
import { dummyQuestions } from '../data/dummyQuestions'; 

const PracticeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const totalQuestions = dummyQuestions.length;

  const handleAnswerSubmit = (questionId, selectedAnswerId, readyForNext) => {
    // In a real app, you would save the answer to a state/context or database here.
    console.log(`Question ${questionId} answered with: ${selectedAnswerId}`);

    if (readyForNext && currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (readyForNext && currentQuestionIndex === totalQuestions - 1) {
      alert("Quiz Finished! Proceeding to results page (to be implemented).");
      // navigate('/practice-results'); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Progress */}
        <div className="flex justify-between items-center mb-6 text-white">
          <h1 className="text-3xl font-bold">Practice Mode</h1>
          <span className="text-xl">
            Question {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>

        {/* The Core Question Component */}
        <QuestionDisplay
          questionData={dummyQuestions}
          currentQuestionIndex={currentQuestionIndex}
          onAnswerSubmit={handleAnswerSubmit}
          isTimedMode={false} // Practice mode is NOT timed
        />

      </div>
    </div>
  );
};

export default PracticeTest;