import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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
}


const LinkComponent = ({ item, isEmail }: { item: InfoItem, isEmail: boolean }) => {
  const t = useTranslations("Contact");
  if (!item.link) {
    return null;
  }

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

const InfoReveal: React.FC<InfoRevealProps> = ({ items, buttonText, buttonIcon }) => {
  const [isVisible, setIsVisible] = useState(false);

  const isEmail = items.some(item => item.emailText);

  if (isVisible) {
    return (
      <div className='info-reveal'>
        {items.map((item, index) => {
          return item.link ? (
            <LinkComponent key={index} item={item} isEmail={isEmail} />
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