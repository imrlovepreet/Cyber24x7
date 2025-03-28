import React from 'react';
import { Eye, Globe, Shield, Lock } from 'lucide-react';

const OurVision = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Vision</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Shaping the future of cybersecurity
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Eye className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-light">Our Vision for the Future</h2>
            <p className="text-xl text-gray-400">
              To be the global leader in innovative cybersecurity solutions, creating a safer digital world for businesses and organizations of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Impact",
                description: "Expanding our reach to protect businesses worldwide with cutting-edge security solutions."
              },
              {
                icon: Shield,
                title: "Innovation Leadership",
                description: "Pioneering new technologies and approaches to stay ahead of evolving cyber threats."
              },
              {
                icon: Lock,
                title: "Security Excellence",
                description: "Setting the industry standard for comprehensive cybersecurity protection."
              }
            ].map((item, index) => (
              <div key={index} className="bg-cyber-dark p-8 rounded-lg text-center">
                <div className="inline-block p-4 bg-cyber-darker rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-light">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;