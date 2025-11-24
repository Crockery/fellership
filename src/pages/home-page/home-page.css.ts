import { style } from "@vanilla-extract/css";
import { theme_vars } from "../../shared";

export const home_page = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: theme_vars.spacing[20],
});

export const explanation_text = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  maxWidth: 500,
  justifyContent: "center",
  flexDirection: "column",
  rowGap: theme_vars.spacing[12],
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
