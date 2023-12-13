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
    editable: {
      true: css.EditableWindowWrapper,
    },
    noScroll: {
      true: css.NoScrollWindowWrapper,
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

export const ContentWrapper = styled("div", {
  css: css.ContentWrapper,
  variants: {
    editable: {
      true: css.EditableContent,
    },
    noScroll: {
      true: css.NoScrollContent,
    },
  },
  compoundVariants: [
    {
      editable: true,
      noScroll: true,
      css: css.EditableNoScrollContent,
    },
  ],
});

export const MenuBar = styled("ul", {
  css: css.MenuBar,
});

export const EditBanner = styled("div", {
  css: css.EditBanner,
  variants: {
    visible: {
      true: css.EditBannerVisible,
    },
  },
});
