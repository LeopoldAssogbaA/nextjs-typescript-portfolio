export const STEPS = [
  {
    name: 'home',
  },
  {
    name: 'about',
  },
  {
    name: 'work',
  },
  {
    name: 'school',
  },
  {
    name: 'contact',
  },
];

export const SCHOOLS = [
  {
    name: 'webforce3',
    paragraphs: [
      'p1',
      'p2',
      'p3',
    ],
    skills: ['angular', 'symfony', 'nodejs'],
  },
  {
    name: 'wildcodeschool',
    paragraphs: [
      'p1',
      'p2',
      'p3',
    ],
    skills: ['angular', 'react', 'symfony', 'nodejs', 'docker', 'flutter'],
  },
];

export const WORKS = [
  {
    key: "mediaxtend",
    company: "MediaXtend",
    companyLink: "https://www.mediaxtend.net/",
    description: [
      "p1",
      "p2",
      "p3",
    ],
    projects: [
      {
        title: "project-1",
        description: "project-1-descr",
        technologies: ["symfony", "doctrine", "react"],
        link: null
      },
      {
        title: "project-2",
        description: "project-2-descr",
        technologies: ["symfony", "doctrine", "js"],
        link: "https://www.mapar.org/"
      },
      {
        title: "project-3",
        description: "project-3-descr",
        technologies: ["nodejs", "featherjs", "react"],
        link: null
      },
      {
        title: "project-4",
        description: "project-4-descr",
        technologies: ["symfony", "doctrine", "react"],
        link: "https://abcell-bio.com/fr/"
      }
    ]
  },
  {
    key: "webcastor",
    company: "Webcastor",
    companyLink: "https://webcastor.fr/",
    description: [
      "p1",
      "p2",
      "p3",
    ],
    projects: [
      {
        title: "project-1",
        description: "project-1-descr",
        technologies: ["antdesign", "react", "graphql", "sentry"],
        link: "https://www.streamfizz.com/"
      },
      {
        title: "project-2",
        description: "project-2-descr",
        technologies: ["antdesign", "nextjs", "graphql", "sentry"],
        link: "https://www.streamfizz.com/plateforme-streamfizz/player/"
      },
      {
        title: "project-3",
        description: "project-3-descr",
        technologies: ["redis", "nodejs", "sentry", "docker", "kubernetes", "scaleway"],
        link: null
      },
      {
        title: "project-4",
        description: "project-4-descr",
        technologies: ["redis", "nodejs", "graphql", "prisma", "sentry", "docker", "kubernetes", "scaleway"],
        link: null
      }
    ]
  }
]; 

// TODO: verify references infos
export const CONTACT = {
  email: 'leopoldassogba21@gmail.com',
  github: 'https://github.com/LeopoldAssogbaA',
  phone: '06 12 34 56 78',
  address: 'Région Lyonnaise, France',
  linkedin: 'https://www.linkedin.com/in/l%C3%A9opold-assogba/',
  references: [
    {
      name: 'Nicolas Sandri',
      linkedin: 'https://www.linkedin.com/in/nicolas-sandri/',
      email: 'contact@mediaxtend.net',
      phone: '06 12 34 56 78'
    },
    {
      name: 'Signorato Geoffrey',
      linkedin: 'https://www.linkedin.com/in/geoffrey-signorato/',
      email: 'geoffrey.signorato@webcastor.fr',
      phone: '06 12 34 56 78'
    }
  ]
};