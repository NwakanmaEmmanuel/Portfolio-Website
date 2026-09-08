import { projects } from "../data/data";

function ProjectCard({ title, desc, tags, link }) {
  return (
    
      <a href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-gray-400 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-gray-900 text-base">{title}</h3>
        <span className="text-gray-400 text-xl ml-2 hover:scale-150 transition-transform">↗</span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1 font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-2 tracking-tight">
        Featured Projects
      </h2>
      <p className="text-center text-gray-400 text-sm mb-14">Some of my recent work</p>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
