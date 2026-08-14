'use strict';

import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

interface DynamicIconProps {
  name: string;
  className?: string;
}

// Dynamic icon helper safely falling back to standard icon
const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  if (!IconComponent) {
    return <LucideIcons.Code2 className={className} size={20} />;
  }
  return <IconComponent className={className} size={20} />;
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section
      id="habilidades"
      className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Stack Tecnológica</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Habilidades & Especialidades
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-4 max-w-xl">
            Uma visão rápida da amplitude técnica e das tecnologias de ponta utilizadas para criar produtos rápidos, fluidos e funcionais.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Dynamic Category Filtering & Grid presentation */}
        <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Filtro de habilidades por categoria">
          <button
            onClick={() => setSelectedCategory(null)}
            aria-pressed={selectedCategory === null}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
              selectedCategory === null
                ? 'bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/10'
                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/10'
            }`}
          >
            Todos
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(idx)}
              aria-pressed={selectedCategory === idx}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                selectedCategory === idx
                  ? 'bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/10'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Blocks */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => {
            // Filter if category is chosen
            if (selectedCategory !== null && selectedCategory !== catIdx) return null;

            return (
              <div key={category.name} className="space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80 pl-2 border-l-2 border-indigo-500">
                  {category.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card p-6 rounded-2xl flex items-center justify-between group transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-400/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500/30 transition-all duration-300">
                          <DynamicIcon name={skill.icon} />
                        </div>
                        <div>
                          <h4 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                      </div>

                      {/* Expertise level badge */}
                      <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-1 rounded-md ${
                        skill.level === 'Expert'
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : skill.level === 'Advanced'
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
