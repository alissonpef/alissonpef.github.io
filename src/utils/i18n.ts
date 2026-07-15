export const getLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  const storedLang = localStorage.getItem('language');
  if (storedLang) return storedLang === 'pt' ? 'pt' : 'en';
  return 'en';
};

export const t = {
  downloadResume:
    getLanguage() === 'pt' ? 'Baixar Currículo' : 'Download Resume',
  basedIn: getLanguage() === 'pt' ? 'Baseado em:' : 'Based in:',
  organization: getLanguage() === 'pt' ? 'Organização:' : 'Organization:',
  techStack: getLanguage() === 'pt' ? 'Tecnologias' : 'Tech Stack',
  experience: getLanguage() === 'pt' ? 'Experiência' : 'Experience',
  certification: getLanguage() === 'pt' ? 'Certificações' : 'Certification',
  education: getLanguage() === 'pt' ? 'Educação' : 'Education',
  publications: getLanguage() === 'pt' ? 'Publicações' : 'Publications',
  showcasingFeatured: (count: number) =>
    getLanguage() === 'pt'
      ? `Exibindo ${count} repositórios em destaque`
      : `Showcasing ${count} featured repositories`,
  showcasingProjects: (count: number) =>
    getLanguage() === 'pt'
      ? `Exibindo ${count} projetos`
      : `Showcasing ${count} projects`,
  showcasingPublications: (count: number) =>
    getLanguage() === 'pt'
      ? `Exibindo ${count} publicações`
      : `Showcasing ${count} publications`,
  all: getLanguage() === 'pt' ? 'Todos' : 'All',
  author: getLanguage() === 'pt' ? 'Autor' : 'Author',
  noRecentPost:
    getLanguage() === 'pt' ? 'Nenhuma postagem recente' : 'No recent post',
  myArticles: getLanguage() === 'pt' ? 'Meus Artigos' : 'My Articles',
  recentPosts: getLanguage() === 'pt' ? 'Postagens recentes' : 'Recent posts',
  github: 'GitHub:',
  linkedin: 'LinkedIn:',
  instagram: 'Instagram:',
  website: getLanguage() === 'pt' ? 'Site:' : 'Website:',
  email: 'Email:',
  theme: getLanguage() === 'pt' ? 'Tema' : 'Theme',
  default: getLanguage() === 'pt' ? 'Padrão' : 'Default',
};
