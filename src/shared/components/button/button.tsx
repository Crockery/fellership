import {
  type ButtonHTMLAttributes,
  forwardRef,
  memo,
  type ReactNode,
} from "react";
import cx from "classnames";
import { button_variants } from "./button.css";

export type ButtonColors = "red" | "yellow" | "green" | "black";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColors;
  text: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, text, disabled, className, icon, ...buttonProps }, ref) => (
    <StyledButton
      disabled={disabled}
      className={cx(button_variants[color], className)}
      ref={ref}
      {...buttonProps}
    >
      {icon && (
        <ButtonIconWrapper>
          <Icon iconId={icon} size="sm" color="white" />
        </ButtonIconWrapper>
      )}
      {text}
    </StyledButton>
  ),
);

export const Button = memo(_Button);

Button.displayName = "StudioButton";

export default Button;

const StyledButton = styled.button`
  &:active {
    border-color: ${buttonCT("border-active")};
    color: ${buttonCT("color-active")};
    background-color: ${buttonCT("bg-active")};
    ${`${iconCT("fill-white", true)}: ${buttonCT("color-active")}`};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${buttonCT("border-disabled")};
    color: ${buttonCT("color-disabled")};
    background-color: ${buttonCT("bg-disabled")};
    ${`${iconCT("fill-white", true)}: ${buttonCT("color-disabled")}`};
  }

  // Re-assign bg and color vars for secondary buttons.
  &.secondary,
  &.secondary-small {
    background-color: ${buttonCT("bg-secondary")};
    color: ${buttonCT("color-secondary")};
    border-color: ${buttonCT("border-secondary")};
    ${`${iconCT("fill-white", true)}: ${buttonCT("color-secondary")}`};
    &:hover {
      border-color: ${buttonCT("border-hover-secondary")};
      color: ${buttonCT("color-hover-secondary")};
      background-color: ${buttonCT("bg-hover-secondary")};
      ${`${iconCT("fill-white", true)}: ${buttonCT("color-hover-secondary")}`};
    }

    &:active {
      border-color: ${buttonCT("border-active-secondary")};
      color: ${buttonCT("color-active-secondary")};
      background-color: ${buttonCT("bg-active-secondary")};
      ${`${iconCT("fill-white", true)}: ${buttonCT("color-active-secondary")}`};
    }

    &:disabled {
      border-color: ${buttonCT("border-disabled-secondary")};
      color: ${buttonCT("color-disabled-secondary")};
      background-color: ${buttonCT("bg-disabled-secondary")};
      ${`${iconCT("fill-white", true)}: ${buttonCT(
        "color-disabled-secondary",
      )}`};
    }
  }

  // Re-assign bg, color, and border vars for borderless buttons.
  &.borderless,
  &.borderless-small {
    background-color: ${buttonCT("bg-borderless")};
    color: ${buttonCT("color-borderless")};
    border-color: ${buttonCT("border-borderless")};
    ${`${iconCT("fill-white", true)}: ${buttonCT("color-borderless")}`};
    &:hover {
      border-color: ${buttonCT("border-hover-borderless")};
      color: ${buttonCT("color-hover-borderless")};
      background-color: ${buttonCT("bg-hover-borderless")};
      ${`${iconCT("fill-white", true)}: ${buttonCT("color-hover-borderless")}`};
    }

    &:active {
      border-color: ${buttonCT("border-active-borderless")};
      color: ${buttonCT("color-active-borderless")};
      background-color: ${buttonCT("bg-active-borderless")};
      ${`${iconCT("fill-white", true)}: ${buttonCT(
        "color-active-borderless",
      )}`};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${buttonCT("border-disabled-borderless")};
      color: ${buttonCT("color-disabled-borderless")};
      background-color: ${buttonCT("bg-disabled-borderless")};
      ${`${iconCT("fill-white", true)}: ${buttonCT(
        "color-disabled-borderless",
      )}`};
    }
  }
`;

const ButtonIconWrapper = styled.span`
  display: flex;
  margin: ${buttonCT("icon-margin")};
`;
