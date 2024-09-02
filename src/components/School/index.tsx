'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SchoolCard, SchoolCardContainer, SchoolContainer, SchoolText } from "./styled";
import ICONS from "../../utils/constants/icons";
import SCHOOLS from "../../utils/constants/schools";
import useSchoolAnimations from "../../utils/hooks/useSchoolAnimations";

const School = ({ setCurrentStep }: { setCurrentStep: (step: number) => void }) => {
  const t = useTranslations("School");
  useSchoolAnimations(setCurrentStep);

  return (
    <SchoolContainer className="school-container">
      {SCHOOLS.map((school, schoolIndex) => {
        return (
          <SchoolText className="school-text-container" key={`${school.name}-${schoolIndex}`}>
            <div className={`school-text-${schoolIndex + 1}`} >
              {school.paragraphs.map((paragraph) => {
                return (
                  <p key={paragraph} className={paragraph}>{t(`${school.name}-${paragraph}`)}</p>
                )
              })}
              <div className="school-icons-container">
                {school.skills.map((skill, index) => {
                  return (
                    <div key={index} className={`school-icons school-icons-${schoolIndex + 1}`}>{skill}</div>
                  )
                })}
              </div>
            </div>
          </SchoolText>
        )
      })}
      <SchoolCardContainer className="school-card-container">
        {SCHOOLS.map((school, index) => {
          return (
            <SchoolCard className={`school-card card-${index + 1}`} key={`${school.name}-${index}`}>
              <h3>{t(school.name)}</h3>
              <p>{t(`${school.name}-about`)}</p>
              <div>
                <Link
                  href={t(`${school.name}-link`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="school-card-link hover-effect"
                >
                  {ICONS.externalLink}
                  <span>{t('more')}</span>
                </Link>
              </div>
            </SchoolCard>
          )
        })}
      </SchoolCardContainer>
    </SchoolContainer>
  );
};

export default School;