"use client";

import { forwardRef, useEffect, useRef } from "react";
import { TitleBarWrapper } from "./styles";
import { VscChromeRestore, VscChromeMaximize } from "react-icons/vsc";
import { MdMinimize, MdClose } from "react-icons/md";

interface Props {
  title: string;
  isMaximised: boolean;
  editable: boolean;
  open: boolean;
  ref: React.Ref<any>;
  toggleMinimise: () => void;
  toggleMaximise: () => void;
  closeWindow: () => void;
}

const TitleBar = forwardRef<HTMLElement, Props>(
  (
    {
      title,
      isMaximised,
      editable,
      open,
      toggleMinimise,
      toggleMaximise,
      closeWindow,
    },
    ref
  ) => {
    const minimizeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (minimizeRef.current) {
        minimizeRef.current.focus();
      }
    }, [open]);

    return (
      <TitleBarWrapper ref={ref} editable={editable}>
        <h2>{title}</h2>
        <button onClick={() => toggleMinimise()} tabIndex={0} ref={minimizeRef}>
          <MdMinimize />
        </button>
        <button onClick={() => toggleMaximise()} tabIndex={0}>
          {isMaximised ? <VscChromeRestore /> : <VscChromeMaximize />}
        </button>
        <button onClick={() => closeWindow()} tabIndex={0}>
          <MdClose />
        </button>
      </TitleBarWrapper>
    );
  }
);

TitleBar.displayName = "TitleBar";

export default TitleBar;
