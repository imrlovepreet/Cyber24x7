import React from 'react';
import { Users, Headphones, BookOpen, FileCheck } from 'lucide-react';
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

const ValueAddedServices = () => {
  const services = [
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology guidance for your business",
      features: [
        "IT strategy development",
        "Infrastructure planning",
        "Security roadmapping",
        "Technology assessment",
        "Cost optimization"
      ]
    },
    {
      icon: BookOpen,
      title: "Employee Cybersecurity Training",
      description: "Comprehensive security awareness programs",
      features: [
        "Security awareness training",
        "Phishing simulation",
        "Best practices workshops",
        "Compliance training",
        "Security policy education"
      ]
    },
    {
      icon: Headphones,
      title: "VoIP & Communication Solutions",
      description: "Modern business communication systems",
      features: [
        "VoIP system implementation",
        "Unified communications",
        "Secure communication channels",
        "Call quality monitoring",
        "24/7 support"
      ]
    }
  ];

  return (
    <div className="pt-16 bg-cyber-black">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Value-Added Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Enhanced IT solutions to maximize your business potential
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
          <h2 className="text-3xl font-bold mb-4">Enhance Your IT Capabilities</h2>
          <p className="text-xl mb-8">Discover how our value-added services can benefit your business.</p>
          <Link
            to="/contact"
            className="bg-light text-accent px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ValueAddedServices;