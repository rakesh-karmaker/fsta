"use client";

import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

export default function Cursor(): React.ReactNode {
  useEffect(() => {
    gsap.set("#cursor", { display: "none" });
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        gsap.set(cursor, { display: "block" });
        const { clientX, clientY } = e;
        gsap.to(cursor, {
          x: clientX - 20 / 2,
          y: clientY - 20 / 2,
          duration: 0.3,
          delay: 0,
          ease: "power1.out",
        });
      }
    };

    if (window.innerWidth > 768) {
      // Adjust the width as needed for your breakpoint
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const addScaleEffect = (items: NodeListOf<Element>, scale = 2.5) => {
      items.forEach((tag) => {
        tag.addEventListener("mouseover", () => {
          gsap.to("#cursor", {
            scale: scale,
            duration: 0.3,
            delay: 0,
            ease: "power1.out",
          });
        });
        tag.addEventListener("mouseout", () => {
          gsap.to("#cursor", {
            scale: 1,
            duration: 0.3,
            delay: 0,
            ease: "power1.out",
          });
        });
      });
    };

    if (window.innerWidth > 768) {
      // Adjust the width as needed for your breakpoint
      const aTag = document.querySelectorAll("a");
      const btnTag = document.querySelectorAll("button");
      const clickTag = document.querySelectorAll(".clickable");

      addScaleEffect(aTag);
      addScaleEffect(btnTag);
      addScaleEffect(clickTag, 2);
    }
  }, []);
  return (
    <>
      <div
        id="cursor"
        className="fixed w-[20px] h-[20px] rounded-full bg-[#f48049] z-50 mix-blend-difference pointer-events-none top-0"
      ></div>
    </>
  );
}
