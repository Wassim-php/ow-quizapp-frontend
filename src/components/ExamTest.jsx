import React, { useState, useEffect } from 'react';
import QuestionDisplay from './QuestionDisplay';
import { dummyQuestions } from '../data/dummyQuestions'; 
import { Clock } from 'lucide-react';

const EXAM_DURATION_SECONDS = 3600; // 60 minutes for a standard exam

const ExamTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);
  const [isExamActive, setIsExamActive] = useState(true);
  const totalQuestions = dummyQuestions.length;

  // Timer Effect
  useEffect(() => {
    if (!isExamActive || timeRemaining <= 0) {
      if (timeRemaining === 0) {
        alert("Time's up! Exam automatically submitted.");
        // navigate('/exam-results'); // Auto-submit when time is zero
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    const parts = [
        hours > 0 ? String(hours).padStart(2, '0') : null,
        String(minutes).padStart(2, '0'),
        String(remainingSeconds).padStart(2, '0')
    ].filter(p => p !== null); // Filter out hours if 0

    return parts.join(':');
  };

  const handleAnswerSubmit = (questionId, selectedAnswerId, readyForNext) => {
    // In Exam Mode, you ONLY register the answer here; you do NOT show feedback.
    console.log(`Exam Answer submitted for ${questionId}: ${selectedAnswerId}`);

    if (readyForNext && currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (readyForNext && currentQuestionIndex === totalQuestions - 1) {
      setIsExamActive(false); // Stop the timer
      alert("Exam Finished! Proceeding to results page (to be implemented).");
      // navigate('/exam-results');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header, Timer, and Progress */}
        <div className="flex justify-between items-center mb-6 text-white p-4 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-400">Exam Mode</h1>
          
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-red-400" />
            <span className={`text-2xl font-mono ${timeRemaining <= 300 ? 'text-red-400 font-bold' : 'text-white'}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>

          <span className="text-xl">
            Q: {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>

        {/* The Core Question Component */}
        <QuestionDisplay
          questionData={dummyQuestions}
          currentQuestionIndex={currentQuestionIndex}
          onAnswerSubmit={handleAnswerSubmit}
          isTimedMode={true} // Exam mode IS timed
        />

      </div>
    </div>
  );
};

export default ExamTest;