import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { MdOutlineCelebration } from "react-icons/md";
import { TbMicroscope } from "react-icons/tb";

export type OpportunityType = {
  title: string;
  subtitle: string;
  text: string;
  icon: React.ReactNode;
  color: string; 
}

export const opportunities: OpportunityType[] = [
  {
    title: "Hands-On Experience",
    subtitle: "Innovative Learning",
    text: "Engage in interactive experiments, workshops, and projects that bring science and technology to life, allowing you to learn by doing.",
    icon: <TbMicroscope />,
    color: "blue",
  },
  {
    title: "Competitions & Fests",
    subtitle: "Exciting Events",
    text: "Participate in thrilling events like olympiads, hackathons, and science fests, pushing your limits while having fun and showcasing your skills.",
    icon: <MdOutlineCelebration />,
    color: "orange",
  },
  {
    title: "Think & Solve",
    subtitle: "Skill Development",
    text: "Enhance your critical thinking, creativity, and problem-solving abilities through real-world applications and hands-on challenges.",
    icon: <LuBrain />,
    color: "red",
  },
  {
    title: "Collaborative Community",
    subtitle: "Innovative Learning",
    text: "Join a supportive network of like-minded individuals, share ideas, and collaborate on groundbreaking projects that make an impact.",
    icon: <FaHandsHelping />,
    color: "gray",
  },
];
