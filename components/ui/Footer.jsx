import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#4E342E] via-[#6D4C41] to-[#8D6E63] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold text-yellow-300">
              WebCraft
            </Link>
            <p className="mt-4 text-[#EDE0D4] max-w-md font-light">
              We create stunning, professional websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors">
                {/* Twitter Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-..." />
                </svg>
              </a>
              <a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors">
                {/* Instagram Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-..." />
                </svg>
              </a>
              <a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors">
                {/* LinkedIn Icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h..." />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">Web Development</a></li>
              <li><a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">Mobile Apps</a></li>
              <li><a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">E-commerce</a></li>
              <li><a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">SEO Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">About Us</Link></li>
              <li><Link href="/works" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">Our Work</Link></li>
              <li><Link href="/contact" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">Contact</Link></li>
              <li><a href="#" className="text-[#EDE0D4] hover:text-yellow-300 transition-colors font-light">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#795548] mt-8 pt-8 text-center">
          <p className="text-[#EDE0D4] font-light">© 2025 WebCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
