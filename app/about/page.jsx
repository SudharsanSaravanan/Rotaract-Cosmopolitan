"use client"

import Layout from '@/components/ui/Layout'
import { useEffect, useRef } from 'react'
import { CountUp } from 'countup.js'

export default function AboutPage() {
  const countUpRefs = {
    projects: useRef(null),
    satisfaction: useRef(null),
    experience: useRef(null),
  }

  useEffect(() => {
    const options = {
      duration: 2.5,
      separator: ',',
      enableScrollSpy: true,
      scrollSpyOnce: true,
    }

    const projectsCounter = new CountUp(countUpRefs.projects.current, 24, options)
    const satisfactionCounter = new CountUp(countUpRefs.satisfaction.current, 98, { ...options, suffix: '%' })
    const experienceCounter = new CountUp(countUpRefs.experience.current, 2, { ...options, suffix: '+' })

    if (!projectsCounter.error) projectsCounter.start()
    if (!satisfactionCounter.error) satisfactionCounter.start()
    if (!experienceCounter.error) experienceCounter.start()
  }, [])

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
            About WebCraft
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            We Are Landing Page
            <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
              Specialists
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Founded with a passion for creating high-converting landing pages, WebCraft has been helping businesses 
            transform their online presence and boost conversions since 2022.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-teal-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
                Crafting Landing Pages
                <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-yellow-400 bg-clip-text text-transparent">
                  That Convert
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
                WebCraft was born from the belief that every business deserves a landing page that not only looks stunning 
                but also drives real results. Our team of passionate developers and designers specialize exclusively in 
                creating high-converting landing pages using cutting-edge technology.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                We've helped 24+ businesses boost their conversion rates and establish powerful online presence through 
                custom-built landing pages that tell their story and drive action.
              </p>
            </div>
            
            {/* Stats Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg p-2 rounded-3xl border border-teal-200/20 shadow-2xl">
                <div className="bg-white p-10 rounded-2xl">
                  <div className="text-center space-y-8">
                    <div className="group hover:scale-105 transition-transform">
                      <div ref={countUpRefs.projects} className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">0</div>
                      <div className="text-gray-700 font-semibold text-lg">Landing Pages Built</div>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform">
                      <div ref={countUpRefs.satisfaction} className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">0</div>
                      <div className="text-gray-700 font-semibold text-lg">Client Satisfaction</div>
                    </div>
                    
                    <div className="group hover:scale-105 transition-transform">
                      <div ref={countUpRefs.experience} className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">0</div>
                      <div className="text-gray-700 font-semibold text-lg">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Meet Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              The Minds Behind
              <span className="block bg-gradient-to-r from-teal-600 to-yellow-400 bg-clip-text text-transparent">
                Your Landing Pages
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Our dedicated team of experts combines creativity and technical expertise to craft landing pages that drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-300 to-yellow-400 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/team/amitesh.jpg" alt="Amitesh A" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">Amitesh A</h3>
              <p className="text-gray-700 font-light">Business & Outreach</p>
              <p className="text-sm text-gray-600 mt-2">Drives client relationships and business growth strategies</p>
            </div>
            
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-300 to-yellow-400 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/team/sudharsan.jpg" alt="Sudharsan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">Sudharsan</h3>
              <p className="text-gray-700 font-light">Technology & Development</p>
              <p className="text-sm text-gray-600 mt-2">Expert in Next.js and modern web technologies</p>
            </div>
            
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-300 to-yellow-400 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/team/adhithya.jpg" alt="Adhithya" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">Adhithya</h3>
              <p className="text-gray-700 font-light">Technology & Development</p>
              <p className="text-sm text-gray-600 mt-2">Specializes in responsive design and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-ping"></span>
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              What Drives Us
              <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
                Every Day
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                Conversion Focus
              </h3>
              <p className="text-gray-200 leading-relaxed font-light">
                Every element we design is optimized for maximum conversion rates and user engagement.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                Quality First
              </h3>
              <p className="text-gray-200 leading-relaxed font-light">
                We never compromise on quality, ensuring every landing page meets the highest standards.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                Client Success
              </h3>
              <p className="text-gray-200 leading-relaxed font-light">
                Your success is our success. We're committed to delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
