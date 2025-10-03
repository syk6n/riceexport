import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import DarkHeader from '../components/DarkHeader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <DarkHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-lime-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Trusted by importers Worldwide: Contact Us
            </h1>
          </div>
        </div>
        
        {/* Animated Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-lime-400 py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-gray-900 font-semibold mx-8">🌾 Premium Rice Export</span>
            <span className="text-gray-900 font-semibold mx-8">✨ Global Quality Standards</span>
            <span className="text-gray-900 font-semibold mx-8">🚚 Global Outreach</span>
            <span className="text-gray-900 font-semibold mx-8">🏆 25+ Years Experience</span>
            <span className="text-gray-900 font-semibold mx-8">🌾 Premium Rice Export</span>
            <span className="text-gray-900 font-semibold mx-8">✨ Global Quality Standards</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span>Contact Us</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  We look forward to building partnerships with you.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-lime-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-colors duration-200 flex items-center group"
                >
                  Send Message
                  <div className="ml-3 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Send className="w-4 h-4 text-lime-400" />
                  </div>
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-lime-400 rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6">Address</h3>
                <div className="space-y-4">
                  <p className="text-lg">
                    Corporate: 5192, Naya Bazar,<br />
                    Delhi, India 110006
                  </p>
                  <p className="text-lg">
                    Registered: F 91, Ashok Vihar,<br />
                    Phase 1, New Delhi, India 110052
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="text-gray-900 font-medium">+91 9810090228</p>
                      <p className="text-gray-900 font-medium">+91-11-47604760</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="text-gray-900">info@navbharatglobal.com</p>
                      <p className="text-gray-900">dgoel@navbharatglobal.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stay Connected */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition-colors duration-200">
                    <Facebook className="w-6 h-6 text-gray-900" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition-colors duration-200">
                    <Twitter className="w-6 h-6 text-gray-900" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition-colors duration-200">
                    <Linkedin className="w-6 h-6 text-gray-900" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition-colors duration-200">
                    <Instagram className="w-6 h-6 text-gray-900" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-300 transition-colors duration-200">
                    <Globe className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's <span className="text-lime-400">Connect</span> there
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;