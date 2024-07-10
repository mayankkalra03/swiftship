import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to user or admin dashboard based on role
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-white/30 rounded-lg shadow-lg flex items-center justify-center">
        <div className="hidden lg:block lg:w-1/2">
          <img 
            src="https://www.pwc.com/gx/en/services/people-organisation/workforce-of-the-future/yellow-world.jpg" 
            alt="Login Illustration" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="lg:w-1/2 w-full p-4">
          <h1 className="text-2xl font-bold text-yellow-800 text-center mb-6">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="appearance-none bg-white/30 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="appearance-none bg-white/30 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-800 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
