import React, { useState } from 'react';
import Link from 'next/link';

interface InfoItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

interface InfoRevealProps {
  items: InfoItem[];
  buttonText: string;
  buttonIcon: React.ReactNode;
}

const InfoReveal: React.FC<InfoRevealProps> = ({ items, buttonText, buttonIcon }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (isVisible) {
    return (
      <div className='info-reveal'>
        {items.map((item, index) => {
          return item.link ? (
            <Link
              key={index}
              href={item.link}
              className='info-link hover-effect'
              target='_blank'
              rel='noopener noreferrer'
              {...(item.link.includes('static/files') && { download: true })}
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
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