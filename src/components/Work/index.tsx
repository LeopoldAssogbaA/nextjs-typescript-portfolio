import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { WorkContainer, WorkElement } from './styled';

const Work = () => {
  useGSAP(() => {
    const workTimelineOne = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=64% bottom-=20%",
        end: "top+=70% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });
    const workTimelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=70% bottom-=20%",
        end: "top+=80% center",
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    });

    workTimelineOne.fromTo('.work-element-one', {
      left: '-150%',
    }, {
      left: '50%',
      ease: 'power4.inOut',
    })
      .to('.work-element-one', {
        clipPath: 'inset(0% 0% 0% 90%)',
        ease: 'power4.inOut',
      });

    workTimelineTwo.fromTo('.work-element-two', {
      left: '-150%',
    }, {
      left: '42.5%',
      ease: 'power4.inOut',
    })
      .to('.work-element-two', {
        clipPath: 'inset(0% 0% 0% 90%)',
        ease: 'power4.inOut',
      })
      .to('.work-element', {
        clipPath: 'inset(0% 100% 0% 90%)',
        ease: 'power4.inOut',
      });
  }, []);

  return (
    <WorkContainer className="work-container">
      <WorkElement className="work-element work-element-one">
        <span>
          In exercitation do fugiat aute aliquip elit consectetur aliqua culpa aliquip dolore quis sunt. Irure dolore ut nulla sint aliqua est deserunt occaecat velit adipisicing. Nulla commodo ut anim. Est esse magna duis cillum eiusmod velit duis mollit ipsum eu enim reprehenderit aliqua ut. Mollit nisi est reprehenderit adipisicing culpa. Aute mollit laborum nisi occaecat officia cillum sint adipisicing non dolor sint ex aliqua. Occaecat est aliqua dolor ex in ipsum. Fugiat pariatur qui irure ullamco consequat qui.
        </span>
      </WorkElement>
      <WorkElement className="work-element work-element-two">
        <span>
          In exercitation do fugiat aute aliquip elit consectetur aliqua culpa aliquip dolore quis sunt. Irure dolore ut nulla sint aliqua est deserunt occaecat velit adipisicing. Nulla commodo ut anim. Est esse magna duis cillum eiusmod velit duis mollit ipsum eu enim reprehenderit aliqua ut. Mollit nisi est reprehenderit adipisicing culpa. Aute mollit laborum nisi occaecat officia cillum sint adipisicing non dolor sint ex aliqua. Occaecat est aliqua dolor ex in ipsum. Fugiat pariatur qui irure ullamco consequat qui.
        </span>
      </WorkElement>

    </WorkContainer>
  );
};

export default Work;
