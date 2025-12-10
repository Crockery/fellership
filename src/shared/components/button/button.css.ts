import { style, styleVariants } from "@vanilla-extract/css";
import { theme_vars } from "../../theme.css";

const base = style({
	fontWeight: "bold",
	fontSize: "18px",
	fontFamily: theme_vars.font.family,
	borderRadius: theme_vars.spacing[8],
	borderWidth: "2px",
	borderStyle: "solid",
	cursor: "pointer",
	padding: `${theme_vars.spacing[4]} ${theme_vars.spacing[12]}`,
	transition:
		"border 0.125s ease-in-out, background 0.125s ease-in-out, color 0.125s ease-in-out",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	whiteSpace: "nowrap",
	columnGap: theme_vars.spacing[8],
	selectors: {
		["&:disabled"]: {
			cursor: "not-allowed",
			opacity: 0.5,
		},
	},
});

export const button_variants = styleVariants({
	red: [
		base,
		{
			color: theme_vars.color.yellow,
			borderColor: theme_vars.color.yellow,
			backgroundColor: theme_vars.color.red,
			selectors: {
				["&:hover"]: {
					color: theme_vars.color.yellow_darker,
					borderColor: theme_vars.color.yellow_darker,
					backgroundColor: theme_vars.color.red_darker,
				},
			},
		},
	],
	green: [
		base,
		{
			color: theme_vars.color.black,
			borderColor: theme_vars.color.black,
			backgroundColor: theme_vars.color.green,
			selectors: {
				["&:hover"]: {
					color: theme_vars.color.black_darker,
					borderColor: theme_vars.color.black_darker,
					backgroundColor: theme_vars.color.green_darker,
				},
			},
		},
	],
	yellow: [
		base,
		{
			color: theme_vars.color.red,
			borderColor: theme_vars.color.red,
			backgroundColor: theme_vars.color.yellow,
			selectors: {
				["&:hover"]: {
					color: theme_vars.color.red_darker,
					borderColor: theme_vars.color.red_darker,
					backgroundColor: theme_vars.color.yellow_darker,
				},
			},
		},
	],
	black: [
		base,
		{
			color: theme_vars.color.green,
			borderColor: theme_vars.color.green,
			backgroundColor: theme_vars.color.black,
			selectors: {
				["&:hover"]: {
					color: theme_vars.color.green_darker,
					borderColor: theme_vars.color.green_darker,
					backgroundColor: theme_vars.color.black_darker,
				},
			},
		},
	],
});

export const icon_wrapper = style({
	display: "flex",
});
