import React from 'react';
import { Target, Rocket, Compass } from 'lucide-react';

const OurMission = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Empowering businesses with cutting-edge cybersecurity solutions
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Target className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-light">Our Core Mission</h2>
            <p className="text-xl text-gray-400">
              To provide innovative and comprehensive cybersecurity solutions that protect businesses from evolving digital threats, ensuring their growth and success in the modern digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cyber-dark p-8 rounded-lg">
              <Rocket className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-light">Strategic Goals</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Deliver innovative security solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Maintain 24/7 threat monitoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Provide exceptional customer service
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Stay ahead of emerging threats
                </li>
              </ul>
            </div>

            <div className="bg-cyber-dark p-8 rounded-lg">
              <Compass className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-light">Our Commitment</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Continuous innovation in security
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Proactive threat prevention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Expert consultation and support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Building lasting client relationships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;