import React from 'react';
import { useTranslations } from 'next-intl';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import CONTACT from '../../utils/constants/contact';

const MobilePortfolio: React.FC = () => {
  const t = useTranslations('Contact');

  return (
    <div className="mobile-portfolio">
      <h1>{CONTACT.name}</h1>
      
      <div className="contact-info">
        <h2>{t('get-in-touch')}</h2>
        <div className="contact-item">
          <IoMail />
          <a href="mailto:contact@email.com">contact@email.com</a>
        </div>
        <div className="contact-item">
          <IoLogoLinkedin />
          <a href="https://www.linkedin.com/in/user/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <IoLogoGithub />
          <a href="https://github.com/user" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="references">
        <h2>{t('references')}</h2>
        <p>{t('references-text')}</p>
        <ul>
          <li>{t('reference-1')}</li>
          <li>{t('reference-2')}</li>
          <li>{t('reference-3')}</li>
        </ul>
      </div>

      <style jsx>{`
        .mobile-portfolio {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1, h2 {
          color: #333;
        }
        .contact-info, .references {
          margin-top: 20px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .contact-item svg {
          margin-right: 10px;
        }
        a {
          color: #0066cc;
          text-decoration: none;
        }
        ul {
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default MobilePortfolio;
