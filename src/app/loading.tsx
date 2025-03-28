import React from "react";

export default function Loading(): React.ReactNode {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-[999]">
      <p className="loader">
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </p>
    </div>
  );
}
