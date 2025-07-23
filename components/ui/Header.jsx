'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showWhiteBg = scrolled || isMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ease-in-out ${
        showWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-0 relative">
        <div className="flex justify-between items-center py-2 md:py-3 transition-all duration-300"> {/* Reduced padding */}
          {/* Logo and Club Name - Explicitly left-aligned */}
          <Link href="/" className="flex items-center space-x-0 sm:space-x-0 flex-shrink-0">
            <Image
              src="/logo/cosmopolitan-logo.png"
              alt="Rotaract Coimbatore Cosmopolitan Logo"
              width={60}
              height={60}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] object-contain transition-opacity duration-300"
            />
            <div className="flex flex-col">
              <span
                className={`text-xs sm:text-base md:text-base font-serif font-bold leading-tight transition-colors duration-300 ${
                  showWhiteBg ? 'text-[#000d6f]' : 'text-[#000d6f]'
                }`}
              >
                Rotaract Club of Coimbatore
              </span>
              <span
                className={`text-[10px] sm:text-sm md:text-[14px] font-serif font-medium leading-tight transition-colors duration-300 ${
                  showWhiteBg ? 'text-gray-600' : 'text-gray-700'
                }`}
              >
                Cosmopolitans
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Pushed to the right */}
          <nav className="hidden md:flex ml-auto space-x-8 lg:space-x-12">
            {['Home', 'About', 'Events', 'Team', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className={`text-sm lg:text-[15px] font-serif font-medium transition-colors duration-300 ${
                  showWhiteBg
                    ? 'text-gray-700 hover:text-[#000d6f]'
                    : 'text-gray-800 hover:text-[#000d6f]'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-shrink-0 ml-auto">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`transition-colors duration-200 ${
                showWhiteBg ? 'text-gray-700 hover:text-[#000d6f]' : 'text-black hover:text-[#000d6f]'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white rounded-b-lg shadow-md z-40 md:hidden`}
        >
          <div className="px-4 py-4 space-y-1">
            {['Home', 'About', 'Events', 'Team', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-700 hover:text-[#000d6f] font-serif text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

        .font-serif {
          font-family: 'Merriweather', serif;
        }
      `}</style>
    </header>
  )
}