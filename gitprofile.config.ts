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
            'alissonpef/Curso.dev',
            'alissonpef/Python_OneBitCode',
            'alissonpef/Backend_OneBitCode',
            'alissonpef/JavaScript_Rocketseat',
            'alissonpef/Node.JS-Rocketseat',
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
    description:
      'AI & Backend Engineer | Computer Vision | Computer Engineering Student at UFSC',
    imageURL: '',
  },
  social: {
    linkedin: 'alisson-pereira-ferreira',
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
    website: 'https://alissonpef.github.io/',
    phone: '',
    email: 'alissonpef@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ny99c2hPwTGrLy_xW7WNgE9A_5GaI6JQ/view?usp=sharing',
  },
  skills: [
    'Computer Vision',
    'MLOps',
    'LLMs',
    'Node.js',
    'TypeScript',
    'Python',
    'Express.js',
    'Flask',
    'OpenCV',
    'PostgreSQL',
    'Prisma',
    'Redis',
    'Docker',
    'Git',
    'GitHub Actions',
    'Jest',
  ],
  experiences: [
    {
      company: 'Global Drones',
      position: 'AI & Backend Engineer',
      from: 'September 2025',
      to: 'Present',
      companyLink: 'https://globaldrones.com.br/',
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
      position: 'Research Intern',
      from: 'February 2023',
      to: 'June 2024',
      companyLink: '',
    },
    {
      company: 'ENEjr',
      position: 'Marketing Analyst',
      from: 'April 2022',
      to: 'August 2022',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Academic Achievement Award',
      body: 'Federal University of Santa Catarina (UFSC) - Top academic performance',
      year: '2024.2',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Federal University of Santa Catarina (UFSC)',
      degree: 'B.Sc. Computer Engineering',
      from: '2022',
      to: '2026 (Estimated)',
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
