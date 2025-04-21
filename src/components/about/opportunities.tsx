"use client";

import { useLoading } from "@/contexts/loadingContext";
import { opportunities, OpportunityType } from "@/services/data/opportunities";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Opportunities(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    gsap.set(".opportunities-text", { autoAlpha: 0 });
    gsap.set(".opportunities > div", { autoAlpha: 0, scale: 0.9 });

    if (loading) return null;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".opportunities-text",
        },
      })
      .to(".opportunities-text", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(".opportunities > div", {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.2,
      });
  }, [loading]);
  return (
    <section className="w-full flex justify-center items-center [padding-top:max(6vw,_75px)!important] [padding-bottom:max(6vw,_75px)!important] bg-[#FBFDFF]">
      <div className="w-full max-w-mx flex flex-col gap-[4.4375em] items-center">
        <h2 className="opportunities-text text-[4.4375em]/[130%] text-black font-medium max-w-[20ch] text-center max-lg:text-[3.5em] max-md:text-[2.5em]">
          Explore the Opportunities We Offer
        </h2>
        <div className="opportunities w-full max-w-mx grid grid-cols-2 gap-12 max-md:grid-cols-1">
          {opportunities.map((opportunity) => {
            return (
              <Opportunity
                key={opportunity.title}
                opportunity={opportunity as OpportunityType}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Opportunity({ opportunity }: { opportunity: OpportunityType }) {
  return (
    <div className="w-full h-auto [padding:2em!important] bg-white flex flex-col gap-4 rounded-[7px]">
      <div
        className={
          opportunity.bgColor +
          ` w-[85px] h-[85px] flex justify-center items-center rounded-[5px] text-6xl`
        }
      >
        {opportunity.icon}
      </div>
      <div className="flex flex-col gap-[0.2em]">
        <p className={opportunity.textColor + ` text-[15px]`}>
          {opportunity.subtitle}
        </p>
        <div className="flex flex-col">
          <h3 className="text-black text-[1.6em]">{opportunity.title}</h3>
          <p className="text-black-80">{opportunity.text}</p>
        </div>
      </div>
    </div>
  );
}
