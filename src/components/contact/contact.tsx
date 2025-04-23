"use client";

import { useLoading } from "@/contexts/loadingContext";
import Scrambler from "@/utils/scrambler";
import SocialIcons from "../ui/socialIcons/socialIcons";
import ContactForm from "../forms/contact/contactForm";
import "./contact.css";
import { useGSAP } from "@gsap/react";
import initContactAnimations from "../animations/contaciAnimation";
import React, { useState } from "react";

export default function Contact({ color }: { color: "black" | "white" }) {
  const [completed, setCompleted] = useState<boolean>(false);
  useGSAP(() => {
    initContactAnimations(completed);
  }, [completed]);
  return (
    <div className="contact">
      <ContactInfo color={color} setComplete={setCompleted} />
      <ContactForm />
    </div>
  );
}

const ContactInfo = ({
  color,
  setComplete,
}: {
  color: "black" | "white";
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { loading } = useLoading();
  return (
    <div className="contact-info">
      <p className="contact-subtitle">Contact me</p>
      <h2 className="contact-title">
        <Scrambler
          text="Get In Touch"
          canRun={!loading}
          speed={40}
          color={color}
          setCompleted={setComplete}
        />
      </h2>
      <p
        className={
          "contact-text " + (color === "white" ? "text-white" : "text-black-80")
        }
      >
        It is very important for us to keep in touch with you, so we are always
        ready to answer any question that interests you.
      </p>
      <SocialIcons bg="black" />
    </div>
  );
};
