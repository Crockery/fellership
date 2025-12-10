import { keyframes, style } from "@vanilla-extract/css";

const spin = keyframes({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" },
});

export const spinner_style = style({
	width: "1em",
	height: "1em",
	border: "0.2em solid currentColor",
	borderBottomColor: "transparent",
	borderRadius: "50%",
	animation: `${spin} 1s linear infinite`,
});
