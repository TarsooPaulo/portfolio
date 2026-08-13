'use strict';

import React from 'react';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { developerInfo } from '@/data/portfolio';

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Premium Background Visuals */}
      <div className="absolute inset-0 z-0">
        {/* Ambient background glow */}
        <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '-5s' }} />

        {/* Premium Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8 hover:bg-indigo-500/20 transition-colors duration-300">
          <Sparkles size={12} className="text-indigo-400" />
          <span>Disponível para novos projetos</span>
        </div>

        {/* Name with subtle background light */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-gray-400 font-light text-2xl sm:text-3xl md:text-4xl tracking-wide mb-3">
            Olá, meu nome é
          </span>
          <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            {developerInfo.name}
          </span>
        </h1>

        {/* Professional role badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 font-mono text-sm md:text-base mb-6 shadow-inner">
          <Terminal size={16} />
          <span>{developerInfo.role}</span>
        </div>

        {/* Highly focused headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 max-w-3xl leading-relaxed mb-4">
          {developerInfo.headline}
        </h2>

        {/* Subheadline (value proposition) */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mb-12">
          {developerInfo.subheadline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projetos"
            onClick={(e) => handleNavClick(e, '#projetos')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <span>Ver Meus Projetos</span>
            <Code2 size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 hover:border-white/20 font-medium px-8 py-4 rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <span>Entre em Contato</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Key trust indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/5 pt-10 w-full max-w-3xl">
          <div className="text-center md:text-left">
            <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">+5 Anos</span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">De Experiência</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100%</span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Código Limpo & Responsivo</span>
          </div>
          <div className="text-center md:text-right col-span-2 md:col-span-1">
            <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Alta</span>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Performance & SEO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
