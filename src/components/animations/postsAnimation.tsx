"use client";

import gsap from "gsap";

const initPostsAnimations = (completed: boolean) => {
  gsap.set(".post", { autoAlpha: 0, scale: 0.8 });
  if (!completed) return null;

  gsap.to(".post", {
    autoAlpha: 1,
    scale: 1,
    duration: 0.3,
    ease: "power1.inOut",
    stagger: 0.2,
  });
};

export default initPostsAnimations;
