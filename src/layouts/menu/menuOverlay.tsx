import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

type props = {
  menuLinks: { name: string; url: string }[];
  toggleMenu: () => void;
};

export default function MenuOverlay({
  menuLinks,
  toggleMenu,
}: props): React.ReactNode {
  return (
    <div className="menu-overlay fixed top-0 left-0 w-screen min-h-screen h-full [padding:2em!important] bg-[#f48049] flex justify-center z-[999] translate-y-[-100%] overflow-y-scroll">
      <div className="w-full h-full max-w-mx flex flex-col items-start gap-[2em]">
        <div className="menu-overlay-bar w-full flex justify-between">
          <div className="menu-logo">
            <Link href={"/"}>FSTA</Link>
          </div>
          <div
            className="menu-close text-black cursor-pointer clickable"
            onClick={toggleMenu}
          >
            <p>Close</p>
          </div>
        </div>

        <div className="menu-links flex-[1] [padding-left:10vw!important] max-sm:[padding-left:0!important]">
          {menuLinks.map((link, index) => (
            <div
              className="menu-link-item w-max [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]"
              key={index}
            >
              <div
                className="menu-link-item-holder relative"
                onClick={toggleMenu}
              >
                <Link
                  href={link.url}
                  className="menu-link text-black text-[80px]/[85%] font-[400] [letter-spacing:-0.02em] max-sm:text-[60px]/[85%] max-sm:[letter-spacing:-0.01em] max-xs:text-[47px]/[85%]"
                >
                  {link.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-info flex gap-5 w-full justify-between max-sm:grid max-sm:grid-cols-2 max-xs:grid-cols-1 max-xs:gap-2">
          <div
            className="menu-close-icon flex flex-[1] items-end cursor-pointer"
            onClick={toggleMenu}
          >
            <p className="text-[100px]/[70%] stroke-[5px] stroke-[#f48049] clickable max-xs:hidden">
              <RxCross1 />
            </p>
          </div>
          <div className="menu-info-col flex flex-[1] flex-col justify-end max-sm:justify-self-end max-xs:justify-self-start">
            <a href="https://www.facebook.com/fstaXoc">Facebook &#8599; </a>
          </div>
          <div className="menu-info-col flex flex-[1] flex-col justify-end">
            <p>fstaxoc@gmail.com</p>
          </div>
          <div className="menu-preview flex flex-[3] max-md:flex-[1] flex-end items-end justify-end max-xs:justify-start">
            <p>Hello there</p>
          </div>
        </div>
      </div>
    </div>
  );
}
