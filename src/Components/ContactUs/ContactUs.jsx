import React from 'react';
import Logo from '../../Assets/Logo/logo.jpg';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-20 flex flex-row justify-center items-center">
      <div className="w-3/5 text-lg text-gray-700 text-left pr-4">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>
          Have a question or want to learn more about our products? <br />
          We'd love to hear from you! Please fill out the form below or contact us directly.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="w-2/5 flex justify-end">
        <img src={Logo} alt="Company Logo" className="w-72 h-72" />
      </div>
    </div>
  );
};

export default ContactUs;