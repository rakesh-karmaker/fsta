import Link from "next/link";
import React from "react";

type BtnProps = {
  children: React.ReactNode;
  href: string;
  onclick: () => void;
};

export function PrimaryBtnLink({ children, href }: Omit<BtnProps, "onclick">) {
  return (
    <Link href={href} className="primary-btn">
      {children}
    </Link>
  );
}
