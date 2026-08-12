# Portfólio — Tarsoo Paulo (Protótipo)

Protótipo one-page para um portfólio premium de Full Stack & Mobile Developer.

Tecnologias:
- React + Vite
- Tailwind CSS
- Framer Motion (animações sutis)

Como rodar:
1. Instale dependências:
   npm install
2. Rodar em desenvolvimento:
   npm run dev
3. Build:
   npm run build
4. Preview do build:
   npm run preview

Deploy recomendado:
- Vercel (integrado com GitHub) ou Netlify — ambos servem direto o build Vite.
- Para GitHub Pages, gere o build e publique a pasta `dist` (ou use um plugin de GH Pages).

Customização rápida:
- Substitua `/assets/photo-placeholder.jpg` por sua foto profissional (otimizada e 2x versões).
- Troque placeholders de logos em `/public/assets/logos/` e atualize os componentes (recomendo SVGs).
- Atualize textos, e-mails e links nas seções Header/Footer/Hero.

Design e acessibilidade:
- Skip link para pular ao conteúdo.
- Focus-visible e estados de interação pensados para teclado.
- Respeita `prefers-reduced-motion` (pode adicionar checagem em Framer Motion config se desejar desativar animações).
- HTML semântico e contraste ajustado.

Notas de produto:
- Arquitetura de componentes simples e reutilizável.
- Use rotas (Next.js) se desejar páginas separadas (projetos individuais, blog).
- Posso também:
  - Integrar formulário de contato com backend (Netlify Forms, Formspree ou endpoint custom).
  - Gerar versão estática com imagens otimizadas e SVGs oficiais das tecnologias.
  - Fazer deploy automático no Vercel.

Se quiser que eu faça o push automático do projeto para este repositório, confirme a branch (recomendada `feature/brand-assets`) e os dados de contato para o footer; ou responda "manter placeholders" para usar valores padrão.