"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MenuOverlay from "./menuOverlay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type MenuLinks = {
  name: string;
  url: string;
};

const menuLinks: MenuLinks[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Executives", url: "/executives" },
  { name: "Contact", url: "/contact" },
];

export default function Menu(): React.ReactNode {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      gsap.set(".menu-overlay", { y: "-100%" });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          y: 0,
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container text-[1.1em]" ref={container}>
      <div className="menu-bar fixed top-0 left-0 w-screen [padding:2em!important] flex justify-between items-center z-10">
        <div className="menu-logo">
          <Link href={"/"} className="text-white cursor-pointer">
            FSTA
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="text-white cursor-pointer clickable">Menu</p>
        </div>
      </div>
      <MenuOverlay menuLinks={menuLinks} toggleMenu={toggleMenu} />
    </div>
  );
}
