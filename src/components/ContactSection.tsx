import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
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
  return (
    <section id="contact" className="py-20 bg-[#000435]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us? Contact our team for inquiries about our premium rice products and export services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#000435]/10 rounded-full mb-4">
              <Phone className="h-7 w-7 lg:h-8 lg:w-8 text-[#000435]" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-sm lg:text-base text-gray-600">+91 9810090228</p>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#000435]/10 rounded-full mb-4">
              <Mail className="h-7 w-7 lg:h-8 lg:w-8 text-[#000435]" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-sm lg:text-base text-gray-600">info@navbharatglobal.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#000435]/10 rounded-full mb-4">
              <MapPin className="h-7 w-7 lg:h-8 lg:w-8 text-[#000435]" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-sm lg:text-base text-gray-600">5192, Naya Bazar,<br />Delhi, India 110006</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-[#000435] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#000435]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Send Us a Message</span>
            <Send className="h-5 w-5" />
          </Link>
        </div>

        <div ref={statsRef} className="mt-12 lg:mt-20 bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
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
      </div>
    </section>
  );
};

export default ContactSection;