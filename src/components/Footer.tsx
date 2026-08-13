'use strict';

import React from 'react';
import { developerInfo } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="relative bg-[#02050c] border-t border-white/5 py-12 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {developerInfo.name}
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-xs text-gray-500 font-mono">Portfolio</span>
        </div>

        {/* Center Side: Link Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Navegação secundária do rodapé">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
          >
            Início
          </a>
          <a
            href="#sobre-mim"
            onClick={(e) => handleNavClick(e, '#sobre-mim')}
            className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
          >
            Sobre Mim
          </a>
          <a
            href="#habilidades"
            onClick={(e) => handleNavClick(e, '#habilidades')}
            className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            onClick={(e) => handleNavClick(e, '#projetos')}
            className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
          >
            Projetos
          </a>
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 p-1 rounded"
          >
            Contato
          </a>
        </nav>

        {/* Right Side: Copyright & Credits */}
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {developerInfo.name}. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-gray-600 font-mono mt-1">
            Desenvolvido com Next.js & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}
