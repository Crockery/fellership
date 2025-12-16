import { style, styleVariants } from "@vanilla-extract/css";
import { theme_vars } from "../../theme.css";
import { focusable_input, input_colors } from "../shared/styles.css";

const trigger_base = style([
	focusable_input,
	{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		columnGap: theme_vars.spacing[8],
		fontSize: theme_vars.font.body,
		padding: `${theme_vars.spacing[4]} ${theme_vars.spacing[8]}`,
		fontFamily: theme_vars.font.family,
	},
]);

export const select_trigger_variants = styleVariants({
	red: [trigger_base, input_colors.red],
	green: [trigger_base, input_colors.green],
	yellow: [trigger_base, input_colors.yellow],
	black: [trigger_base, input_colors.black],
});

export const select_icon = style({
	display: "flex",
});

export const select_positioner = style({
	outline: "none",
	zIndex: 1,
	userSelect: "none",
});

const popup_base = style({
	borderRadius: theme_vars.radius,
	backgroundClip: "padding-box",
	minWidth: "var(--anchor-width)",
	borderWidth: "1px",
	borderStyle: "solid",
	transformOrigin: "var(--transform-origin)",
	transition: "transform 150ms, opacity 150ms",
	selectors: {
		["&[data-starting-style]"]: {
			opacity: 0,
			transform: "scale(0.9)",
		},
		["&[data-ending-style]"]: {
			opacity: 0,
			transform: "scale(0.9)",
		},
		// ["&[data-side='none']"]: {
		// 	opacity: 0,
		// 	transform: "scale(0.9)",
		// },
	},
});

export const popup_variants = styleVariants({
	red: [
		popup_base,
		{
			backgroundColor: theme_vars.color.red,
			borderColor: theme_vars.color.yellow,
			color: theme_vars.color.yellow,
		},
	],
	black: [
		popup_base,
		{
			backgroundColor: theme_vars.color.black,
			borderColor: theme_vars.color.green,
			color: theme_vars.color.green,
		},
	],
	green: [
		popup_base,
		{
			backgroundColor: theme_vars.color.green,
			borderColor: theme_vars.color.black,
			color: theme_vars.color.black,
		},
	],
	yellow: [
		popup_base,
		{
			backgroundColor: theme_vars.color.yellow,
			borderColor: theme_vars.color.red,
			color: theme_vars.color.red,
		},
	],
});

export const select_list = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "flex-start",
	width: "100%",
	position: "relative",
	paddingBlock: "0.25rem",
	overflowY: "auto",
	maxHeight: "var(--available-height)",
	scrollPaddingBlock: "1.5rem",
	padding: theme_vars.spacing[4],
});

export const select_item = style({
	fontSize: theme_vars.font.body,
	color: "currentColor",
	fontFamily: theme_vars.font.family,
	cursor: "pointer",
	display: "grid",
	gap: theme_vars.spacing[8],
	gridTemplateColumns: `${theme_vars.spacing[12]} 1fr`,
	paddingRight: theme_vars.spacing[8],
	userSelect: "none",
	selectors: {
		["&[data-highlighted]"]: {
			zIndex: "0",
			position: "relative",
		},
		["&[data-highlighted]:not([data-selected])::before"]: {
			content: "",
			zIndex: "-1",
			position: "absolute",
			width: "12px",
			top: "50%",
			transform: "translateY(-50%)",
			height: "12px",
			borderRadius: "50%",
			backgroundColor: "currentColor",
		},
	},
});

export const select_item_text = style({
	gridColumnStart: 2,
});

export const select_item_indicator = style({
	gridColumnStart: 1,
});
