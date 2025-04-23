import Image from "next/image";
import React from "react";

export default function AboutFSTA(): React.ReactNode {
  return (
    <section className="about-fsta w-full flex justify-center items-center [padding-top:max(6vw,_75px)!important] [padding-bottom:max(6vw,_75px)!important]">
      <div className="w-full max-w-mx flex gap-12 max-xl:flex-col-reverse">
        <Image
          src="/about-image.png"
          width={900}
          height={900}
          alt="about fsta"
          className="w-full max-w-[48.75em] min-w-[35em] h-full max-xl:max-w-mx max-xl:min-w-mx"
        />
        <div className="flex flex-col gap-10 max-w-[53em] max-xl:max-w-mx">
          <h2 className="text-6xl text-black font-medium">Who are we?</h2>
          <p className="flex flex-col gap-4 text-black-80 text-[1.1875em]">
            <span>
              At FSTA, we are a passionate community of science and technology
              enthusiasts driven by curiosity and innovation. Our mission is to
              inspire and empower the next generation of scientists, engineers,
              and tech leaders through hands-on learning and collaboration.
            </span>
            <span>
              We bring together like-minded individuals who share a love for
              discovery, experimentation, and problem-solving. Whether you&apos;re
              fascinated by the mysteries of the universe or eager to build the
              next technological breakthrough, FSTA provides the resources and
              opportunities to fuel your passion.
            </span>
            <span>
              From engaging science experiments to cutting-edge tech projects,
              we create a dynamic environment where members can learn, grow, and
              contribute to the ever-evolving world of science and technology.
              At FSTA, knowledge meets action, and ideas turn into reality.
            </span>
          </p>
          <AboutList />
        </div>
      </div>
    </section>
  );
}

function AboutList() {
  const lists = [
    "A passionate community of science and tech enthusiasts collaborating and learning together.",
    "Exciting events like fests, olympiads, and hackathons to challenge and inspire members.",
    "Skill development in critical thinking, problem-solving, and technical expertise.",
    "Real-world impact by turning innovative ideas into practical solutions.",
  ];

  return (
    <div className="flex flex-col gap-5 text-black-80 text-[1.1875em]">
      {lists.map((list, index) => (
        <p key={index} className="about-list flex gap-2">
          <span className="w-[0.8em] h-[0.8em] aspect-square bg-orange rounded-full [margin-top:7px!important]"></span>
          <span>{list}</span>
        </p>
      ))}
    </div>
  );
}
