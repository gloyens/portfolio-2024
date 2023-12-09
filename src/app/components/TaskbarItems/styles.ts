import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const TaskbarItemsWrapper = styled("div", {
  css: css.TaskbarItemsWrapper,
});

export const TaskbarItem = styled("button", {
  css: css.TaskbarItem,
  variants: {
    active: {
      true: css.ActiveItem,
    },
  },
});
