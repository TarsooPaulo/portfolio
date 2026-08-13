'use strict';

import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { developerInfo } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section
      id="contato"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-[20%] w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="max-w-md">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Vamos Conversar</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Fale Comigo
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-4 leading-relaxed font-light">
                Tem um projeto inovador em mente, precisa de suporte técnico premium ou quer apenas trocar uma ideia sobre as tendências de desenvolvimento? Meu canal está sempre aberto.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 max-w-md">
              <a
                href={`mailto:${developerInfo.socials.email}`}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 group transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider">E-mail</span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{developerInfo.socials.email}</span>
                </div>
              </a>

              <a
                href={developerInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl flex items-center gap-4 group transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider">LinkedIn</span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">Conectar Profissionalmente</span>
                </div>
              </a>

              <a
                href={developerInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl flex items-center gap-4 group transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider">GitHub</span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">Ver Repositórios & Contribuições</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-3xl relative">
              <h3 className="text-xl font-bold text-gray-100 flex items-center gap-2 mb-8">
                <MessageSquare size={18} className="text-indigo-400" />
                <span>Envie sua Mensagem</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Arthur Pendragon"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-sm md:text-base text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: seuemail@empresa.com"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-sm md:text-base text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Como posso te ajudar?
                    <span className="text-gray-600 font-normal ml-1">(Projetos, Ideias, Propostas)</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva os detalhes do seu projeto ou sua dúvida aqui..."
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-sm md:text-base text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>

                {/* Status Indicator Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm" role="status">
                    <Check size={18} />
                    <span>Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl text-sm" role="status">
                    <span>Ocorreu um erro ao enviar. Por favor, tente novamente ou use o e-mail acima.</span>
                  </div>
                )}

                {/* Submit button with multiple transition states */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full inline-flex items-center justify-center gap-2 font-semibold tracking-wide uppercase text-xs md:text-sm px-6 py-4 rounded-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    status === 'sending'
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.99]'
                  }`}
                >
                  {status === 'sending' ? (
                    <span>Enviando...</span>
                  ) : status === 'success' ? (
                    <span>Mensagem Enviada!</span>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>

              {/* Secure guarantee badge */}
              <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-500 font-mono">
                <ShieldCheck size={14} className="text-cyan-400/80" />
                <span>Privacidade garantida. Seus dados nunca serão compartilhados.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
