"use client"

import { useLoading } from "@/contexts/loadingContext";
import Scrambler from "@/utils/scrambler";
import SocialIcons from "../ui/socialIcons/socialIcons";
import ContactForm from "../forms/contact/contactForm";
import "./contact.css";

export default function Contact({color}: {
  color: "black" | "white";
}) {
  return (
    <div className="contact">
      <ContactInfo color={color} />
      <ContactForm />
    </div>
  );
}


const ContactInfo = ({color} : {
  color: "black" | "white";
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
          />
        </h2>
        <p className="contact-text">
          It is very important for us to keep in touch with you, so we are always
          ready to answer any question that interests you.
        </p>
        <SocialIcons bg="black" />
      </div>
    );
  };