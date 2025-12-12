import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import Footer from "./Footer";

const RegisterSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    howYouHeardAboutUs: "",
    termsAccepted: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.nickname.trim()) {
      errors.nickname = "Nickname is required";
    }
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
    if (!formData.passwordConfirmation) {
      errors.passwordConfirmation = "Please confirm your password";
    } else if (formData.password !== formData.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords do not match";
    }
    if (!formData.howYouHeardAboutUs) {
      errors.howYouHeardAboutUs = "Please select how you heard about us";
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = "You must agree to the terms and conditions";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
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
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          nickname: formData.nickname,
          email: formData.email,
          password: formData.password,
          howYouHeardAboutUs: formData.howYouHeardAboutUs
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      console.log("Registration successful:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setFormErrors({
        submit: error.message || "Registration failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

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
          className={`w-full max-w-lg bg-white rounded-xl shadow-xl p-8 
                    transition-all duration-700 ease-out 
                    ${animationClasses}`}
        >
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Register</h1>
            <p className="text-gray-600">Register an account for free!</p>
          </div>

          {formErrors.submit && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{formErrors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={formData.nickname}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${
                  formErrors.nickname ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {formErrors.nickname && (
                <p className="text-red-500 text-xs mt-1">{formErrors.nickname}</p>
              )}
            </div>

            <div>
              <input
                type="email"
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
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10 placeholder-gray-400 ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <Eye size={20} />
                </button>
                {formErrors.password && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPasswordConfirmation ? "text" : "password"}
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10 placeholder-gray-400 ${
                    formErrors.passwordConfirmation ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <Eye size={20} />
                </button>
                {formErrors.passwordConfirmation && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.passwordConfirmation}</p>
                )}
              </div>
            </div>

            <div>
              <select
                name="howYouHeardAboutUs"
                value={formData.howYouHeardAboutUs}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-600 ${
                  formErrors.howYouHeardAboutUs ? "border-red-500" : "border-gray-300"
                }`}
                required
              >
                <option value="">How did you hear about us?</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Colleague">Friend/Colleague</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.howYouHeardAboutUs && (
                <p className="text-red-500 text-xs mt-1">{formErrors.howYouHeardAboutUs}</p>
              )}
            </div>

            <div className="flex items-start pt-2">
              <input
                id="terms"
                name="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`h-4 w-4 border-gray-300 rounded focus:ring-blue-500 mt-1 ${
                  formErrors.termsAccepted ? "border-red-500" : ""
                }`}
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  terms and conditions
                </a>
              </label>
              {formErrors.termsAccepted && (
                <p className="text-red-500 text-xs ml-2">{formErrors.termsAccepted}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="mt-6 text-sm text-right">
            <a
              href="/login"
              className="font-medium text-gray-600 hover:text-black transition"
            >
              Already have an account?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterSection;
