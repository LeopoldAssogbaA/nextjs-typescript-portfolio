import ICONS from './icons';

const WORKS = [
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
        technologies: [ICONS.symfony, ICONS.doctrine, ICONS.react],
        link: null,
        logo: "/static/images/rolandgarros.svg",
        icon: null,
      },
      {
        title: "project-2",
        description: "project-2-descr",
        technologies: [ICONS.symfony, ICONS.doctrine, ICONS.javascript],
        link: "https://www.mapar.org/",
        logo: "/static/images/mapar.png",
        icon: null,
      },
      {
        title: "project-3",
        description: "project-3-descr",
        technologies: [ICONS.nodejs, ICONS.featherjs, ICONS.react],
        link: null,
        logo: null,
        icon: ICONS.visio,
      },
      {
        title: "project-4",
        description: "project-4-descr",
        technologies: [ICONS.symfony, ICONS.doctrine, ICONS.react],
        link: "https://abcell-bio.com/fr/",
        logo: "/static/images/abcellbio.png",
        icon: null,
      }
    ]
  },
  {
    key: "webcastor",
    company: "Webcastor",
    companyLink: "https://webcastor.fr/",
    companyLogo: "/static/images/streamfizz.png",
    description: [
      "p1",
      "p2",
      "p3",
    ],
    projects: [
      {
        title: "project-1",
        description: "project-1-descr",
        technologies: [ICONS.antdesign, ICONS.react, ICONS.graphql, ICONS.sentry],
        link: "https://www.streamfizz.com/",
        logo: "/static/images/streamfizz.png",
        icon: null,
      },
      {
        title: "project-2",
        description: "project-2-descr",
        technologies: [ICONS.antdesign, ICONS.nextjs, ICONS.graphql, ICONS.sentry],
        link: "https://www.streamfizz.com/plateforme-streamfizz/player/",
        icon: ICONS.ondemandvideo,
        logo: null,
      },
      {
        title: "project-3",
        description: "project-3-descr",
        technologies: [ICONS.redis, ICONS.nodejs, ICONS.sentry, ICONS.docker, ICONS.kubernetes, ICONS.scaleway],
        link: null,
        icon: ICONS.server,
        logo: null,
      },
      {
        title: "project-4",
        description: "project-4-descr",
        technologies: [ICONS.redis, ICONS.nodejs, ICONS.graphql, ICONS.prisma, ICONS.sentry, ICONS.docker, ICONS.kubernetes, ICONS.scaleway],
        link: null,
        logo: null,
        icon: ICONS.api,
      }
    ]
  }
]; 

export default WORKS;