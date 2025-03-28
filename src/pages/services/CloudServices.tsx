import React from 'react';
import { Cloud, Database, Server, FileCheck } from 'lucide-react';
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

const CloudServices = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Management",
      description: "Expert management of cloud environments",
      features: [
        "AWS, Azure, Google Cloud setup",
        "Cloud security configuration",
        "Access control management",
        "Performance optimization",
        "Cost optimization"
      ]
    },
    {
      icon: Database,
      title: "Backup & Disaster Recovery",
      description: "Comprehensive data protection solutions",
      features: [
        "Automated backup systems",
        "Cloud-based backup",
        "Disaster recovery planning",
        "Business continuity solutions",
        "Regular recovery testing"
      ]
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Complete server administration services",
      features: [
        "Server maintenance",
        "Performance monitoring",
        "Security updates",
        "Resource optimization",
        "24/7 server support"
      ]
    }
  ];

  return (
    <div className="pt-16 bg-cyber-black">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Cloud & Infrastructure Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Secure and scalable cloud solutions for modern businesses
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Infrastructure</h2>
          <p className="text-xl mb-8">Let's build a secure and scalable cloud solution for your business.</p>
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

export default CloudServices;