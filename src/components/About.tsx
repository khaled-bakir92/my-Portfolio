import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const titleRef = useScrollAnimation({ animation: 'fade-up', delay: 200 });
  const descriptionRef = useScrollAnimation({ animation: 'fade-up', delay: 400 });
  const buttonRef = useScrollAnimation({ animation: 'scale-up', delay: 600 });

  return (
    <section id="about" className="bg-[#F5F5F5] py-8">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 ref={titleRef} className="text-md sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight fade-up">
            Hi, Ich bin Khaled. Nice to meet you.
          </h2>
          
          <p ref={descriptionRef} className="text-xs text-base sm:text-xs md:text-xl text-gray-600 leading-relaxed fade-up">
          Ich habe an mehreren Projekten für individuelle Kunden gearbeitet und dabei maßgeschneiderte
          Weblösungen entwickelt, die auf modernen Technologien wie React, Next.js, Node.js und Firebase 
          basieren. Mein Fokus liegt darauf, Webseiten und Anwendungen zu gestalten, die sowohl optisch 
          ansprechend als auch funktional und benutzerfreundlich sind.
          </p>

          <button ref={buttonRef} className="mt-8 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-black rounded-lg font-medium scale-up
            hover:bg-black hover:text-white transition-colors duration-300 text-lg text-black">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;