"use client";

const Konami = require("konami");

import Window from "@/app/components/Window";

import { AppWrapper } from "./styles";
import { ReactNode, useEffect, useState } from "react";
import { useAppContext } from "@/app/utils/context";

interface Props {
  index: number;
  name: string;
  children: ReactNode;
  noScroll?: boolean;
}

const DesktopApp = ({ name, children, noScroll, index }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openList, setOpenList, minimisedList, setMinimisedList, setActive } =
    useAppContext();

  useEffect(
    () => (openList.includes(name) ? setIsOpen(true) : setIsOpen(false)),
    [name, openList]
  );

  const handleOpen = (title: string) => {
    setActive(title);

    openList.includes(title)
      ? setOpenList(openList)
      : setOpenList([...openList, title]);

    minimisedList.includes(title)
      ? setMinimisedList(minimisedList.filter((item) => item !== title))
      : setMinimisedList(minimisedList);
  };

  useEffect(() => {
    new Konami(() => handleOpen("Wordle"));
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setActive("");
    setOpenList(openList.filter((item) => item !== name));
  };

  return (
    <AppWrapper>
      <Window
        title={name}
        noScroll={noScroll}
        open={isOpen}
        closeWindow={handleClose}
        index={index}
      >
        {children}
      </Window>
    </AppWrapper>
  );
};

export default DesktopApp;
