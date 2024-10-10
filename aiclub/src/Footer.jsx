import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h5 className="text-lg font-semibold mb-2">My Company</h5>
          <p className="text-sm">
            We are committed to delivering the best products to our customers. Connect with us on social media.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3">
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3">
          <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-white hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <small>&copy; {new Date().getFullYear()} AI Club. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
