import { style, styleVariants } from "@vanilla-extract/css";
import { THEME_COLORS } from "../../constants";
import { theme_vars } from "../../theme.css";

const base = style({
	lineHeight: 1,
	fontFamily: theme_vars.font.family,
	fontWeight: "normal",
	textAlign: "left",
	selectors: {
		['&[data-bold="true"]']: {
			fontWeight: "bold",
		},
		['&[data-align="center"]']: {
			textAlign: "center",
		},
		['&[data-align="right"]']: {
			textAlign: "right",
		},
	},
});

const body = style([
	base,
	{
		fontSize: theme_vars.font.body,
	},
]);

export const body_text_variants = styleVariants(THEME_COLORS, (color) => [
	body,
	{ color },
]);

const title = style([
	base,
	{
		fontSize: theme_vars.font.title,
	},
]);

export const title_text_variants = styleVariants(THEME_COLORS, (color) => {
	return [title, { color }];
});
