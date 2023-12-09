import { DesktopIconsWrapper } from "./styles";
import Icon from "@/app/components/Icon";

interface IconData {
  name: string;
  src: string;
  alt: string;
}

const iconDataList: IconData[] = [
  { name: "About", src: "/icons/book.png", alt: "Book icon" },
  { name: "Code", src: "/icons/computer.png", alt: "Computer icon" },
  { name: "Icons", src: "/icons/pencil.png", alt: "Pencil icon" },
  { name: "Music", src: "/icons/disc.png", alt: "Disc icon" },
  { name: "CV", src: "/icons/feather.png", alt: "Feather icon" },
  { name: "Contact", src: "/icons/envelope.png", alt: "Envelope icon" },
];

const DesktopIcons = () => {
  return (
    <>
      <DesktopIconsWrapper>
        {iconDataList.map((iconData) => (
          <Icon
            key={iconData.name}
            name={iconData.name}
            src={iconData.src}
            alt={iconData.alt}
          />
        ))}
      </DesktopIconsWrapper>
    </>
  );
};

export default DesktopIcons;
