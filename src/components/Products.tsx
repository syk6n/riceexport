import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Leaf, Clock, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Basmati Rice',
      description: 'Premium basmati varieties including 1121, 1718, 1509, Pusa 1401, Pusa, and Traditional basmati rice',
      image: 'https://images.pexels.com/photos/1094137/pexels-photo-1094137.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['6 Premium Varieties', 'Extra Long Grain', 'Export Grade']
    },
    {
      name: 'Parboiled Rice',
      description: 'High-quality parboiled rice varieties with excellent nutritional value and extended shelf life',
      image: 'https://images.pexels.com/photos/4110071/pexels-photo-4110071.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['5% Broken', '10% Broken', 'Enhanced Nutrition']
    },
    {
      name: 'Sugandha & Sharbati Rice',
      description: 'Aromatic non-basmati rice varieties known for their distinctive fragrance and taste',
      image: 'https://images.pexels.com/photos/4518659/pexels-photo-4518659.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['2 Varieties', 'Aromatic', 'Premium Quality']
    },
    {
      name: 'Organic Rice',
      description: 'Certified organic rice grown without synthetic pesticides or fertilizers for health-conscious consumers',
      image: 'https://images.pexels.com/photos/6131391/pexels-photo-6131391.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Certified Organic', 'Chemical-Free', 'Sustainable']
    },
    {
      name: 'Long, Medium & Short Grain Rice',
      description: 'Diverse range of grain sizes including 100% broken rice for various culinary applications',
      image: 'https://images.pexels.com/photos/4198935/pexels-photo-4198935.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4 Varieties', 'Multiple Grain Sizes', '100% Broken Available']
    }
  ];

  return (
    <section id="products" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our Premium Rice Collection
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium basmati rice varieties, 
            each offering unique characteristics and exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Premium
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">{product.description}</p>
                
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 lg:mt-16 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sustainably Grown</h3>
              <p className="text-gray-600">Environmentally responsible farming practices for better rice and better planet.</p>
            </div>
            
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Aged Perfectly</h3>
              <p className="text-gray-600">Our rice is aged for optimal texture, aroma, and cooking performance.</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Export Grade</h3>
              <p className="text-gray-600">Meeting international quality standards and certifications worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;