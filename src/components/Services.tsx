import React from 'react';
import { Code2, Globe2, Palette, Database } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceItem from './ServiceItem';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Entwicklung moderner und responsiver Webanwendungen mit Best Practices und Frameworks der Wahl',
    color: '#60A5FA' // blue-400
  },
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
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Gestaltung moderner und intuitiver Benutzeroberflächen nach klaren und innovativen Prinzipien.',
    color: '#F87171' // red-400
  }
];

function Services() {
  const titleRef = useScrollAnimation({ animation: 'fade-up', delay: 200 });

  return (
    <section id="services" className="py-24 bg-[#213555] relative overflow-hidden">
      <div className="section-container relative">
        <div className="flex flex-col  mb-16">
          <h2 ref={titleRef} className="text-[#D8C4B6] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 fade-up">
            Leistungen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {services.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

export default Services;