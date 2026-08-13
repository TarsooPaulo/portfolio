'use strict';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { developerInfo } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Mim', href: '#sobre-mim' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section indicator calculation
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      let currentSection = 'inicio';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for user viewing section
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of the fixed header
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-4 shadow-[0_10px_30px_rgba(3,7,18,0.3)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          aria-label="Arthur Silva - Voltar ao início"
        >
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            {developerInfo.name.split(' ')[0]}
          </span>
          <span className="text-xl font-light text-gray-400 tracking-tight group-hover:text-gray-200 transition-colors">
            {developerInfo.name.split(' ')[1]}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-md px-2 ${
                  isActive
                    ? 'text-indigo-400'
                    : 'text-gray-400 hover:text-gray-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Socials / Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={developerInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-full"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={developerInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-full"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`#contato`}
            onClick={(e) => handleNavClick(e, '#contato')}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 px-4 py-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            Fale Comigo
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-md"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] z-40 bg-black/60 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-[72px] right-0 left-0 z-40 bg-gray-950/95 border-b border-white/5 shadow-2xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 font-semibold'
                      : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="h-[1px] bg-white/5" />
          <div className="flex items-center justify-between px-3">
            <span className="text-sm text-gray-500 font-medium">Redes Profissionais</span>
            <div className="flex gap-4">
              <a
                href={developerInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 p-2 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={developerInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${developerInfo.socials.email}`}
                className="text-gray-400 hover:text-indigo-400 p-2 transition-colors"
                aria-label="E-mail"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
