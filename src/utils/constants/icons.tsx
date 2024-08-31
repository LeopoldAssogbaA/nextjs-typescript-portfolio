import { FaAngular, FaSymfony, FaNodeJs, FaReact, FaDocker, FaFeather, FaGithub, FaLinkedin, FaDownload, FaMapMarker, FaPhone, FaUser, FaEnvelope } from 'react-icons/fa';
import { SiApollographql, SiPrisma, SiKubernetes, SiAntdesign, SiSentry, SiScaleway, SiDoctrine } from 'react-icons/si';
import { RiNextjsFill, RiGitRepositoryLine } from 'react-icons/ri';
import { DiRedis } from 'react-icons/di';
import { TbServerCog, TbApi, TbBrandTypescript } from 'react-icons/tb';
import { MdOndemandVideo, MdEmail } from 'react-icons/md';
import { BsPersonVideo3 } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { HiOutlineExternalLink } from 'react-icons/hi';

const ICONS = {
  // Compétences
  angular: <FaAngular />,
  symfony: <FaSymfony />,
  nodejs: <FaNodeJs />,
  react: <FaReact />,
  graphql: <SiApollographql />,
  docker: <FaDocker />,
  nextjs: <RiNextjsFill />,
  prisma: <SiPrisma />,
  kubernetes: <SiKubernetes />,
  antdesign: <SiAntdesign />,
  redis: <DiRedis />,
  sentry: <SiSentry />,
  scaleway: <SiScaleway />,
  doctrine: <SiDoctrine />,
  featherjs: <FaFeather />,
  server: <TbServerCog />,
  api: <TbApi />,
  ondemandvideo: <MdOndemandVideo />,
  visio: <BsPersonVideo3 />,
  gitRepository: <RiGitRepositoryLine />,

  // Réseaux sociaux
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <MdEmail />,

  // Langages de programmation
  typescript: <TbBrandTypescript />,
  javascript: <IoLogoJavascript />,

  // utilitaires
  externalLink: <HiOutlineExternalLink />,
  download: <FaDownload />,
  mapMarker: <FaMapMarker />,
  phone: <FaPhone />,
  user: <FaUser />,
  envelope: <FaEnvelope />,
};

export default ICONS;