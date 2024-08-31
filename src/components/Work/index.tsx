import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ProjectContainer, WorkContainer, WorkElement, WorkTextContainer } from './styled';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import WORKS from '../../utils/constants/works';
import ICONS from '../../utils/constants/icons';

const Work = ({ setCurrentStep }: { setCurrentStep: (step: number) => void }) => {
  const t = useTranslations("Work");
  useGSAP(() => {
    const workTimelineOne = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=64% bottom-=20%",
        end: "top+=69% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
        onEnter: () => {
          setCurrentStep(3);
        },
        onLeaveBack: () => {
          setCurrentStep(2);
        }
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

    const fadeOutTimelineOne = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=65% center",
        end: "top+=70% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    const fadeOutTimelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=70% center",
        end: "top+=75% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    workTimelineOne.fromTo('.work-element-1', {
      left: '-150%',
    }, {
      left: '50%',
      ease: 'power.inOut(2)',
      onComplete: () => {
        gsap.to('.school-container', {
          display: 'none',
        });
      }
    })
      .to('.work-element-1', {
        clipPath: 'inset(0% 0% 0% 86.7%)',
        borderRadius: '0',
        left: '55%',
        ease: 'power.inOut(1)',
        onReverseComplete: () => {
          gsap.to('.school-container', {
            display: 'initial',
          });
        }
      });

    fadeOutTimelineOne.fromTo('.description-container-1, .project-container-1', {
      opacity: 1,
    }, {
      opacity: 0,
      ease: 'power.inOut(2)',
    });

    workTimelineTwo.fromTo('.work-element-2', {
      left: '-150%',
    }, {
      left: '45%',
      ease: 'power.inOut(4)',
    })
      .to('.work-element-2', {
        clipPath: 'inset(0% 0% 0% 86.7%)',
        borderRadius: '0',
        ease: 'power.inOut(4)',
      })
      .to('.work-element', {
        clipPath: 'inset(100% 0% 0% 86.7%)',
        ease: 'power.out(2)',
      });

    fadeOutTimelineTwo.fromTo('.description-container-2, .project-container-2', {
      opacity: 1,
    }, {
      opacity: 0,
      ease: 'power.inOut(2)',
    });
  }, []);

  return (
    <WorkContainer className="work-container">
      {WORKS.map((work, companyIndex) => (
        <WorkElement key={companyIndex} className={`work-element work-element-${companyIndex + 1}`}>
          <WorkTextContainer className={`work-text-container-${companyIndex + 1}`}>
            <div className="title-container">
              <Link className="project-link hover-effect" href={work.companyLink} target="_blank" rel="noopener noreferrer">
                {ICONS.externalLink}
                <h3>
                  {work.company}
                </h3>
              </Link>
            </div>
            <div className={`description-container-${companyIndex + 1}`}>
              {work.description.map((description, index) => (
                <p key={index} className={`p-${index + 1}`}>
                  {t(`${work.key}-descr-${description}`)}
                </p>
              ))}
            </div>
          </WorkTextContainer>
          <div>
            <ProjectContainer>
              {work.projects.map((project, index) => index < 2 && (
                <div key={`${companyIndex}-${index}`} className={`project-container-${companyIndex + 1} project-${index + 1}`}>
                  <h4 className="project-title">{t(`${work.key}-${project.title}`)}</h4>
                  <p className="project-description">{t(`${work.key}-${project.description}`)}</p>
                  <div className="project-infos-container">
                    <div className="project-image">
                      {project.icon ? (
                        project.icon
                      ) : (
                        <img src={project.logo as string} alt={project.title} />
                      )}
                    </div>
                    <div className="project-technologies">
                      {project.technologies.map((technology, index) => (
                        <React.Fragment key={`${technology}-${index}`}>
                          {technology}
                        </React.Fragment>
                      ))}
                    </div>
                    {project.link ? (
                      <Link className="project-link hover-effect" href={project.link} target="_blank" rel="noopener noreferrer">
                        {ICONS.externalLink}
                        <span>{t(`${work.key}-link-label`)}</span>
                      </Link>
                    ) : (
                      <div className='space' />
                    )}
                  </div>
                </div>
              ))}
            </ProjectContainer>
            <ProjectContainer>
              {work.projects.map((project, index) => index > 1 && (
                <div key={`${companyIndex}-${index}`} className={`project-container-${companyIndex + 1} project-${index + 1}`}>
                  <h4 className="project-title">{t(`${work.key}-${project.title}`)}</h4>
                  <p className="project-description">{t(`${work.key}-${project.description}`)}</p>
                  <div className="project-infos-container">
                    <div className="project-image">
                      {project.icon ? (
                        project.icon
                      ) : (
                        <img src={project.logo as string} alt={project.title} />
                      )}
                    </div>
                    <div className="project-technologies">
                      {project.technologies.map((technology, index) => (
                        <React.Fragment key={`${technology}-${index}`}>
                          {technology}
                        </React.Fragment>
                      ))}
                    </div>
                    {project.link ? (
                      <Link className="project-link hover-effect" href={project.link} target="_blank" rel="noopener noreferrer">
                        {ICONS.externalLink}
                        <span>{t(`${work.key}-link-label`)}</span>
                      </Link>
                    ) : (
                      <div className='space' />
                    )}
                  </div>
                </div>
              ))}
            </ProjectContainer>
          </div>
        </WorkElement>
      ))}
    </WorkContainer>
  );
};

export default Work;