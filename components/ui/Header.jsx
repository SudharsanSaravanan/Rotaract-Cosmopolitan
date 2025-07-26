'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0E141C]/95 backdrop-blur-md shadow-2xl border-b border-white/10' 
        : 'bg-gradient-to-b from-[#0E141C]/80 via-[#314B6E]/20 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-4">
        <div className="flex justify-between items-center py-3 md:py-2">
          
          {/* Logo and Title - Removed hover scaling */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#314B6E] to-[#607EA2] rounded-full blur-lg opacity-30"></div>
              <Image
                src="/logo/cosmopolitan-logo.png"
                alt="Rotaract Coimbatore Cosmopolitan Logo"
                width={56}
                height={56}
                className="relative w-12 h-12 md:w-14 md:h-14 object-contain filter"
              />
            </div>
            
            <div className="flex flex-col leading-tight">
              <span 
                className="text-white text-xs sm:text-sm md:text-[14px] font-light tracking-[0.1em] uppercase" 
                style={{ fontFamily: 'var(--font-aldrich)' }}
              >
                Rotaract Club of Coimbatore
              </span>
              <span 
                className="text-[#ffffffd6] text-[0.65rem] sm:text-xs md:text-[13px] font-light tracking-wider uppercase opacity-80" 
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Cosmopolitans
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Simplified hover effects */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Events', href: '/events' },
              { name: 'Team', href: '/team' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative py-2"
              >
                <span 
                  className="text-white/90 hover:text-white font-light text-sm tracking-wide uppercase transition-colors duration-300" 
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  {item.name}
                </span>
                {/* Only keep the underline animation */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r bg-[#ffffff] group-hover:w-full transition-all duration-300 ease-out"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-[#BDB3A3] focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown - Simplified */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-3 bg-[#0E141C]/90 backdrop-blur-lg border-t border-white/10">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Events', href: '/events' },
              { name: 'Team', href: '/team' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-white/90 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </header>
  )
}