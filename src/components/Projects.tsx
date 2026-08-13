'use strict';

import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { projectsData } from '@/data/portfolio';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'others'>('all');

  // Gather unique technology tags to display inside custom selector if desired
  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'featured') return project.featured;
    if (filter === 'others') return !project.featured;
    return true;
  });

  return (
    <section
      id="projetos"
      className="relative py-24 px-6 md:px-12 bg-gray-950/40 border-t border-b border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Trabalho</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
          </div>

          {/* Quick filter switches */}
          <div className="flex items-center gap-2 self-start md:self-end bg-white/5 border border-white/5 rounded-full p-1.5 shadow-inner">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                filter === 'all'
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                filter === 'featured'
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Principais
            </button>
            <button
              onClick={() => setFilter('others')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                filter === 'others'
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Outros
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card group flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl focus-within:ring-2 focus-within:ring-cyan-400/50"
            >
              {/* Image Area/Visual Placeholder with Gradient */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-indigo-950 to-slate-900 flex flex-col justify-between p-6 overflow-hidden border-b border-white/5">
                {/* Background decorative items */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent opacity-60 group-hover:scale-105 transition-transform duration-500" />

                {/* Simulated IDE / App header aesthetic */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  {project.featured && (
                    <span className="text-[9px] font-semibold uppercase tracking-widest bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2 py-1 rounded">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Big typography fallback inside the visual block */}
                <div className="relative z-10 flex flex-col justify-end h-full pt-10">
                  <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </div>
                  <span className="text-xs font-mono text-cyan-400/80 mt-1">
                    v1.0.0 // stable
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="flex flex-col flex-1 p-6 lg:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold bg-white/5 text-gray-300 border border-white/5 px-2.5 py-1 rounded-md transition-colors hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
                        aria-label={`Ver código de ${project.title} no GitHub`}
                      >
                        <GithubIcon size={16} />
                        <span>Código</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
                        aria-label={`Ver demonstração de ${project.title}`}
                      >
                        <ExternalLink size={16} />
                        <span>Demo Online</span>
                      </a>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Detalhes</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
