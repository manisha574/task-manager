import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-800 drop-shadow-lg">
          Task Manager
        </Link>
        <div>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="px-4 text-gray-800 hover:text-pink-500 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="px-4 text-gray-800 hover:text-pink-500 transition">
                Login
              </Link>
              <Link to="/register" className="px-4 text-gray-800 hover:text-pink-500 transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
