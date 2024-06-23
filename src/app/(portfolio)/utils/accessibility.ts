import { KeyboardEvent } from "react";

export const handleKeyPress = (
  event: KeyboardEvent<HTMLElement>,
  action: () => void
) => {
  if (event.key === "Enter") {
    event.stopPropagation();
    action();
  }
};
