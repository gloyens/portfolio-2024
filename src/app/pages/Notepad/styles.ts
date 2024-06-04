import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const NotepadPage = styled("article", {
  css: css.NotepadPage,
});

export const TextArea = styled("div", {
  css: css.TextArea,
  passthrough: ["placeholder"],
});
