'use client'

import Link from 'next/link';
import React from 'react';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaPhone, FaUser } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useTranslations } from 'next-intl';

import { CONTACT } from '../../utils/constants';
import MusicPlayer from '../Music/MusicPlayer';
import InfoReveal from './infoReveal';
import { ContactContainer, ContactElement, ContactGrid } from './styled';

const Contact: React.FC = () => {
  const t = useTranslations('Contact');

  useGSAP(() => {
    const musicTitle = document.querySelector('.music-title');
    const musicInfo = document.querySelector('.music-info');
    const musicQuote = document.querySelector('.music-quote');
    const textTitle = new SplitType(musicTitle as HTMLElement, { types: 'chars' });
    const textInfo = new SplitType(musicInfo as HTMLElement, { types: 'chars' });
    const textQuote = new SplitType(musicQuote as HTMLElement, { types: 'chars' });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-container',
        start: "top+=85% bottom",
        end: "bottom bottom",
        scrub: true,
        toggleActions: 'play none none reverse',
      },
    });

    const discRevealTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.main-container',
          start: "top+=87.5% bottom",
          end: "top+=95% bottom", // Modifié pour s'arrêter à mi-chemin
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
    discRevealTimeline.from(['.vinyl-cover', '.vinyl-disc'], {
      left: -250,
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
      clipPath: 'inset(0% 100% 0 0)',
      stagger: 0.02,
    });
    discRevealTimeline.from(textTitle.chars, {
      opacity: 0,
      stagger: 0.02,
    });
    discRevealTimeline.from(textInfo.chars, {
      opacity: 0,
      stagger: 0.02,
    });
    discRevealTimeline.from(textQuote.chars, {
      opacity: 0,
      stagger: 0.02,
    });

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
          <div className='contact-content-1'>
            <h2>{t('curriculum')}</h2>
            <Link href='*' className='download-link hover-effect'>
              <FaDownload />
              <span>{t('download-resume')}</span>
            </Link>
          </div>
          <div className='contact-content-2'>
            <h2>{t('contact-info')}</h2>
            <InfoReveal
              items={[
                { icon: FaPhone, text: CONTACT.phone, link: `tel:${CONTACT.phone}` }
              ]}
              buttonText={t('show-phone')}
              buttonIcon={FaPhone}
            />
          </div>
          <div className='contact-content-3'>
          <InfoReveal
              items={[
                { icon: FaEnvelope, text: CONTACT.email, link: `mailto:${CONTACT.email}` }
              ]}
              buttonText={t('show-email')}
              buttonIcon={FaEnvelope}
            />
          </div>
          <div className='contact-content-4'>
            <div>
              <FaMapMarker />
              <span>
                {CONTACT.address}
              </span>
            </div>
          </div>
        </ContactElement>
        <ContactElement className={`contact-element contact-element-2`} >
          <MusicPlayer />
        </ContactElement>
        <ContactElement className={`contact-element contact-element-3`}>
          <div className='contact-content-5'>
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
          </div>
        </ContactElement>
        <ContactElement className={`contact-element contact-element-4`} >
          <div className='contact-content-6'>
            <h2>{t('references')}</h2>
            <div className='references-container'>
              <div className='reference-card ref-card-1'>
                <h3>MediaXtend</h3>
                <Link
                  href='/static/files/lettre_recommandation_medixtend.pdf'
                  className='reference-link hover-effect'
                  download="lettre_recommandation_medixtend.pdf"
                >
                  <FaDownload />
                  <span>{t('recommendation-letter')}</span>
                </Link>
                <InfoReveal
                  items={[
                    { icon: FaEnvelope, text: CONTACT.references[0].email, link: `mailto:${CONTACT.references[0].email}` },
                    { icon: FaPhone, text: CONTACT.references[0].phone, link: `tel:${CONTACT.references[0].phone}` },
                    { icon: FaLinkedin, text: 'LinkedIn', link: CONTACT.references[0].linkedin }
                  ]}
                  buttonText={t('show-contact')}
                  buttonIcon={FaUser}
                />
              </div>
              <div className='reference-card ref-card-2'>
                <h3>Webcastor</h3>
                <Link
                  href='/static/files/lettre_recommandation_webcastor.pdf'
                  className='reference-link hover-effect'
                  download="lettre_recommandation_webcastor.pdf"
                >
                  <FaDownload />
                  <span>{t('recommendation-letter')}</span>
                </Link>
                <InfoReveal
                  items={[
                    { icon: FaEnvelope, text: CONTACT.references[1].email, link: `mailto:${CONTACT.references[1].email}` },
                    { icon: FaPhone, text: CONTACT.references[1].phone, link: `tel:${CONTACT.references[1].phone}` },
                    { icon: FaLinkedin, text: 'LinkedIn', link: CONTACT.references[1].linkedin }
                  ]}
                  buttonText={t('show-contact')}
                  buttonIcon={FaUser}
                />
              </div>
            </div>
          </div>
        </ContactElement>
        <ContactElement className={`contact-element contact-element-5`} >
          <div className='contact-content-7'>
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

            <div className='github-projects'>
              <h3>{t('github-projects')}</h3>
              <ul>
                {['1', '2', '3'].map((project, index) => (
                  <li key={index}>
                    <Link href={`/projects/${project}`}>
                      <RiGitRepositoryLine />
                      <span>
                        projet {project}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContactElement>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;