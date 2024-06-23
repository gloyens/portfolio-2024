import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const TaskbarWrapper = styled("footer", {
  css: css.TaskbarWrapper,
});

export const StartButton = styled("button", {
  css: css.StartButton,
  variants: {
    isActive: {
      true: css.ActiveStartButton,
    },
  },
});
