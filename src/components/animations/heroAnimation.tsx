"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function initHeroAnimation(loading: boolean) {
  gsap.set(".hero-container", { borderRadius: "0" });
  gsap.set(".hero-info > *", { autoAlpha: 0, y: 20 });
  gsap.set(".hero-cards", { autoAlpha: 0 });

  if (loading) return null;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top 40%",
      },
    })
    .to(".hero-info > *", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.inOut",
    })
    .to(".hero-cards", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.inOut",
    })
    .to(".hero-container", {
      borderRadius: "0 0 75px 75px",
      duration: 0.5,
      ease: "power1.inOut",
    });
}
