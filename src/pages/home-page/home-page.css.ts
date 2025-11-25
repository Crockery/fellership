import { style, styleVariants } from "@vanilla-extract/css";
import { theme_vars } from "../../shared";

export const home_page = style({
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  container: "home_page / size",
});

const base_block = style({
  height: "100%",
  width: "100%",
  display: "flex",
  fontFamily: theme_vars.font.family,
  overflow: "hidden",
  wordBreak: "break-word",
});

export const block_variants = styleVariants({
  one: [
    base_block,
    {
      backgroundColor: theme_vars.color.yellow,
      color: theme_vars.color.red,
      fontSize: "14cqw",
      fontWeight: "bold",
      lineHeight: "0.8",
      display: "flex",
      alignItems: "center",
    },
  ],
  two: [
    base_block,
    {
      backgroundColor: theme_vars.color.black,
    },
  ],
  three: [
    base_block,
    {
      backgroundColor: theme_vars.color.green,
    },
  ],
  four: [
    base_block,
    {
      backgroundColor: theme_vars.color.red,
      color: theme_vars.color.yellow,
      fontSize: "8cqw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "underline",
    },
  ],
});
