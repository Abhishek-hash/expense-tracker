// src/components/Footer.jsx
//import PropTypes from 'prop-types';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          
          {/* Brand Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Expense Tracker</h2>
          </div>
          
          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/analytics" className="hover:text-gray-400">Analytics</a>
            <a href="/about" className="hover:text-gray-400">About Us</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          &copy; {new Date().getFullYear()} Expense Tracker. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
