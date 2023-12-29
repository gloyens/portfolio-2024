// TODO: make this more robust and reusable.
// Currently, it should only taks two divs.

import { ReactNode } from "react";
import { ProjectWrapper } from "./styles";

interface Props {
  onClick: () => void;
  children: ReactNode[];
}

export const Project = ({ onClick, children }: Props) => {
  return <ProjectWrapper onClick={onClick}>{children}</ProjectWrapper>;
};
