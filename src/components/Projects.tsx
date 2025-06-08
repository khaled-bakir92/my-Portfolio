import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectItem from './ProjectItem';

const projects = [
  {
    title: 'Zahnarztpraxis',
    category: 'Website',
    description: 'Eine Zahnarztpraxis-Website, entwickelt mit React. Für die Suchmaschinenoptimierung (SEO) wird Helmet eingesetzt. Das Styling wurde mit Tailwind CSS umgesetzt, was eine schnelle und utility-basierte Designentwicklung ermöglicht. Die Benutzeroberfläche und das Benutzererlebnis (UI/UX) wurden mit Figma entworfen. Die Seite ist vollständig responsiv und für alle Geräte optimiert.',
    image: '/images/Abden-projekt.png',
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
  },
  {
    title: 'LSB-Radix-Sortieralgorithmus',
    category: 'Rechnerarchitektur',
    description: 'Ein LSB-Radix-Sortieralgorithmus in x86-64 Assembler, mit stabiler, bitweiser Sortierung in zwei Durchläufen. Unterstützt auf- und absteigende Reihenfolgen sowie Vorzeichenbehandlung. Speicheroptimiert und ohne Immediate Offsets, entwickelt im Rahmen der Rechnerarchitektur-Vorlesung.',
    image: '/images/LSB-Radix.svg',
    techStack: [
      { name: 'Assembly', logo: '/images/techStack/assembly.svg' },
      { name: 'CMake', logo: '/images/techStack/CMake.svg' },
      { name: 'Linux', logo: '/images/techStack/Linux.svg' },
      { name: 'LaTeX', logo: '/images/techStack/LaTeX.svg' }
    ],
    links: {
      github: 'https://github.com',
      live: 'https://example.com'
    }
  },
  {
    title: 'Parallel Recursive MSB-Radix Sort',
    category: 'Operating System',
    description: 'Ein paralleler MSB-Radix-Sort in C mit POSIX-Threads. Rechte Teilgruppen werden asynchron sortiert, linke sequentiell. Synchronisation erfolgt per Mutex und Barrieren, die Gruppenzuteilung über eine eigene Warteschlange. Entwickelt im Rahmen der Betriebssysteme-Vorlesung zur Optimierung großer Datenmengen.',
    image: '/images/MSB-Radix.svg',
    techStack: [
      { name: 'C', logo: '/images/techStack/C.svg' },
      { name: 'CMake', logo: '/images/techStack/CMake.svg' },
      { name: 'Linux', logo: '/images/techStack/Linux.svg' },
      { name: 'LaTeX', logo: '/images/techStack/LaTeX.svg' }
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
          {projects.map((project, index) => (
            <ProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;