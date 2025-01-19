import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#213555] text-white py-12">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <a href="/" className="font-['Pacifico'] text-[#D8C4B6] text-2xl sm:text-3xl hover:text-[#F5EFE7]  transition-colors">
            Khaled
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('experience');
                if (element) {
                  const offset = 80; // Adjust this value based on your header height
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/khaled-bakir-153a81292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8C4B6] hover:text-[#F5EFE7]  transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/khaled-bakir92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8C4B6] hover:text-[#F5EFE7]  transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:khaled.bakir92@gmail.com"
              className="text-[#D8C4B6] hover:text-[#F5EFE7]  transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Legal Links - Mobile */}
          <div className="flex md:hidden gap-4 text-gray-400 text-sm">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/datenschutz');
              }}
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/impressum');
              }}
              className="hover:text-white transition-colors"
            >
              Impressum
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-1 flex-wrap justify-center">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 inline animate-pulse" />
            <span>by Khaled © {currentYear}</span>
            {/* Legal Links - Desktop */}
            <span className="hidden md:inline"> • </span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/datenschutz');
              }}
              className="hover:text-white transition-colors ml-1 hidden md:inline"
            >
              Datenschutz
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/impressum');
              }}
              className="hover:text-white transition-colors hidden md:inline"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;