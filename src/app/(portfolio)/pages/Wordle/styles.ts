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

export const Submit = styled("button", {
  css: css.Submit,
});

export const Keyboard = styled("div", {
  css: css.Keyboard,
});

export const Key = styled("button", {
  css: css.Key,
  variants: {
    status: {
      Correct: css.KeyCorrect,
      Incorrect: css.KeyIncorrect,
      WrongPos: css.KeyWrongPos,
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
