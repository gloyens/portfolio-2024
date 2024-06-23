import { ReactNode } from "react";
import { Page } from "./styles";

interface Props {
  noPadding?: boolean;
  children: ReactNode[];
}

const PageWrapper = ({ children, noPadding }: Props) => {
  return <Page noPadding={noPadding}>{children}</Page>;
};

export default PageWrapper;
