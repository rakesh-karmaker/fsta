import { JSX } from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export type IconDataTypes = {
    name: string;
    icon: JSX.Element;
    link: string;
}

export const iconData: IconDataTypes[] = [
    {
        name: "Facebook",
        icon: <FaFacebook />,
        link: "https://www.facebook.com/fstaXoc"
    },
    {
        name: "Email",
        icon: <MdEmail />,
        link: "mailto:fstaxoc@gmail.com"        
    }
]