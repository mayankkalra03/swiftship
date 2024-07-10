import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white/40 backdrop-blur-lg p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-yellow-800 text-2xl font-bold font-serif">SwiftShip</a>
        <div className="flex items-center space-x-8 font-semibold">
          <a href="/user/create-shipment" className="text-yellow-800 hover:text-yellow-600 transition duration-300 ease-in-out">Create Shipment</a>
          <a href="/user/dashboard" className="text-yellow-800 hover:text-yellow-600 transition duration-300 ease-in-out">My Shipments</a>
          <a href="/about" className="text-yellow-800 hover:text-yellow-600 transition duration-300 ease-in-out">About us</a>
          <a href="/contact" className="text-yellow-800 hover:text-yellow-600 transition duration-300 ease-in-out">Contact us</a>
          <a href="/login" className="text-yellow-800  py-2 px-4 rounded-lg border-2 border-yellow-800 transition duration-300 ease-in-out hover:text-yellow-600">Login</a>
          <a href="/signup" className="text-yellow-800  py-2 px-4 rounded-lg border-2 border-yellow-800 transition duration-300 ease-in-out hover:text-yellow-600">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
