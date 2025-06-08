import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TechStack {
  name: string;
  logo: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: TechStack[];
  links: {
    github: string;
    live: string;
  };
}

interface ProjectItemProps {
  project: Project;
  index: number;
}

function ProjectItem({ project, index }: ProjectItemProps) {
  const projectRef = useScrollAnimation({
    animation: 'slide-in',
    delay: 100 + (index * 100),
    threshold: 0.2
  });

  return (
    <div
      ref={projectRef}
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
}

export default ProjectItem; 