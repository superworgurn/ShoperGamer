import {memo } from 'react';

const ProjectCard = memo(({ title, description, tech, image, url }: {
  title: string,
  description: string,
  tech: string,
  image: string,
  url: string
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group neon-border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] flex flex-col h-full"
      aria-label={`View project: ${title}`}
    >
      <div className="project-image relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          width={400}
          height={225}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="font-bold text-2xl text-white glow-text mb-2">{title}</h3>
        </div>
      </div>
      <div className="p-5 bg-gradient-to-b from-gray-900/80 to-gray-800/80 flex flex-col flex-grow">
        <p className="text-gray-300 mb-4 group-hover:text-gray-100 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.split(', ').map((t, idx) => (
            <span
              key={idx}
              className="tech-badge px-3 py-1.5 rounded-full text-sm bg-cyan-900/30 border border-cyan-700 group-hover:bg-cyan-900/50 group-hover:border-cyan-400 group-hover:text-cyan-200 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
});

export default ProjectCard;