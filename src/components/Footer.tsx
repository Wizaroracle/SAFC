import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  FacebookIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FF5722] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About SAFC */}
          <div>
            <h3 className="text-xl sm:text-4xl  mb-4 sm:mb-6  font-extrabold italic tracking-tighter">
              SAFC
            </h3>
            <p className="text-sm sm:text-base text-white mb-4 sm:mb-6">
              South Asialink Finance Corporation - Your trusted partner in
              making dreams come true since 2003.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 sm:p-3 rounded-full hover:bg-opacity-20"
              >
                <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700" />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 sm:p-3 rounded-full hover:bg-opacity-20"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700" />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 sm:p-3 rounded-full hover:bg-opacity-20"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700" />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 p-2 sm:p-3 rounded-full hover:bg-opacity-20"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Loan Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Branches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Loan Services */}
          <div>
            <h4 className="text-base sm:text-lg mb-4 sm:mb-6">Loan Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Sangla OR/CR
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Car Financing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Truck Financing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  Sangla Titulo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-white hover:text-zinc-300"
                >
                  JUANAsenso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-1 " />
                <span className="text-sm sm:text-base text-white hover:text-zinc-300">
                  Manila, Philippines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-1 " />
                <span className="text-sm sm:text-base text-white hover:text-zinc-300">
                  +63 2 1234 5678
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 mt-1 " />
                <span className="text-sm sm:text-base text-white hover:text-zinc-300">
                  info@safc.ph
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-white">
            © 2026 Wizaroracle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
