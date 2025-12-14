import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setFormErrors({
        submit: error.message || "Login failed. Please check your credentials.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-16 md:pt-24 font-sans">
        <div className="mb-10">
          <div className="text-4xl font-extrabold text-black flex items-center">
            A320
            <div className="w-4 h-4 rounded-full border-2 border-black ml-1 flex items-center justify-center">
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="text-sm tracking-[0.3em] font-medium text-black text-center">
            QUESTION BANK
          </div>
        </div>

        <div
          className={`w-full max-w-sm bg-white rounded-xl shadow-xl p-8 
                    transition-all duration-700 ease-out 
                    ${animationClasses}`}
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Login</h1>
            <p className="text-gray-600">
              Please enter your credentials to log in.
            </p>
          </div>

          {formErrors.submit && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{formErrors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10 placeholder-gray-400 ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="mt-6 flex justify-between text-sm">
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-black transition"
            >
              Forgot your password?
            </a>
            <a
              href="/register"
              className="font-medium text-gray-600 hover:text-black transition"
            >
              Don't have an account?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
