import { style, styleVariants } from "@vanilla-extract/css";
import { theme_vars } from "../../theme.css";
import { focusable_input, input_colors } from "../shared/styles.css";

const base = style([
	focusable_input,
	{
		padding: theme_vars.spacing[8],
	},
]);

export const icon_button_variants = styleVariants({
	red: [base, input_colors.red],
	green: [base, input_colors.green],
	yellow: [base, input_colors.yellow],
	black: [base, input_colors.black],
});
