import { style } from "@vanilla-extract/css";
import { theme_vars } from "../../../shared";

export const editor_page_inner = style({
  width: "100%",
  height: "100%",
  borderWidth: "10px",
  borderColor: theme_vars.color.yellow,
  borderStyle: "dashed",
  position: "relative",
});

export const upload_section = style({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: theme_vars.spacing[16],
  maxWidth: `calc(100% - (${theme_vars.spacing[20]} * 2))`,
});

export const upload_label = style({
  padding: `${theme_vars.spacing[4]} ${theme_vars.spacing[8]}`,
  borderRadius: "6px",
  border: `2px solid ${theme_vars.color.yellow}`,
  color: theme_vars.color.yellow,
  fontFamily: theme_vars.font.family,
  cursor: "pointer",
  fontSize: theme_vars.font.body,
  transition: "0.125s ease-in-out",
  selectors: {
    ["&:hover"]: {
      color: theme_vars.color.yellow_darker,
      borderColor: theme_vars.color.yellow_darker,
    },
  },
});

export const upload_input = style({
  opacity: 0,
  pointerEvents: "none",
});
