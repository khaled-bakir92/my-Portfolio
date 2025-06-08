import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  
  // Memoize route validation for performance
  const isValidRoute = useMemo(() => 
    Object.values(routes).includes(currentPath), 
    [currentPath]
  );
  
  // Memoize page metadata
  const pageMetadata = useMemo(() => {
    const metadata = {
      [routes.privacy]: {
        title: 'Datenschutzerklärung | Khaled - Frontend Developer',
        description: 'Datenschutzerklärung für die Website von Khaled - Frontend Developer. Informationen über den Umgang mit Ihren Daten.'
      },
      [routes.imprint]: {
        title: 'Impressum | Khaled - Frontend Developer',
        description: 'Impressum von Khaled - Frontend Developer. Rechtliche Informationen und Kontaktdaten.'
      },
      [routes.about]: {
        title: 'Über Mich | Khaled - Frontend Developer',
        description: 'Erfahren Sie mehr über Khaled - Frontend Developer mit Expertise in Web & Mobile Development.'
      },
      [routes.projects]: {
        title: 'Projekte | Khaled - Frontend Developer',
        description: 'Entdecken Sie meine Projekte im Bereich Web- und Mobile-Entwicklung. Von E-Commerce bis zu Enterprise-Lösungen.'
      },
      [routes.services]: {
        title: 'Dienstleistungen | Khaled - Frontend Developer',
        description: 'Professionelle Entwicklungsdienstleistungen für Web und Mobile. Maßgeschneiderte Lösungen für Ihr Unternehmen.'
      },
      [routes.contact]: {
        title: 'Kontakt | Khaled - Frontend Developer',
        description: 'Kontaktieren Sie mich für Ihre Projektanfragen. Ich freue mich auf Ihre Nachricht.'
      }
    };

    return metadata[currentPath] || {
      title: 'Khaled - Frontend Developer | Web & Mobile Applications',
      description: 'Frontend Developer specializing in Web & Mobile Applications. Expert in React, React Native, and modern web technologies.'
    };
  }, [currentPath]);

  // Optimize navigation handler with useCallback
  const handleNavigation = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Optimize popstate handler with useCallback
  const handlePopState = useCallback(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handlePopState]);

  return (
    <div className="min-h-screen bg-[#213555]">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
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
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0" />
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
