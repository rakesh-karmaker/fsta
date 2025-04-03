import React from "react";
import HeroContainer from "../heroContainer";
import { PrimaryBtnLink, SecondaryBtnLink } from "../btns";

export default function Hero(): React.ReactNode {
  return (
    <HeroContainer image="white-dot.png" size="3" opacity="0.04">
      <HeroInfo />
    </HeroContainer>
  );
}

function HeroInfo(): React.ReactNode {
  return (
    <div className="flex flex-col gap-[1.5em] items-center">
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
