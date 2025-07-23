"use client";

import Layout from "@/components/ui/Layout";
import HeroBanner from "@/components/ui/HeroBanner";
import InnovationBanner from "@/components/ui/InnovationBanner"; // Import the new component
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function Home() {
  const countUpRefs = {
    projects: useRef(null),
    satisfaction: useRef(null),
    experience: useRef(null),
  };

  useEffect(() => {
    const options = {
      duration: 2.5,
      separator: ",",
      enableScrollSpy: true,
      scrollSpyOnce: true,
    };

    const projectsCounter = new CountUp(countUpRefs.projects.current, 24, options);
    const satisfactionCounter = new CountUp(countUpRefs.satisfaction.current, 98, { ...options, suffix: "%" });
    const experienceCounter = new CountUp(countUpRefs.experience.current, 2, { ...options, suffix: "+" });

    if (!projectsCounter.error) projectsCounter.start();
    if (!satisfactionCounter.error) satisfactionCounter.start();
    if (!experienceCounter.error) experienceCounter.start();
  }, []);

  return (
    <Layout>
      {/* Hero Banner Component */}
      <HeroBanner />

      {/* Innovation Banner Component */}
      <InnovationBanner />

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-teal-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              Our Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6 averages, font-black text-black mb-6 leading-tight">
              Crafting Stunning
              <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-yellow-400 bg-clip-text text-transparent">
                Landing Pages
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              We specialize in creating high-converting landing pages with cutting-edge design and seamless functionality to elevate your brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black group-hover:text-teal-600 transition-colors">
                  Custom Landing Pages
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  Tailored landing pages built with Next.js and Tailwind CSS to maximize conversions and user engagement.
                </p>
                <Link href="/services/landing-pages" className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 02" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black group-hover:text-teal-600 transition-colors">
                  Conversion Optimization
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  Data-driven designs optimized for conversions, ensuring your landing pages deliver measurable results.
                </p>
                <Link href="/services/conversion-optimization" className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 md:col-span-2 lg:col-span-1">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black group-hover:text-teal-600 transition-colors">
                  Responsive Design
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  Pixel-perfect landing pages that look stunning and perform flawlessly across all devices and screens.
                </p>
                <Link href="/services/responsive-design" className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
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
                <img src="/team/amitesh.jpg" alt="amitesh" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">Amitesh A</h3>
              <p className="text-gray-700 font-light">Business & Outreach</p>
            </div>
            
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-300 to-yellow-400 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/team/sudharsan.jpg" alt="sudharsan" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">Sudharsan</h3>
              <p className="text-gray-700 font-light">Technology & Development</p>
            </div>
            
            <div className="group text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-300 to-yellow-400 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/team/adhithya.jpg" alt="adhithya" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors">Adhithya</h3>
              <p className="text-gray-700 font-light">Technology & Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-ping"></span>
                Why WebCraft
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight">
                Excellence in Every
                <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
                  Detail
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">Expert Team</h3>
                    <p className="text-gray-200 leading-relaxed font-light">Our experienced developers use cutting-edge technologies to deliver exceptional results that exceed expectations.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">Lightning Fast</h3>
                    <p className="text-gray-200 leading-relaxed font-light">We work efficiently to deliver your project on time without compromising quality or attention to detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">24/7 Support</h3>
                    <p className="text-gray-200 leading-relaxed font-light">Round-the-clock support to ensure your website runs smoothly and performs optimally at all times.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-2 rounded-3xl border border-teal-200/20">
                <div className="bg-white p-10 rounded-2xl shadow-2xl">
                  <div className="text-center space-y-8">
                    <div className="group hover:scale-105 transition-transform">
                      <div ref={countUpRefs.projects} className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mb-2">0</div>
                      <div className="text-gray-700 font-semibold text-lg">Projects Completed</div>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-6">
              What Our Clients
              <span className="block bg-gradient-to-r from-teal-600 to-yellow-400 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 font-light leading-relaxed italic">
                  "WebCraft delivered exactly what we needed. Their attention to detail and professional approach made the entire process smooth and enjoyable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-yellow-400 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-black">Client Name</div>
                    <div className="text-gray-600 text-sm">CEO, Company</div>
                  </div>
                </div>
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
            Ready to Start Your
            <span className="block bg-gradient-to-r from-yellow-300 to-teal-400 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Let's bring your vision to life with a stunning, professional website that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Get Started Today
            </Link>
            <Link href="/works" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}