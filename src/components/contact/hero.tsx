"use client";

import React from "react";
import HeroContainer from "../heroContainer";
import { contactCards } from "@/services/data/contactCards";
import { useLoading } from "@/contexts/loadingContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ContactHero(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    gsap.set(".contact-hero-text > *", { autoAlpha: 0, y: 50 });
    gsap.set(".contact-cards > div", { autoAlpha: 0, y: 50 });

    if (loading) return;

    gsap
      .timeline()
      .to(".contact-hero-text > *", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
      })
      .to(".contact-cards > div", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
      });
  }, [loading]);
  return (
    <HeroContainer
      image="black-box.png"
      size="2.6"
      opacity="0.06"
      isBlack={false}
      className="w-full max-w-mx flex flex-col gap-20 justify-center items-center [padding:70px_0!important]"
    >
      <div className="contact-hero-text flex flex-col gap-1 text-center">
        <h1 className="text-black text-[4.3125em] font-medium max-lg:text-[3em]/[120%]">
          Contact our <span className="text-orange">friendly team</span>
        </h1>
        <p className="text-black-80 text-2xl">Let us know how we can help</p>
      </div>
      <HeroCards />
    </HeroContainer>
  );
}

function HeroCards(): React.ReactNode {
  return (
    <div className="w-full max-w-mx flex justify-around flex-wrap gap-5.5 items-center contact-cards">
      {contactCards.map((card) => {
        return (
          <div
            key={card.title}
            className="w-[22.5em] h-[22.1875em] rounded-md [padding:40px!important] flex flex-col justify-between bg-pure-white [box-shadow:_rgba(0,0,0,0.16)_0px_1px_4px;]"
          >
            <div className="[box-shadow:_rgba(0,0,0,0.16)_0px_1px_4px;] rounded-lg flex justify-center items-center text-black text-4xl [padding:17px!important] max-w-fit">
              {card.icon}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-[1.8125em]">{card.title}</p>
              <div className="flex flex-col gap-1.5">
                <p className="text-black-80">{card.description}</p>
                <a href={card.link} className="text-blue">
                  {card.text}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
