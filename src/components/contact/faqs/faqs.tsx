"use client";

// import { faqsList } from "@/services/data";
import { FaPlus } from "react-icons/fa6";

import "./faqs.css";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import initFaqAnimations from "@/components/animations/faqAnimations";
import { useLoading } from "@/contexts/loadingContext";
import { faqList, FaqType } from "@/services/data/faqList";

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState<number>(-1);
  const { loading } = useLoading();

  useGSAP(() => {
    initFaqAnimations(loading);
  }, [loading]);

  return (
    <section className="faqs-section section" id="faqs">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <FaqsContainer activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
    </section>
  );
};

const FaqsContainer = ({
  activeFaq,
  setActiveFaq,
}: {
  activeFaq: number;
  setActiveFaq: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="faqs-container">
      <div className="faqs">
        {faqList.slice(0, 3).map((faq, index) => {
          return (
            <Faq
              faq={faq}
              key={faq.question}
              index={index}
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          );
        })}
      </div>
      <div className="faqs">
        {faqList.slice(3).map((faq, index) => {
          return (
            <Faq
              faq={faq}
              key={faq.question}
              index={index + 3}
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          );
        })}
      </div>
    </div>
  );
};

const Faq = ({
  faq,
  index,
  activeFaq,
  setActiveFaq,
}: {
  faq: FaqType;
  index: number;
  activeFaq: number;
  setActiveFaq: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      className={"faq clickable" + (index === activeFaq ? " open" : "")}
      onClick={() => {
        if (index === activeFaq) {
          setActiveFaq(-1);
        } else {
          setActiveFaq(index);
        }
      }}
    >
      <p className="question">
        {faq.question}{" "}
        <span className="plus">
          <FaPlus />
        </span>
      </p>
      <div className="answer-container">
        <p className="answer">{faq.answer}</p>
      </div>
    </div>
  );
};

export default Faqs;
