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

export const MUSIC = [
  {
    key: '1',
    title: 'Give me some hope',
    artist: 'Groove Hill',
    quote: `Je suis batteur, voici l'un des groupes dans lesquels j'ai pu jouer`,
    albumImage: '/static/images/gh.jpg',
    audio:'/static/tracks/Groove Hill - Give me some hope.mp3',
  },
  {
    key: '2',
    title: 'Stay With Me',
    artist: 'Miki Matsubara',
    quote: `J'apprends actuellement le japonais`,
    albumImage: '/static/images/miki.jpeg',
    audio:'/static/tracks/miki matsubara-stay With Me.mp3',
  },
  {
    key: '3',
    title: 'Merry-Go-Round of Life (from Howls Moving Castle)',
    artist: 'Joe Hisaishi',
    quote: `Je suis passionné par l'animation japonaise, et notamment les production du studio Ghibli`,
    albumImage: '/static/images/hmc.jpeg',
    audio: '/static/tracks/Joe Hisaishi - Merry-Go-Round of Life (from Howls Moving Castle).mp3',
  },
  {
    key: '4',
    title: 'Eye Of The Tiger',
    artist: 'Survivor',
    quote: `J'ai pratiqué le muay thai et le kickboxing`,
    albumImage: '/static/images/rocky.jpg',
    audio: '/static/tracks/Survivor - Eye Of The Tiger (Official HD Video).mp3',
  },
  {
    key: '5',
    title: 'King Kunta',
    artist: 'Kendrick Lamar',
    quote: `Me retrouverez vous dans la vidéo du live "The Big Stepper Tour"?`,
    albumImage: '/static/images/tpab.jpeg',
    audio: '/static/tracks/Kendrick Lamar - King Kunta.mp3',
  },
];

export const NEEDLE_DOWN = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/vinyl_needle_down_edit.mp3';
