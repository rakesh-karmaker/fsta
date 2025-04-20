import React from "react";
import { PrimaryBtnLink } from "@/components/btns";

export default function WeDo(): React.ReactNode {
  return (
    <section className="w-full flex gap-14 justify-between max-w-mx self-center [padding-top:9em!important] [padding-bottom:9em!important] max-xl:flex-col max-xl:items-center">
      <div className="flex flex-col gap-7 min-w-[27.75em] max-xl:text-center max-xl:items-center max-md:min-w-mx">
        <h2 className="text-6xl font-medium text-black max-w-[15ch]">What we do in our club</h2>
        <PrimaryBtnLink href="/contact">Contact</PrimaryBtnLink>
      </div>
      <p className="text-black-80 text-xl flex flex-col gap-6 max-w-[73ch] max-xl:max-w-mx max-xl:text-center ">
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
