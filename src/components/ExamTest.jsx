import React, { useState, useEffect } from "react";
import QuestionDisplay from "./QuestionDisplay";
import { Clock } from "lucide-react";
import QuestionService from "../services/QuestionService";
import { useLocation } from "react-router-dom";

const EXAM_DURATION_SECONDS = 3600;

const ExamTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);
  const [isExamActive, setIsExamActive] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const categoryId = location.state?.categoryId;
  console.log("Received Category ID:", categoryId);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!categoryId) {
        console.error("No category selected!");
        return;
      }

      try {
        setLoading(true);
        const data = await QuestionService.getQuestionsByCategory(categoryId);
        setQuestions(data || []);
      } catch (error) {
        console.error("Failed to load questions: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (!isExamActive || timeRemaining <= 0) {
      if (timeRemaining === 0 && isExamActive) {
        setIsExamActive(false);
        alert("Time's up! Exam automatically submitted.");
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const parts = [
      hours > 0 ? String(hours).padStart(2, "0") : null,
      String(minutes).padStart(2, "0"),
      String(remainingSeconds).padStart(2, "0"),
    ].filter((p) => p !== null);

    return parts.join(":");
  };

  const handleAnswerSubmit = (questionId, selectedAnswerId, readyForNext) => {
    if (readyForNext && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (readyForNext && currentQuestionIndex === questions.length - 1) {
      setIsExamActive(false);
      alert("Exam Finished!");
    }
  };

  if (loading)
    return <div className="text-white text-center py-20">Loading Exam...</div>;
  if (!categoryId) {
    return (
      <div className="text-white text-center py-20">
        <p>Please go back and select a category first.</p>
        <button onClick={() => navigate("/testChooser")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6 text-white p-4 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-400">Exam Mode</h1>
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-red-400" />
            <span
              className={`text-2xl font-mono ${
                timeRemaining <= 300
                  ? "text-red-400 font-bold animate-pulse"
                  : "text-white"
              }`}
            >
              {formatTime(timeRemaining)}
            </span>
          </div>
          <span className="text-xl">
            Q: {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>

        {questions.length > 0 && (
          <QuestionDisplay
            questionData={questions}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSubmit={handleAnswerSubmit}
            isTimedMode={true}
          />
        )}
      </div>
    </div>
  );
};

export default ExamTest;
