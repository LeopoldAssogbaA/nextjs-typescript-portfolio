import React, { useState } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface InfoItem {
  icon: IconType;
  text: string;
  link?: string;
}

interface InfoRevealProps {
  items: InfoItem[];
  buttonText: string;
  buttonIcon: IconType;
}

const InfoReveal: React.FC<InfoRevealProps> = ({ items, buttonText, buttonIcon: ButtonIcon }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (isVisible) {

    console.log("visible");
    return (
      <div className='info-reveal'>
        {items.map((item, index) => {
          const ItemIcon = item.icon;
          return item.link ? (
            <Link
              key={index}
              href={item.link}
              className='info-link hover-effect'
              target='_blank'
              rel='noopener noreferrer'
              {...(item.link.includes('static/files') && { download: true })}
            >
              <ItemIcon />
              <span>{item.text}</span>
            </Link>
          ) : (
            <div key={index} className='info-item'>
              <ItemIcon />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    );
  }
  console.log("!visible", items);

  return (
    <button
      className='info-button hover-effect'
      onClick={() => setIsVisible(true)}
    >
      <ButtonIcon />
      {buttonText}
    </button>
  );
};

export default InfoReveal;