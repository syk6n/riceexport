import React, { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp } from 'lucide-react';

const Stats = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const animateValue = (setter: (val: number) => void, end: number, duration: number, suffix = '') => {
            const start = 0;
            const increment = end / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setter(end);
                clearInterval(timer);
              } else {
                setter(Math.floor(current));
              }
            }, 16);
          };

          animateValue(setHappyClients, 500, 2000);
          animateValue(setCountries, 25, 2000);
          animateValue(setYearsExperience, 50, 2000);
          animateValue(setSatisfaction, 100, 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      number: '50+',
      label: 'Years of Experience',
      description: 'With decades of experience, Nav Bharat Global has grown into a trusted name in international trade, exporting premium Basmati and Non-Basmati rice to diverse global markets. With expertise in sourcing, processing, and logistics, Nav Bharat Global combines traditional knowledge with modern practices to deliver excellence.',
      image: 'https://img.freepik.com/premium-photo/photo-realistic-as-successful-symbol-with-copy-space-project-planning-concept-as-artistic-ren_980716-429238.jpg?semt=ais_hybrid&w=740&q=80',
      icon: Award,
      gradient: 'from-[#000435] to-[#000435]',
      bgColor: 'bg-[#000435]/10',
      textColor: 'text-[#000435]'
    },
    {
      number: '40,000+',
      label: 'Tons Exported Annually',
      description: 'Currently, with a robust capacity of exporting 40,000+ tons of rice annually to importers worldwide, Nav Bharat Global stands as a trusted partner in meeting large-scale global demands. Our scale reflects not just volume, but the consistency, reliability, and excellence we bring to every shipment.',
      image: 'https://tradebrains-wp.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/10/Rice-export-restriction.jpg',
      icon: TrendingUp,
      gradient: 'from-[#000435] to-[#000435]',
      bgColor: 'bg-[#000435]/10',
      textColor: 'text-[#000435]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={statsRef} className="mb-12 lg:mb-20 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#000435] mb-2">{happyClients}+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#000435] mb-2">{countries}+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#000435] mb-2">{yearsExperience}+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#000435] mb-2">{satisfaction}%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-[#000435] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-600">Our Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that speak to our commitment and excellence in rice export industry
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-80`}></div>
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                      <div className={`text-2xl sm:text-3xl font-bold ${stat.textColor}`}>
                      <div className="text-2xl sm:text-3xl font-bold text-[#000435]">
                        {stat.number}
                      </div>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-yellow-400 rounded-full mr-4"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {stat.label}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {stat.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center px-3 py-1 ${stat.bgColor} rounded-full`}>
                      <div className="inline-flex items-center px-3 py-1 bg-[#000435]/10 rounded-full">
                        <span className={`text-xs font-medium ${stat.textColor}`}>
                        <span className="text-xs font-medium text-[#000435]">
                          Industry Leading
                        </span>
                        </span>
                      </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;