import cx from "classnames";
import { memo } from "react";
import type { ThemeColors } from "../../types";
import { body_text_variants, title_text_variants } from "./text.css";

interface TextProps {
	text: string;
	color: ThemeColors;
	size: "body" | "title";
	bold?: boolean;
	align?: "left" | "center" | "right";
}

export const Text = memo<TextProps>(({ text, color, size, bold, align }) => {
	return (
		<span
			data-bold={bold}
			data-align={align}
			className={cx({
				[title_text_variants[color]]: size === "title",
				[body_text_variants[color]]: size === "body",
			})}
		>
			{text}
		</span>
	);
});
