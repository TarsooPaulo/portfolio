'use strict';

import React from 'react';
import { Award, Terminal, Coffee } from 'lucide-react';
import { developerInfo } from '@/data/portfolio';

export default function About() {
  return (
    <section
      id="sobre-mim"
      className="relative py-24 px-6 md:px-12 bg-gray-950/40 border-t border-b border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Sobre Mim</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Minha Trajetória & Visão
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Image Area & Quick Stats Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 p-2 shadow-2xl">
              {/* Photo Frame Effect */}
              <div className="absolute inset-2 rounded-[22px] bg-gray-950/90 z-0 flex flex-col items-center justify-center p-6 text-center border border-white/5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center mb-4 text-3xl font-extrabold text-white shadow-xl">
                  {developerInfo.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-200">{developerInfo.name}</h3>
                <p className="text-xs font-mono text-indigo-400 mt-1">{developerInfo.role}</p>

                {/* Decorative developer environment illustration inside the placeholder */}
                <div className="mt-8 text-left font-mono text-[10px] text-gray-500 border border-white/5 p-4 rounded-xl bg-black/40 w-full overflow-hidden leading-relaxed">
                  <p className="text-cyan-400">const developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-amber-300">&quot;{developerInfo.name}&quot;</span>,</p>
                  <p className="pl-4">role: <span className="text-amber-300">&quot;{developerInfo.role}&quot;</span>,</p>
                  <p className="pl-4">passion: <span className="text-amber-300">&quot;Modern Clean UI&quot;</span></p>
                  <p className="text-cyan-400">&#125;;</p>
                </div>
              </div>

              {/* Aesthetic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Award size={20} />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-200">Profissional</span>
                  <span className="text-xs text-gray-400">Foco em entrega Premium</span>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Coffee size={20} />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-200">Alta Energia</span>
                  <span className="text-xs text-gray-400">Sempre atualizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Paragraphs & Objectives */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {developerInfo.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Objectives Area */}
            <div className="border-t border-white/5 pt-8">
              <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2 mb-6">
                <Terminal size={18} className="text-cyan-400" />
                <span>Objetivos & Compromisso</span>
              </h3>

              <ul className="space-y-4" aria-label="Objetivos profissionais">
                {developerInfo.about.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Terminal size={14} className="text-indigo-400 mt-1 shrink-0" />
                    <span className="text-sm md:text-base leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
