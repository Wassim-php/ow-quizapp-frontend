import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const QuestionDisplay = ({
  questionData,
  currentQuestionIndex,
  onAnswerSubmit,
  isTimedMode,
}) => {
  const question = questionData[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sync state when index moves forward
  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsAnimating(false);
  }, [currentQuestionIndex]);

  if (!question) return null;

  const isAnswered = selectedAnswer !== null;

  const handleAnswerSelect = (answerId) => {
    if (showFeedback) return; // Prevent changing answer after feedback shows
    setSelectedAnswer(answerId);
    
    if (!isTimedMode) {
      setTimeout(() => setShowFeedback(true), 300);
    }
    
    // Notify parent of selection
    onAnswerSubmit(question.id, answerId, false);
  };

  const handleNextClick = () => {
    if (!isAnswered) return;
    setIsAnimating(true);
    setTimeout(() => {
      onAnswerSubmit(question.id, selectedAnswer, true); // true = trigger move to next
    }, 500);
  };

  // Helper to check correctness based on your AnswerDTO 'correct' field
  const checkIsCorrect = (answerId) => {
    const answer = question.answers.find(a => a.id === answerId);
    return answer ? answer.correct : false;
  };

  const getCardClass = (answerId) => {
    let classes = "bg-white text-gray-800 hover:bg-gray-100 cursor-pointer";
    const correct = checkIsCorrect(answerId);

    if (showFeedback) {
      if (correct) {
        classes = "bg-green-100 text-green-800 border-green-500 shadow-lg"; 
      } else if (answerId === selectedAnswer) {
        classes = "bg-red-100 text-red-800 border-red-500 shadow-lg"; 
      } else {
        classes = "bg-white text-gray-400 opacity-60"; 
      }
    } else if (answerId === selectedAnswer) {
      classes = "bg-blue-100 text-blue-800 border-blue-500 shadow-inner";
    }

    return `p-4 rounded-lg border-2 transition-all duration-300 ease-in-out ${classes}`;
  };

  const transitionClass = isAnimating ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0';

  return (
    <div className={`bg-white rounded-xl shadow-2xl p-6 md:p-10 transition-all duration-500 ease-out transform ${transitionClass}`}>
      
      {/* Question Text - changed .text to .question for DTO match */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
        {currentQuestionIndex + 1}. {question.question}
      </h3>

      {/* Answer Options - changed .options to .answers for DTO match */}
      <div className="space-y-4">
        {question.answers.map((option, index) => (
          <div
            key={option.id}
            className={getCardClass(option.id)}
            onClick={() => handleAnswerSelect(option.id)}
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium">
                {String.fromCharCode(65 + index)}.
              </span>
              <p className="flex-grow text-lg">{option.text}</p>
              
              {showFeedback && (
                <>
                  {checkIsCorrect(option.id) && <CheckCircle className="w-6 h-6 text-green-600" />}
                  {option.id === selectedAnswer && !checkIsCorrect(option.id) && <XCircle className="w-6 h-6 text-red-600" />}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        {showFeedback ? (
          <button
            onClick={handleNextClick}
            className="px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>Next Question</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-gray-500 italic">Select an answer to reveal feedback</div>
        )}
      </div>

      {/* Explanation section */}
      {showFeedback && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Explanation:</h4>
          <p className="text-gray-600">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;