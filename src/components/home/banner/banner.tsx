import React from "react";
import "./banner.css";

export default function Banner(): React.ReactNode {
  const text = (
    <span>
      LEARN AND EXPLORE <span className="non-stroke">THE HIDDEN MYSTERIES</span> WITH Frontier Science And Tech
      Alliance - <span className="non-stroke">FSTA</span>
    </span>
  );

  return (
    <div className="banner-container bg-black" aria-hidden="true">
      <div className="banner-track flex gap-4">
        <span className="text-stroke text-3xl uppercase mx-8">{text}</span>
        <span className="text-stroke text-3xl uppercase mx-8">{text}</span>
      </div>
    </div>
  );
}
