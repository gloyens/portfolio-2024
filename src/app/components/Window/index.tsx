"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { WindowWrapper, ContentWrapper } from "./styles";
import TitleBar from "@/app/components/TitleBar";
import { enableDrag } from "@/app/utils/dragElement";
import { useAppContext } from "@/app/utils/context";

interface Props {
  title: string;
  open: boolean;
  children: ReactNode;
  closeWindow: () => void;
}

const Window = ({ title, open, children, closeWindow }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [isMaximised, setIsMaximised] = useState(false);
  const {minimisedList, setMinimisedList, active, setActive} = useAppContext();
  const windowRef = useRef<HTMLElement>(null);
  const titleBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  useEffect(() => {
    minimisedList.includes(title) ?
      setIsMinimised(true) :
      setIsMinimised(false)
  }, [minimisedList, title]);

  useEffect(() => {
    const windowElement = windowRef.current;
    const titleBarElement = titleBarRef.current;

    if (windowElement && titleBarElement) {
      enableDrag(titleBarElement, windowElement, {
        onDragStart: () => {},
        onDrag: (position) => {
          windowElement.style.left = `${position.x}px`;
          windowElement.style.top = `${position.y}px`;
        },
        onDragEnd: () => {},
      });
    }
  }, [windowRef, titleBarRef]);

  const handleMinimise = () => {
    setIsMinimised(true)
    setActive("");
    setMinimisedList([...minimisedList, title])
  }

  const handleMaximise = () => {
    setIsMaximised(!isMaximised);
  }

  const handleClose = () => {
    setIsOpen(false);
    closeWindow();
  }

  return (
    <WindowWrapper
      ref={windowRef}
      open={isOpen}
      active={active === title}
      maximised={isMaximised}
      minimised={isMinimised}
    >
      <TitleBar
        ref={titleBarRef}
        title={title}
        toggleMaximise={handleMaximise}
        toggleMinimise={handleMinimise}
        closeWindow={handleClose}
      />
      <p>File Edit View</p>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </WindowWrapper>
  )
}

export default Window
