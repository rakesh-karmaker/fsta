"use client";

import React, { useEffect, useRef, useState } from "react";
import { PrimaryBtnLink, SecondaryBtnLink } from "../../btns";
import { DepartmentType, departments } from "@/services/data/departments";
import { useGSAP } from "@gsap/react";
import {
  initDepartmentAnimations,
  initDepartmentImageAnimations,
} from "../../animations/departmentAnimation";
import Image from "next/image";
import "./departments.css";
import Banner from "../banner/banner";
import { useLoading } from "@/contexts/loadingContext";

export default function Departments(): React.ReactNode {
  const [index, setIndex] = useState<number>(0);
  const { loading } = useLoading();
  useGSAP(() => {
    initDepartmentAnimations(loading);
  }, [loading]);
  return (
    <section className="bg-black [padding-top:max(6vw,_75px)!important] [padding-bottom:max(8vw,_100px)!important] flex flex-col gap-[6em] max-md:gap-[3.5em] justify-center items-center">
      <div className="w-full max-w-[var(--max-width)] flex flex-col gap-[3.0625em]">
        <h2 className="dpt-heading text-[3.775em]/[120%] font-medium max-w-[20ch] max-md:text-[2.9em]">
          Unveil the Five Core Departments of Our Club
        </h2>
        <div className="flex gap-[7.1875em]">
          <article className="flex flex-col justify-between gap-[9.0625em] max-w-[835px] max-lg:max-w-full">
            <DepartmentsUpper />
            <DepartmentsLower index={index} setIndex={setIndex} />
          </article>
          <DepartmentImg index={index} />
        </div>
      </div>
      <Banner />
    </section>
  );
}

function DepartmentsUpper(): React.ReactNode {
  return (
    <div className="dpt-upper flex flex-col gap-[1.75em]">
      <p className="text-white-80 text-[1.1em]/[190%] max-md:text-[1em]">
        Unveiling our five core departments, each driving innovation in science.
        From research to hands-on discovery, explore physics, chemistry,
        biology, astronomy, and engineering—where passion meets progress.
      </p>
      <div className="flex gap-[1.5em] flex-wrap">
        <PrimaryBtnLink href="https://www.facebook.com/fstaXoc" isPageLink={false}>
          Join now
        </PrimaryBtnLink>

        <SecondaryBtnLink href="/about">Learn more</SecondaryBtnLink>
      </div>
    </div>
  );
}

function DepartmentsLower({
  index,
  setIndex,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}): React.ReactNode {
  const [canSnap, setCanSnap] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 1024 && canSnap) {
      const department = document.getElementById(
        departments[index].id.toString() || ""
      );
      setTimeout(() => {
        department?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (department) department.style.scrollMarginTop = "100px";
      }, 250);
    }
  }, [index, canSnap]);

  return (
    <div className="department-list">
      {departments.map((department, i) => (
        <Department
          key={i}
          department={department}
          index={index}
          setIndex={setIndex}
          elemIndex={i}
          setCanSnap={setCanSnap}
          canSnap={canSnap}
        />
      ))}
    </div>
  );
}

const DepartmentImg = ({ index }: { index: number }) => {
  const [imageSrc, setImageSrc] = useState(
    "/departments/" + departments[0].image
  );
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Preload images
    departments.forEach((department) => {
      const img = new window.Image(0, 0);
      img.src = "/departments/" + department.image;
    });
  }, []);

  // add an animation to the image when the index changes
  useGSAP(() => {
    initDepartmentImageAnimations(index, setImageSrc, imgRef);
  }, [index]);

  return (
    <Image
      ref={imgRef}
      src={imageSrc}
      alt={departments[index].title}
      className={
        "department-img w-full rounded-xl object-cover bg-center min-w-[425px] max-lg:hidden"
      }
      height={700}
      width={740}
    />
  );
};

const Department = ({
  department,
  index,
  setIndex,
  elemIndex,
  canSnap,
  setCanSnap,
}: {
  department: DepartmentType;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  elemIndex: number;
  canSnap: boolean;
  setCanSnap: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={"department" + (index === elemIndex ? " active" : "")}
      onClick={() => {
        setIndex(elemIndex);
        if (!canSnap) {
          setCanSnap(true);
        }
      }}
    >
      <div className="department-info" id={department.id.toString()}>
        <h3 className="department-name clickable">{department.title}</h3>
        <div className="wrapper">
          <div className="inner">
            <p className="department-description">{department.description}</p>
            <Image
              src={"/departments/" + department.image}
              alt={department.title}
              className="department-img hidden max-lg:block"
              height={800}
              width={900}
            />
          </div>
        </div>
      </div>
      <ProgressBar
        index={index}
        elemIndex={elemIndex}
        setIndex={setIndex}
        canSnap={canSnap}
        setCanSnap={setCanSnap}
      />
    </div>
  );
};

const ProgressBar = ({
  index,
  setIndex,
  elemIndex,
  canSnap,
  setCanSnap,
}: {
  index: number;
  elemIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  canSnap: boolean;
  setCanSnap: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [width, setWidth] = useState<number>(0);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (index !== elemIndex) {
      setWidth(0);
      return;
    }

    let progressInterval: NodeJS.Timeout | undefined;

    const handleComplete = () => {
      setWidth(0);
      setTimeout(() => {
        setIndex(index === departments.length - 1 ? 0 : index + 1);
        if (!canSnap) {
          setCanSnap(true);
        }
      }, 0);
    };

    const currentRef = progressBarRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && index === elemIndex) {
            progressInterval = setInterval(() => {
              setWidth((prevWidth) => {
                if (prevWidth >= 100) {
                  clearInterval(progressInterval);
                  handleComplete();
                  return prevWidth;
                }
                return prevWidth + 1;
              });
            }, 75);
          } else {
            clearInterval(progressInterval);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearInterval(progressInterval);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index, elemIndex, canSnap, setCanSnap, setIndex]);

  return (
    <div className="progress-bars" ref={progressBarRef}>
      <div className="progress-bg"></div>
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};
