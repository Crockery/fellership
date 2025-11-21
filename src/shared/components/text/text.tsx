import { memo } from "react";

import { body_text_variants, title_text_variants } from "./text.css";
import type { ThemeColors } from "../../types";

import cx from "classnames";

interface TextProps {
  text: string;
  color: ThemeColors;
  size: "body" | "title";
}

export const Text = memo<TextProps>(({ text, color, size }) => {
  console.log(title_text_variants[color]);

  return (
    <span
      className={cx({
        [title_text_variants[color]]: size === "title",
        [body_text_variants[color]]: size === "body",
      })}
    >
      {text}
    </span>
  );
});
