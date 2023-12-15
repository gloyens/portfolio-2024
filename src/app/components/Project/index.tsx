// TODO: make this more robust and reusable.
// Currently, it should only taks two divs.

import { ReactNode } from "react";
import { ProjectWrapper } from "./styles";

interface Props {
  children: ReactNode[];
}

export const Project = ({ children }: Props) => {
  return <ProjectWrapper>{children}</ProjectWrapper>;
};
