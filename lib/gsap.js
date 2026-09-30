"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
ScrollTrigger.config({ ignoreMobileResize: true });

// Shared Lenis instance so any component can pause / scroll the page
let lenis = null;
export const setLenis = (l) => (lenis = l);
export const getLenis = () => lenis;

export { gsap, ScrollTrigger, useGSAP };
