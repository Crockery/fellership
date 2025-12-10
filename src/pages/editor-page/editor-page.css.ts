import { style } from "@vanilla-extract/css";
import { theme_vars } from "../../shared";

export const editor_page = style({
	width: "100%",
	height: "100%",
	position: "relative",
	backgroundColor: theme_vars.color.red,
	padding: theme_vars.spacing[20],
});

export const back_button_wrapper = style({
	position: "absolute",
	top: "48px",
	left: "48px",
	zIndex: 2,
	selectors: {
		"&.initialized": {
			top: theme_vars.spacing[8],
			left: theme_vars.spacing[8],
		},
	},
});
