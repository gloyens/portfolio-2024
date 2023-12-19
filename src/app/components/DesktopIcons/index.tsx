import { ReactNode } from "react";
import { DesktopIconsWrapper } from "./styles";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("@/app/components/Icon"));
const About = dynamic(() => import("@/app/pages/About"));
const Contact = dynamic(() => import("@/app/pages/Contact"));
const Code = dynamic(() => import("@/app/pages/Code"));
const Music = dynamic(() => import("@/app/pages/Music"));
const CV = dynamic(() => import("@/app/pages/CV"));
const Icons = dynamic(() => import("@/app/pages/Icons"));
const Chat = dynamic(() => import("@/app/pages/Chat"));

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
  {
    name: "Chat",
    src: "/icons/messageBox.png",
    alt: "Speech bubble icon",
    page: <Chat />,
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
