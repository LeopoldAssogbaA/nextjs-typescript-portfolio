
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const usePageTransitionAnimations = () => {
  useGSAP(() => {
    gsap.fromTo("div.page-transition-enter",
      {
        height: "0%",
      },
      {
        height: "100%",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=30% center',
          end: 'top+=40% bottom-=37.5%',
          scrub: true,
          toggleActions: 'play none none none',
          onLeave: () => {
            gsap.to("div.page-transition-enter", {
              opacity: 0,
              duration: 0
            });
            gsap.to("div.page-transition-container-leave", {
              zIndex: 3,
              duration: 0
            });
            gsap.to(".about-presentation", {
              display: "none",
              duration: 0
            });
          },
          onEnterBack: () => {
            gsap.to("div.page-transition-enter", {
              opacity: 1,
              duration: 0
            });
            gsap.to("div.page-transition-container-leave", {
              zIndex: -1,
              duration: 0
            });
            gsap.to(".about-presentation", {
              display: 'block',
              duration: 0
            });
          }
        }
      });
    gsap.to("div.page-transition-leave",
      {
        marginLeft: "100vw",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=40% top+=60%',
          end: 'top+=45% bottom-=37.5%',
          scrub: true,
          toggleActions: 'play none none none',
          onLeave: () => {
            console.log('leave');
            gsap.to([".page-transition-container-enter", ".page-transition-container-leave"], {
              display: "none",
              duration: 0
            });
          },
          onEnterBack: () => {
            console.log('enter');
            gsap.to([".page-transition-container-enter", ".page-transition-container-leave"], {
              display: "grid",
              duration: 0
            });
          }
        }
      });
  }, []);
};

export default usePageTransitionAnimations;
