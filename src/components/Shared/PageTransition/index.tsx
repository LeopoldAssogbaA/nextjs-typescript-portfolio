'use client';

import { ContainerEnter, ContainerLeave } from "./styled";
import usePageTransitionAnimations from "../../../utils/hooks/usePageTransitionAnimations";

const PageTransition: React.FC = () => {
  usePageTransitionAnimations();

  return (
    <>
      <ContainerEnter className="page-transition-container-enter">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="page-transition-enter" />
        ))}
      </ContainerEnter>
      <ContainerLeave className="page-transition-container-leave">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="page-transition-leave" />
        ))}
      </ContainerLeave>
    </>
  );
}

export default PageTransition;
