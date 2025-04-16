
import Link from "next/link";
import "./socialIcons.css";
import { iconData } from "@/services/data/iconData";

const SocialIcons = ({ bg = "black" }) => {
  return (
    <div className="social-icons">
      {iconData.map((icon) => {
        return (
          <Link
            href={icon.link}
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            style={{
              backgroundColor:
                bg === "black" ? "var(--black)" : "var(--light-black)",
            }}
            title={icon.name}
          >
            {icon.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
