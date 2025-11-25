import { style } from "@vanilla-extract/css";
import { theme_vars } from "../../shared";

export const root_layout_style = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  background: theme_vars.color.black,
  overflow: "hidden",
});
