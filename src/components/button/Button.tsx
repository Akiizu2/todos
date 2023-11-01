import classNames from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

import "./button.styles.scss";

export type ButtonProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className: extendedClassName,
  ...buttonAttributes
}: ButtonProps) {
  return (
    <button
      {...buttonAttributes}
      className={classNames("button", extendedClassName)}
    >
      {children}
    </button>
  );
}
