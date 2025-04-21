"use client";

import React from "react";
import { PrimaryBtnLink } from "@/components/btns";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/contexts/loadingContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WeDo(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    gsap.set(".we-do-left", { autoAlpha: 0, scale: 0.9 });
    gsap.set(".we-do-right > *", { autoAlpha: 0, y: 20 });

    if (loading) return null;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".we-do-left",
        },
      })
      .to(".we-do-left", {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(
        ".we-do-right > *",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.inOut",
        },
        "<"
      );
  }, [loading]);

  return (
    <section className="w-full flex gap-14 justify-between max-w-mx self-center [padding-top:9em!important] [padding-bottom:9em!important] max-xl:flex-col max-xl:items-center">
      <div className="we-do-left flex flex-col gap-7 min-w-[27.75em] max-xl:text-center max-xl:items-center max-md:min-w-mx">
        <h2 className="text-6xl font-medium text-black max-w-[15ch]">
          What we do in our club
        </h2>
        <PrimaryBtnLink href="/contact">Contact</PrimaryBtnLink>
      </div>
      <p className="we-do-right text-black-80 text-xl flex flex-col gap-6 max-w-[73ch] max-xl:max-w-mx max-xl:text-center ">
        <span>
          At FSTA, we spark curiosity and innovation in science and technology.
          Our club offers a space to explore ideas, conduct experiments, and
          stay updated on the latest advancements.
        </span>
        <span>
          Our Science Club fosters hands-on learning through experiments, fests,
          and olympiads, helping members develop critical thinking and a passion
          for discovery.
        </span>
        <span>
          Our Technology Club equips tech enthusiasts with coding workshops,
          hackathons, and projects, turning ideas into real-world innovations.
        </span>
      </p>
    </section>
  );
}
