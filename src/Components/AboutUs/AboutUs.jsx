import React from 'react';
import Logo from '../../Assets/Logo/logo.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-20 flex flex-row justify-center items-center">
      <div className="w-3/5 text-lg text-gray-700 text-left pr-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          Welcome to [House Of Nataalia!]! We are passionate about [Products]. <br />
          Our team of dedicated professionals is committed to providing <br /> [Your Unique Value Proposition].
        </p>
      </div>
      <div className="w-2/5 flex justify-end">
        <img src={Logo} alt="Company Logo" className="w-72 h-72" />
      </div>
    </div>
  );
};

export default AboutUs;