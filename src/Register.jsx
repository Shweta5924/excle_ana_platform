import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-green-400"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/" className="text-green-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
