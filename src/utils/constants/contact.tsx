import ICONS from "./icons";

const CONTACT = {
  email: 'leopoldassogba21@gmail.com',
  phoneIcon: ICONS.phone,
  emailIcon: ICONS.envelope,
  github: 'https://github.com/LeopoldAssogbaA',
  githubPortfolio: 'https://github.com/LeopoldAssogbaA/nextjs-typescript-portfolio',
  githubProjects: [
    {
      name: 'Portfolio v1',
      url: 'https://github.com/LeopoldAssogbaA/portfolio'
    },
    {
      name: 'Back-office',
      url: 'https://github.com/LeopoldAssogbaA/backOfficeCN'
    },
    {
      name: 'Interface utilisateur',
      url: 'https://github.com/LeopoldAssogbaA/UserInterfaceAW'
    }
  ],
  phone: '06 12 34 56 78',
  address: 'Région Lyonnaise, France',
  letter: 'recommendation-letter',
  linkedin: 'https://www.linkedin.com/in/l%C3%A9opold-assogba/',
  references: [
    {
      letter: '/static/files/lettre_recommandation_mediaxtend.pdf',
      name: 'Nicolas Sandri',
      linkedin: 'https://www.linkedin.com/in/nicolas-sandri/',
      email: 'contact@mediaxtend.net',
      phone: '06 12 34 56 78'
    },
    {
      letter: '/static/files/lettre_recommandation_webcastor.pdf',
      name: 'Signorato Geoffrey',
      linkedin: 'https://www.linkedin.com/in/geoffrey-signorato/',
      email: 'geoffrey.signorato@webcastor.fr',
      phone: '06 12 34 56 78'
    }
  ]
};

export default CONTACT;