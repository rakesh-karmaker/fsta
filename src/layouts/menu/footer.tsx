import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer(): React.ReactNode {
  return (
    <footer className="w-screen flex flex-col items-center gap-[3.75em] bg-black [padding:2.875em_0em_!important]">
      <FooterUpper />
    </footer>
  );
}

function FooterUpper(): React.ReactNode {
  return (
    <div className="flex justify-between gap-9">
      <div className="flex flex-col gap-4">
        <Image src={"/logo.png"} alt="FSTA logo" width={100} height={100} />
        <div className="flex flex-col gap-5">
          <h3 className="text-[1.8125em] font-medium">
            Frontier Science And Tech Alliance - FSTA
          </h3>
          <p className="text-white-80">
            Where we publicly focus on news, facts, and current events related
            to science and technology
          </p>
        </div>
      </div>
      <div className="w-full max-w-[28.125em] gap-5 justify-between">
        <div className="flex flex-col gap-[2.5625em]">
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
        <div className="flex flex-col gap-[2.5625em]">
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
                href={"tel:+8801756170957"}
                className="text-white-80 duration-500 hover:text-white"
              >
                (880) 1756-170957
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
