"use client";

import { useState, useEffect, useRef } from "react";

const Scrambler = ({
  text,
  speed = 55,
  canRun = true,
  color = "black",
  ...rest
}: {
  text: string;
  speed?: number;
  canRun?: boolean;
  color?: "black" | "white";
  setCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentText, setCurrentText] = useState("");
  const scramblerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const letters = "abcdefghijklmnopqrstuvwxyz";

  

  const { setCompleted } = rest;
  
  useEffect(() => {
    if (!inView || !canRun) return;
    let iterations = 0;
    const interval = setInterval(() => {
      setCurrentText(() => {
        let newText = "";
        for (let i = 0; i < iterations; i++) {
          if (i < iterations - 1) {
            newText += text[i];
          } else {
            newText += letters[Math.floor(Math.random() * 26)];
          }
        }
        return newText;
      });

      if (iterations >= text.length) {
        clearInterval(interval);
        setCurrentText(text);
        if (setCompleted) {
          setCompleted(true);
        }
      } else {
        iterations++;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, inView, canRun, setCompleted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );
    if (scramblerRef.current) {
      observer.observe(scramblerRef.current);
    }
    return () => observer.disconnect();
  }, [scramblerRef, canRun]);

  return (
    <span
      ref={scramblerRef}
      className={color === "black" ? "text-black" : "text-white"}
    >
      {currentText}
    </span>
  );
};

export default Scrambler;
