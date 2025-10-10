import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('About Us');

  const tabs = [
    { name: 'About Us', active: true },
    { name: 'Journey', active: false },
    { name: 'Vision', active: false },
    { name: 'Mission', active: false }
  ];

  const getContent = () => {
    switch (activeTab) {
      case 'About Us':
        return {
          title: 'Who We Are at NavBharat',
          content: 'At Nav Bharat Global, we are more than just rice exporters — we are ambassadors of India’s rich agricultural heritage. With years of expertise in sourcing, processing, and logistics, we have built a reputation for trust, consistency, and excellence.',
          description: 'We strongly believe that quality has a strong relation with customer confidence which is closely linked with growth. For us, every customer is a partner. Our commitment lies in providing timely service, transparent processes, and premium products that add value to your business.'
        };
      case 'Journey':
        return {
          title: 'Our Export Journey',
          content: 'NavBharat Global has established itself as a trusted name in the rice export industry, building strong partnerships with customers across multiple continents.',
          description: 'Our journey is marked by consistent growth, unwavering commitment to quality, and the trust of our international partners who rely on us for premium basmati rice supplies.'
        };
      case 'Vision':
        return {
          title: 'Our Vision for the Future',
          content: 'To be recognized as a trusted global leader in rice exports, exceeding customer expectations by consistently delivering maintaining the highest standards of professionalism, and fostering long-lasting relationships and connecting the world through the richness of Indian rice.',
          description: 'We aim to expand our reach to new markets while maintaining our commitment to quality, building lasting relationships, and contributing to the growth of the global rice trade.'
        };
      case 'Mission':
        return {
          title: 'Our Mission Statement',
          content: 'To be the preferred choice for international buyers seeking top-quality rice products from India while ensuring customer satisfaction through integrity, reliability, and excellence in every grain.',
          description: 'We are committed to sourcing the finest basmati rice varieties, ensuring proper processing and packaging, and delivering exceptional value to our customers worldwide.'
        };
      default:
        return tabs[0];
    }
  };

  const content = getContent();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 lg:mb-12 justify-center sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
                activeTab === tab.name
                  ? 'bg-[#001f3f] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-[#000435] rounded-full"></div>
              <span>{content.title}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {content.content}
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {content.description}
            </p>
            
            <button className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 group">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="relative">
            <img
              src="https://safiorganics.co.ke/wp-content/uploads/2022/10/goa6.webp"
              alt="Rice farming and export operations"
              className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;