import React from 'react';
import { Wheat, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-2 rounded-lg">
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
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+91 9810090228</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+91-11-47604760</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">info@navbharatglobal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">dgoel@navbharatglobal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">5192, Naya Bazar, Delhi, India 110006</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Products</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Basmati Rice 1121</li>
              <li className="text-gray-300">Traditional Basmati</li>
              <li className="text-gray-300">Organic Basmati</li>
              <li className="text-gray-300">Pusa Basmati</li>
              <li className="text-gray-300">Steam Basmati</li>
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
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;