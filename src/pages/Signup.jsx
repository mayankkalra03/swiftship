import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Firebase authentication with email and password
      const response = await createUserWithEmailAndPassword(auth, email, password);

      // Assuming you have a Firebase Firestore setup, you can store additional user details here
      const user = response.user;
      await user.updateProfile({
        displayName: fullName,
      });
      // Example for saving additional user details to Firestore
      // const userData = {
      //   fullName: fullName,
      //   email: email,
      //   phoneNumber: phoneNumber,
      //   address: address,
      // };
      // await firebase.firestore().collection('users').doc(user.uid).set(userData);

      console.log('User registered!', response);
      // Optionally, you can redirect to another page or show a success message.
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6">
      <div className="max-w-4xl w-full p-8 bg-white/40 rounded-lg shadow-lg flex items-center justify-center">
        <div className="hidden lg:block lg:w-1/2">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/029/329/258/large_2x/focused-hand-writes-on-a-notebook-embracing-the-art-of-work-vertical-mobile-wallpaper-ai-generated-free-photo.jpg" 
            alt="Signup Illustration" 
            className="w-auto h-full rounded-lg shadow-md"
          />
        </div>
        <div className="lg:w-1/2 w-full p-4">
          <h2 className="text-2xl font-bold text-yellow-800 text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline resize-none h-20"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-yellow-800 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
