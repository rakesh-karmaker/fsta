"use client";

import React from "react";
import HeroContainer from "../heroContainer";
import { PrimaryBtnLink, SecondaryBtnLink } from "../btns";
import HeroCardSwiper from "../swipers/heroCardSwiper";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/contexts/loadingContext";
import initHeroAnimation from "../animations/heroAnimation";

export default function Hero(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    initHeroAnimation(loading);
  }, [loading]);
  return (
    <HeroContainer
      image="white-dot.png"
      size="2.9"
      opacity="0.09"
      className="grid [grid-template-rows:1fr_335px] max-2xl:[grid-template-rows:1fr_290px] max-xl:[grid-template-rows:1fr_240px] max-lg:flex max-lg:flex-col max-lg:min-h-full gap-[3em] h-full justify-center"
    >
      <HeroInfo />
      <HeroCards />
      <HeroCardSwiper className="hidden max-lg:flex max-sm:hidden" />
    </HeroContainer>
  );
}

function HeroInfo(): React.ReactNode {
  return (
    <div className="hero-info flex flex-col gap-[1.5em] max-lg:gap-4 items-center flex-[1] justify-center max-lg:min-h-[calc(100vh_-_(var(--nav-height)_+_40px))] max-w-[var(--max-width)]">
      <h1 className="text-[5.5em]/[115%] max-xl:text-7xl font-medium text-center max-lg:text-6xl max-md:text-[2.95em]">
        Unveil the{" "}
        <span className="text-orange inline">
          Hidden <br /> Mysteries
        </span>{" "}
        with FSTA
      </h1>
      <p className="text-center text-[1.25em]/[150%] max-xl:text-[1em] max-w-[93ch] text-white-80 font-normal max-lg:text-[0.75em]">
        Here, we publicly focus on news, facts, and current events related to
        science and technology. You may discover an abundance of research papers
        and various materials on science and technology.
      </p>
      <div className="flex gap-[1em] flex-wrap">
        <PrimaryBtnLink
          href="/about"
          className="max-xl:text-[1.1em] max-lg:text-[0.9em]"
        >
          Learn more
        </PrimaryBtnLink>
        <SecondaryBtnLink
          href="https://www.facebook.com/fstaXoc"
          isPageLink={false}
          className="max-xl:text-[1.1em] max-lg:text-[0.9em]"
        >
          Join now
        </SecondaryBtnLink>
      </div>
    </div>
  );
}

function HeroCards(): React.ReactNode {
  const defaultStyle: string =
    "w-[295px] h-[335px] max-2xl:w-[250px] max-2xl:h-[290px] max-xl:w-[200px] max-xl:h-[240px] max-lg:w-[180px] max-lg:h-[220px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] max-lg:translate-0 max-lg:rotate-0 max-lg:rounded-[7px] max-g:hidden";

  return (
    <div
      className={
        "hero-cards justify-self-end flex-[1] flex items-end max-lg:flex-wrap max-lg:justify-around max-lg:gap-6 max-lg:hidden"
      }
    >
      <div
        className={
          defaultStyle +
          " " +
          "translate-y-[7em] translate-x-[6em] rotate-[-15deg] z-10"
        }
      ></div>
      <div
        className={
          defaultStyle +
          " " +
          "translate-y-[2em] translate-x-[4em] rotate-[-10deg] z-20"
        }
      ></div>
      <div className={defaultStyle + " " + "z-30"}></div>
      <div
        className={
          defaultStyle +
          " " +
          "translate-y-[2em] translate-x-[-4em] rotate-[10deg] z-20"
        }
      ></div>
      <div
        className={
          defaultStyle +
          " " +
          "translate-y-[7em] translate-x-[-6em] rotate-[15deg] z-10"
        }
      ></div>
    </div>
  );
}
