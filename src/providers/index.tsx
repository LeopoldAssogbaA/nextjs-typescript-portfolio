'use client'

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StyledComponentsRegistry from "../lib/registry";
import ScrollToPlugin from "gsap/ScrollToPlugin";


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin);
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>)
};