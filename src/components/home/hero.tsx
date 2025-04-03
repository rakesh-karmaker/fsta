import React from "react";
import HeroContainer from "../heroContainer";
import { PrimaryBtnLink, SecondaryBtnLink } from "../btns";

export default function Hero(): React.ReactNode {
  return (
    <HeroContainer
      image="white-dot.png"
      size="2.9"
      opacity="0.09"
      className="grid [grid-template-rows:1fr_335px] gap-[1em] h-screen min-h-full"
    >
      <HeroInfo />
      <HeroCards />
    </HeroContainer>
  );
}

function HeroCards(): React.ReactNode {
  return (
    <div className="justify-self-end flex-[1] flex items-end">
      <div className="w-[295px] h-[335px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] translate-y-[7em] translate-x-[6em] rotate-[-15deg] z-10"></div>
      <div className="w-[295px] h-[335px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] translate-y-[2em] translate-x-[4em] rotate-[-10deg] z-20"></div>
      <div className="w-[295px] h-[335px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] z-30"></div>
      <div className="w-[295px] h-[335px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] translate-y-[2em] translate-x-[-4em] rotate-[10deg] z-20"></div>
      <div className="w-[295px] h-[335px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] translate-y-[7em] translate-x-[-6em] rotate-[15deg] z-10"></div>
    </div>
  );
}

function HeroInfo(): React.ReactNode {
  return (
    <div className="flex flex-col gap-[1.5em] items-center flex-[1] justify-center">
      <h1 className="text-[5.5em]/[115%] font-medium text-center">
        Unveil the{" "}
        <span className="text-orange inline">
          Hidden <br /> Mysteries
        </span>{" "}
        with FSTA
      </h1>
      <p className="text-center text-[1.25em]/[150%] max-w-[93ch] text-white-80 font-normal">
        Here, we publicly focus on news, facts, and current events related to
        science and technology. You may discover an abundance of research papers
        and various materials on science and technology.
      </p>
      <div className="flex gap-[1em]">
        <PrimaryBtnLink href="/about">Learn more</PrimaryBtnLink>
        <SecondaryBtnLink
          href="https://www.facebook.com/fstaXoc"
          isPageLink={false}
        >
          Join now
        </SecondaryBtnLink>
      </div>
    </div>
  );
}

function HeroBall(): React.ReactNode {
  return (
    <div
      className="w-full h-full absolute bottom-0 left-0 z-[5]"
      style={{
        backgroundImage: `url('/Ellipse-45.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    ></div>
  );
}
