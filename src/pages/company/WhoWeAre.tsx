import React from 'react';
import { Users, Shield, Award } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Who We Are</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            A team of dedicated cybersecurity experts protecting businesses in the digital age
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-light">Our Story</h2>
              <p className="text-gray-400 mb-6">
                Founded with a vision to make cybersecurity accessible to businesses of all sizes, Cyber24x7 has grown into a leading provider of comprehensive security solutions. Our journey began with a simple mission: to protect organizations from evolving cyber threats.
              </p>
              <p className="text-gray-400">
                Today, we're proud to be at the forefront of cybersecurity innovation, helping businesses stay secure in an increasingly complex digital landscape.
              </p>
            </div>
            <div className="bg-cyber-dark p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-light">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-light mb-2">Integrity</h4>
                    <p className="text-gray-400">We maintain the highest standards of professional ethics and transparency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-light mb-2">Client Focus</h4>
                    <p className="text-gray-400">Your security is our priority. We're committed to delivering solutions that meet your unique needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-light mb-2">Excellence</h4>
                    <p className="text-gray-400">We strive for excellence in everything we do, from service delivery to customer support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;