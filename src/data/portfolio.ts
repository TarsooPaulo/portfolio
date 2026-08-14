export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    icon: string; // we can map these to Lucide icons or custom SVG/images
  }[];
}

export interface DeveloperInfo {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  about: {
    paragraphs: string[];
    objectives: string[];
    photoUrl: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
  };
}

export const developerInfo: DeveloperInfo = {
  name: "Paulo de Tarso",
  role: "Full-Stack Developer",
  headline: "Criando experiências digitais de alta performance e alto impacto visual.",
  subheadline: "Especialista em Next.js, React e ecossistemas TypeScript, desenvolvendo soluções robustas que unem design sofisticado e código impecável.",
  about: {
    paragraphs: [
      "Sou um desenvolvedor apaixonado por tecnologia e design de interfaces. Com mais de 5 anos de experiência prática, busco sempre o equilíbrio ideal entre arquitetura de software sólida e uma experiência de usuário (UX) excepcional.",
      "Minha trajetória envolve a concepção de produtos digitais escaláveis, desde plataformas SaaS até e-commerces modernos de alta performance. Trabalho em estreita colaboração com equipes multidisciplinares para transformar ideias complexas em interfaces intuitivas e limpas.",
      "Acredito que o código limpo, a acessibilidade e o design inteligente não são opcionais, mas sim os pilares fundamentais para construir marcas fortes e produtos de sucesso no cenário digital contemporâneo."
    ],
    objectives: [
      "Desenvolvimento de aplicações web modernas focadas em performance extrema e SEO.",
      "Integração contínua de boas práticas de acessibilidade (WCAG) e responsividade perfeita.",
      "Liderança técnica e mentoria de novos desenvolvedores focados em excelência de front-end."
    ],
    photoUrl: "/images/profile.jpg"
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "paulodetarsodev@example.com",
    twitter: "https://twitter.com"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Front end premium",
    skills: [
      { name: "React / Next.js (App Router)", level: "Expert", icon: "Code2" },
      { name: "TypeScript", level: "Expert", icon: "ShieldAlert" },
      { name: "Tailwind CSS / PostCSS", level: "Expert", icon: "Palette" },
      { name: "Framer Motion / Motion", level: "Advanced", icon: "Sparkles" },
      { name: "Redux Toolkit / Zustand", level: "Advanced", icon: "Layers" }
    ]
  },
  {
    name: "Backends & APIs",
    skills: [
      { name: "Node.js / Express", level: "Advanced", icon: "Cpu" },
      { name: "GraphQL / REST APIs", level: "Advanced", icon: "GitMerge" },
      { name: "PostgreSQL / Prisma ORM", level: "Advanced", icon: "Database" },
      { name: "Docker", level: "Intermediate", icon: "Container" }
    ]
  },
  {
    name: "Metodologias e Ferramentas",
    skills: [
      { name: "Git / GitHub CI-CD", level: "Expert", icon: "GitBranch" },
      { name: "Testes (Jest, Playwright)", level: "Advanced", icon: "CheckSquare" },
      { name: "Figma (Design Handoff)", level: "Advanced", icon: "Figma" },
      { name: "SEO & Web Vitals Optimization", level: "Expert", icon: "Gauge" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Apex SaaS Platform",
    description: "Plataforma SaaS de análise de dados e performance empresarial em tempo real com dashboards dinâmicos.",
    longDescription: "Uma plataforma corporativa premium para análise em tempo real de métricas empresariais. Desenvolvido com Next.js, Tailwind CSS e gráficos de alta performance integrando WebSockets e Next.js Server Actions para carregamento ultra-rápido.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Prisma"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/project1.jpg",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Luxury & Minimalist",
    description: "Loja virtual moderna e minimalista focada no mercado de alto padrão, com transições fluidas e checkout simplificado.",
    longDescription: "Projeto de e-commerce focado em marcas de grife e luxo. Possui animações sofisticadas usando Framer Motion, gerenciamento de estado global otimizado com Zustand e carregamento de imagens ultra-rápido com Next.js Image.",
    technologies: ["React", "Zustand", "Tailwind CSS", "Framer Motion", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/project2.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Vortex Task Manager",
    description: "Gerenciador de tarefas colaborativo em tempo real com painéis Kanban e controle de produtividade baseado em IA.",
    longDescription: "Aplicação rica de gerenciamento de tarefas para equipes que buscam produtividade. Conta com drag-and-drop avançado, integração com inteligência artificial para categorização automática de tarefas e banco de dados PostgreSQL real.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Dnd-Kit", "OpenAI API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/project3.jpg",
    featured: false
  },
  {
    id: "4",
    title: "Aura Creative Studio Portfolio",
    description: "Website institucional imersivo para um estúdio de design inovador com animações 3D interativas.",
    longDescription: "Desenvolvimento de portfólio criativo sob medida, com efeitos WebGL interativos, tipografia elegante de alta legibilidade, animações acionadas por scroll de alta precisão e total otimização de SEO.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js", "PostCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/images/project4.jpg",
    featured: false
  }
];
