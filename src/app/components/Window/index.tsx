"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { WindowWrapper, ContentWrapper } from "./styles";
import TitleBar from "@/app/components/TitleBar";
import MenuBar from "@/app/components/MenuBar";
import { enableDrag } from "@/app/utils/dragElement";
import { useAppContext } from "@/app/utils/context";

interface Props {
  title: string;
  open: boolean;
  noScroll?: boolean;
  index: number;
  children: ReactNode;
  closeWindow: () => void;
}

const Window = ({
  title,
  open,
  noScroll,
  index,
  children,
  closeWindow,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [isMaximised, setIsMaximised] = useState(false);
  const { minimisedList, setMinimisedList, active, setActive } =
    useAppContext();
  const windowRef = useRef<HTMLElement>(null);
  const titleBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    minimisedList.includes(title)
      ? setIsMinimised(true)
      : setIsMinimised(false);
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
    setIsMinimised(true);
    setActive("");
    setMinimisedList([...minimisedList, title]);
  };

  const handleMaximise = () => {
    setIsMaximised(!isMaximised);
  };

  const handleClose = () => {
    setIsOpen(false);
    closeWindow();

    // Pause audio playback in children of ContentWrapper
    const audioElements = windowRef.current?.querySelectorAll("audio");
    audioElements?.forEach((audio) => {
      audio.pause();
    });
  };

  return (
    <WindowWrapper
      ref={windowRef}
      open={isOpen}
      active={active === title}
      maximised={isMaximised}
      minimised={isMinimised}
      editable={isEditable}
      noScroll={noScroll}
      onMouseDown={() => setActive(title)}
      style={{
        top: `calc(40px + (${index} * 12px))`,
        left: `calc(40px + (${index} * 12px))`,
      }}
    >
      <TitleBar
        ref={titleBarRef}
        isMaximised={isMaximised}
        title={title}
        editable={isEditable}
        open={isOpen}
        toggleMaximise={handleMaximise}
        toggleMinimise={handleMinimise}
        closeWindow={handleClose}
      />
      <MenuBar setIsEditable={setIsEditable} />
      <ContentWrapper
        editable={isEditable}
        contentEditable={isEditable}
        noScroll={noScroll}
      >
        {children}
      </ContentWrapper>
    </WindowWrapper>
  );
};

export default Window;
