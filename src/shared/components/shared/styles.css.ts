import { style, styleVariants } from "@vanilla-extract/css";
import { theme_vars } from "../../theme.css";

export const input_colors = styleVariants({
	red: {
		color: theme_vars.color.yellow,
		borderColor: theme_vars.color.yellow,
		backgroundColor: theme_vars.color.red,
		outlineColor: theme_vars.color.yellow,
		selectors: {
			["&:hover"]: {
				color: theme_vars.color.yellow_darker,
				borderColor: theme_vars.color.yellow_darker,
				backgroundColor: theme_vars.color.red_darker,
			},
		},
	},
	green: {
		color: theme_vars.color.black,
		borderColor: theme_vars.color.black,
		backgroundColor: theme_vars.color.green,
		outlineColor: theme_vars.color.black,
		selectors: {
			["&:hover"]: {
				color: theme_vars.color.black_darker,
				borderColor: theme_vars.color.black_darker,
				backgroundColor: theme_vars.color.green_darker,
			},
		},
	},
	yellow: {
		color: theme_vars.color.red,
		borderColor: theme_vars.color.red,
		backgroundColor: theme_vars.color.yellow,
		outlineColor: theme_vars.color.red,
		selectors: {
			["&:hover"]: {
				color: theme_vars.color.red_darker,
				borderColor: theme_vars.color.red_darker,
				backgroundColor: theme_vars.color.yellow_darker,
			},
		},
	},
	black: {
		color: theme_vars.color.green,
		borderColor: theme_vars.color.green,
		backgroundColor: theme_vars.color.black,
		outlineColor: theme_vars.color.green,
		selectors: {
			["&:hover"]: {
				color: theme_vars.color.green_darker,
				borderColor: theme_vars.color.green_darker,
				backgroundColor: theme_vars.color.black_darker,
			},
		},
	},
});

export const focusable_input = style({
	borderRadius: theme_vars.radius,
	borderWidth: "1px",
	borderStyle: "solid",
	cursor: "pointer",
	transition:
		"border 0.125s ease-in-out, background 0.125s ease-in-out, color 0.125s ease-in-out",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	whiteSpace: "nowrap",
	outlineWidth: "0px",
	outlineStyle: "solid",
	outlineOffset: "2px",
	selectors: {
		["&:disabled"]: {
			cursor: "not-allowed",
			opacity: 0.5,
		},
		["&:focus:not(:active)"]: {
			outlineWidth: "1px",
		},
	},
});
