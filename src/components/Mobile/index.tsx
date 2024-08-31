import React from 'react';
import { useTranslations } from 'next-intl';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import CONTACT from '../../utils/constants/contact';
import { ContactContentMobile, ContactInfoContainer, MobileContainer } from './styled';
import Link from 'next/link';
import ICONS from '../../utils/constants/icons';
import InfoReveal from '../Contact/infoReveal';

const MobilePortfolio: React.FC = () => {
  const t = useTranslations('Contact');

  return (
    <MobileContainer className="mobile-portfolio">
      <div className='box'>
        <div className='wave -one' />
        <div className='wave -two' />
      </div>

      <ContactInfoContainer>
        <h1>{CONTACT.name}</h1>

        <ContactContentMobile className='contact-content-1'>
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
        </ContactContentMobile>
        <ContactContentMobile className='contact-content-2'>
          <h2>{t('contact-info')}</h2>
          <InfoReveal
            items={[
              { icon: CONTACT.phoneIcon, text: CONTACT.phone, link: `tel:${CONTACT.phone}` }
            ]}
            buttonText={t('show-phone')}
            buttonIcon={ICONS.phone}
            isMobile={true}
          />

          <InfoReveal
            items={[
              { icon: CONTACT.emailIcon, text: CONTACT.email, link: CONTACT.email, emailText: CONTACT.emailText }
            ]}
            buttonText={t('show-email')}
            buttonIcon={CONTACT.emailIcon}
            isMobile={true}
          />
          <div>
            {ICONS.mapMarker}
            <span>
              {CONTACT.address}
            </span>
          </div>
        </ContactContentMobile>

        <ContactContentMobile className='contact-content-4'>
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
                  isMobile={true}
                />
              </div>
            ))}
          </div>
        </ContactContentMobile>
        <ContactContentMobile className='contact-content-3'>
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
        </ContactContentMobile>
      </ContactInfoContainer>


    </MobileContainer>
  );
};

export default MobilePortfolio;
