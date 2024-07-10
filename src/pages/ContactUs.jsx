import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID and template ID
    const serviceID = 'service_spoegoz';
    const templateID = 'template_dzjyu7l';

    // Prepare the email template parameters
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, 'TsWsOStEDjTM4EVNM')
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        setStatusMessage('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('Email sending failed:', error);
        setStatusMessage('Oops! Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-yellow-800 text-center mb-6">Get in touch!</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 p-4">
            <img 
              src="https://burst.shopifycdn.com/photos/contact-us-image.jpg?width=1000&format=pjpg&exif=0&iptc=0" 
              alt="Contact Us" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 p-4">
            <form onSubmit={handleSubmit} className="bg-white/40 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none bg-white/30 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none bg-white/30 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="appearance-none bg-white/30 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-yellow-800 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
              <span className="text-sm text-green-600 mt-4 block text-center">{statusMessage}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
