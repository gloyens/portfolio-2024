import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const WordlePage = styled("article", {
  css: css.WordlePage,
});

export const Form = styled("div", {
  css: css.Form,
  variants: {
    disabled: {
      true: css.FormDisabled,
    },
  },
});

export const Words = styled("div", {
  css: css.Words,
});

export const Word = styled("p", {
  css: css.Word,
});

export const Letter = styled("span", {
  css: css.Letter,
  variants: {
    status: {
      Correct: css.LetterCorrect,
      Incorrect: css.LetterIncorrect,
      WrongPos: css.LetterWrongPos,
    },
  },
});
