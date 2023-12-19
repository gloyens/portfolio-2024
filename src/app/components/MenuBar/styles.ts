import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const MenuBarWrapper = styled("ul", {
  css: css.MenuBarWrapper,
  variants: {
    editing: {
      true: css.EditingMenuBar,
    },
  },
});

export const Modal = styled("div", {
  css: css.Modal,
  variants: {
    open: {
      true: css.OpenModal,
    },
  },
});
