import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wheat } from 'lucide-react';

const Header = () => {
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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'py-2 px-4 sm:px-6 lg:px-8' 
        : 'py-0'
    }`}>
      <div className={`transition-all duration-500 ease-out ${
        isScrolled
          ? 'max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-black/10'
          : 'max-w-7xl mx-auto bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="flex justify-between items-center">
          {/* Logo */}
            <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Wheat className={`transition-all duration-500 ease-out ${
                  isScrolled 
                    ? 'h-6 w-6 sm:h-8 sm:w-8 text-white' 
                    : 'h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white'
                }`} />
              </div>
              <div>
                <h3 className={`font-bold transition-all duration-500 ease-out ${
                  isScrolled 
                    ? 'text-base sm:text-lg text-gray-800' 
                    : 'text-lg sm:text-xl lg:text-2xl text-white'
                }`}>NavBharat Global</h3>
                <p className={`text-xs transition-all duration-500 ease-out ${
                  isScrolled 
                    ? 'text-gray-600' 
                    : 'text-white/80'
                }`}>Premium Rice Exports</p>
              </div>
            </div>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-gray-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-gray-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`} />
            )}
          </button>
          </div>
        </div>
      </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className={`md:hidden mt-2 mx-4 sm:mx-6 lg:mx-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl'
            : 'bg-black/50 backdrop-blur-sm rounded-lg'
        }`}>
            <nav className="flex flex-col space-y-3 p-4">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors duration-200 py-2 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-gray-600'
                        : 'text-white/90 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors duration-200 py-2 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-gray-600'
                        : 'text-white/90 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;