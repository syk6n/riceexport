import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Ready to experience premium basmati rice? Contact us today for quotes, 
                bulk orders, or any inquiries about our products.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Phone</h3>
                  <p className="text-sm lg:text-base text-gray-300">+91 9810090228</p>
                  <p className="text-sm lg:text-base text-gray-300">+91-11-47604760</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Email</h3>
                  <p className="text-sm lg:text-base text-gray-300 break-all">info@navbharatglobal.com</p>
                  <p className="text-sm lg:text-base text-gray-300 break-all">dgoel@navbharatglobal.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Address</h3>
                  <p className="text-sm lg:text-base text-gray-300">
                    Corporate: 5192, Naya Bazar, Delhi, India 110006
                  </p>
                  <p className="text-sm lg:text-base text-gray-300">
                    Registered: F 91, Ashok Vihar, Phase 1, New Delhi, India 110052
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Business Hours</h3>
                  <p className="text-sm lg:text-base text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-sm lg:text-base text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800 p-4 lg:p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-emerald-300" />
                <h3 className="text-base lg:text-lg font-semibold">Export Capabilities</h3>
              </div>
              <p className="text-sm lg:text-base text-emerald-100">
                We export to multiple countries with full documentation support, 
                competitive shipping rates, and reliable delivery timelines.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 text-gray-900">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 lg:py-4 rounded-lg text-sm lg:text-base font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;