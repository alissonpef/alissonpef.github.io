const CONFIG = {
  github: {
    username: 'alissonpef', // Seu usuário real
  },
  base: '/', // Configurado para alissonpef.github.io
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual', // Mudei para manual para garantir que seus melhores projetos apareçam primeiro
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        // Seus projetos destaque baseados no README
        projects: [
            'alissonpef/Book-End-API', 
            'alissonpef/Flask-PDF-Protector'
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Alisson Pereira Ferreira',
    description: 'Backend Developer | Computer Engineering Student @ UFSC',
    imageURL: '',
  },
  social: {
    linkedin: 'alisson-pereira-ferreira-45022623b',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'alissonpef@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Node.js',
    'TypeScript',
    'Python',
    'Express.js',
    'Flask',
    'PostgreSQL',
    'Prisma',
    'Redis',
    'Docker',
    'Git',
    'Jest',
    'Linux',
    'Microservices',
  ],
  experiences: [
    {
      company: 'Global Drones',
      position: 'Estagiário de Backend',
      from: 'September 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Quizlet',
      position: 'Content Contributor',
      from: 'June 2024',
      to: 'August 2025',
      companyLink: 'https://quizlet.com',
    },
    {
      company: 'LabTeC - UFSC',
      position: 'Bolsista de Pesquisa',
      from: 'February 2023',
      to: 'June 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Certificado de Desempenho Acadêmico (Média 10.0)',
      body: 'Universidade Federal de Santa Catarina (UFSC)',
      year: '2024.2',
      link: '',
    },
    {
      name: 'The Complete Full-Stack Web Development Bootcamp',
      body: 'Udemy',
      year: '2025',
      link: '',
    },
    {
      name: 'Formação Completa em Node.js',
      body: 'OneBitCode',
      year: '2025',
      link: '',
    },
    {
      name: 'Banco de Dados com SQL e PostgreSQL',
      body: 'OneBitCode',
      year: '2025',
      link: '',
    },
    {
      name: 'Python do Zero ao Avançado',
      body: 'Udemy',
      year: '2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Universidade Federal de Santa Catarina (UFSC)',
      degree: 'Bacharelado, Engenharia de Computação',
      from: '2022',
      to: '2026 (Estimado)',
    },
    {
      institution: 'Universidade Federal de Santa Catarina (UFSC)',
      degree: 'Bacharelado, Engenharia de Energia',
      from: '2020',
      to: '2022',
    },
  ],
  publications: [], 
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dracula', // Alterado para combinar com seu README

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'dracula', // Tema de código escuro
      'procyon', // Tema espacial/escuro
      'night',
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/alissonpef/alissonpef.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;