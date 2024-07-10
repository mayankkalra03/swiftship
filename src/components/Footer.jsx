import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-lg p-4 shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} SwiftShip. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-600 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-600 hover:text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
