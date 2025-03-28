import React from 'react';
import { Shield, Server, Clock, FileCheck } from 'lucide-react';
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
            <FileCheck className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CoreServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Firewall Installation & Configuration",
      description: "Expert setup and configuration of enterprise-grade firewalls",
      features: [
        "Hardware firewall installation (Cisco, Fortinet)",
        "Software/cloud firewall setup (pfSense, AWS WAF)",
        "Custom rule configuration",
        "DDoS protection implementation",
        "Regular updates and maintenance"
      ]
    },
    {
      icon: Clock,
      title: "Managed Firewall Services",
      description: "24/7 monitoring and management of your firewall infrastructure",
      features: [
        "Round-the-clock monitoring",
        "Security audits and reporting",
        "Compliance management (PCI DSS, HIPAA)",
        "Threat detection and response",
        "Performance optimization"
      ]
    },
    {
      icon: Server,
      title: "Network Monitoring & Management",
      description: "Comprehensive network oversight and maintenance",
      features: [
        "Real-time network monitoring",
        "Performance issue detection",
        "Bandwidth management",
        "Traffic optimization",
        "Network health reporting"
      ]
    }
  ];

  return (
    <div className="pt-16 bg-cyber-black">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Core Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Enterprise-grade firewall solutions and network management services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Network?</h2>
          <p className="text-xl mb-8">Let's discuss your security requirements today.</p>
          <Link
            to="/contact"
            className="bg-light text-accent px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoreServices;