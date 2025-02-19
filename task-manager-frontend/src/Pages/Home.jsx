import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  const handleNotLoggedIn = () => alert("Please login first");
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-pink-100 animate-gradient">
      <h1 className="text-6xl font-extrabold text-green-800 mb-6 animate-bounce">
        Welcome to Task Fun!
      </h1>
      <p className="text-xl text-gray-700 mb-10">
        Manage your tasks with joy and creativity!
      </p>
      {isLoggedIn ? (
        <Link to="/dashboard">
          <button className="px-8 py-4 bg-white text-pink-500 font-bold rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition duration-300">
            Get Started
          </button>
        </Link>
      ) : (
        <button 
          onClick={handleNotLoggedIn}
          className="px-8 py-4 bg-gray-300 text-gray-700 font-bold rounded-full shadow-lg cursor-not-allowed"
        >
          Get Started
        </button>
      )}
    </div>
  );
}
