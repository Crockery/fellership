import { style } from "@vanilla-extract/css";
import { theme_vars } from "../../shared";

export const root_layout_style = style({
  width: "100vw",
  height: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: theme_vars.spacing[20],
  background: theme_vars.color.black,
});
