import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const StartMenuWrapper = styled("div", {
  css: css.StartMenuWrapper,
  variants: {
    isOpen: {
      true: css.OpenStartMenu,
    },
  },
});

export const MenuItems = styled("ul", {
  css: css.MenuItems,
});

export const User = styled("div", {
  css: css.User,
});
