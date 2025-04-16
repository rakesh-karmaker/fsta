"use client"

import { departments } from "@/services/data/departments";
import gsap from "gsap";
import React from "react";

const initDepartmentAnimations = (completed: boolean) => {
  gsap.set(".projects-container", { autoAlpha: 0, y: 100 });
  if (!completed) return null;

  gsap.to(".projects-container", {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    ease: "power1.out",
  });
};

const initDepartmentImageAnimations = (index: number, setImageSrc: React.Dispatch<React.SetStateAction<string>>, imgRef: React.RefObject<HTMLElement | null>) => {
  setImageSrc("/departments/" + departments[index].image);
  const ele = imgRef.current;
  gsap.set(ele, { autoAlpha: 0, y: 50 });
  gsap.to(ele, { autoAlpha: 1, y: 0, duration: 0.5 });
};

export { initDepartmentAnimations, initDepartmentImageAnimations };
