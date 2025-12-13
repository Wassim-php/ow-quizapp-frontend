import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <header className="bg-black flex items-center justify-between px-8 py-6">
      <div className="flex items-center">
        <Link to="/">
          <div className="text-white">
            <div className="text-4xl font-bold tracking-tight">A320</div>
            <div className="text-xs tracking-widest mt-1">QUESTION BANK</div>
          </div>
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <a
          href="/testChooser"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Start Demo
        </a>
        <a
          href="/memberships"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Memberships
        </a>
        <a
          href="/about-us"
          className="text-white hover:text-gray-300 transition-colors"
        >
          About Us
        </a>
        <a
          href="/contact-us"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact Us
        </a>
        <a
          href="/register"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Register
        </a>
        <Link to="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
