import React from "react";

type HeroContainerProps = {
  children: React.ReactNode;
  isBlack?: Boolean;
  image?: string;
  size?: string;
  opacity?: string;
};

export default function HeroContainer({
  children,
  isBlack = true,
  image,
  size,
  opacity,
}: HeroContainerProps): React.ReactNode {
  return (
    <div
      className={
        "w-screen h-full min-h-screen overflow-hidden flex justify-center items-center rounded-bl-[100] rounded-br-[100px]" +
        (isBlack ? " bg-black" : "")
      }
    >
      <div className="z-10">{children}</div>

      {image && (
        <HeroImage
          image={image}
          size={size}
          opacity={opacity}
          isBlack={isBlack}
        />
      )}
    </div>
  );
}

// hero container Background Image
function HeroImage({
  image,
  size,
  opacity,
  isBlack,
}: Omit<HeroContainerProps, "children">): React.ReactNode {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 z-[5]"
      style={{
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, ${
          isBlack ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)"
        } 0%, ${
          isBlack ? "var(--black)" : "var(--pure-white)"
        } 100%), url('/${image}')`,
        backgroundSize: `cover, ${size}%`,
        backgroundRepeat: `no-repeat, repeat`,
        filter: `opacity(${opacity})`,
      }}
    />
  );
}
