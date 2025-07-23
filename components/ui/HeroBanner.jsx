'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Build Your Dream",
      subtitle: "Website",
      description: "We create stunning, professional websites that help your business grow and succeed in the digital world.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      cta: "Start Your Project"
    },
    {
      id: 2,
      title: "Modern Web",
      subtitle: "Solutions",
      description: "Cutting-edge technology meets beautiful design to create exceptional digital experiences for your customers.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      cta: "Explore Services"
    },
    {
      id: 3,
      title: "Transform Your",
      subtitle: "Business",
      description: "From concept to launch, we deliver comprehensive web solutions that drive results and exceed expectations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      cta: "Get Quote"
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[13cm] md:h-[14cm] lg:h-[16cm] overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/70 to-teal-700/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left text-white max-w-2xl">
            {/* Animated content */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                <span className="block opacity-0 animate-slide-up-1">
                  {slides[currentSlide].title}
                </span>
                <span className="block text-teal-300 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent opacity-0 animate-slide-up-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light opacity-90 opacity-0 animate-slide-up-3">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-3 opacity-0 animate-slide-up-4">
                <Link 
                  href="/contact" 
                  className="group bg-gradient-to-r from-teal-400 to-teal-500 text-white px-6 py-3 rounded-lg font-bold text-sm hover:from-teal-300 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="flex items-center">
                    {slides[currentSlide].cta}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  href="/works" 
                  className="group border-2 border-teal-300 text-teal-300 px-6 py-3 rounded-lg font-bold text-sm hover:bg-teal-300 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span className="flex items-center">
                    View Our Work
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up-1 {
          animation: slide-up 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-up-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
        }
        
        .animate-slide-up-3 {
          animation: slide-up 0.8s ease-out 0.6s forwards;
        }
        
        .animate-slide-up-4 {
          animation: slide-up 0.8s ease-out 0.8s forwards;
        }
      `}</style>
    </section>
  )
}

export default HeroBanner