import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/DarkHeader';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    return () => {
      timelineItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-feature-index') || '0');
            setTimeout(() => {
              setVisibleFeatures((prev) => new Set(prev).add(index));
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
    featureItems?.forEach((item) => observer.observe(item));

    return () => {
      featureItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

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
                src="https://lh3.googleusercontent.com/d/13kADFsVTW0VwBecl-RZTEHR5ljrYkq-y=w1000?authuser=1"
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
                src="https://lh3.googleusercontent.com/d/1_GtPrYOBQCqLdUJX5yL0SUyI6RK8tITu=w1000?authuser=1"
                alt="Rice expertise and manufacturing"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Expertise
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Started in 1980, Nav Bharat Global ranks among the India's most efficient and reliable rice company with a continuous emphasis to build onto its overall rice portfolio serving markets worldwide. With years of experience and expertise in the industry, our focus lies in sourcing, manufacturing, and delivering high-quality rice products to international markets.
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
                src="https://lh3.googleusercontent.com/d/1dxILYTVB1P4FEFe6vHX2ISxxiYZznBU1=w1000?authuser=1"
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
                src="https://lh3.googleusercontent.com/d/1RQ_mQs3Vk_Sk0oGMATv4B9R_3vs9px5g=w1000?authuser=1"
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
                src="https://lh3.googleusercontent.com/d/1GBw4DAocaPKcAihsgyOFXuxAjIPvLApR=w1000?authuser=1"
                alt="Years of rice export experience"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000435] mb-4">
              Awards
            </h2>
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Central vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* 1997 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#000435] to-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(0) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    1997
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Received APEDA Certificate of Merit for outstanding export performance in Basmati and Non-Basmati rice.
                  </p>
                </div>
              </div>

              {/* 1998 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="1"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(1) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    1998
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    Conferred the National Export Award by Hon'ble Prime Minister Shri A.B. Vajpayee for outstanding export performance.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Received Niryat Shree Trophy from FIEO and APEDA Certificate of Merit for exceptional export performance.
                  </p>
                </div>
              </div>

              {/* 1999 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="2"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#000435] to-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(2) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    1999
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Received APEDA Export Trophy and Certificate of Merit from Hon'ble Minister Shri Omar Farooq Abdullah for excellence in Basmati rice exports.
                  </p>
                </div>
              </div>

              {/* 2000 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(3) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="3"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(3) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2000
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    Awarded APEDA Certificate of Merit by Hon'ble Minister Shri Omar Farooq Abdullah for export promotion of Basmati rice.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Certified with ISO 9002 Quality Management System.
                  </p>
                </div>
              </div>

              {/* 2001 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(4) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="4"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#000435] to-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(4) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2001
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    Honoured with the FIEO Niryat Shree Export Award by Hon'ble Vice President Shri Bhairon Singh Shekhawat for outstanding export performance.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Received APEDA Export Trophy and Certificate of Merit from Hon'ble Union Minister Shri Ajit Singh for excellence in export and quality of Basmati rice.
                  </p>
                </div>
              </div>

              {/* 2002 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(5) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="5"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(5) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2002
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Designated Super Star Trading House by the Ministry of Commerce & Industry.
                  </p>
                </div>
              </div>

              {/* 2003 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(6) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="6"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#000435] to-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(6) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2003
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Achieved ISO and HACCP Quality Certifications.
                  </p>
                </div>
              </div>

              {/* 2004 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(7) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="7"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(7) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2004
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    Received APEDA Export Trophy and Certificate of Merit from Hon'ble Minister Shri Kamal Nath for export promotion and market development of Basmati and Non-Basmati rice.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Obtained ISO 9001:2000 and Global HACCP certifications.
                  </p>
                </div>
              </div>

              {/* 2005 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(8) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="8"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#000435] to-blue-900 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(8) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2005
                  </div>
                  <div className="w-px h-8 bg-gray-300 mt-2"></div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Conferred Three Star Export House status by the Ministry of Commerce & Industry, Government of India.
                  </p>
                </div>
              </div>

              {/* 2006 */}
              <div
                className={`timeline-item relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.has(9) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                data-index="9"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg z-10 transition-all duration-700 delay-100 ${
                    visibleItems.has(9) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    2006
                  </div>
                </div>
                <div className="pt-3 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Awarded APEDA Merit Certificate by the Hon'ble Minister for Commerce & Industry for excellence in export promotion of Basmati and Non-Basmati rice.
                  </p>
                </div>
              </div>
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
          
          <div ref={featuresRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              className={`feature-item bg-[#000435]/5 p-6 rounded-2xl text-center transition-all duration-700 ${
                visibleFeatures.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-feature-index="0"
            >
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-sm text-gray-600">
                We use only the best rice varieties that retain their premium characteristics for international markets
              </p>
            </div>

            <div
              className={`feature-item bg-[#000435]/5 p-6 rounded-2xl text-center transition-all duration-700 ${
                visibleFeatures.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-feature-index="1"
            >
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Speed</h3>
              <p className="text-sm text-gray-600">
                We value your time and guarantee fast processing and delivery while maintaining high quality standards
              </p>
            </div>

            <div
              className={`feature-item bg-[#000435]/5 p-6 rounded-2xl text-center transition-all duration-700 ${
                visibleFeatures.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-feature-index="2"
            >
              <div className="w-16 h-16 bg-[#000435]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#000435]">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Variety</h3>
              <p className="text-sm text-gray-600">
                We offer a wide selection of basmati rice varieties taking into account your requirements and budget
              </p>
            </div>

            <div
              className={`feature-item bg-[#000435]/5 p-6 rounded-2xl text-center transition-all duration-700 ${
                visibleFeatures.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-feature-index="3"
            >
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

            {/* CTA Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#000435]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            Discover our Premium Quality Rice
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of rice varieties each carefully selected and processed to meet international quality standards.
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

    </div>
  );
};

export default About;