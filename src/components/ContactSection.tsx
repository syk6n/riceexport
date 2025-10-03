import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us? Contact our team for inquiries about our premium rice products and export services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full mb-4">
              <Phone className="h-7 w-7 lg:h-8 lg:w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-sm lg:text-base text-gray-600">+91 123 456 7890</p>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full mb-4">
              <Mail className="h-7 w-7 lg:h-8 lg:w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-sm lg:text-base text-gray-600">info@navbharatglobal.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-emerald-100 rounded-full mb-4">
              <MapPin className="h-7 w-7 lg:h-8 lg:w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-sm lg:text-base text-gray-600">Mumbai, India</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Send Us a Message</span>
            <Send className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12 lg:mt-20 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
