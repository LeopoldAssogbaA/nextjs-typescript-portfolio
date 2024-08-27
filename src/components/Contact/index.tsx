'use client'

import Link from 'next/link';
import React from 'react';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaPhone, FaUser } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

import { CONTACT } from '../../utils/constants';
import MusicPlayer from '../Music/MusicPlayer';
import InfoReveal from './infoReveal';
import { ContactContainer, ContactElement, ContactGrid, ContactContent } from './styled';

const Contact: React.FC<{ setCurrentStep: (step: number) => void }> = ({ setCurrentStep }) => {
  const t = useTranslations('Contact');

  useGSAP(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-container',
        start: "top+=85% bottom",
        end: "bottom bottom",
        scrub: true,
        toggleActions: 'play none reverse reset',
        onEnter: () => {
          setCurrentStep(4);
        },
        onLeaveBack: () => {
          setCurrentStep(3);
        }
      },
    });

    const discRevealTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.main-container',
          start: "top+=87.5% bottom",
          end: "top+=95% bottom",
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
    discRevealTimeline.from(['.vinyl-cover', '.vinyl-disc'], {
      left: -170,
      transform: 'rotate3d(0, 0, 0, 0deg) translateX(-50%)',
      stagger: 0.02,
    });
    discRevealTimeline.to('.vinyl-disc', {
      opacity: 1,
    });
    discRevealTimeline.to('.vinyl-disc', {
      left: "+=30px",
      stagger: 0.02,
    });
    discRevealTimeline.to('.vinyl-disc', {
      left: "-=20px",
      stagger: 0.02,
    });
    discRevealTimeline.from('.button', {
      opacity: 0,
      stagger: 0.02,
    });

    discRevealTimeline.from(['.music-title', '.music-info', '.music-quote'], {
      opacity: 0,
      x: -150,
      stagger: 0.02,
      duration: 0.5,
    })

    contactTimeline.from('.contact-element-1', {
      clipPath: 'inset(0 0 100% 0)',
      onComplete: () => {
        gsap.to('.work-container', {
          display: 'none',
        });
      }
    })
    contactTimeline.from('.contact-element-4', {
      clipPath: 'inset(0 100% 0 0)',
      onReverseComplete: () => {
        gsap.to('.work-container', {
          display: 'initial',
        });
      }
    });
    contactTimeline.from('.contact-element-5', {
      clipPath: 'inset(100% 0 0 0)',
    });
    contactTimeline.from('.contact-element-3', {
      clipPath: 'inset(100% 0 0 0)',
    });
  }, []);

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
              <FaDownload />
              <span>{t('download-resume')}</span>
            </Link>
          </ContactContent>
          <ContactContent className='contact-content-2'>
            <h2>{t('contact-info')}</h2>
            <InfoReveal
              items={[
                { icon: FaPhone, text: CONTACT.phone, link: `tel:${CONTACT.phone}` }
              ]}
              buttonText={t('show-phone')}
              buttonIcon={FaPhone}
            />

            <InfoReveal
              items={[
                { icon: FaEnvelope, text: CONTACT.email, link: `mailto:${CONTACT.email}` }
              ]}
              buttonText={t('show-email')}
              buttonIcon={FaEnvelope}
            />
            <div>
              <FaMapMarker />
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
              <FaLinkedin />
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
              <div className='reference-card ref-card-1'>
                <div className='reference-card-header'>
                  <h3>MediaXtend</h3>
                  <span>-</span>
                  <h4>{CONTACT.references[0].name}</h4>
                </div>
                <InfoReveal
                  items={[
                    { icon: FaDownload, text: t(CONTACT.letter), link: CONTACT.references[0].letter },
                    { icon: FaLinkedin, text: 'LinkedIn', link: CONTACT.references[0].linkedin },
                    { icon: FaEnvelope, text: CONTACT.references[0].email, link: `mailto:${CONTACT.references[0].email}` },
                    { icon: FaPhone, text: CONTACT.references[0].phone, link: `tel:${CONTACT.references[0].phone}` },
                  ]}
                  buttonText={t('show-contact')}
                  buttonIcon={FaUser}
                />
              </div>
              <div className='reference-card ref-card-2'>
                <div className='reference-card-header'>
                  <h3>Webcastor</h3>
                  <span>-</span>
                  <h4>{CONTACT.references[1].name}</h4>
                </div>
                <InfoReveal
                  items={[
                    { icon: FaDownload, text: t(CONTACT.letter), link: CONTACT.references[1].letter },
                    { icon: FaLinkedin, text: 'LinkedIn', link: CONTACT.references[1].linkedin },
                    { icon: FaEnvelope, text: CONTACT.references[1].email, link: `mailto:${CONTACT.references[1].email}` },
                    { icon: FaPhone, text: CONTACT.references[1].phone, link: `tel:${CONTACT.references[1].phone}` },
                  ]}
                  buttonText={t('show-contact')}
                  buttonIcon={FaUser}
                />
              </div>
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
              <FaGithub />
              <span>
                {t('github-profile')}
              </span>
            </Link>
            <div className='github-projects-container'>
              <div className="portfolio-repo">
                <Link href={CONTACT.github} className='github-link hover-effect'>
                  <RiGitRepositoryLine />
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
                {['1', '2', '3'].map((project, index) => (
                  <li key={index}>
                    <Link href={`/projects/${project}`} className='github-project-link hover-effect'>
                      <RiGitRepositoryLine />
                      <span>
                        projet {project}
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