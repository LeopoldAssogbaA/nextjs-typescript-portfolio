'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import SplitType from "split-type";
import { useTranslations } from "next-intl";
import { SchoolCard, SchoolCardContainer, SchoolContainer, SchoolText } from "./styled";
import ICONS from "../../utils/constants/icons";
import SCHOOLS from "../../utils/constants/schools";

const School = ({ setCurrentStep }: { setCurrentStep: (step: number) => void }) => {
  const t = useTranslations("School");
  useGSAP(() => {
    const schoolCardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=45% bottom-=20%",
        end: "top+=65% center",
        scrub: true,
        onEnter: () => {
          setCurrentStep(2);
        },
        onLeaveBack: () => {
          setCurrentStep(1);
        }
      },
    });

    schoolCardTimeline.from(".card-1", {
      top: "60vh",
    });
    schoolCardTimeline.to(".card-1", {
      left: "calc(65vw - 126px)",
      rotate: -6,
    });

    schoolCardTimeline.from(".card-2", {
      top: "60vh",
    });
    schoolCardTimeline.to(".card-2", {
      left: "calc(65vw - 126px)",
      rotate: 0,
      onStart: () => {
        gsap.to(".card-1", {
          color: "rgba(71, 22, 125, 0.35)",
          duration: 0.2,
        })
      },
      onReverseComplete: () => {
        gsap.to(".card-1", {
          color: "rgba(71, 22, 125, 1)",
          duration: 0.2,
        })
      }
    });

    schoolCardTimeline.to(".school-card", {
      rotate: 360,
      scale: 0.8,
      stagger: 0.05,
    });
    schoolCardTimeline.to(".school-container", {
      left: "120vw",
      stagger: -0.05,
    });
  }, []);

  useGSAP(() => {
    const schoolTextOne = document.querySelector('.school-text-1');
    if (!schoolTextOne) return;
    const text = new SplitType(schoolTextOne as HTMLElement, { types: 'chars,words' });
    gsap.fromTo(text.chars,
      {
        opacity: 0,
        x: "-50px",
      },
      {
        opacity: 1,
        x: "0px",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=45% bottom-=20%",
          end: "top+=45% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    gsap.fromTo(".school-icons-1",
      {
        opacity: 0,
        scale: 0.1,
        rotate: 360,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.02,
        rotate: 0,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=45% bottom-=20%",
          end: "top+=48% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    gsap.to(".school-text-1",
      {
        opacity: 0,
        y: "-100vh",
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=53% bottom-=20%",
          end: "top+=53% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
  }, []);

  useGSAP(() => {
    const schoolTextTwo = document.querySelector('.school-text-2');
    if (!schoolTextTwo) return;
    const text = new SplitType(schoolTextTwo as HTMLElement, { types: 'words,chars' });
    gsap.fromTo(text.chars,
      {
        opacity: 0,
        x: "-50vh",
      },
      {
        opacity: 1,
        x: "0px",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=55% bottom-=20%",
          end: "top+=55% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',

        },
      });

    gsap.fromTo(".school-icons-2",
      {
        opacity: 0,
        scale: 0.1,
        rotate: 360,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.02,
        rotate: 0,
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=55% bottom-=20%",
          end: "top+=55% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
    gsap.to(".school-text-2",
      {
        opacity: 0,
        y: "-100vh",
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=63% bottom-=20%",
          end: "top+=63% center",
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      });
  }, [])


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