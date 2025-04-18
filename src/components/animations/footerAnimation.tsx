"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initFooterAnimation(loading: boolean) {
  gsap.set(".footer-upper > *", { autoAlpha: 0, scale: 0.8 });
  gsap.set(".footer-lower", { autoAlpha: 0, y: 30 });
  if (loading) return null;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".footer-upper",
      },
    })
    .to(".footer-upper > *", {
      autoAlpha: 1,
      scale: 1,
      stagger: 0.2,
    })
    .to(".footer-lower", {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
    });
}
