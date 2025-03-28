import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CyberLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-accent"
  >
    <path
      d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M50 35 L65 45 L65 55 L50 65 L35 55 L35 45 Z"
      fill="currentColor"
    />
    <circle
      cx="50"
      cy="50"
      r="8"
      fill="#121212"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const closeTimeout = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (menu: 'services' | 'company') => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    if (menu === 'services') {
      setIsServicesOpen(true);
      setIsCompanyOpen(false);
    } else {
      setIsCompanyOpen(true);
      setIsServicesOpen(false);
    }
  };

  const handleMouseLeave = (menu: 'services' | 'company') => {
    closeTimeout.current = setTimeout(() => {
      if (menu === 'services') {
        setIsServicesOpen(false);
      } else {
        setIsCompanyOpen(false);
      }
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Company',
      href: '/company',
      subItems: [
        { name: 'Who We Are', href: '/company/who-we-are' },
        { name: 'Our Mission', href: '/company/mission' },
        { name: 'Our Vision', href: '/company/vision' },
      ]
    },
    { 
      name: 'Services',
      href: '/services',
      subItems: [
        { name: 'Core Services', href: '/services/core' },
        { name: 'Cybersecurity Services', href: '/services/cybersecurity' },
        { name: 'Cloud & Infrastructure', href: '/services/cloud' },
        { name: 'Value-Added Services', href: '/services/value-added' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-cyber-black shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <CyberLogo />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="ml-2 text-xl font-bold text-white">Cyber24x7</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.subItems ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.name === 'Services' ? servicesRef : companyRef}
                  onMouseEnter={() => handleMouseEnter(item.name.toLowerCase() as 'services' | 'company')}
                  onMouseLeave={() => handleMouseLeave(item.name.toLowerCase() as 'services' | 'company')}
                >
                  <button
                    className={`${
                      isActive(item.href)
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-accent'
                    } transition-colors duration-200 flex items-center`}
                  >
                    {item.name}
                    <svg
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                        (item.name === 'Services' && isServicesOpen) || 
                        (item.name === 'Company' && isCompanyOpen) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {((item.name === 'Services' && isServicesOpen) || 
                    (item.name === 'Company' && isCompanyOpen)) && (
                    <div 
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-cyber-dark ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => handleMouseEnter(item.name.toLowerCase() as 'services' | 'company')}
                      onMouseLeave={() => handleMouseLeave(item.name.toLowerCase() as 'services' | 'company')}
                    >
                      <div className="py-1" role="menu">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyber-darker hover:text-accent"
                            role="menuitem"
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsCompanyOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-gray-300 hover:text-accent'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                item.subItems ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      className={`${
                        isActive(item.href)
                          ? 'text-accent'
                          : 'text-gray-300 hover:text-accent'
                      } block px-3 py-2 text-base w-full text-left`}
                      onClick={() => {
                        if (item.name === 'Services') {
                          setIsServicesOpen(!isServicesOpen);
                          setIsCompanyOpen(false);
                        } else {
                          setIsCompanyOpen(!isCompanyOpen);
                          setIsServicesOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </button>
                    {((item.name === 'Services' && isServicesOpen) || 
                      (item.name === 'Company' && isCompanyOpen)) && (
                      <div className="pl-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-accent"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                              setIsCompanyOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      isActive(item.href)
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-accent'
                    } block px-3 py-2 text-base`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 text-base bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;