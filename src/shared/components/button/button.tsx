import {
  type ButtonHTMLAttributes,
  forwardRef,
  memo,
  type ReactNode,
} from "react";
import cx from "classnames";
import { button_variants, icon_wrapper } from "./button.css";

export type ButtonColors = "red" | "yellow" | "green" | "black";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColors;
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, text, disabled, className, icon, ...buttonProps }, ref) => (
    <button
      disabled={disabled}
      className={cx(button_variants[color], className)}
      ref={ref}
      {...buttonProps}
    >
      {icon && <div className={icon_wrapper}>{icon}</div>}
      {text}
    </button>
  ),
);

export const Button = memo(_Button);

Button.displayName = "StudioButton";
