import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);

  const aboutUsItems = [
    "Our Company",
    "Sustainability",
    "Investor Relations",
    "Corporate Governance",
  ];

  const loanServicesItems = [
    "Sangla OR/CR",
    "Car Financing",
    "Truck Financing",
    "Sangla Titulo",
    "JUANAsenso",
    "Repossessed Assets",
  ];

  const articlesItems = ["Latest News", "Financial Tips", "Success Stories"];

  const contactUsItems = ["Email Us", "Call Us", "Visit a Branch"];

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileActiveDropdown(
      mobileActiveDropdown === dropdown ? null : dropdown,
    );
  };

  return (
    <header className="bg-white relative z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-5 py-2 shadow-lg">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="shrink-0">
            <span className="text-[#FF5722] text-2xl sm:text-4xl font-extrabold italic tracking-tighter">
              <Link to={"/"}>SAFC</Link>
            </span>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#FF5722]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-13">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#FF5722] text-sm lg:text-base">
                About Us <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 mt-2 bg-[#FF5722] text-white min-w-55 shadow-xl/30"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {aboutUsItems.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ffffff] hover:text-[#FF5722] text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("loans")}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#FF5722] text-sm lg:text-base">
                Loan Services <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "loans" && (
                <div
                  className="absolute top-full left-0 mt-2 bg-[#FF5722] text-white min-w-55  shadow-xl/30"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {loanServicesItems.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ffffff] hover:text-[#FF5722] text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("articles")}
            >
              <button className="flex items-center gap-1  hover:text-[#FF5722] text-sm lg:text-base">
                Articles <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "articles" && (
                <div
                  className="absolute top-full left-0 mt-2 bg-[#FF5722] text-white min-w-55 shadow-xl/30 "
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {articlesItems.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ffffff] hover:text-[#FF5722] text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#branches"
              className="text-gray-700 hover:text-[#FF5722] text-sm lg:text-base"
            >
              Branches
            </a>
            <a
              href="#careers"
              className="text-gray-700 hover:text-[#FF5722] text-sm lg:text-base"
            >
              Careers
            </a>
            <a
              href="#help"
              className="text-gray-700 hover:text-[#FF5722] text-sm lg:text-base hidden lg:block"
            >
              Help Center
            </a>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("contact")}
            >
              <button className="flex items-center gap-1 hover:text-[#FF5722] text-sm lg:text-base">
                Contact Us <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "contact" && (
                <div
                  className="absolute top-full left-0 mt-2 bg-[#FF5722] text-white min-w-55 shadow-xl/30 border"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {contactUsItems.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-6 py-3 hover:bg-[#ffffff] hover:text-[#FF5722] text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-[#FF5722]">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          <button className="bg-[#FF5722] hover:bg-[#fb6335]  text-white py-3 px-4 rounded-[5px] hidden lg:block ">
            Inquire Now
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className=" w-full -ml-4 md:hidden py-4 border-t z-50 absolute bg-white ">
            <div className="flex flex-col space-y-2 ">
              {/* About Us */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("about")}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  About Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileActiveDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "about" && (
                  <div className="bg-[#FF5722] text-white">
                    {aboutUsItems.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-8 py-2 hover:bg-[#F4511E]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Loan Services */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("loans")}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Loan Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileActiveDropdown === "loans" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "loans" && (
                  <div className="bg-[#E3F2FD]">
                    {loanServicesItems.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-8 py-2 text-gray-700 hover:bg-[#BBDEFB]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Articles */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("articles")}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Articles
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileActiveDropdown === "articles" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "articles" && (
                  <div className="bg-gray-50">
                    {articlesItems.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#branches"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Branches
              </a>
              <a
                href="#careers"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Careers
              </a>
              <a
                href="#help"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Help Center
              </a>

              {/* Contact Us */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("contact")}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileActiveDropdown === "contact" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileActiveDropdown === "contact" && (
                  <div className="bg-gray-50">
                    {contactUsItems.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Search className="w-5 h-5 mr-2" /> Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
