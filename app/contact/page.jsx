'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Users } from 'lucide-react';
import Layout from '@/components/ui/Layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'PHONE',
      details: ['+91 9488152297', '+91 7010722265'],
      color: '#0E141C'
    },
    {
      icon: Mail,
      title: 'EMAIL',
      details: ['raccbecosmopolitan2014@gmail.com ', 'rtr.akhils2005@gmail.com'],
      color: '#314B6E'
    },
    {
      icon: MapPin,
      title: 'LOCATION',
      details: ['Coimbatore, Tamil Nadu', 'India - 641001'],
      color: '#607EA2'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/rac_cbe_cosmopolitan?igsh=NGRxa2FyamtjcDVu',
      color: '#23012C'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/rotaract-club-of-coimbatore-cosmopolitan/',
      color: '#314B6E'
    },
    {
      name: 'Join Us',
      icon: Users,
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfb8e054T21AlVnbQ-cVZWUjegbqbagUWpRrZd-uQH-Eeq2lw/viewform?usp=send_form',
      color: '#0E141C'
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen" style={{ backgroundColor: '#BDB3A3', paddingTop: '35px' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0E141C 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #314B6E 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p 
            className="text-sm md:text-md font-light tracking-[0.3em] uppercase mb-6"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: '#314B6E'
            }}
          >
            Get In Touch
          </p>
          
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide"
            style={{ 
              fontFamily: "var(--font-aldrich)",
              color: '#0E141C'
            }}
          >
            CONTACT US
          </h1>

          <div 
            className="w-24 h-1 mx-auto mb-8"
            style={{ backgroundColor: '#607EA2' }}
          ></div>

          <p 
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: '#607EA2'
            }}
          >
            Ready to make a difference? Connect with us to learn more about our initiatives, 
            join our community, or collaborate on meaningful projects.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information - Left Side */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <info.icon 
                        size={24} 
                        style={{ color: info.color }}
                      />
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-bold mb-2 tracking-wide"
                        style={{ 
                          fontFamily: "var(--font-aldrich)",
                          color: info.color
                        }}
                      >
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p 
                          key={i}
                          className="text-sm leading-relaxed"
                          style={{ 
                            fontFamily: "var(--font-cantata)",
                            color: '#607EA2'
                          }}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 
                className="text-lg font-bold mb-6 tracking-wide"
                style={{ 
                  fontFamily: "var(--font-aldrich)",
                  color: '#0E141C'
                }}
              >
                CONNECT WITH US
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.name !== 'Join Us' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md border-2 border-transparent hover:border-current"
                    style={{ backgroundColor: `${social.color}10` }}
                  >
                    <div 
                      className="mb-2 p-2 rounded-full"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon 
                        size={20} 
                        style={{ color: social.color }}
                      />
                    </div>
                    <span 
                      className="text-xs font-medium tracking-wider"
                      style={{ 
                        fontFamily: "var(--font-cantata)",
                        color: social.color
                      }}
                    >
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <h3 
              className="text-xl md:text-2xl font-bold mb-6 tracking-wide"
              style={{ 
                fontFamily: "var(--font-aldrich)",
                color: '#0E141C'
              }}
            >
              SEND US A MESSAGE
            </h3>

            {submitMessage && (
              <div 
                className="mb-6 p-4 rounded-lg text-center"
                style={{ 
                  backgroundColor: '#607EA215',
                  color: '#0E141C',
                  fontFamily: "var(--font-cantata)"
                }}
              >
                {submitMessage}
              </div>
            )}

            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-cantata)",
                      color: '#314B6E'
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      borderColor: '#607EA2',
                      fontFamily: "var(--font-cantata)"
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-cantata)",
                      color: '#314B6E'
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      borderColor: '#607EA2',
                      fontFamily: "var(--font-cantata)"
                    }}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-cantata)",
                      color: '#314B6E'
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      borderColor: '#607EA2',
                      fontFamily: "var(--font-cantata)"
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      fontFamily: "var(--font-cantata)",
                      color: '#314B6E'
                    }}
                  >
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      borderColor: '#607EA2',
                      fontFamily: "var(--font-cantata)"
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="collaboration">Partnership/Collaboration</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="general">General Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ 
                    fontFamily: "var(--font-cantata)",
                    color: '#314B6E'
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical"
                  style={{ 
                    borderColor: '#607EA2',
                    fontFamily: "var(--font-cantata)"
                  }}
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 text-white font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:opacity-90 rounded-lg disabled:opacity-50"
                style={{ 
                  fontFamily: "var(--font-cantata)",
                  backgroundColor: '#0E141C'
                }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactPage;