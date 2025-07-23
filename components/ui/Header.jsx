'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-8 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                showWhiteBg ? 'text-teal-600' : 'text-white'
              }`}
            >
              WebCraft
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 pt-2 pl-130">
            {['Home', 'About', 'Works', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className={`text-[15px] transition-colors duration-300 ${
                  showWhiteBg ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`transition-colors duration-200 ${
                showWhiteBg ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Instant background alignment) */}
        <div
          className={`transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white rounded-b-lg shadow-md z-40 md:hidden`}
        >
          <div className="px-4 py-4 space-y-1">
            {['Home', 'About', 'Works', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
