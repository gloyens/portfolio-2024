import Image from "next/image";
import { StartMenuWrapper, MenuItems, User } from "./styles";
import { useAppContext } from "@/app/utils/context";

interface Props {
  isOpen: boolean;
}

const StartMenu = ({ isOpen }: Props) => {
  const { openList, setOpenList } = useAppContext();

  const handleOpen = (name: string) => {
    openList.includes(name)
      ? setOpenList(openList)
      : setOpenList([...openList, name]);
  };

  return (
    <StartMenuWrapper isOpen={isOpen}>
      <User>
        <h2 contentEditable>Guest</h2>
      </User>
      <MenuItems>
        <button onClick={() => handleOpen("Wordle")}>
          <li>Wordle</li>
        </button>
        <button onClick={() => handleOpen("Notepad")}>
          <li>
            <Image
              src="/icons/paper.png"
              alt="Paper icon"
              height={20}
              width={20}
            />
            Notepad
          </li>
        </button>
        <a href="https://linkedin.com/in/gloyens" target="_blank">
          <li>
            <Image
              src="/icons/link.png"
              alt="Link icon"
              height={20}
              width={20}
            />
            LinkedIn
          </li>
        </a>
        <a href="mailto: georgegloyens@gmail.com" target="_blank">
          <li>
            <Image
              src="/icons/envelopeWhite.png"
              alt="White envelope icon"
              height={20}
              width={20}
            />
            Email
          </li>
        </a>
        <a href="https://twitter.com/RhosGFX" target="_blank">
          <li>
            <Image
              src="/icons/verified.png"
              alt="Twitter verified icon"
              height={20}
              width={20}
            />
            Twitter
          </li>
        </a>
      </MenuItems>
    </StartMenuWrapper>
  );
};

export default StartMenu;
