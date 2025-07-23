'use client'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const textRef = useRef(null)

  const leftLogoRef = useRef(null)
  const rightLogoRef = useRef(null)
  const orbRef = useRef(null)

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      caption: "Serving smiles through community outreach and education."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      caption: "Empowering youth leadership and building strong futures."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      caption: "Creating sustainable impact through unity and service."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
    }
  }, [currentSlide])

  // GSAP Rotation Effects
  useEffect(() => {
    gsap.to(leftLogoRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    })

    gsap.to(rightLogoRef.current, {
      rotation: -360,
      duration: 15,
      repeat: -1,
      ease: "linear",
    })

    gsap.to(orbRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    })
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
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
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#000d6f]/80" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Main Heading & Caption */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#efebe9] drop-shadow-lg">
          Rotaract Club of Coimbatore Cosmopolitan
        </h1>
        <p className="text-lg sm:text-xl font-medium mt-2 text-[#d7ccc8]">
          Group 5 | Rotary International District 3206
        </p>

        <div ref={textRef} className="mt-8 max-w-2xl">
          <p className="text-white text-base sm:text-lg font-serif italic">
            {slides[currentSlide].caption}
          </p>
        </div>
      </div>

      {/* 🔄 Extra Spinning Logo Bottom Right */}
      <div className="absolute bottom-13 md:bottom-8 right-7 md:right-10 z-20 animate-spin-slow">
        <img
          src="/logo/white-wheel-logo.png"
          alt="spin 2"
          className="w-10 aspect-square object-contain opacity-60 hover:opacity-90 transition duration-500"
        />
      </div>


      {/* 🌟 Floating Glowing Orb (spinning via GSAP) */}
      <div className="absolute top-32 right-24 z-10" ref={orbRef}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#fff3e0] to-[#6d4c41] blur-2xl opacity-25" />
      </div>
    </section>
  )
}

export default HeroBanner
