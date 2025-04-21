"use client";

import { executives } from "@/services/data/executives";
import { ExecutiveType } from "@/services/data/executives";
import React from "react";
import "./styles.css";
import { useLoading } from "@/contexts/loadingContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Executives(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    gsap.set(".executives > h2", { autoAlpha: 0, y: 20 });
    if (loading) return null;
    gsap.to(".executives > h2", {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".executives > h2",
      },
    });
    gsap.utils.toArray(".executive-card").forEach((card, i) => {
      gsap.fromTo(
        card as Element,
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as Element,
            start: "top 90%",
          },
        }
      );
    });
  }, [loading]);
  return (
    <section className="w-full flex justify-center items-center">
      <div className="executives w-full max-w-mx flex flex-col gap-16 [padding-top:max(6vw,_75px)!important] [padding-bottom:max(6vw,_75px)!important]">
        <h2 className="text-black text-6xl text-center">
          Meet our amazing team
        </h2>
        <div className="flex flex-wrap gap-10 justify-around">
          {executives.map((executive) => {
            return <Executive key={executive.name} executive={executive} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Executive({ executive }: { executive: ExecutiveType }) {
  return (
    <div
      className="w-[23.75em] h-[27.5em] flex items-end [padding:26px!important] rounded-lg executive-card"
      style={{
        backgroundImage: `url(/executives/${executive.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full min-h-[7.5em] h-fit bg-pure-white flex flex-col justify-center [padding:1em!important] rounded-md">
        <h3 className="text-black text-[1.275em] font-medium">
          {executive.name}
        </h3>
        <p className="text-black-70 text-[1.15em]">{executive.position}</p>
      </div>
    </div>
  );
}
