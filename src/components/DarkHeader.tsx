import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const DarkHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'py-2 px-4 sm:px-6 lg:px-8' 
        : 'py-0'
    }`}>
      <div className={`transition-all duration-500 ease-out ${
        isScrolled
          ? 'max-w-4xl mx-auto bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl shadow-black/10'
          : 'w-full bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="flex justify-between items-center">
          {/* Logo */}
            <div className="flex items-center space-x-3">
            <img 
              src="/Wesbite Nav Bharat Global Logo.png" 
              alt="NavBharat Global Logo" 
              className={`w-auto transition-all duration-500 ease-out ${
                isScrolled 
                  ? 'h-10 sm:h-12' 
                  : 'h-16'
              }`}
            />
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-medium transition-all duration-300 text-gray-900 hover:text-green-600"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium transition-all duration-300 text-gray-900 hover:text-green-600"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-lime-400 text-gray-900 hover:bg-lime-300 shadow-lg'
                : 'bg-lime-400 text-gray-900 hover:bg-lime-300'
            }`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 transition-colors duration-300 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 transition-colors duration-300 text-gray-900" />
            )}
          </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className={`md:hidden mt-2 mx-4 sm:mx-6 lg:mx-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl'
            : 'bg-white/95 backdrop-blur-sm rounded-lg shadow-lg'
        }`}>
            <nav className="flex flex-col space-y-3 p-4">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-medium transition-colors duration-200 py-2 text-gray-900 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium transition-colors duration-200 py-2 text-gray-900 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            <div className="pt-4 space-y-2 border-t border-gray-200">
                <Link to="/contact" className="bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition-colors duration-200 w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
    </header>
  );
};

export default DarkHeader;