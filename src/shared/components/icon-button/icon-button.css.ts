import { style, styleVariants } from "@vanilla-extract/css";
import { theme_vars } from "../../theme.css";
import { input_colors } from "../shared/styles.css";

const base = style({
	fontSize: "18px",
	borderRadius: theme_vars.radius,
	borderWidth: "2px",
	borderStyle: "solid",
	cursor: "pointer",
	padding: theme_vars.spacing[8],
	transition:
		"border 0.125s ease-in-out, background 0.125s ease-in-out, color 0.125s ease-in-out",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	outlineWidth: "0px",
	outlineStyle: "solid",
	outlineOffset: theme_vars.spacing[4],
	selectors: {
		["&:disabled"]: {
			cursor: "not-allowed",
			opacity: 0.5,
		},
		["&:focus:not(:active)"]: {
			outlineWidth: "2px",
		},
	},
});

export const icon_button_variants = styleVariants({
	red: [base, input_colors.red],
	green: [base, input_colors.green],
	yellow: [base, input_colors.yellow],
	black: [base, input_colors.black],
});
