"use client";

import React from "react";
import HeroContainer from "@/components/heroContainer";
import { PrimaryBtnLink, SecondaryBtnLink } from "../btns";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/contexts/loadingContext";
import initAboutHeroAnimation from "../animations/aboutHeroAnimation";

export default function ExecutivesHero(): React.ReactNode {
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
        <p className="about-text text-xl text-white-60 max-lg:text-xl max-md:text-[1em]">
          Executives
        </p>
        <div className="about-hero flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-[4.3125em]/[120%] max-w-[30ch] max-xl:text-[4em] max-lg:text-[3.5em] max-md:text-[3em] max-sm:text-[2.5em]">
              We’ve got an <span className="text-orange">entire team</span>{" "}
              dedicated for supporting you and your learning
            </h1>
            <p className="text-[1.1em]/[170%] text-white-80 max-w-[115ch] max-xl:text-[1em] max-lg:text-[0.9em]">
              Our dedicated executive team is here to guide, support, and
              empower you on your learning journey. From organizing events to
              providing mentorship, they work tirelessly to create an engaging
              environment where innovation thrives. At FSTA, you’re part of a
              community that believes in your potential and is committed to
              helping you succeed.
            </p>
          </div>
          <div>
            <div className="flex gap-4 flex-wrap">
              <PrimaryBtnLink
                href="/about"
                className="[font-size:1.2em!important] max-xl:[font-size:1.1em!important]"
              >
                Learn more
              </PrimaryBtnLink>
              <SecondaryBtnLink
                href="https://www.facebook.com/fstaXoc"
                className="[font-size:1.2em!important] max-xl:[font-size:1.1em!important]"
              >
                Join now
              </SecondaryBtnLink>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
