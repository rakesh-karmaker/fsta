"use client";

import { departments } from "@/services/data/departments";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const initDepartmentAnimations = (loading: boolean) => {
  gsap.set(".dpt-heading", { autoAlpha: 0, y: 30 });
  gsap.set(".dpt-upper > *", { autoAlpha: 0, y: 30 });
  gsap.set(".department-list", { autoAlpha: 0, y: 30 });

  if (loading) return null;

  gsap
    .timeline(
     {
      scrollTrigger: {
        trigger: ".department-list",
      }, 
     }
    )
    .to(".dpt-heading", {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
    })
    .to(".dpt-upper > *", {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "power1.out",
    })
    .to(".department-list", {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
    })
    ;
};

const initDepartmentImageAnimations = (
  index: number,
  setImageSrc: React.Dispatch<React.SetStateAction<string>>,
  imgRef: React.RefObject<HTMLElement | null>
) => {
  setImageSrc("/departments/" + departments[index].image);
  const ele = imgRef.current;
  gsap.set(ele, { autoAlpha: 0, y: 50 });
  gsap.to(ele, { autoAlpha: 1, y: 0, duration: 0.5 });
};

export { initDepartmentAnimations, initDepartmentImageAnimations };
