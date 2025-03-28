import React from 'react';
import { Shield, Server, Users, Lock, Cloud, Database, Laptop, Settings, Clock, FileCheck, Network, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features }: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="bg-cyber-dark rounded-lg shadow-lg overflow-hidden">
    <div className="p-8">
      <Icon className="w-12 h-12 text-accent mb-6" />
      <h3 className="text-2xl font-bold mb-4 text-light">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <Shield className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  const coreServices = [
    {
      icon: Shield,
      title: "Firewall Installation & Configuration",
      description: "Enterprise-grade firewall solutions for maximum security",
      features: [
        "Hardware & software firewall setup",
        "Custom rule configuration",
        "DDoS protection",
        "Regular updates & maintenance"
      ]
    },
    {
      icon: Clock,
      title: "Managed Firewall Services",
      description: "24/7 monitoring and management of your security infrastructure",
      features: [
        "Round-the-clock monitoring",
        "Security audits & reporting",
        "Compliance management",
        "Threat response"
      ]
    }
  ];

  const cyberServices = [
    {
      icon: Lock,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions for your business",
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Endpoint protection",
        "Incident response"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure cloud infrastructure management",
      features: [
        "Cloud firewall setup",
        "Access control",
        "Data encryption",
        "Cloud security monitoring"
      ]
    }
  ];

  return (
    <div className="pt-16 bg-cyber-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyber-black via-cyber-darker to-cyber-gray text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Comprehensive cybersecurity solutions to protect your business 24/7
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-light">Core Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-light">Cybersecurity Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cyberServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-light">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Security",
                price: "$499/mo",
                features: [
                  "Firewall Installation",
                  "24/7 Basic Monitoring",
                  "Email Support",
                  "Monthly Reports"
                ]
              },
              {
                title: "Business Pro",
                price: "$999/mo",
                features: [
                  "Advanced Firewall Setup",
                  "24/7 Premium Monitoring",
                  "Priority Support",
                  "Weekly Reports",
                  "Compliance Management"
                ]
              },
              {
                title: "Enterprise",
                price: "Custom",
                features: [
                  "Custom Security Solution",
                  "24/7 Elite Monitoring",
                  "Dedicated Support Team",
                  "Daily Reports",
                  "Full Compliance Suite"
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-cyber-dark rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-light">{pkg.title}</h3>
                <p className="text-3xl font-bold text-accent mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-300 flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block bg-accent text-light px-6 py-3 rounded-md hover:bg-[#ff2d21] transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss your security needs today.</p>
          <Link
            to="/contact"
            className="bg-light text-accent px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;