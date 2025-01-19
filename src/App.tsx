import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';
import PrivacyPolicy from './components/PrivacyPolicy';
import Impressum from './components/Impressum';
import Error404 from './components/Error404';
import { routes } from './routes';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const isValidRoute = Object.values(routes).includes(currentPath as any);
  
  const getPageTitle = () => {
    switch (currentPath) {
      case routes.privacy:
        return 'Datenschutzerklärung | Khaled - Frontend Developer';
      case routes.imprint:
        return 'Impressum | Khaled - Frontend Developer';
      case routes.about:
        return 'Über Mich | Khaled - Frontend Developer';
      case routes.projects:
        return 'Projekte | Khaled - Frontend Developer';
      case routes.services:
        return 'Dienstleistungen | Khaled - Frontend Developer';
      case routes.contact:
        return 'Kontakt | Khaled - Frontend Developer';
      default:
        return 'Khaled - Frontend Developer | Web & Mobile Applications';
    }
  };

  const getPageDescription = () => {
    switch (currentPath) {
      case routes.privacy:
        return 'Datenschutzerklärung für die Website von Khaled - Frontend Developer. Informationen über den Umgang mit Ihren Daten.';
      case routes.imprint:
        return 'Impressum von Khaled - Frontend Developer. Rechtliche Informationen und Kontaktdaten.';
      case routes.about:
        return 'Erfahren Sie mehr über Khaled - Frontend Developer mit Expertise in Web & Mobile Development.';
      case routes.projects:
        return 'Entdecken Sie meine Projekte im Bereich Web- und Mobile-Entwicklung. Von E-Commerce bis zu Enterprise-Lösungen.';
      case routes.services:
        return 'Professionelle Entwicklungsdienstleistungen für Web und Mobile. Maßgeschneiderte Lösungen für Ihr Unternehmen.';
      case routes.contact:
        return 'Kontaktieren Sie mich für Ihre Projektanfragen. Ich freue mich auf Ihre Nachricht.';
      default:
        return 'Frontend Developer specializing in Web & Mobile Applications. Expert in React, React Native, and modern web technologies.';
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#213555]">
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <link rel="canonical" href={`https://khaled-portfolio.com${currentPath}`} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#213555" />
        <link rel="alternate" hrefLang="de" href={`https://khaled-portfolio.com${currentPath}`} />
      </Helmet>
      {!isValidRoute ? (
        <Error404 />
      ) : currentPath === routes.privacy ? (
        <PrivacyPolicy />
      ) : currentPath === routes.imprint ? (
        <Impressum />
      ) : (
        <>
          <Hero />
          <WorkExperience />
          <div className="section-container pt-10">
          <div className="w-full md:w-2/3 mx-auto relative rounded-2xl overflow-hidden flex items-end">
              <img
                src="/images/arbeitplatz.svg"
                alt="Developer workspace with code"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 " />
            </div>
          </div>
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer onNavigate={handleNavigation} />
        </>
      )}
    </div>
  );
}

export default App;
