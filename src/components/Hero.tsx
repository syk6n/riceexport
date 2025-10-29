import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=1920',
      alt: 'Farmer working in rice fields at sunset'
    },
    {
      image: 'https://lh3.googleusercontent.com/d/1NBsKGHvliReHd9ogcyl7h_Hn0kmmKAog=w1000?authuser=1',
      alt: 'Rice fields landscape'
    },
    {
      image: 'https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg',
      alt: 'Ripening rice heads in the field'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Text animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group opacity-0 hover:opacity-100"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group opacity-0 hover:opacity-100"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className={`block transform transition-all duration-1000 delay-500 ${
                    isTextVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}>
                    Bringing to you
                  </span>
                  <span className={`block transform transition-all duration-1000 delay-700 ${
                    isTextVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}>
                    the Richness of
                  </span>
                  <span className={`block text-lime-400 transform transition-all duration-1000 delay-900 ${
                    isTextVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}>
                    <span className="text-yellow-400">Indian Rice</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-1100 ${
                isTextVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}>
                Founded on the principles of integrity, innovation, and quality, Nav Bharat Global is a leading rice exporter from India, delivering premium quality grains to kitchens across the world. With a legacy of trust and excellence, we bring the authentic taste of India to global markets.
              </p>

            </div>

            {/* Right Content - Mission Card */}
            <div className="hidden lg:flex justify-end">
              <div className={`bg-black/40 backdrop-blur-md text-white p-8 rounded-2xl max-w-md border border-white/20 transform transition-all duration-1000 delay-1500 ${
                isTextVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Our Legacy</h3>
                </div>
                
                <p className="text-gray-200 leading-relaxed mb-6">
                  Built on years of trust and excellence, Nav Bharat Global carries forward India's rich rice heritage to global markets, delivering authenticity in every grain.
                </p>
                
                <Link to="/about" className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors duration-200 flex items-center group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-400 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;