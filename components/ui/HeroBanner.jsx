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
    <section className="relative h-[75vh] md:h-screen overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#005f60]/30" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Main Heading & Caption */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4" style={{ paddingTop: 'calc(30vh - 100px)' }}>
        {/* Minimal Welcome */}
        <div className="mb-2 md:mb-3">
          <p className="text-white/80 text-sm md:text-base font-light tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-cantata)' }}>
            Welcome to
          </p>
          <div className="w-12 h-px bg-white/40 mx-auto mt-1"></div>
        </div>

        {/* Rotaract Club Of Coimbatore */}
        <div className="mb-1 md:mb-0">
          <p className="text-cyan-100 text-base md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase opacity-95" style={{ fontFamily: 'var(--font-aldrich)' }}>
            ROTARACT CLUB OF COIMBATORE
          </p>
        </div>

        {/* Main Title - COSMOPOLITAN */}
        <h1 className="text-white text-[40px] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.05em] uppercase leading-tight mb-2 md:mb-4 drop-shadow-2xl" style={{ fontFamily: 'var(--font-aldrich)' }}>
          COSMOPOLITAN
        </h1>

        {/* Clean Info Row */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-2 md:mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <p className="text-white/90 text-sm font-light tracking-wide" style={{ fontFamily: 'var(--font-cantata)' }}>
              Group 5
            </p>
          </div>
          
          <div className="w-px h-4 bg-white/30"></div>
          
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <p className="text-white/90 text-sm font-light tracking-wide" style={{ fontFamily: 'var(--font-cantata)' }}>
              District 3206
            </p>
          </div>
          
          <div className="w-px h-4 bg-white/30"></div>
          
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <p className="text-white/90 text-sm font-light tracking-wide" style={{ fontFamily: 'var(--font-cantata)' }}>
              Est. 1997
            </p>
          </div>
        </div>

        <div ref={textRef} className="mt-4 max-w-2xl">
          <p className="text-white text-base sm:text-lg" style={{ fontFamily: 'var(--font-cantata)' }}>
            {slides[currentSlide].caption}
          </p>
        </div>
      </div>

      {/* 🔄 Extra Spinning Logo Bottom Right */}
      <div
        className="absolute z-20 animate-spin-slow
                  right-[-3.5rem] bottom-[1rem]
                  md:right-[-7rem] md:bottom-[-0.8rem]"
      >
        <img
          src="/logo/white-wheel-logo.png"
          alt="spin 2"
          className="w-30 md:w-65 aspect-square object-contain opacity-60 hover:opacity-90 transition duration-500"
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