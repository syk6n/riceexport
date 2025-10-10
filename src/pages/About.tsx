import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/DarkHeader';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
      {/* Mission Section */}
      <section className="pt-24 sm:pt-32 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                About Us
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-3 lg:mb-4 leading-relaxed">
                Nav Bharat Global: Your Trusted Partner for Quality Rice Exports. Experience our expertise and exceptional service in delivering premium rice products worldwide.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6131391/pexels-photo-6131391.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rice plants and grains"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4518659/pexels-photo-4518659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Rice expertise and manufacturing"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Expertise
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Started in 1920, Nav Bharat Global ranks among the India's most efficient and reliable rice company with a continuous emphasis to build onto its overall rice portfolio serving markets worldwide. With years of experience and expertise in the industry, our focus lies in sourcing, manufacturing, and delivering high-quality rice products to international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Commitment to Results
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our commitment is clear: delivering excellence in every aspect of our business. From sourcing the finest rice varieties to ensuring rigorous quality control, efficient logistics, and exceptional customer service, we strive to achieve tangible results. Our focus on customer satisfaction, operational excellence, sustainable growth, and continuous improvement drives our actions and decisions. We are accountable, transparent, and dedicated to creating value for our stakeholders.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6130374/pexels-photo-6130374.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality control and commitment"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global vision and leadership"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our vision is to be recognized as a global leader in the export of rice and agro commodities from India. We aim to establish ourselves as a trusted and preferred partner for international buyers seeking high-quality agricultural products. Our vision encompasses a commitment to delivering excellence, maintaining the highest standards of quality, and building enduring relationships with customers, suppliers, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Experience
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With years of experience in the rice export industry, Nav Bharat Global brings a wealth of expertise and knowledge to the table. Our team has extensive experience in sourcing, processing, packaging, and exporting a wide range of rice varieties from India to international markets. Over the years, we have established strong relationships with trusted farmers, processors, and suppliers, enabling us to consistently deliver high-quality rice products that meet international standards.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1094137/pexels-photo-1094137.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Years of rice export experience"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#000435]/5 rounded-2xl lg:rounded-3xl p-6 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#000435] mb-1 lg:mb-2">25</div>
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg">Years in Market</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#000435] mb-1 lg:mb-2">99%</div>
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#000435]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
              Ready to Experience Premium Quality Rice?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium basmati rice varieties, each carefully selected and processed to meet international quality standards.
            </p>
            <div className="flex justify-center">
              <Link
                to="/products"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center group"
              >
                View Our Products
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Why Choose Nav Bharat Global
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Four key reasons why it's convenient and reliable to work with us
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-[#000435]/5 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-sm text-gray-600">
                We use only the best rice varieties that retain their premium characteristics for international markets
              </p>
            </div>

            <div className="bg-[#000435]/5 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Speed</h3>
              <p className="text-sm text-gray-600">
                We value your time and guarantee fast processing and delivery while maintaining high quality standards
              </p>
            </div>

            <div className="bg-[#000435]/5 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Variety</h3>
              <p className="text-sm text-gray-600">
                We offer a wide selection of basmati rice varieties taking into account your requirements and budget
              </p>
            </div>

            <div className="bg-[#000435]/5 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-sm text-gray-600">
                We export all over the world with buyers in UAE, Iraq, Saudi Arabia, Vietnam, Lebanon and other countries of Europe, Gulf and Middle East and Africa and MENA regions.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;