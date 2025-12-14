import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const QuestionDisplay = ({
  questionData, // The full array of questions
  currentQuestionIndex,
  onAnswerSubmit, // Function to call when an answer is submitted (moves to next question)
  isTimedMode, // Boolean to adjust behavior (e.g., immediate feedback)
}) => {
  const question = questionData[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset state when the question index changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsAnimating(false);
  }, [currentQuestionIndex]);

  if (!question) {
    return (
      <div className="text-center text-xl text-gray-500 py-12">
        Quiz complete! Proceed to results.
      </div>
    );
  }

  const isAnswered = selectedAnswer !== null;

  const handleAnswerSelect = (answerId) => {
    if (showFeedback) return;

    setSelectedAnswer(answerId);
    
    
    if (!isTimedMode) {
      setTimeout(() => setShowFeedback(true), 300);
    }
    
    // In exam mode, we generally wait until the end to show feedback, 
    // but the selection must be registered.
    onAnswerSubmit(question.id, answerId, false); // Register the answer immediately
    
    if (isTimedMode) {
        // In Exam Mode, just register the selection and move on, or wait for next button click
        // For simplicity, we'll implement a 'Next' button action below.
    }
  };

  const handleNextClick = () => {
    if (!isAnswered) return;

    // Trigger the exit animation
    setIsAnimating(true);
    
    // Wait for animation, then call the parent function to change the question index
    setTimeout(() => {
      onAnswerSubmit(question.id, selectedAnswer, true); // True indicates ready for next question
    }, 500); // Matches the animation duration
  };

  const isCorrect = (answerId) => {
    return answerId === question.correctAnswerId;
  };

  // Utility function for smooth design and feedback
  const getCardClass = (answerId) => {
    let classes = "bg-white text-gray-800 hover:bg-gray-100 cursor-pointer";

    if (showFeedback) {
      if (isCorrect(answerId)) {
        classes = "bg-green-100 text-green-800 border-green-500 shadow-lg"; // Correct answer
      } else if (answerId === selectedAnswer) {
        classes = "bg-red-100 text-red-800 border-red-500 shadow-lg"; // Selected wrong answer
      } else {
        classes = "bg-white text-gray-400 opacity-60"; // Unselected answers
      }
    } else if (answerId === selectedAnswer) {
      classes = "bg-blue-100 text-blue-800 border-blue-500 shadow-inner"; // Selected but not yet validated
    }

    return `p-4 rounded-lg border-2 transition-all duration-300 ease-in-out ${classes}`;
  };

  // Animation for question transition
  const transitionClass = isAnimating 
    ? 'opacity-0 translate-x-12' 
    : 'opacity-100 translate-x-0';

  return (
    <div 
      className={`bg-white rounded-xl shadow-2xl p-6 md:p-10 transition-all duration-500 ease-out transform ${transitionClass}`}
    >
      
      {/* Question Text */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
        {currentQuestionIndex + 1}. {question.text}
      </h3>

      {/* Answer Options */}
      <div className="space-y-4">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={getCardClass(option.id)}
            onClick={() => handleAnswerSelect(option.id)}
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium">
                {String.fromCharCode(64 + option.id)}.
              </span>
              <p className="flex-grow text-lg">{option.text}</p>
              
              {showFeedback && (
                <>
                  {isCorrect(option.id) && <CheckCircle className="w-6 h-6 text-green-600" />}
                  {option.id === selectedAnswer && !isCorrect(option.id) && <XCircle className="w-6 h-6 text-red-600" />}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Next Button and Explanation */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        {isTimedMode || (showFeedback && isAnswered) ? (
          <button
            onClick={handleNextClick}
            disabled={!isAnswered}
            className={`
              px-6 py-3 text-lg font-medium rounded-lg transition-colors duration-300 
              flex items-center space-x-2 
              ${!isAnswered 
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}
            `}
          >
            <span>Next Question</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-gray-500">Select an answer to continue.</div>
        )}
      </div>

      {/* Practice Mode Explanation (only visible when feedback is shown) */}
      {showFeedback && !isTimedMode && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Explanation:</h4>
          <p className="text-gray-600">
            {question.explanation}
          </p>
        </div>
      )}

    </div>
  );
};

export default QuestionDisplay;