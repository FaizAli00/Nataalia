import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white hover:text-purple-500 cursor-pointer font-bold text-4xl">
          Nataalia
        </div>
        <div>
          <ul className="flex space-x-8 font-bold text-xl">
            <li className="text-white hover:cursor-pointer hover:text-purple-400 hover:underline">
            <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:cursor-pointer hover:text-purple-400">
            <Link to="/categories">Categories</Link>
            </li>
            <li className="text-white hover:cursor-pointer hover:text-purple-400">
            <Link to="/shop">Shop</Link>
            </li>
            <li className="text-white hover:cursor-pointer hover:text-purple-400">
            <Link to="/about-us">About</Link>
            </li>
            <li className="text-white hover:cursor-pointer hover:text-purple-400">
            <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="text-white font-bold text-xl">
          <button
            type="button"
            className="rounded-md bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;