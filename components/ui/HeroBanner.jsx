'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Empower",
      subtitle: "Communities",
      description: "Join us in creating impactful change through service, leadership, and fellowship in Coimbatore and beyond.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
    },
    {
      id: 2,
      title: "Inspire",
      subtitle: "Change",
      description: "Rotaract Club of Coimbatore Cosmopolitan drives positive impact through community service and youth leadership.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
    },
    {
      id: 3,
      title: "Connect &",
      subtitle: "Grow",
      description: "Be part of a vibrant community dedicated to service above self, fostering personal and professional growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
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
    <section className="relative h-screen md:h-screen sm:h-[50vh] overflow-hidden">
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
            {/* Gradient Overlay with White to Deep Blue Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#1E3A8A]/70" />
            {/* Semi-transparent overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-10 sm:pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left text-white max-w-3xl">
            {/* Animated content */}
            <div className="space-y-2 sm:space-y-3 animate-fade-in">
              <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold leading-tight tracking-tight">
                <span className="block opacity-0 animate-slide-left-1">
                  {slides[currentSlide].title}
                </span>
                <span className="block text-white bg-gradient-to-r from-white to-[#1E3A8A] bg-clip-text text-transparent opacity-0 animate-slide-left-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-serif font-bold leading-relaxed opacity-90 opacity-0 animate-slide-left-3">
                <span className="bg-gradient-to-r from-white to-[#eab308] bg-clip-text text-transparent">
                  {slides[currentSlide].description}
                </span>
              </p>
              
              {/* Club Branding */}
              <p className="text-xs sm:text-sm font-serif text-white opacity-90 opacity-0 animate-slide-left-4 mt-2">
                Rotaract Club of Coimbatore Cosmopolitan | Group 5 | RID 3206
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

        .font-serif {
          font-family: 'Merriweather', serif;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-left-1 {
          animation: slide-left 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-left-2 {
          animation: slide-left 0.8s ease-out 0.4s forwards;
        }
        
        .animate-slide-left-3 {
          animation: slide-left 0.8s ease-out 0.6s forwards;
        }
        
        .animate-slide-left-4 {
          animation: slide-left 0.8s ease-out 0.8s forwards;
        }

        @media (max-width: 640px) {
          .h-[50vh] {
            min-height: 50vh;
          }
          .pt-6 {
            padding-top: 1rem;
          }
          .space-y-3 {
            space-y-2;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroBanner