import React from 'react';
import { Wheat, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#facc15] p-2 rounded-lg">
                <Wheat className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">NavBharat Global</h3>
                <p className="text-gray-400">Premium Rice Exports</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              NavBharat Global is a leading exporter of premium quality basmati rice from India. 
              We are committed to delivering exceptional quality products and building lasting 
              partnerships with our international customers.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#facc15]" />
                <span className="text-gray-300">+91 9810090228</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#facc15]" />
                <span className="text-gray-300">+91-11-47604760</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#facc15]" />
                <span className="text-gray-300">info@navbharatglobal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#facc15]" />
                <span className="text-gray-300">dgoel@navbharatglobal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#facc15]" />
                <span className="text-gray-300">5192, Naya Bazar, Delhi, India 110006</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-[#facc15] transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#facc15] transition-colors duration-200">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-[#facc15] transition-colors duration-200">Products</a></li>
              <li><a href="/private-labelling" className="text-gray-300 hover:text-[#facc15] transition-colors duration-200">Private Labelling</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#facc15] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NavBharat Global. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/company/navbharatglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#facc15] transition-colors duration-200"
                aria-label="Visit our LinkedIn page"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61582574560742"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#facc15] transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;