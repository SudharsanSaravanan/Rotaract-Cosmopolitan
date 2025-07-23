"use client"

import Layout from "@/components/ui/Layout"
import Link from "next/link"

export default function WorksPage() {
  const projects = [
    {
      title: "SaaS Product Launch",
      category: "Landing Page",
      description:
        "High-converting landing page for a SaaS product launch with advanced animations and conversion optimization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      results: "150% increase in conversions",
    },
    {
      title: "E-commerce Campaign",
      category: "Landing Page",
      description: "Product-focused landing page with seamless checkout integration and mobile-first design approach.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Stripe Integration", "Responsive"],
      results: "200% boost in sales",
    },
    {
      title: "App Download Page",
      category: "Landing Page",
      description: "Mobile app promotion landing page with app store integration and social proof elements.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "App Store API", "Analytics"],
      results: "300% more downloads",
    },
    {
      title: "Lead Generation",
      category: "Landing Page",
      description:
        "B2B lead generation landing page with multi-step forms and CRM integration for maximum conversions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "HubSpot API", "A/B Testing"],
      results: "180% lead increase",
    },
    {
      title: "Event Registration",
      category: "Landing Page",
      description:
        "Event promotion landing page with countdown timer, speaker profiles, and seamless registration flow.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Eventbrite API", "Real-time"],
      results: "250% more registrations",
    },
    {
      title: "Course Launch",
      category: "Landing Page",
      description:
        "Educational course landing page with video testimonials, curriculum preview, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Video Optimization", "Payment"],
      results: "175% enrollment boost",
    },
  ]

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
            Our Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Landing Pages That
            <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our recent work and see how we've helped businesses boost their conversions with high-performing
            landing pages designed for success.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-teal-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Recent Projects
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Success Stories
              <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-yellow-400 bg-clip-text text-transparent">
                & Results
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-600/10 group-hover:bg-teal-600/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-teal-700 text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 font-light leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-teal-100 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Result:</span>
                      <span className="text-sm font-semibold text-teal-600">{project.results}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Proven Results
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              Numbers That
              <span className="block bg-gradient-to-r from-teal-600 to-yellow-400 bg-clip-text text-transparent">
                Speak Volumes
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Our commitment to excellence is reflected in the measurable results we deliver for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "24+", label: "Landing Pages Built", icon: "🚀" },
              { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
              { metric: "180%", label: "Average Conversion Boost", icon: "📈" },
              { metric: "24/7", label: "Support Available", icon: "🛠️" },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.metric}</div>
                <div className="text-gray-700 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-800/20 to-teal-600/20"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Boost Your
            <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
              Conversions?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Let's create a high-converting landing page that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
