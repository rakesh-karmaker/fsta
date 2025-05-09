"use client";

import React from "react";
import HeroContainer from "@/components/heroContainer";
import { SecondaryBtnLink } from "../btns";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/contexts/loadingContext";
import initAboutHeroAnimation from "../animations/aboutHeroAnimation";

export default function AboutHero(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    initAboutHeroAnimation(loading);
  }, [loading]);

  return (
    <HeroContainer
      image="white-dot.png"
      size="2.9"
      opacity="0.09"
      className="flex justify-center items-center [padding-bottom:var(--nav-height)!important]"
    >
      <div className="flex flex-col gap-1 justify-center text-center max-w-mx">
        <p className="about-text text-2xl text-white-60 max-lg:text-xl max-md:text-[1em]">
          About us
        </p>
        <div className="about-hero flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-[5.5em]/[120%] max-w-[24ch] max-xl:text-[4.5em] max-lg:text-[3.5em] max-md:text-[3em] max-sm:text-[2.5em]">
              We are <span className="text-orange">FSTA</span>. A online <br />{" "}
              science and technology club
            </h1>
            <p className="text-[1.1em]/[170%] text-white-80 max-w-[115ch] max-xl:text-[1em] max-lg:text-[0.9em]">
              FSTA empowers youth to lead the charge. Stay updated on
              cutting-edge advancements through our initiatives, fostering a
              deep love for science and technology. Dive into the world of
              science through our engaging fests and Olympiads, or explore the
              realms of technology with our dynamic Technology Club.
            </p>
          </div>
          <div>
            <SecondaryBtnLink
              href="https://www.facebook.com/fstaXoc"
              className="[font-size:1.4em!important] max-xl:[font-size:1.1em!important]"
            >
              Join now
            </SecondaryBtnLink>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
