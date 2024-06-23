"use client";

import Image from "next/image";
import Window from "@/app/(portfolio)/components/Window";

import { IconWrapper } from "./styles";
import { ReactNode, useState } from "react";
import { useAppContext } from "@/app/(portfolio)/utils/context";
import { handleKeyPress } from "@/app/(portfolio)/utils/accessibility";

interface Props {
  index: number;
  name: string;
  src: string;
  alt: string;
  page?: ReactNode;
  noScroll?: boolean;
}

const Icon = ({ name, src, alt, page, noScroll, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openList, setOpenList, minimisedList, setMinimisedList, setActive } =
    useAppContext();

  const handleOpen = async () => {
    setIsOpen(true);
    setActive(name);

    openList.includes(name)
      ? setOpenList(openList)
      : setOpenList([...openList, name]);

    minimisedList.includes(name)
      ? setMinimisedList(minimisedList.filter((item) => item !== name))
      : setMinimisedList(minimisedList);
  };

  const handleClose = () => {
    setIsOpen(false);
    setActive("");
    setOpenList(openList.filter((item) => item !== name));
  };

  return (
    <>
      <IconWrapper
        onClick={handleOpen}
        tabIndex={0}
        onKeyDown={(e) => handleKeyPress(e, () => handleOpen())}
      >
        <Image src={src} alt={alt} height={48} width={48} />
        <figcaption>{name}</figcaption>
      </IconWrapper>
      <Window
        title={name}
        noScroll={noScroll}
        open={isOpen}
        closeWindow={handleClose}
        index={index}
      >
        {isOpen && page}
      </Window>
    </>
  );
};

export default Icon;
