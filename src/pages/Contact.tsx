import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us2.make.com/4vei6redy7lglc3adapynw6dv2e2cieh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          businessName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-16">
        <section className="bg-cyber-darker text-light py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Thank You!</h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
              We've received your message. Our team will reach out to you within 24 hours.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-cyber-darker text-light py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Ready to transform your IT infrastructure? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-light">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have questions about our services? Our team is ready to help you find
                the perfect solution for your business needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-light">Email</h3>
                    <p className="text-gray-400">Contact us through the form</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-light mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-cyber-dark border border-gray-700 rounded-md focus:ring-accent focus:border-accent text-light"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-light mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-cyber-dark border border-gray-700 rounded-md focus:ring-accent focus:border-accent text-light"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-light mb-1"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cyber-dark border border-gray-700 rounded-md focus:ring-accent focus:border-accent text-light"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-light mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cyber-dark border border-gray-700 rounded-md focus:ring-accent focus:border-accent text-light"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-light mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cyber-dark border border-gray-700 rounded-md focus:ring-accent focus:border-accent text-light"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-light mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-cyber-dark border border-gray-700 rounded-md focus:ring-accent focus:border-accent text-light"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-accent text-light px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/90'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;