import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const WindowWrapper = styled("section", {
  css: css.WindowWrapper,
  variants: {
    open: {
      true: css.OpenWindowWrapper,
    },
    maximised: {
      true: css.MaximisedWindowWrapper,
    },
    minimised: {
      true: css.MinimisedWindowWrapper,
    },
    active: {
      true: css.ActiveWindowWrapper,
    },
  },
  compoundVariants: [
    {
      open: true,
      minimised: true,
      css: css.MinimisedOpenWindowWrapper,
    },
  ],
});
