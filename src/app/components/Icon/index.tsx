"use client";

import Image from "next/image";
import Window from "@/app/components/Window";

import { IconWrapper } from "./styles";
import { useState } from "react";
import { useAppContext } from "@/app/utils/context";

interface Props {
  name: string;
  src: string;
  alt: string;
}

const Icon = ({ name, src, alt }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {openList, setOpenList, minimisedList, setMinimisedList, setActive} = useAppContext();

  const handleOpen = () => {
    setIsOpen(true);
    setActive(name);

    openList.includes(name) ?
      setOpenList(openList) :
      setOpenList([...openList, name])

    minimisedList.includes(name) ?
      setMinimisedList(minimisedList.filter(item => item !== name)) :
      setMinimisedList(minimisedList)
  };

  const handleClose = () => {
    setIsOpen(false);
    setActive("");
    setOpenList(openList.filter(item => item !== name));
  };

  return (
    <>
      <Window title={name} open={isOpen} closeWindow={handleClose}>hi</Window>
      <IconWrapper onClick={handleOpen}>
        <Image src={src} alt={alt} height={48} width={48} />
        <figcaption>{name}</figcaption>
      </IconWrapper>
    </>
  )
}

export default Icon;
