'use client'

import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import MusicPlayer from '../Music/MusicPlayer';
import InfoReveal from './infoReveal';
import { ContactContainer, ContactElement, ContactGrid, ContactContent } from './styled';

import ICONS from '../../utils/constants/icons';
import CONTACT from '../../utils/constants/contact';
import useContactAnimations from '../../utils/hooks/useContactAnimations';

const Contact: React.FC<{ setCurrentStep: (step: number) => void }> = ({ setCurrentStep }) => {
  const t = useTranslations('Contact');
  useContactAnimations(setCurrentStep);

  return (
    <ContactContainer className="contact-container">
      <ContactGrid className="contact-grid">
        <ContactElement className={`contact-element contact-element-1`} >
          <ContactContent className='contact-content-1'>
            <h2>{t('curriculum')}</h2>
            <Link
              href='/static/files/leopold_assogba_cv_2024.pdf'
              className='download-link hover-effect'
              download
              target='_blank'
              rel='noopener noreferrer'
            >
              {ICONS.download}
              <span>{t('download-resume')}</span>
            </Link>
          </ContactContent>
          <ContactContent className='contact-content-2'>
            <h2>{t('contact-info')}</h2>
            <InfoReveal
              items={[
                { icon: CONTACT.phoneIcon, text: CONTACT.phone, link: `tel:${CONTACT.phone}` }
              ]}
              buttonText={t('show-phone')}
              buttonIcon={ICONS.phone}
            />

            <InfoReveal
              items={[
                { icon: CONTACT.emailIcon, text: CONTACT.email, link: CONTACT.email, emailText: CONTACT.emailText }
              ]}
              buttonText={t('show-email')}
              buttonIcon={CONTACT.emailIcon}
            />
            <div>
              {ICONS.mapMarker}
              <span>
                {CONTACT.address}
              </span>
            </div>
          </ContactContent>
        </ContactElement>
        <ContactElement className={`contact-element contact-element-2`} >
          <MusicPlayer />
        </ContactElement>
        <ContactElement className={`contact-element contact-element-3`}>
          <ContactContent className='contact-content-3'>
            <h2>{t('socials')}</h2>
            <Link
              href={CONTACT.linkedin}
              className='linkedin-link hover-effect'
              target='_blank'
              rel='noopener noreferrer'
            >
              {ICONS.linkedin}
              <span>
                {t('linkedin')}
              </span>
            </Link>
          </ContactContent>
        </ContactElement>
        <ContactElement className={`contact-element contact-element-4`} >
          <ContactContent className='contact-content-4'>
            <h2>{t('references')}</h2>
            <div className='references-container'>
              {CONTACT.references.map((reference, index) => (
                <div key={index} className={`reference-card ref-card-${index + 1}`}>
                  <div className='reference-card-header'>
                    <h3>{reference.company}</h3>
                    <span>-</span>
                    <h4>{reference.name}</h4>
                  </div>
                  <InfoReveal
                    items={[
                      { icon: ICONS.download, text: t(CONTACT.letter), link: reference.letter },
                      { icon: ICONS.linkedin, text: 'LinkedIn', link: reference.linkedin },
                      { icon: ICONS.envelope, text: reference.email, link: reference.email, emailText: reference.emailText },
                      { icon: ICONS.phone, text: reference.phone, link: `tel:${reference.phone}` },
                    ]}
                    buttonText={t('show-contact')}
                    buttonIcon={ICONS.user}
                  />
                </div>
              ))}
            </div>
          </ContactContent>
        </ContactElement>
        <ContactElement className={`contact-element contact-element-5`} >
          <ContactContent className='contact-content-5'>
            <h2>{t('github')}</h2>
            <Link
              href={CONTACT.github}
              className='github-link hover-effect'
              target='_blank'
              rel='noopener noreferrer'
            >
              {ICONS.github}
              <span>
                {t('github-profile')}
              </span>
            </Link>
            <div className='github-projects-container'>
              <div className="portfolio-repo">
                <Link
                  href={CONTACT.githubPortfolio}
                  className='github-link hover-effect'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {ICONS.gitRepository}
                  <span>
                    {t('portfolio')}
                  </span>
                </Link>
              </div>
            </div>
          </ContactContent>
          <ContactContent className='contact-content-6'>
            <div className='github-projects'>
              <h3>{t('github-projects')}</h3>
              <ul>
                {CONTACT.githubProjects.map((project, index) => (
                  <li key={index}>
                    <Link href={project.url} className='github-project-link hover-effect'>
                      {ICONS.gitRepository}
                      <span>
                        {project.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ContactContent>
        </ContactElement>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;