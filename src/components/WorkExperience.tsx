import React, { useEffect } from 'react';

const experiences = [
  {
    id: 'atg',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '',
    logo: '/images/freelancer.svg',
    points: [
      'Entwicklung und Betreuung verschiedener Kunden-Webseiten: Einsatz von React und Next.js für dynamische Frontends, ergänzt durch Tailwind und TypeScript für eine moderne und performante Codebasis.',
      'Serverseitige Implementierungen: Nutzung von Node.js und Express.js zur Erstellung robuster APIs, eingebunden in Firebase oder Strapi für schnelle und zuverlässige Datenhaltung.',
      'Effizientes Prototyping und Design: Verwendung von Figma, um UI/UX-Konzepte zu entwerfen und frühzeitig abzustimmen, was den Umsetzungsprozess erheblich beschleunigt.',
    ],
    techStack: [
      { name: 'React', logo: '/images/techStack/react.svg' },
      { name: 'Next.js', logo: '/images/techStack/next-js.svg' },
      { name: 'Figma', logo: '/images/techStack/figma.svg' },
      { name: 'Node.js', logo: '/images/techStack/node-js.svg' },
      { name: 'Express.js', logo: '/images/techStack/Express.svg' },
      { name: 'Firebase', logo: '/images/techStack/firebase.svg' },
      { name: 'Tailwind', logo: '/images/techStack/tailwind.svg' },
      { name: 'Typescript', logo: '/images/techStack/typescript.svg' },
      { name: 'Strapi', logo: '/images/techStack/strapi.svg' },
      { name: 'Git', logo: '/images/techStack/git.svg' },
    ],
  },
  {
    id: 'DB',
    company: 'Deutsche Bahn',
    role: 'Datenanalyst',
    period: '',
    logo: '/images/DB.svg',
    points: [
      'Automatisierung von Datenverarbeitungsprozessen mit Python: Wiederkehrende Aufgaben wurden automatisiert. Daten wurden extrahiert, transformiert und geladen, um Effizienz und Genauigkeit zu steigern.',
      'Datenbankabfragen und -management mit SQL: Komplexe Abfragen wurden erstellt und optimiert. Datenstrukturen wurden verbessert und die Datenintegrität sichergestellt',
      'Entwicklung von Datenvisualisierungen mit Excel: Daten wurden analysiert und visualisiert. Pivot-Tabellen und Diagramme unterstützten die Präsentation von Erkenntnissen.',
    ],
    techStack: [
      { name: 'MySQL', logo: '/images/techStack/MySQL1.svg' },
      { name: 'PostgreSQL', logo: '/images/techStack/PostgresSQL.svg' },
      { name: 'Oracle Database', logo: '/images/techStack/Oracle.svg' },
      { name: 'Excel', logo: '/images/techStack/excel.svg' },
      { name: 'JIRA', logo: '/images/techStack/Jira.svg' },
      { name: 'Git', logo: '/images/techStack/git.svg' },
    ],
  },
  {
    id: 'freelance',
    company: 'Golden Ways Logistics',
    role: 'Software Engineer',
    period: '',
    logo: '/images/GWL.svg',
    points: [
      'Website-Anpassungen: Layouts und Funktionen mithilfe von HTML, CSS und JavaScript optimiert und Fehler behoben, um die Nutzerfreundlichkeit zu erhöhen.',
      'Datenmanagement: MySQL-Abfragen und Excel-Auswertungen eingesetzt, um Logistikdaten übersichtlich aufzubereiten und verständlich zu präsentieren.',
      'Automatisierung von Abläufen: Python-Skripte entwickelt, die wiederkehrende Aufgaben bei der Datenverarbeitung und -analyse beschleunigen.',
    ],
    techStack: [
      { name: 'HTML', logo: '/images/techStack/html-5.svg' },
      { name: 'CSS', logo: '/images/techStack/css-3.svg' },
      { name: 'Bootstrap', logo: '/images/techStack/bootstrap.svg' },
      { name: 'JavaScript', logo: '/images/techStack/javascript.svg' },
      { name: 'MySQL', logo: '/images/techStack/MySQL.svg' },
      { name: 'Excel', logo: '/images/techStack/excel.svg' },
      { name: 'Git', logo: '/images/techStack/git.svg' },
      { name: 'Linux', logo: '/images/techStack/Linux.svg' },
      { name: 'Python', logo: '/images/techStack/python.svg' },
      { name: 'Java', logo: '/images/techStack/Java.svg' },
    ],
  },
  {
    id: 'atg-intern',
    company: 'The German Jordanian University',
    role: 'Frontend Developer',
    period: '',
    logo: '/images/GJU.svg',
    points: [
      'Entwicklung und Pflege von WordPress-Webseiten: Moderne UI/UX-Standards und responsive Gestaltung implementiert, um eine ansprechende und benutzerfreundliche Oberfläche zu gewährleisten.',
      'Optimierung des Frontends: Mithilfe von HTML, CSS, JavaScript und SASS das Layout und die Ladezeiten verbessert, wodurch das Nutzererlebnis gesteigert wurde.',
      'Anpassung an unterschiedliche Endgeräte: Responsives Design kontinuierlich ausgebaut und optimiert, um eine konsistente Darstellung auf Desktop, Tablet und Smartphone sicherzustellen.',
    ],
    techStack: [
      { name: 'HTML', logo: '/images/techStack/html-5.svg' },
      { name: 'CSS', logo: '/images/techStack/css-3.svg' },
      { name: 'Javascript', logo: '/images/techStack/javascript.svg' },
      { name: 'wordpress', logo: '/images/techStack/wordpress.svg' },
      { name: 'Python', logo: '/images/techStack/python.svg' },
      { name: 'Figma', logo: '/images/techStack/figma.svg' },
      { name: 'Sass', logo: '/images/techStack/Sass.svg' },
      { name: 'Git', logo: '/images/techStack/git.svg' },
    ],
  },
];

