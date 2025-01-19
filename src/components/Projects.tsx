import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'Zahnarztpraxis',
    category: 'Website',
    description: 'Eine Zahnarztpraxis-Website, programmiert mit Next.js, um die SEO zu optimieren und schnelle Ladezeiten zu gewährleisten. Das Styling wurde mit Styled Components umgesetzt, was eine flexible und komponentenbasierte Gestaltung des Designs ermöglicht. Die Benutzeroberfläche und das Benutzererlebnis (UI/UX) wurden mit Figma entworfen. Die Seite ist vollständig responsiv und für alle Geräte optimiert.',
    image: '/images/Abden-projekt.png',
    techStack: [
      { name: 'Next.js', logo: '/images/techStack/next-js.svg' },
      { name: 'JavaScript', logo: '/images/techStack/javascript.svg' },
      { name: 'Styled Components', logo: '/images/techStack/styledcomponent.svg' },
      { name: 'Figma', logo: '/images/techStack/figma.svg' }
    ],
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
  {
    title: 'Lehrerin Portfolio',
    category: 'Webseite',
    description: 'Ein Portfolio für Lehrerinnen, programmiert mit React.js, TypeScript. Das Styling wurde mit Tailwind CSS umgesetzt, das durch seine hohe Anpassungsfähigkeit und Geschwindigkeit überzeugt. Die Benutzeroberfläche und das Benutzererlebnis (UI/UX) wurden mit Figma entworfen. Die Seite ist vollständig responsiv und für alle Geräte optimiert.',
    image: '/images/REWE.svg',
    techStack: [
      { name: 'React', logo: '/images/techStack/react.svg' },
      { name: 'TypeScript', logo: '/images/techStack/typescript.svg' },
      { name: 'Tailwind CSS', logo: '/images/techStack/tailwind.svg' },
      { name: 'Figma', logo: '/images/techStack/figma.svg' }
    ],
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
  {
    title: 'Ecommerce',
    category: 'Website',
    description: 'Ein Full-Stack-E-Commerce-System, entwickelt mit Next.js, React und Tailwind CSS. Strapi wird für das CMS und die Authentifizierung genutzt, während Stripe für sichere Zahlungsabwicklungen sorgt. Das UI/UX-Design wurde mit Figma erstellt. Die Plattform ist vollständig responsiv und für alle Geräte optimiert.',
    image: '/images/Ecommerce.svg',
    techStack: [
      { name: 'Next.js', logo: '/images/techStack/next-js.svg' },
      { name: 'React', logo: '/images/techStack/react.svg' },
      { name: 'Tailwind', logo: '/images/techStack/tailwind.svg' },
      { name: 'Strapi', logo: '/images/techStack/strapi.svg' },
      { name: 'Stripe', logo: '/images/techStack/stripe.svg' },
      { name: 'Figma', logo: '/images/techStack/figma.svg' }
    ],
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
  {
    title: 'Magic Memory',
    category: 'Web Game',
    description: 'Ein simples Magic-Memory-Spiel, programmiert mit React. Die Anwendung nutzt React-Hooks für eine klare und effiziente Zustandsverwaltung und Funktionalität. Das Styling wurde mit einfachem CSS umgesetzt, um ein leichtes und ansprechendes Design zu gewährleisten. Das Spiel ist responsiv und bietet ein unterhaltsames Erlebnis auf allen Geräten.',
    image: '/images/memo.svg',
    techStack: [
      { name: 'React', logo: '/images/techStack/react.svg' },
      { name: 'CSS', logo: '/images/techStack/css-3.svg' },
      { name: 'JavaScript', logo: '/images/techStack/javascript.svg' }
    ],
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  }
];

function Projects() {
  const titleRef = useScrollAnimation({ animation: 'fade-up', delay: 200 });

  return (
    <section id="projects" className="bg-[#213555] pt-24 text-white">
      <div className="section-container">
        <h2 ref={titleRef} className="font-bold text-[#D8C4B6] text-3xl sm:text-4xl md:text-5xl flex items-center gap-4 mb-16 fade-up">
          Projekte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectRef = useScrollAnimation({ 
              animation: 'slide-in', 
              delay: 100 + (index * 100),
              threshold: 0.2 
            });
            
            return (
              <div
                ref={projectRef}
              key={project.title}
              className="group bg-[#233859] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 slide-in
                hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  width="800"
                  height="450"
                  className="w-full h-full object-cover transition-transform"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-medium text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5EFE7] group-hover:text-white 
                    transition-colors">{project.title}</h3>
                  <p className="text-sm sm:text-base text-[#D8C4B6] group-hover:text-white/90 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2 py-1 text-xs sm:text-sm bg-[#415370] text-[#D8C4B6] rounded-full
                        group-hover:bg-[#4C6384] transition-colors flex items-center gap-2"
                    >
                      <img
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        className="w-4 h-4 object-contain"
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#D8C4B6] hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#D8C4B6] hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent 
                  rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent 
                  rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;