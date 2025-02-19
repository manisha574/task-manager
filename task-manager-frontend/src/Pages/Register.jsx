import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Services/authService';
import React from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await registerUser({ username, email, password });
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-pink-100 animate-gradient p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-800">Register</h2>
        {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-green-200 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-green-200 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-green-200 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button 
          type="submit"
          className="w-full px-3 py-2 bg-pink-500 text-white rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
