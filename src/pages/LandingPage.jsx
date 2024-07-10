import React from 'react';

const LandingPage = () => {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-yellow-800 leading-tight">Welcome to SwiftShip</h1>
          <p className="text-lg text-yellow-600">Your trusted partner for shipment delivery</p>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          <div className="lg:w-1/2 lg:ml-4">
            <div className="p-6">
              <p className="text-2xl lg:text-5xl text-yellow-800 font-black mb-4">Delivering Speed, <br className="lg:hidden" />Securing Trust</p>
              <p className="text-lg lg:text-xl text-yellow-700">Fast, reliable shipping for all your needs. Your packages, our priority.</p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mr-4 mb-6 lg:mb-0">
            <img
              src="https://www.inventiva.co.in/wp-content/uploads/2023/02/package.jpg"
              alt="Package"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12 mb-12">
          <div className="bg-yellow-900/50 rounded-lg p-3 w-full lg:w-[50%] text-center">
            <h2 className="text-4xl lg:text-4xl font-bold text-white">Our Services</h2>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/70 rounded-lg shadow-md">
            <h3 className="text-2xl lg:text-2xl font-semibold text-gray-800 mb-4">Track Your Shipments</h3>
            <p className="text-lg lg:text-base text-gray-600">Easily track the status of your shipments with our user-friendly dashboard.</p>
          </div>
          <div className="p-6 bg-white/70 rounded-lg shadow-md">
            <h3 className="text-2xl lg:text-2xl font-semibold text-gray-800 mb-4">Efficient Delivery Service</h3>
            <p className="text-lg lg:text-base text-gray-600">We ensure prompt and secure delivery of your packages to their destinations.</p>
          </div>
        </section>

        <div className="flex justify-center mt-12 mb-12">
          <div className="bg-yellow-900/50 rounded-lg p-3 w-full lg:w-[50%] text-center">
            <h2 className="text-4xl lg:text-4xl font-bold text-white">Testimonials</h2>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/80 rounded-lg shadow-md">
            <img className="inline-block w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="Hi" />
            <p className="text-black p-4 text-lg lg:text-base">"SwiftShip has revolutionized our logistics! Their timely deliveries and excellent customer service have been instrumental in scaling our operations."</p>
            <h3 className="text-2xl lg:text-xl font-semibold text-gray-800 mt-4">Alex Johnson</h3>
            <h4 className="text-lg lg:text-base">E-commerce Manager</h4>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-md">
            <img className="inline-block w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="Hi" />
            <p className="text-black p-4 text-lg lg:text-base">"I rely on SwiftShip for all my shipping needs. Their intuitive platform and reliable tracking system give me peace of mind, allowing me to focus on growing my business."</p>
            <h3 className="text-2xl lg:text-xl font-semibold text-gray-800 mt-4">Michael Lee</h3>
            <h4 className="text-lg lg:text-base">Small Business Owner</h4>
          </div>
          <div className="p-6 bg-white/80 rounded-lg shadow-md">
            <img className="inline-block w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlJTIwc3F1YXJlfGVufDB8fDB8fHww" alt="Hi" />
            <p className="text-black p-4 text-lg lg:text-base">"As a supply chain professional, I appreciate SwiftShip's efficiency and transparency. They consistently deliver on time, helping us maintain smooth operations."</p>
            <h3 className="text-2xl lg:text-xl font-semibold text-gray-800 mt-4">Jennifer Patel</h3>
            <h4 className="text-lg lg:text-base">Supply Chain Coordinator</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
