import Contact from "@/components/contact/contact";
import Faqs from "@/components/contact/faqs/faqs";
import ContactHero from "@/components/contact/hero";
import React from "react";

export default function ContactPage(): React.ReactNode {
  return (
    <main className="flex flex-col">
      <ContactHero />
      <section className="w-screen flex justify-center items-center bg-black [padding-top:9em!important] [padding-bottom:9em!important]">
        <Contact color="white" />
      </section>
      <Faqs />
    </main>
  );
}
