import React from "react";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";

export type ContactCardType = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  text: string;
};

export const contactCards: ContactCardType[] = [
  {
    title: "Email us",
    description: "Talk with our team through our business email",
    link: "mailto:fstaxoc@gmail.com",
    icon: <IoMdMail />,
    text: "fstaxoc@gmail.com",
  },
  {
    title: "Facebook page",
    description: "Talk with our team through our Facebook page",
    link: "https://www.facebook.com/fstaXoc",
    icon: <FaFacebook />,
    text: "facebook.com/fstaXoc",
  },
  {
    title: "Phone number",
    description: "Talk with our team through the provided number",
    link: "tel:+880886010238",
    icon: <FaPhoneAlt />,
    text: "01886010238",
  },
  {
    title: "Message us",
    description: "Talk with our team by directly messaging them",
    link: "mailto:fstaxoc@gmail.com",
    icon: <MdMessage />,
    text: "Message us",
  },
];
