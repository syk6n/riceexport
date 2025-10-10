import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      number: '25+',
      label: 'Years of Experience',
      description: 'With decades of experience, Nav Bharat Global has grown into a trusted name in international trade, exporting premium Basmati and Non-Basmati rice to diverse global markets. With expertise in sourcing, processing, and logistics, Nav Bharat Global combines traditional knowledge with modern practices to deliver excellence.',
      image: 'https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Award,
      gradient: 'from-[#000435] to-[#000435]',
      bgColor: 'bg-[#000435]/10',
      textColor: 'text-[#000435]'
    },
    {
      number: '40,000+',
      label: 'Tons Exported Annually',
      description: 'With a robust capacity of exporting 40,000+ tons of rice annually, Nav Bharat Global stands as a trusted partner in meeting large-scale global demands. Our scale reflects not just volume, but the consistency, reliability, and excellence we bring to every shipment.',
      image: 'https://images.pexels.com/photos/4198935/pexels-photo-4198935.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: TrendingUp,
      gradient: 'from-[#000435] to-[#000435]',
      bgColor: 'bg-[#000435]/10',
      textColor: 'text-[#000435]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Experience Our Excellence?
              </h3>
              <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients worldwide who trust Nav Bharat Global for premium rice exports
              </p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-yellow-400 text-[#000435] px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg">
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;