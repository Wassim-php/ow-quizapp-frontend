import React, { useEffect, useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import QuestionService from "../services/QuestionService";
import { useLocation } from "react-router-dom";

const PracticeTest = () => {
  const location = useLocation();
  const categoryId = location.state?.categoryId;
  console.log("Received Category ID:", categoryId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!categoryId) {
        console.error("No category selected!");
        return;
      }

      try {
        setLoading(true);
        const data = await QuestionService.getQuestionsByCategory(categoryId);
        // data comes from response.data.payload in your service
        setQuestions(data || []);
      } catch (error) {
        console.error("Failed to load questions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []); // [] Ensures we only fetch once on mount

  const handleAnswerSubmit = (questionId, selectedAnswerId, readyForNext) => {
    console.log(`Question ${questionId} answered with: ${selectedAnswerId}`);

    // logic for moving to next question
    // Note the .length fix here
    if (readyForNext && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (readyForNext && currentQuestionIndex === questions.length - 1) {
      alert("Quiz Finished!");
    }
  };

  if (loading)
    return <div className="text-white text-center py-20">Loading...</div>;
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
        <div className="flex justify-between items-center mb-6 text-white">
          <h1 className="text-3xl font-bold">Practice Mode</h1>
          <span className="text-xl">
            {/* Fixed: Use .length to avoid "Objects are not valid as child" error */}
            Question {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>

        {questions.length > 0 && (
          <QuestionDisplay
            questionData={questions}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSubmit={handleAnswerSubmit}
            isTimedMode={false}
          />
        )}
      </div>
    </div>
  );
};

export default PracticeTest;
