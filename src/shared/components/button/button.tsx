import { Button as BaseButton } from "@base-ui/react/button";
import cx from "classnames";
import {
	type ButtonHTMLAttributes,
	type ComponentType,
	forwardRef,
	memo,
	type ReactNode,
} from "react";
import { button_variants, icon_wrapper } from "./button.css";

export type ButtonColors = "red" | "yellow" | "green" | "black";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color: ButtonColors;
	text: string;
	icon?: ReactNode;
	disabled?: boolean;
	Render?: ComponentType;
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			color,
			text,
			disabled,
			className,
			icon,
			Render = BaseButton,
			...buttonProps
		},
		ref,
	) => (
		<Render
			disabled={disabled}
			className={cx(button_variants[color], className)}
			ref={ref}
			{...buttonProps}
		>
			{icon && <div className={icon_wrapper}>{icon}</div>}
			{text}
		</Render>
	),
);

export const Button = memo(_Button);

Button.displayName = "StudioButton";
