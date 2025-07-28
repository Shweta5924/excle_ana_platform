import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 to-pink-300 text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">Welcome to Excel Analysis Platform</h1>
      <p className="text-gray-700 mb-6">Upload, analyze, and manage your Excel files efficiently.</p>
      <div className="space-x-4">
        <Link to="/" className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-blue-100">
          Login
        </Link>
        <Link to="/register" className="bg-white text-green-600 px-6 py-2 rounded shadow hover:bg-green-100">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Landing;
