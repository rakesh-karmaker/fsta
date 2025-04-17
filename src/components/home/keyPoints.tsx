"use client";

import { useLoading } from "@/contexts/loadingContext";
import { keyPoints } from "@/services/data/keyPoints";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function KeyPoints(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    gsap.set(".key-points > div", {
      autoAlpha: 0,
      y: 30,
    });

    if (loading) return null;

    gsap.to(".key-points > div", {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      ease: "power3.out",
      duration: 0.8,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".key-points",
      },
    });
  }, [loading]);
  return (
    <div className="key-points w-full max-w-[var(--max-width)] flex gap-[37px] justify-around items-center self-center [padding-top:9em!important] [padding-bottom:9em!important] flex-wrap">
      {keyPoints.map((point) => {
        return (
          <div
            className="point w-[300px] h-[390px] grid [grid-template-rows:1fr_114px] bg-white rounded-md text-black hover:bg-black hover:text-white transition-all duration-300"
            key={point.index}
          >
            <div className="upper-part border-b-white-70 border-b-1 [padding:30px!important] flex flex-col justify-between">
              <p className="text-[1.25em]">{point.index}</p>
              <p className="text-[1.4375em]">{point.title}</p>
            </div>
            <div className="lower-part flex items-center [padding:30px!important]">
              <p className="text-[3.875em]">{point.number}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
