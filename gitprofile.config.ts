const CONFIG = {
  github: {
    username: 'alissonpef',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 1000,
        exclude: {
          forks: false,
          projects: [
            'alissonpef/alissonpef.github.io',
            'alissonpef/alissonpef',
          ],
        },
      },
      manual: {
        projects: [],
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
    instagram: 'alissonpef',
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
    fileUrl:
      'https://drive.google.com/file/d/1ny99c2hPwTGrLy_xW7WNgE9A_5GaI6JQ/view?usp=sharing',
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
  ],
  educations: [
    {
      institution: 'Universidade Federal de Santa Catarina (UFSC)',
      degree: 'Bacharelado, Engenharia de Computação',
      from: '2022',
      to: '2026.2 (Estimado)',
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
    defaultTheme: 'dark',

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'dracula', 'procyon', 'night'],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/alissonpef/alissonpef.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
