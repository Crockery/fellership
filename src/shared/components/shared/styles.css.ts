import { styleVariants } from "@vanilla-extract/css";
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
