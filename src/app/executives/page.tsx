import Executives from "@/components/executives/executives";
import ExecutivesHero from "@/components/executives/hero";
import React from "react";

export default function ExecutivesPage(): React.ReactNode {
  return (
    <main className="flex flex-col">
      <ExecutivesHero />
      <Executives />
    </main>
  );
}
