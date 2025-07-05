import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#178CCB] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Connect with us
          </h2>

          <div className="flex items-center justify-center gap-4">
            {/* Social Media Icons */}
            <a
              href="#"
              className="bg-white rounded-full p-3 hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-light-blue" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-light-blue" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-light-blue" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-light-blue" />
            </a>
          </div>

          <div className="mt-8 text-white">
            <p className="text-sm">© 2023 KITA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
