import Image from "next/image";
import { StartMenuWrapper, MenuItems } from "./styles";

interface Props {
  isOpen: boolean;
}

const StartMenu = ({ isOpen }: Props) => {
  return (
    <StartMenuWrapper isOpen={isOpen}>
      <MenuItems>
        <a href="https://linkedin.com/in/gloyens" target="_blank">
          <li>
            <Image
              src="/icons/link.png"
              alt="Link icon"
              height={16}
              width={16}
            />
            LinkedIn
          </li>
        </a>
        <a href="mailto: georgegloyens@gmail.com" target="_blank">
          <li>
            <Image
              src="/icons/envelopeWhite.png"
              alt="White envelope icon"
              height={16}
              width={16}
            />
            Email
          </li>
        </a>
        <a href="https://twitter.com/RhosGFX" target="_blank">
          <li>
            <Image
              src="/icons/verified.png"
              alt="Twitter verified icon"
              height={16}
              width={16}
            />
            Twitter
          </li>
        </a>
      </MenuItems>
    </StartMenuWrapper>
  );
};

export default StartMenu;
