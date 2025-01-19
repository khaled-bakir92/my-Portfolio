import React from 'react';
import { Code2, Smartphone, Globe2, Palette, Database, Cloud } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Entwicklung moderner und responsiver Webanwendungen mit Best Practices und Frameworks der Wahl',
    color: '#60A5FA' // blue-400
  },
  // {
  //   icon: Smartphone,
  //   title: 'Mobile Development',
  //   description: 'Creating native and cross-platform mobile applications for iOS and Android platforms.',
  //   color: '#F472B6' // pink-400
  // },
  {
    icon: Globe2,
    title: 'API Integration',
    description: 'Implementierung sicherer Verbindungen mit RESTful APIs und Drittanbieter-Services nahtlos integriert.',
    color: '#34D399' // emerald-400
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Erstellung skalierbarer und effizienter Datenbanklösungen für anspruchsvolle und große Datenmengen.',
    color: '#FB923C' // orange-400
  },
  // {
  //   icon: Cloud,
  //   title: 'Cloud Solutions',
  //   description: 'Implementing and managing cloud infrastructure for optimal application performance.',
  //   color: '#22D3EE' // cyan-400
  // },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Gestaltung moderner und intuitiver Benutzeroberflächen nach klaren und innovativen Prinzipien.',
    color: '#F87171' // red-400
  }
];

function Services() {
  const titleRef = useScrollAnimation({ animation: 'fade-up', delay: 200 });
  const descriptionRef = useScrollAnimation({ animation: 'fade-up', delay: 400 });

  return (
    <section id="services" className="py-24 bg-[#213555] relative overflow-hidden">
      <div className="section-container relative">
        <div className="flex flex-col  mb-16">
          <h2 ref={titleRef} className="text-[#D8C4B6] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 fade-up">
            Leistungen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {services.map((service, index) => {
            const serviceRef = useScrollAnimation({
              animation: 'scale-up',
              delay: 50 + (index * 50),
              threshold: 0.2
            });
            
            const Icon = service.icon;
            return (
              <article
                ref={serviceRef}
                key={service.title}
                className="group relative scale-up"
              >
                <div className="relative bg-[#2A4165] rounded-2xl p-8 flex flex-col items-center text-center
                  transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl before:absolute 
                  before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent 
                  before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100
                  after:absolute after:inset-0 after:rounded-2xl after:border-2 after:border-transparent
                  group-hover:after:border-[color:var(--service-color)] after:transition-colors after:duration-500"
                style={{'--service-color': service.color} as React.CSSProperties}
                >
                  {/* Icon Container - Centered */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-[#415370] flex items-center justify-center
                      transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[color:var(--service-color)]/20
                      group-hover:bg-[color:var(--service-color)]/10"
                    >
                      <Icon className="w-10 h-10 text-[color:var(--service-color)]" />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-[color:var(--service-color)]/20
                      opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>

                  {/* Content - Centered */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#F5EFE7] group-hover:text-[color:var(--service-color)]
                      transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#D8C4B6] text-left leading-relaxed group-hover:text-white/90 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Background Glow Effect */}
                  <div className="absolute -inset-2 bg-[color:var(--service-color)]/5 rounded-3xl blur-xl
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

export default Services;