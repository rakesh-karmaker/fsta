"use client";

import gsap from "gsap";

export default function initAboutHeroAnimation(loading: boolean) {
  gsap.set(".hero-container", { borderRadius: "0" });
  gsap.set(".about-text", { autoAlpha: 0 });
  gsap.set(".about-hero > *", { autoAlpha: 0, y: 20 });

  if (loading) return null;

  gsap
    .timeline()
    .to(".about-text", {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power1.inOut",
    })
    .to(".about-hero > *", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
    })
    .to(".hero-container", {
      borderRadius: "0 0 65px 65px",
      duration: 0.5,
      ease: "power1.inOut",
    });
}
