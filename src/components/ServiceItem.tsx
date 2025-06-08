import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface ServiceItemProps {
  service: Service;
  index: number;
}

function ServiceItem({ service, index }: ServiceItemProps) {
  const serviceRef = useScrollAnimation({
    animation: 'scale-up',
    delay: 50 + (index * 50),
    threshold: 0.2
  });

  const Icon = service.icon;

  return (
    <article
      ref={serviceRef}
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
}

export default ServiceItem; 