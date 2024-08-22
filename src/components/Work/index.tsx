import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ProjectContainer, WorkContainer, WorkElement, WorkTextContainer } from './styled';
import placeholder from '../../../public/static/images/placeholder-logo-1.png';
import Link from 'next/link';
import { HiOutlineExternalLink as HiOutlineExternalLinkIcon } from 'react-icons/hi';
import { FaAngular, FaFeather, FaJs, FaNodeJs, FaPhp, FaReact, FaSymfony, FaDocker } from 'react-icons/fa';
import { SiSymfony, SiPrisma, SiApollographql, SiKubernetes, SiAntdesign } from 'react-icons/si';

import { RiNextjsFill } from "react-icons/ri";

const skillsIcons = {
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
};


const Work = () => {
  useGSAP(() => {
    const workTimelineOne = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=64% bottom-=20%",
        end: "top+=70% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });
    const workTimelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=70% bottom-=20%",
        end: "top+=80% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    workTimelineOne.fromTo('.work-element-one', {
      left: '-150%',
    }, {
      left: '50%',
      ease: 'power.inOut(2)',
    })
      .to('.work-element-one', {
        clipPath: 'inset(0% 0% 0% 86.7%)',
        borderRadius: '0',
        left: '55%',
        ease: 'power.inOut(1)',
      });

    workTimelineTwo.fromTo('.work-element-two', {
      left: '-150%',
    }, {
      left: '45%',
      ease: 'power.inOut(4)',
    })
      .to('.work-element-two', {
        clipPath: 'inset(0% 0% 0% 86.7%)',
        borderRadius: '0',
        ease: 'power.inOut(4)',
      })
      .to('.work-element', {
        clipPath: 'inset(0% 100% 0% 86.7%)',
        ease: 'power.out(2)',
      });
  }, []);

  return (
    <WorkContainer className="work-container">
      <WorkElement className="work-element work-element-one">
        <WorkTextContainer>
          <div className="title-container">
            <h3>
              MediaXtend
            </h3>
          </div>
          <div className="description-container">
            <p className="p-1">
              J'ai eu l'opportunité de travailler avec MediaXtend, d'abord en tant que freelance pendant six mois, puis en alternance sur une durée d'un an dans le cadre de mon cursus à la Wild Code School. Cette expérience a été déterminante dans ma carrière, me permettant de participer à de nombreux projets en autonomie et de confirmer mon intérêt pour le développement.
            </p>
            <p className="p-2">
              J'ai pu couvrir une grande variétié de tâches, de la conception avec la réalisation de maquettes, à la réalisation de l'application en passant par la mise en place d'API.
            </p>
            <p className="p-3">
              Voici quelques exemples des projets:
            </p>
          </div>
        </WorkTextContainer>
        <ProjectContainer>
          <div className="project-container project-1">
            <h4 className="project-title">Jeu concours Roland Garros</h4>
            <p className="project-description">Plateforme de jeu concours pour le tournoi de Roland Garros. Les utilisateurs pouvaient s'inscrire, jouer et tenter de gagner des prix en participant.</p>
            <div className="project-infos-container">
              <div className="project-image">
                <img src={placeholder.src} alt="Jeu concours Roland Garros" />
              </div>
              <div className="project-technologies">
                {skillsIcons.symfony} {skillsIcons.react}
              </div>
              <div className='space' />
            </div>
          </div>

          <div className="project-container project-2">
            <h4 className="project-title">MAPAR</h4>
            <p className="project-description">Site web pour l'association MAPAR (Mise Au Point en Anesthésie Réanimation), association basée au CHU du Kremlin Bicêtre.</p>
            <div className="project-infos-container">
              <div className="project-image">
                <img src={placeholder.src} alt="MAPAR" />
              </div>
              <div className="project-technologies">
                <SiSymfony /> <FaPhp /> <FaJs />
              </div>
              <Link className="project-link" href="https://www.mapar.org/" target="_blank" rel="noopener noreferrer">
                <HiOutlineExternalLinkIcon />
                <span>Voir le site</span>
              </Link>
            </div>
          </div>
        </ProjectContainer>
        <ProjectContainer>
          <div className="project-container project-3">
            <h4 className="project-title">Visoconférence MAPAR</h4>
            <p className="project-description">Proof of concept d'une plateforme de visoconférence pour l'association MAPAR.</p>
            <div className="project-infos-container">
              <div className="project-image">
                <img src={placeholder.src} alt="Visoconférence MAPAR" />
              </div>
              <div className="project-technologies">
                <FaNodeJs /> <FaReact /> <FaFeather />
              </div>
              <div className='space' />
            </div>
          </div>
          <div className="project-container project-4">
            <h4 className="project-title">Abcell-Bio</h4>
            <p className="project-description">Abcell-bio est une société de biotechnologie située au sein du Genopole à Evry, spécialisée dans l’isolement des cellules souches hématopoïétiques humaines et de cellules primaires issues des tissus périnataux.</p>
            <div className="project-infos-container">
              <div className="project-image">
                <img src={placeholder.src} alt="Visoconférence MAPAR" />
              </div>
              <div className="project-technologies">
                <FaSymfony /> <FaReact />
              </div>
              <Link className="project-link" href="https://abcell-bio.com/fr/" target="_blank" rel="noopener noreferrer">
                <HiOutlineExternalLinkIcon />
                <span>Voir le site</span>
              </Link>
            </div>
          </div>
        </ProjectContainer>
      </WorkElement>


      <WorkElement className="work-element work-element-two">
        <WorkTextContainer>
          <div className="title-container">
            <h3>
              Webcastor
            </h3>
          </div>
          <div className="description-container">
            <p className="p-1">
              Chez Webcastor, j'ai contribuer à l'évolution de la plateforme de Streamfizz. Streamfizz une plateforme de gestion de médias centrée sur la mise en valleurs de vidéos à la demande ou de direct.
              La palteforme permets une gestion de contenu, de diffusion, de visualisation de statistiques et permettant un paramétrage fin, destiné à des utilisateurs de tout niveau.
            </p>
            <p className="p-2">
              Au sein de l'équipe, j'ai notamment réalisé le transfert près de 30To de données client depuis des serveurs Azure vers une infrastructure européenne avec le protocole S3. En assurant la mise à jours et l'ordonnancement des données métier.
              J’ai également été impliqué dans des projets transverses intervenant sur plusierus micro-services, orchestrateurs et transcodeurs vidéos (Node.js) tout en contribuant aux aspects DevOps avec Kubernetes.
            </p>
            <p className="p-3">
              Mon implication et ma force de proposition m’ont permis de rapidement prendre en charge des tâches en autonomie, avec des refontes complètes d'interfaces et de fonctionnalités.
            </p>
          </div>
        </WorkTextContainer>
        <ProjectContainer>
          <div className="project-container project-1">
            <h4 className="project-title">Streamfizz - Backoffice</h4>
            <p className="project-description">Plateforme de gestion de contenu média et de direct. Création de webtvs, playlist et paramétrage de l'interface du player ainsi que des options de confidentialité.</p>
            <div className="project-infos-container">
              <div className="project-image">
                <img src={placeholder.src} alt="Jeu concours Roland Garros" />
              </div>
              <div className="project-technologies">
                {skillsIcons.antdesign} {skillsIcons.react} {skillsIcons.nodejs} {skillsIcons.kubernetes} {skillsIcons.graphql} {skillsIcons.prisma}
              </div>
              <Link className="project-link" href="https://www.streamfizz.com/" target="_blank" rel="noopener noreferrer">
                <HiOutlineExternalLinkIcon />
                <span>Voir le site</span>
              </Link>
            </div>
          </div>

          <div className="project-container project-2">
            <h4 className="project-title">Streamfizz - Player vidéo</h4>
            <p className="project-description">
              Player vidéo permettant la visualisation de contenu vidéos à la demande ou en direct. Le player intègre plusieurs fonctionnalités comme des chat en direct ou des modules interactifs.
            </p>
            <div className="project-infos-container">
              <div className="project-image">
                <img src={placeholder.src} alt="MAPAR" />
              </div>
              <div className="project-technologies">
                {skillsIcons.antdesign} {skillsIcons.nextjs} {skillsIcons.nodejs} {skillsIcons.graphql} {skillsIcons.prisma}
              </div>
              <Link className="project-link" href="https://www.streamfizz.com/plateforme-streamfizz/player/" target="_blank" rel="noopener noreferrer">
                <HiOutlineExternalLinkIcon />
                <span>Voir le site</span>
              </Link>
            </div>
          </div>
        </ProjectContainer>
      </WorkElement>

    </WorkContainer>
  );
};

export default Work;