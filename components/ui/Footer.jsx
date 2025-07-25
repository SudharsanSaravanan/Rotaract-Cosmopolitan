import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
  const socials = [
    { icon: FaFacebookF, url: "https://www.facebook.com/rtrcbecosmopolitan/" }, // Placeholder
         
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/rac_cbe_cosmopolitan?igsh=NGRxa2FyamtjcDVu"
    },
         
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/rotaract-club-of-coimbatore-cosmopolitan/"
    }
  ];

  return (
    <footer className="bg-[#0E141C] text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section */}
        <div className="space-y-4">
          {/* Logo Placeholder */}
          <div className="text-lg font-bold">
            Rotaract Club of Coimbatore{' '}
            <span className="text-2xl text-[#BDB3A3] font-normal font-[Italianno]">
              Cosmopolitan
            </span>
            <div className="text-xs text-[#BDB3A3]">District 3206</div>
          </div>

          <p className="max-w-md text-[#BDB3A3] hover:text-[#607EA2] transition duration-200">
            Rotaract gives the opportunity for youngsters to do community
            service and can develop their professionalism, fellowship, and
            leadership.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div>
            <div className="font-semibold mb-1 text-[#BDB3A3] hover:text-[#314B6E] transition duration-200">
              Contact Us
            </div>
            <p className="text-[#BDB3A3] mt-2 hover:text-[#607EA2] transition duration-200">
              WhatsApp: +91 9488152297 | +91 7010722265
            </p>
            <p className="text-[#BDB3A3] mt-1 hover:text-[#607EA2] transition duration-200">
              Mail: contact@rotaractcbcosmopolitan.in
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            {socials.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-2 rounded-sm hover:bg-[#607EA2] hover:text-[#8197AC] transition duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-[#607EA2] mt-8 pt-4 text-center text-[#BDB3A3] text-xs">
        Copyright © 2025-26 | Rotaract Coimbatore Cosmopolitan
      </div>
    </footer>
  );
}
