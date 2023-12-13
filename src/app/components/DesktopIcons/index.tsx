import { ReactNode } from "react";
import { DesktopIconsWrapper } from "./styles";
import Icon from "@/app/components/Icon";
import About from "@/app/pages/About";
import Contact from "@/app/pages/Contact";
import Code from "@/app/pages/Code";
import Music from "@/app/pages/Music";
import CV from "@/app/pages/CV";
import Icons from "@/app/pages/Icons";

interface IconData {
  name: string;
  src: string;
  alt: string;
  page: ReactNode;
  noScroll?: boolean;
}

const iconDataList: IconData[] = [
  { name: "About", src: "/icons/book.png", alt: "Book icon", page: <About /> },
  {
    name: "Code",
    src: "/icons/computer.png",
    alt: "Computer icon",
    page: <Code />,
  },
  {
    name: "Icons",
    src: "/icons/pencil.png",
    alt: "Pencil icon",
    page: <Icons />,
  },
  {
    name: "Music",
    src: "/icons/disc.png",
    alt: "Disc icon",
    page: <Music />,
    noScroll: true,
  },
  { name: "CV", src: "/icons/feather.png", alt: "Feather icon", page: <CV /> },
  {
    name: "Contact",
    src: "/icons/envelope.png",
    alt: "Envelope icon",
    page: <Contact />,
  },
];

const DesktopIcons = () => {
  return (
    <>
      <DesktopIconsWrapper>
        {iconDataList.map((iconData, index) => (
          <Icon
            key={index}
            index={index}
            name={iconData.name}
            src={iconData.src}
            alt={iconData.alt}
            page={iconData.page}
            noScroll={iconData.noScroll}
          />
        ))}
      </DesktopIconsWrapper>
    </>
  );
};

export default DesktopIcons;
