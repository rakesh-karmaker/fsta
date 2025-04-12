"use client";

import React, { useEffect, useState, useCallback } from "react";
import { gsap, Expo, CSSPlugin } from "gsap";
import { useLoading } from "@/contexts/loadingContext";
gsap.registerPlugin(CSSPlugin);

export default function PageLoading(): React.ReactNode {
  const { setLoading, loading } = useLoading();
  const [counter, setCounter] = useState(0);

  const reveal = useCallback((): void => {
    gsap
      .timeline({
        onComplete: () => {
          setLoading(false);
        },
      })
      .to(".follow", {
        width: "100%",
        duration: 0.8,
        delay: 0.4,
        ease: Expo.easeInOut,
      })
      .to(".hide", {
        opacity: 0,
        duration: 0.2,
      })
      .to(".hide", {
        display: "none",
        duration: 0.2,
      })
      .to(".follow", {
        height: "100%",
        duration: 0.5,
        delay: 0.3,
        ease: Expo.easeInOut,
      })
      .to(".page-loading", {
        x: "100%",
        duration: 0.5,
        ease: Expo.easeInOut,
      })
      .set(".page-loading", { display: "none" });
  }, [setLoading]);

  useEffect(() => {
    if (!loading) return;
    const count = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(count);
          reveal();
          return prev;
        }
      });
    }, 10);
    return () => clearInterval(count);
  }, [loading, reveal]);

  if (!loading) return <></>;

  return (
    <div className="fixed top-0 w-screen h-screen align-center bg-black z-[9999] page-loading">
      <div className="w-full h-full bg-black flex justify-center items-center">
        <div className="absolute bg-[#f48049] h-[2px] w-0 left-0 z-[99] follow"></div>
        <div
          className="absolute left-0 bg-white transition-all duration-[0.4s] ease-out w-0 h-[2px] hide"
          style={{ width: `${counter}%` }}
        ></div>
        <div className="absolute text-[130px] max-lg:text-6xl text-white font-[500] hide">
          {counter}%
        </div>
      </div>
    </div>
  );
}
