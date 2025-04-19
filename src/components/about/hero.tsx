import React from "react";
import HeroContainer from "@/components/heroContainer";
import { SecondaryBtnLink } from "../btns";

export default function AboutHero(): React.ReactNode {
  return (
    <HeroContainer
      image="white-dot.png"
      size="2.9"
      opacity="0.09"
      className="flex justify-center items-center [padding-bottom:var(--nav-height)!important]"
    >
      <div className="flex flex-col gap-1 justify-center text-center">
        <p className="text-2xl text-white-60">About us</p>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-[5.5em]/[120%] max-w-[24ch]">
              We are <span className="text-orange">FSTA</span>. A online <br /> science
              and technology club
            </h1>
            <p className="text-[1.1em]/[170%] text-white-80 max-w-[115ch]">
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
              className="[font-size:1.4em!important]"
            >
              Join now
            </SecondaryBtnLink>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
