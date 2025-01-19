import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const profileRef = useScrollAnimation({ animation: 'fade-in', delay: 200, onlyOnLoad: true });
  const titleRef = useScrollAnimation({ animation: 'fade-up', delay: 400, onlyOnLoad: true });
  const subtitleRef = useScrollAnimation({ animation: 'fade-up', delay: 600, onlyOnLoad: true });
  const subtitle2Ref = useScrollAnimation({ animation: 'fade-up', delay: 800, onlyOnLoad: true });
  const descriptionRef = useScrollAnimation({ animation: 'fade-up', delay: 800, onlyOnLoad: true });
  const buttonRef = useScrollAnimation({ animation: 'scale-up', delay: 1000, onlyOnLoad: true });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-[90vh] bg-[#213555] text-white">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#213555] md:relative">
        <div className="section-container py-6 flex justify-between items-center">
        <a href="/" className="font-['Pacifico'] text-[#D8C4B6] text-xl sm:text-2xl hover:text-[#F5EFE7] transition-colors">
          Khaled
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8C4B6] hover:text-[#F5EFE7] transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8C4B6] hover:text-[#F5EFE7] transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-[#D8C4B6] hover:text-[#F5EFE7] transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#D8C4B6] hover:text-[#F5EFE7] transition-colors z-50"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#213555] z-40 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="font-['Pacifico'] text-xl sm:text-2xl text-[#D8C4B6] hover:text-blue-400 transition-colors">
                Khaled
              </a>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-[#D8C4B6] text-lg sm:text-xl hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, 'experience')}
                className="text-[#D8C4B6] text-xl hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-[#D8C4B6] text-xl hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-[#D8C4B6] text-xl hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-[#D8C4B6] text-xl hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <div className="flex gap-6 mt-4">
                <a href="https://www.linkedin.com/in/khaled-bakir-153a81292/" target="_blank" rel="noopener noreferrer" className="text-[#D8C4B6] hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="https://github.com/khaled-bakir92" target="_blank" rel="noopener noreferrer" className="text-[#D8C4B6] hover:text-blue-400 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="mailto:khaled.bakir92@gmail.com" className="text-[#D8C4B6] hover:text-blue-400 transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </div> 
          </div>
        </div>

      </nav>

      <div className="section-container pt-32 md:pt-8 pb-20 flex flex-col items-center text-center">
        <div ref={profileRef} className="w-64 h-64 md:w-55 md:h-55 lg:w-66 lg:h-66 mb-8 rounded-full overflow-hidden fade-in">
          <img
            src="/images/main-bild.png"
            alt="Khaled - Frontend Developer Portrait"
            width="400"
            height="400"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 ref={titleRef} className="text-[#F5EFE7] text-xl sm:text-2xl md:text-4xl font-bold mb-6 tracking-tight fade-up">
          Frontend Entwickler
        </h1>
        <h1 ref={subtitleRef} className="text-[#D8C4B6] text-xl sm:text-2xl md:text-4xl font-bold mb-6 tracking-tight fade-up">
          Spezialziert in Web & Mobile
        </h1>
        <h1 ref={subtitle2Ref} className="text-[#F5EFE7] text-xl sm:text-2xl md:text-4xl font-bold mb-6 tracking-tight fade-up">
          Applications
        </h1>
        
        <p ref={descriptionRef} className="text-[#D9D9D9] text-base sm:text-lg md:text-xl max-w-2xl mb-10 fade-up">
          Hi, ich bin Khaled, und ich entwickle benutzerfreundliche Lösungen im Bereich der Frontend-Entwicklung.
        </p>
          <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          ref={buttonRef}
          className="border-2 border-[#D8C4B6] hover:bg-[#415370] text-[#D8C4B6] hover:text-[#F5EFE7] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg scale-up
          transition-all transform hover:scale-105 active:scale-100 font-medium">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;