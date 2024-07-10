import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-yellow-800 text-center mb-6">About Us</h1>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1545591841-4a97f1da8d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about-us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 mt-4 lg:mt-0">
            <p className="text-black leading-relaxed">
              SwiftShip is dedicated to providing seamless and efficient shipment delivery services across the globe.
              With a focus on reliability and customer satisfaction, we ensure that your packages reach their destinations
              safely and on time.
            </p>
            <p className="text-black mt-4 leading-relaxed">
              Our team consists of logistics experts who are committed to delivering exceptional service,
              supported by state-of-the-art technology for tracking and managing shipments.
            </p>
            <p className="text-black mt-4 leading-relaxed">
              Whether you are a small business owner or a large enterprise, SwiftShip is your trusted partner
              for all your shipping needs. Join thousands of satisfied customers who rely on us for efficient,
              secure, and cost-effective delivery solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
