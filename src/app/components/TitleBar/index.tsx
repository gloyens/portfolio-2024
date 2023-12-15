import { forwardRef } from "react";
import { TitleBarWrapper } from "./styles";
import { VscChromeRestore, VscChromeMaximize } from "react-icons/vsc";
import { MdMinimize, MdClose } from "react-icons/md";

interface Props {
  title: string;
  isMaximised: boolean;
  editable: boolean;
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
      toggleMinimise,
      toggleMaximise,
      closeWindow,
    },
    ref
  ) => {
    return (
      <TitleBarWrapper ref={ref} editable={editable}>
        <h2>{title}</h2>
        <button onClick={() => toggleMinimise()}>
          <MdMinimize />
        </button>
        <button onClick={() => toggleMaximise()}>
          {isMaximised ? <VscChromeRestore /> : <VscChromeMaximize />}
        </button>
        <button onClick={() => closeWindow()}>
          <MdClose />
        </button>
      </TitleBarWrapper>
    );
  }
);

TitleBar.displayName = "TitleBar";

export default TitleBar;
