import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Leaf, Clock, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Basmati Rice',
      description: 'Premium basmati varieties including 1121, 1718, 1509, Pusa 1401, Pusa, and Traditional basmati rice',
      image: 'https://lh3.googleusercontent.com/d/15NCbcpzmHKrMK8bXE-ZIQK35_xx0I7Kt=w1000?authuser=1',
      features: ['6 Varieties', 'Extra Long Grain', 'Aromatic']
    },
    {
      name: 'Parboiled Rice',
      description: 'High-quality parboiled rice varieties with excellent nutritional value and extended shelf life',
      image: 'https://lh3.googleusercontent.com/d/13MlbxOtRlwFWZFnk18gYggPDSgkqpT9A=w1000?authuser=1',
      features: ['5% Broken', '10% Broken', 'Enhanced Nutrition']
    },
    {
      name: 'Sugandha & Sharbati Rice',
      description: 'Aromatic non-basmati rice varieties known for their distinctive fragrance and taste',
      image: 'https://lh3.googleusercontent.com/d/1DL4pRCKKmg238fsCU6i7ZYEStP9fL9o4q=w1000?authuser=1',
      features: ['2 Varieties', 'Aromatic', 'Premium Quality']
    },
    {
      name: 'Organic Rice',
      description: 'Certified organic rice grown without synthetic pesticides or fertilizers for health-conscious consumers',
      image: 'https://lh3.googleusercontent.com/d/1aSii-mAWcayxTFtElfhi8f_K2imiUS0Y=w1000?authuser=1',
      features: ['Certified Organic', 'Chemical-Free', 'Sustainable']
    },
    {
      name: 'Long, Medium & Short Grain Rice',
      description: 'Diverse range of grain sizes including 100% broken rice for various culinary applications',
      image: 'https://lh3.googleusercontent.com/d/15wAS2o_N6rwhjEIRWkVYsXV4F8e56ThA=w1000?authuser=1',
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
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-amber-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Premium
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="bg-[#000435] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#000435]/90 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-12 lg:mt-16 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Certifications</h3>
            <p className="text-gray-600">Trusted quality standards ensuring excellence in every grain</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center">
            {/* ISO 22000 */}
            <div className="flex flex-col items-center space-y-3 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-[#000435]/10">
                <img 
                  src="https://droppe.com/blog-admin/wp-content/uploads/2024/05/iso-22000.webp" 
                  alt="ISO 22000 Certification" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs lg:text-sm font-medium text-gray-700 text-center">Food Safety Management</span>
            </div>

            {/* ISO 9001 */}
            <div className="flex flex-col items-center space-y-3 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-100">
                <img 
                  src="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png" 
                  alt="ISO 9001 Certification" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs lg:text-sm font-medium text-gray-700 text-center">Quality Management</span>
            </div>

            {/* HACCP */}
            <div className="flex flex-col items-center space-y-3 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-red-100">
                <img 
                  src="https://goodwillandgoodwill.com/wp-content/uploads/2023/09/061.jpg" 
                  alt="HACCP Certification" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs lg:text-sm font-medium text-gray-700 text-center">Hazard Analysis</span>
            </div>

            {/* GMP */}
            <div className="flex flex-col items-center space-y-3 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-purple-100">
                <img 
                  src="https://images.seeklogo.com/logo-png/28/1/gmp-quality-logo-png_seeklogo-285045.png" 
                  alt="GMP Certification" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs lg:text-sm font-medium text-gray-700 text-center">Good Manufacturing</span>
            </div>

            {/* APEDA */}
            <div className="flex flex-col items-center space-y-3 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200 sm:col-span-3 lg:col-span-1">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-orange-100 p-1">
                <img 
                  src="https://www.uxdt.nic.in/wp-content/uploads/2024/06/agricultural-and-processed-food-products-export-development-authority-apeda-01.jpg?x31121" 
                  alt="APEDA Certification" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-xs lg:text-sm font-medium text-gray-700 text-center">Export Certification</span>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              All certifications are regularly audited and maintained to ensure compliance with international standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;