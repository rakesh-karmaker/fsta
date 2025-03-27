"use client";

import React, { useEffect, useState } from "react";
import { gsap, Expo, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

export default function PageLoading(): React.ReactNode {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter: number) => {
        if (counter < 100) {
          return counter + 1;
        } else {
          clearInterval(count);
          reveal();
          return counter;
        }
      });
    }, 10); // decreased from 15ms for quicker counter
  }, []);

  const reveal = (): void => {
    gsap
      .timeline({
        onComplete: () => {
          console.log("completed");
        },
      })
      .to(".follow", {
        width: "100%",
        duration: 0.8, // reduced from 1.2s
        delay: 0.4, // reduced from 0.7s
        ease: Expo.easeInOut,
      })
      .to(".hide", {
        opacity: 0,
        duration: 0.2, // reduced from 0.3s
      })
      .to(".hide", {
        display: "none",
        duration: 0.2, // reduced from 0.3s
      })
      .to(".follow", {
        height: "100%",
        duration: 0.5, // reduced from 0.7s
        delay: 0.3, // reduced from 0.5s
        ease: Expo.easeInOut,
      })
      .to(".page-loading", {
        x: "100%",
        duration: 0.5, // reduced from 0.7s
        ease: Expo.easeInOut,
      })
      .set(".page-loading", { display: "none" });
  };

  return (
    <div className="fixed top-0 w-screen h-screen align-center bg-black z-50 page-loading">
      <div className="w-full h-full bg-black flex justify-center items-center">
        <div className="absolute bg-[#f48049] h-[2px] w-0 left-0 z-[99] follow"></div>
        <div
          className="absolute left-0 bg-white transition-all duration-[0.4s] ease-out w-0 h-[2px] hide"
          style={{ width: `${counter}%` }}
        ></div>
        <div className="absolute text-[130px] text-white font-[500] hide">
          {counter}%
        </div>
      </div>
    </div>
  );
}
