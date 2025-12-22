import React, { useState, useEffect } from "react";
import CategoryService from "../services/CategoryService";
import { useNavigate } from "react-router-dom";

const ChooseCategory = ({ testType }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await CategoryService.getCategories();
        // Since your backend uses MessageResponse, access the payload
        const list = data.payload ? data.payload : data;
        setCategories(list || []);
      } catch (error) {
        console.error("Error rendering the categories: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategorySelect = (categoryId) => {
    // We send the categoryId to the next page via state
    console.log("Button clicked: ", testType);
    const navConfig = { state: { categoryId } };

    if (testType === "exam") {
      navigate("/exam-test", navConfig);
    } else if (testType === "practice") {
      navigate("/practice-test", navConfig);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading Categories...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Dynamic header based on the prop you passed in App.js */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Select a Topic for your {testType === 'practice' ? 'Practice' : 'Exam'}
        </h1>
        <p className="text-gray-600 mb-8">
          Choose a category to load the {testType} questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent text-left group ${
                testType === 'exam' ? 'hover:border-purple-500' : 'hover:border-teal-500'
              }`}
            >
              <h2 className={`text-xl font-semibold text-gray-700 ${
                testType === 'exam' ? 'group-hover:text-purple-600' : 'group-hover:text-teal-600'
              }`}>
                {cat.catName}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Start {testType} test
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseCategory;