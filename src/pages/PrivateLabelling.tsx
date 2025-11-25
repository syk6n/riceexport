import { useState } from 'react';
import DarkHeader from '../components/DarkHeader';

const PrivateLabelling = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const packagingOptions = [
    {
      name: 'Jute Bags (Natural Brown)',
      image1: 'https://lh3.googleusercontent.com/d/11te70a2KZetH1BxibFzSJYsJM_qX4lEi=w1000?authuser=1',
      image2: 'https://lh3.googleusercontent.com/d/1gkbb7PD_CvL6AsaIpPFyFA2HA6Ix5jJg=w1000?authuser=1'
    },
    {
      name: 'Bleached White Jute',
      image1: 'https://lh3.googleusercontent.com/d/1z7puLAZ50XHElkf5LUyfKm41zLdSLWub=w1000?authuser=1',
      image2: 'https://lh3.googleusercontent.com/d/14gJJXM9kmiKvMYlYIwrR4XwmY8QiT9dR=w1000?authuser=1'
    },
    {
      name: 'Standard P.P. Bags',
      image1: 'https://lh3.googleusercontent.com/d/1I5cZJq8ev1WMvzRXkuev9Pci7JgF91w9=w1000?authuser=1',
      image2: 'https://lh3.googleusercontent.com/d/1RAEtEeBZIOR0i4xh4YX9ivJ8nMUfGeUC=w1000?authuser=1'
    },
    {
      name: 'BOPP Bags',
      image1: 'https://lh3.googleusercontent.com/d/130Vpu93UnDxLUyf8YPDhKpjYRtKLMq_W=w1000?authuser=1',
      image2: 'https://lh3.googleusercontent.com/d/1hmwYDuumgGCVwUyoZc9E4gBl3yMSdK2w=w1000?authuser=1'
    },
    { name: 'Non Woven Bags' },
    { name: 'Consumer Polypacks' },
    { name: 'Cotton Bags' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <DarkHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000435] mb-6">
              Your Label, Our Legacy of Quality
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We also offer complete private labelling services for clients looking to build or expand
              their own brand in global markets. From sourcing and milling to packaging and export logistics,
              we deliver high-quality rice customized to your brand requirements. Our team works closely with
              you to develop packaging designs, pack sizes, and product specifications that align with your
              market needs, ensuring consistency, reliability, and premium quality in every shipment.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000435] mb-12 text-center">
              Packaging Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingOptions.slice(0, 4).map((option, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={option.image1}
                      alt={option.name}
                      className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                    />
                    <img
                      src={option.image2}
                      alt={option.name}
                      className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
                      style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000435] mb-12 text-center">
              All Packaging Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <h3 className="text-base font-semibold text-[#000435]">
                    {option.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateLabelling;
