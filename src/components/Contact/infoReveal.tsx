import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import validator from 'validator';

interface InfoItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
  emailText?: string;
}

interface InfoRevealProps {
  items: InfoItem[];
  buttonText: string;
  buttonIcon: React.ReactNode;
  isMobile?: boolean; 
}

const LinkComponent = ({ item }: { item: InfoItem }) => {
  const t = useTranslations("Contact");
  if (!item.link) {
    return null;
  }
  const isEmail = validator.isEmail(item.link);

  const handleEmailClick = (email: string) => {
    const subject = encodeURIComponent(t(item.emailText));
    const encodedEmail = encodeURIComponent(email);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${subject}`, '_blank');
  }
  
  if (isEmail && item.link) {
    return (
      <button
        className='info-link hover-effect'
        onClick={() => item.link && handleEmailClick(item.link)}
      >
        {item.icon}
        <span>{item.text}</span>
      </button>
    );
  }

  return (
    <Link
      href={item.link}
      className='info-link hover-effect'
      target='_blank'
      rel='noopener noreferrer'
      {...(item.link.includes('static/files') && { download: true })}
    >
      {item.icon}
      <span>{item.text}</span>
    </Link>
  );
}

const InfoReveal: React.FC<InfoRevealProps> = ({ items, buttonText, buttonIcon, isMobile }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (isVisible || isMobile) {
    return (
      <div className={`info-reveal ${isMobile ? 'mobile' : ''}`}>
        {items.map((item, index) => {
          return item.link ? (
            <LinkComponent key={index} item={item} />
          ) : (
            <div key={index} className='info-item'>
              {item.icon}
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <button
      className='info-button hover-effect'
      onClick={() => setIsVisible(true)}
    >
      {buttonIcon}
      {buttonText}
    </button>
  );
};

export default InfoReveal;