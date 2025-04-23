"use client"

import initFooterAnimation from "@/components/animations/footerAnimation";
import SocialIcons from "@/components/ui/socialIcons/socialIcons";
import { useLoading } from "@/contexts/loadingContext";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer(): React.ReactNode {
  const { loading } = useLoading();
  useGSAP(() => {
    initFooterAnimation(loading);
  }, [loading]);
  return (
    <footer className="w-screen flex flex-col items-center gap-[3.75em] bg-black [padding:2.875em_0em_!important]">
      <FooterUpper />
      <FooterLower />
    </footer>
  );
}

function FooterUpper(): React.ReactNode {
  return (
    <div className="footer-upper flex justify-between gap-9 w-full max-w-mx max-md:flex-col">
      <div className="flex flex-col gap-4">
        <Image
          src={"/logo.png"}
          alt="FSTA logo"
          width={100}
          height={100}
          className="w-[3.625em] h-[3.625em]"
        />
        <div className="flex flex-col gap-5">
          <h3 className="text-[2em]/[140%] font-medium max-w-[25ch] max-md:text-[1.7em]">
            Frontier Science And Tech Alliance - FSTA
          </h3>
          <p className="text-white-80 max-w-[50ch] text-[1.2em] max-md:text-[1em]">
            Where we publicly focus on news, facts, and current events related
            to science and technology
          </p>
        </div>
      </div>
      <div className="w-full max-w-[28.125em] max-lg:w-auto flex gap-15 justify-between max-md:gap-9 max-md:flex-wrap">
        <div className="flex flex-col gap-[1.6em]">
          <p className="text-[1.75em] font-bold">Pages</p>
          <div className="flex flex-col gap-3">
            <Link
              href={"/"}
              className="text-white-80 duration-500 hover:text-white"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-white-80 duration-500 hover:text-white"
            >
              About us
            </Link>
            <Link
              href={"/executives"}
              className="text-white-80 duration-500 hover:text-white"
            >
              Executives
            </Link>
            <Link
              href={"/contact"}
              className="text-white-80 duration-500 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[1.6em]">
          <p className="text-[1.75em] font-bold">Contact us</p>
          <div className="flex flex-col gap-3">
            <p className="flex flex-col gap-2.5">
              <span className="text-[1.375em]">Email</span>
              <Link
                href={"mailto:fstaxoc@gmail.com"}
                className="text-white-80 duration-500 hover:text-white"
              >
                fstaxoc@gmail.com
              </Link>
            </p>
            <p className="flex flex-col gap-2.5">
              <span className="text-[1.375em]">Phone</span>
              <Link
                href={"tel:+880886010238"}
                className="text-white-80 duration-500 hover:text-white"
              >
                (880) 1886-010238
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLower(): React.ReactNode {
  const year = new Date().getFullYear();

  return (
    <div className="footer-lower w-full max-w-mx flex justify-between items-center gap-9 [padding-top:2.875em!important] border-t-1 border-white-60 max-sm:flex-wrap">
      <p className="text-white-80">
        © {year} FSTA - All rights reserves - Designed by{" "}
        <Link
          href={"https://rakesh-karmaker.netlify.app/"}
          className="text-white-60 duration-500 hover:text-white"
        >
          Rakesh
        </Link>
      </p>
      <SocialIcons />
    </div>
  );
}