function WorkExperience() {
  const [activeTechStack, setActiveTechStack] = React.useState(experiences[0].techStack);
  const [currentActiveExpId, setCurrentActiveExpId] = React.useState(experiences[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      let lastVisibleExp = experiences[0];

      experiences.forEach((exp) => {
        const element = document.getElementById(exp.id) as HTMLElement;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const isVisible = 
          rect.top <= viewportHeight * 0.7 && // Element's top is in the upper 70% of viewport
          rect.bottom >= viewportHeight * 0.3; // Element's bottom is in the lower 30% of viewport

        if (isVisible) {
          lastVisibleExp = exp;
          element.classList.remove('opacity-30');
          element.classList.add('opacity-100');
        } else {
          element.classList.remove('opacity-100');
          element.classList.add('opacity-30');
        }
      });

      // Only update activeTechStack if the active experience has actually changed
      if (lastVisibleExp.id !== currentActiveExpId) {
        setCurrentActiveExpId(lastVisibleExp.id);
        setActiveTechStack(lastVisibleExp.techStack);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentActiveExpId]); // Add currentActiveExpId as dependency

  return (
    <section id="experience" className="section-container pt-14">
      <h2 className="text-[#D8C4B6] font-bold text-3xl sm:text-4xl md:text-5xl flex items-center gap-4">
        Erfahrungen
      </h2>

      <div className="py-7 md:py-14 flex gap-20">
        <div className="lg:w-1/2">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              className="flex flex-col gap-10 transition-opacity duration-500 opacity-30"
            >
              <div className="flex">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <img
                    src={exp.logo}
                    height="50"
                    width="50"
                    className="rounded-full object-cover"
                    alt={`${exp.company} logo`}
                  />
                  <div className="w-0.5 mx-auto flex-1 bg-white" />
                </div>

                <div className="space-y-6 pb-14 ml-4">
                  <div>
                    <h3 className=" font-semibold text-lg sm:text-xl md:text-2xl text-[#F5EFE7]">{exp.company}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#D8C4B6]">
                      {exp.role}  <span>{exp.period}</span>
                    </p>
                  </div>

                  <ul className="mt-3 text-sm sm:text-base md:text-lg space-y-4 sm:space-y-8">
                    {exp.points.map((point, i) => (
                      <li key={i} className="relative">
                        <p className="ml-4 text-[#F5EFE7]">{point}</p>
                        <span className="absolute -left-[49px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full" />
                      </li>
                    ))}
                  </ul>

                  <div className="flex lg:hidden flex-col gap-3">
                    <h3 className="text-xl sm:text-2xl flex items-center gap-2">
                      <span className="text-[#F5EFE7] font-semibold">Tech Stack</span>
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="rounded-lg pl-2 pr-4 py-2 bg-[#415370] flex items-center gap-3"
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="h-5 w-5 sm:h-8 sm:w-8 object-cover"
                          />
                          <p className="text-sm font-bold sm:text-lg text-[#F5EFE7]">{tech.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 hidden lg:flex flex-col gap-6 sticky h-full top-12">
          <h3 className="text-xl sm:text-2xl flex items-center gap-2">
            <span className="text-[#F5EFE7] font-semibold">Tech Stack</span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {activeTechStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-lg pl-2 pr-4 py-2 bg-[#415370] flex items-center gap-3"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-cover"
                />
                <p className="text-lg font-bold text-[#F5EFE7]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;