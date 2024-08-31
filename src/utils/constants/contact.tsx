import ICONS from "./icons";

const CONTACT = {
  name: 'Léopold Assogba',
  email: 'leopoldassogba21@gmail.com',
  phoneIcon: ICONS.phone,
  emailIcon: ICONS.envelope,
  emailText: 'hello-email',
  phone: '06 12 34 56 78',
  address: 'Région Lyonnaise, France',
  letter: 'recommendation-letter',
  linkedin: 'https://www.linkedin.com/in/l%C3%A9opold-assogba/',
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
  references: [
    {
      company: 'MediaXtend',
      letter: '/static/files/lettre_recommandation_mediaxtend.pdf',
      name: 'Nicolas Sandri',
      linkedin: 'https://fr.linkedin.com/in/nicolassandri',
      emailText: 'hello-mediaxtend',
      email: 'contact@mediaxtend.net',
      phone: '06 09 96 36 16'
    },
    {
      company: 'Webcastor',
      letter: '/static/files/lettre_recommandation_webcastor.pdf',
      name: 'Signorato Geoffrey',
      linkedin: 'https://fr.linkedin.com/in/geoffrey-signorato',
      emailText: 'hello-webcastor',
      email: 'geoffrey.signorato@webcastor.fr',
      phone: '+33 6 72 00 23 44'
    }
  ]
};

export default CONTACT;