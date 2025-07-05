import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top bar - Contact & Social */}
      <div className="bg-[#1177BF] text-white border-b font-bold">
        <div className="container mx-auto px-4 lg:px-6 py-2 sm:py-3 flex flex-wrap sm:flex-nowrap gap-2 justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm order-1">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+1 234 567 8910</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>info@example.com</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 order-2 ml-auto sm:ml-0">
            {/* Buttons - Hidden on mobile */}
            <div className="hidden md:flex gap-2 lg:gap-3">
              <button className="border border-white text-white px-2 lg:px-4 py-1 text-[10px] sm:text-xs hover:bg-white hover:text-blue-600 transition duration-300 whitespace-nowrap">
                CONTACT US
              </button>
              <button className="border border-white text-white px-2 lg:px-4 py-1 text-[10px] sm:text-xs hover:bg-white hover:text-blue-600 transition duration-300 whitespace-nowrap">
                ABOUT US
              </button>
              <button className="border border-white text-white px-2 lg:px-4 py-1 text-[10px] sm:text-xs hover:bg-white hover:text-blue-600 transition duration-300 whitespace-nowrap">
                JOIN US
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-1 sm:gap-2 order-3">
              <a
                href="#"
                className="bg-white rounded-full p-[3px] sm:p-1 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-[10px] h-[10px] sm:w-3 sm:h-3 text-blue-600" />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-[3px] sm:p-1 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-[10px] h-[10px] sm:w-3 sm:h-3 text-blue-600" />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-[3px] sm:p-1 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-[10px] h-[10px] sm:w-3 sm:h-3 text-blue-600" />
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-0 sm:gap-1 cursor-pointer order-4 text-xs sm:text-sm">
              <span>EN</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#1177BF] text-white">
        <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
          {/* Logo */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex flex-wrap gap-3 lg:gap-6">
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[11px] lg:text-sm uppercase font-medium py-4 block hover:text-blue-200 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slide down animation */}
      <div
        className={`md:hidden bg-blue-800 text-white overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="py-2">
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                News
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-blue-700 px-2 text-sm">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile buttons */}
          <div className="flex flex-col gap-2 py-3 border-t border-blue-600">
            <button className="border border-white text-white px-4 py-2 text-xs hover:bg-white hover:text-blue-600 transition duration-300">
              CONTACT US
            </button>
            <button className="border border-white text-white px-4 py-2 text-xs hover:bg-white hover:text-blue-600 transition duration-300">
              ABOUT US
            </button>
            <button className="border border-white text-white px-4 py-2 text-xs hover:bg-white hover:text-blue-600 transition duration-300">
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
