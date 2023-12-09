import { forwardRef } from "react";
import { TitleBarWrapper } from "./styles";
import { VscChromeMaximize } from "react-icons/vsc";
import { MdMinimize, MdClose } from "react-icons/md";


interface Props {
  title: string;
  ref: React.Ref<any>;
  toggleMinimise: () => void;
  toggleMaximise: () => void;
  closeWindow: () => void;
}

const TitleBar = forwardRef<HTMLElement, Props>(
  ({ title, toggleMinimise, toggleMaximise, closeWindow }, ref) => {
  return (
    <TitleBarWrapper ref={ref}>
      <h2>{title}</h2>
      <button onClick={() => (toggleMinimise())}><MdMinimize /></button>
      <button onClick={() => (toggleMaximise())}><VscChromeMaximize /></button>
      <button onClick={() => (closeWindow())}><MdClose /></button>
    </TitleBarWrapper>
  )
})

TitleBar.displayName = "TitleBar";

export default TitleBar
