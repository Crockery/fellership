import { Button } from "@base-ui/react/button";
import cx from "classnames";
import type { LucideIcon } from "lucide-react";
import {
	type ComponentType,
	type HTMLAttributes,
	memo,
	type RefObject,
} from "react";
import type { ButtonColors } from "../shared/types";
import { icon_button_variants } from "./icon-button.css";

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
	Icon: LucideIcon;
	ref?: RefObject<HTMLButtonElement>;
	color: ButtonColors;
	As?: ComponentType;
}

export const IconButton = memo<IconButtonProps>(
	({ color, Icon, ref, As = Button, className, ...rest }) => {
		return (
			<As
				className={cx(icon_button_variants[color], className)}
				{...rest}
				ref={ref}
			>
				<Icon size={18} />
			</As>
		);
	},
);
