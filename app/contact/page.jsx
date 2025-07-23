"use client"

import Layout from "@/components/ui/Layout"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple mailto functionality
    const subject = `Landing Page Project Inquiry from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}

Message:
${formData.message}
    `
    window.location.href = `mailto:hello@webcraft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-800/20 to-teal-600/20"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-ping"></span>
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Let's Build Your
            <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
              Perfect Landing Page
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to boost your conversions? We'd love to hear about your project and discuss how we can help create a
            landing page that drives real results.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-teal-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Start Your Project
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Tell Us About Your
              <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-yellow-400 bg-clip-text text-transparent">
                Landing Page Vision
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours with a custom proposal for your landing
              page project.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-teal-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Landing Page Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Event Registration">Event Registration</option>
                    <option value="App Download">App Download</option>
                    <option value="Course/Education">Course/Education</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical"
                  placeholder="Tell us about your landing page goals, target audience, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Other Ways to
              <span className="block bg-gradient-to-r from-teal-600 to-yellow-400 bg-clip-text text-transparent">
                Reach Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">
                Email Us
              </h3>
              <p className="text-gray-700 font-light">hello@webcraft.com</p>
              <p className="text-gray-700 font-light">projects@webcraft.com</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">
                Response Time
              </h3>
              <p className="text-gray-700 font-light">Within 24 hours</p>
              <p className="text-gray-700 font-light">Monday - Friday</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">
                Project Delivery
              </h3>
              <p className="text-gray-700 font-light">2-4 weeks typical</p>
              <p className="text-gray-700 font-light">Rush jobs available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Common
              <span className="block bg-gradient-to-r from-teal-600 to-yellow-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build a landing page?",
                answer:
                  "Most landing pages take 2-4 weeks from start to finish, depending on complexity and revisions. Rush jobs can be completed in 1-2 weeks.",
              },
              {
                question: "What's included in your landing page service?",
                answer:
                  "We provide complete landing page design, development, mobile optimization, basic SEO, and conversion optimization. We also include 30 days of free support after launch.",
              },
              {
                question: "Do you provide hosting and domain setup?",
                answer:
                  "We can help with deployment and setup, but hosting and domain registration are handled separately. We'll guide you through the best options for your needs.",
              },
              {
                question: "Can you integrate with my existing tools?",
                answer:
                  "Yes! We can integrate with most popular tools like CRM systems, email marketing platforms, analytics tools, and payment processors.",
              },
              {
                question: "What if I need changes after the landing page is live?",
                answer:
                  "We offer 30 days of free minor adjustments after launch. For major changes or ongoing updates, we provide affordable maintenance packages.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-700 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
