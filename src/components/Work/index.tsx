import React from 'react';
import { ProjectContainer, WorkContainer, WorkElement, WorkTextContainer } from './styled';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import useWorkAnimations from '../../utils/hooks/useWorkAnimations';

import WORKS from '../../utils/constants/works';
import ICONS from '../../utils/constants/icons';

const Work = ({ setCurrentStep }: { setCurrentStep: (step: number) => void }) => {
  const t = useTranslations("Work");
  useWorkAnimations(setCurrentStep);

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