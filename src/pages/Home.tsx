import React from 'react';
import { Network, Laptop, Users, Lock, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-cyber-black via-cyber-darker to-cyber-gray text-light">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovative IT Solutions for Tomorrow
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Transform your business with cutting-edge technology solutions and expert IT support. Your success is our mission.
            </p>
            <Link
              to="/contact"
              className="bg-accent text-light px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#ff2d21] transition-colors duration-200 inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-light">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyber-dark p-8 rounded-lg shadow-lg border border-gray-800">
              <Cloud className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4 text-light">Cloud Solutions</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure and services designed to optimize your business operations.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-accent" />
                  Secure cloud storage
                </li>
                <li className="flex items-center">
                  <Server className="w-5 h-5 mr-2 text-accent" />
                  Cloud infrastructure management
                </li>
              </ul>
            </div>
            <div className="bg-cyber-dark p-8 rounded-lg shadow-lg border border-gray-800">
              <Laptop className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4 text-light">IT Consulting</h3>
              <p className="text-gray-400 mb-4">
                Strategic technology consulting to drive your business forward.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-accent" />
                  Expert consultation
                </li>
                <li className="flex items-center">
                  <Server className="w-5 h-5 mr-2 text-accent" />
                  Infrastructure planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-light">Why Choose Cyber24x7?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Experts',
                description: 'Leading cloud solutions',
              },
              {
                icon: Users,
                title: 'Dedicated Team',
                description: 'Professional IT specialists',
              },
              {
                icon: Lock,
                title: 'Data Security',
                description: 'Advanced protection systems',
              },
              {
                icon: Server,
                title: 'Infrastructure',
                description: 'Scalable solutions',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-cyber-dark rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-light">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyber-darker text-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT?</h2>
          <p className="text-xl mb-8 text-gray-300">Let's discuss how we can help your business grow.</p>
          <Link
            to="/contact"
            className="bg-accent text-light px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#ff2d21] transition-colors duration-200 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;