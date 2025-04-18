"use client";

import { partners } from "@/services/data/partners";
import Image from "next/image";
import React from "react";
import "./partners.css";
import { useLoading } from "@/contexts/loadingContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Partners(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    gsap.set(".partners-container > *", { autoAlpha: 0, y: 30 });
    if (loading) return null;
    gsap.to(".partners-container > *", {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".partners-container",
      },
    });
  }, [loading]);
  return (
    <section className="partners-container flex flex-col items-center gap-[2.875em]">
      <h2 className="text-[4em]/[100%] text-black max-w-mx text-center max-md:text-[2.9em]">
        We have <span className="text-orange">Partnered</span> with
      </h2>
      <div className="partners-container w-screen overflow-hidden inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_white_1028px,_white_calc(100%-1028px),transparent_100%)]">
        <ul className="partners flex gap-12 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
          <Logos />
        </ul>
        <ul className="partners flex gap-12 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
          <Logos />
        </ul>
      </div>
    </section>
  );
}

function Logos() {
  return partners.map((partner) => {
    return (
      <li key={partner.name + Math.random()} className="partner">
        <Image
          src={"/logos/" + partner.image}
          alt={partner.name}
          width={150}
          height={150}
          className="partner-image"
        />
      </li>
    );
  });
}
