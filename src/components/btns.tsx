import Link from "next/link";
import React from "react";

type BtnProps = {
  children: React.ReactNode;
  href: string;
  isPageLink?: boolean;
  onClick: () => void;
  className?: string;
};

export function PrimaryBtnLink({
  children,
  href,
  isPageLink = true,
}: Omit<BtnProps, "onClick">) {
  return (
    <BtnLink
      href={href}
      isPageLink={isPageLink}
      className="bg-orange text-black"
    >
      {children}
    </BtnLink>
  );
}

export function SecondaryBtnLink({
  children,
  href,
  isPageLink = true,
}: Omit<BtnProps, "onClick">) {
  return (
    <BtnLink
      href={href}
      isPageLink={isPageLink}
      className="bg-white text-black"
    >
      {children}
    </BtnLink>
  );
}

// main button component
export function PrimaryButton({ children, onClick }: Omit<BtnProps, "href">) {
  return (
    <button
      className="btn w-fit h-fit text-[1.25em] font-medium [padding:0.4em_1.2em!important] bg-orange text-black rounded-[3px] cursor-pointer btn border-none outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// main link component
function BtnLink({
  children,
  className,
  href,
  isPageLink,
}: Omit<BtnProps, "onClick">) {
  const linkClassName: string = `btn w-fit h-fit text-[1.25em] font-medium [padding:0.4em_1.2em!important] rounded-[3px] cursor-pointer clickable ${className}`;

  return isPageLink ? (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  ) : (
    <a href={href} className={linkClassName}>
      {children}
    </a>
  );
}
