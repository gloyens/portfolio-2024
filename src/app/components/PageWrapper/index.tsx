import { ReactNode } from "react";
import { Page } from "./styles";

interface Props {
  children: ReactNode[];
}

const PageWrapper = ({ children }: Props) => {
  return (
    <Page>
      {children}
    </Page>
  )
}

export default PageWrapper;
