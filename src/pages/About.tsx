import React from 'react';
import { Network, Award, Cloud, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">About Cyber24x7</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Empowering businesses with innovative IT solutions and unmatched support.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-light">Our Mission</h2>
              <p className="text-gray-400 mb-6">
                At Cyber24x7, we're dedicated to transforming businesses through innovative technology solutions. Our mission is to provide cutting-edge IT services that drive growth and efficiency.
              </p>
              <p className="text-gray-400">
                We believe in the power of technology to revolutionize businesses. Our team of experts works tirelessly to deliver solutions that make a real difference.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                alt="Technology Innovation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cyber-darker py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Clients Served' },
              { number: '99.9%', label: 'Uptime Guaranteed' },
              { number: '20+', label: 'Years Experience' },
              { number: '50+', label: 'Cloud Experts' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-light">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Solutions',
                description:
                  'Expert implementation of cloud infrastructure and services',
              },
              {
                icon: Network,
                title: 'Network Architecture',
                description:
                  'Designing and building robust network solutions',
              },
              {
                icon: Award,
                title: 'Certified Experts',
                description:
                  'Industry-leading professionals with proven expertise',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-cyber-dark rounded-lg">
                <div className="inline-block p-4 bg-cyber-darker rounded-full mb-4">
                  <item.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-light">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;