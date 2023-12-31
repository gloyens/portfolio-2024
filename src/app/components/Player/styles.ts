import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const PlayerWrapper = styled("div", {
  css: css.PlayerWrapper,
});

export const AlbumWrapper = styled("div", {
  css: css.AlbumWrapper,
  variants: {
    active: {
      true: css.ActiveAlbum,
    },
  },
});

export const ImageContainer = styled("div", {
  css: css.ImageContainer,
});

export const Marquee = styled("div", {
  css: css.Marquee,
});

export const PlayBar = styled("nav", {
  css: css.PlayBar,
});

export const Buttons = styled("div", {
  css: css.Buttons,
});
