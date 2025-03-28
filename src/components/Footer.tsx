import React from 'react';
import { Shield, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold">Cyber24x7</span>
            </div>
            <p className="text-gray-400">
              Protecting your business with advanced cybersecurity solutions and 24/7 support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Firewall Installation</li>
              <li className="text-gray-400">Network Security</li>
              <li className="text-gray-400">24/7 Monitoring</li>
              <li className="text-gray-400">Incident Response</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Have questions about our services? Our team is ready to assist you with your cybersecurity needs.
            </p>
            <div className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2" />
              <Link to="/contact" className="hover:text-accent">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cyber24x7. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;