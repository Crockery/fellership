import { style } from "@vanilla-extract/css";
import { theme_vars } from "../../../../shared";

export const toolbar = style({
	width: "100%",
	background: theme_vars.color.black_lighter,
	borderRadius: theme_vars.spacing[8],
	border: `1px solid ${theme_vars.color.black_darker}`,
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	padding: theme_vars.spacing[8],
	columnGap: theme_vars.spacing[12],
});

export const seperator = style({
	backgroundColor: theme_vars.color.gray,
	height: "32px",
	width: "2px",
	opacity: "0.4",
});

export const reset_button = style({
	marginLeft: "auto",
});

export const group = style({
	display: "flex",
	height: "100%",
	alignItems: "center",
	justifyContent: "flex-start",
	columnGap: theme_vars.spacing[8],
});

export const profile_selector = style({
	width: "200px",
});
