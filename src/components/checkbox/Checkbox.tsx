import classNames from "classnames";
import { type InputHTMLAttributes, useRef } from "react";

import "./checkbox.styles.scss";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({
  checked,
  onClick,
  className,
  ...checkboxProps
}: CheckboxProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    if (ref.current) {
      const checkboxRef = ref.current;
      checkboxRef.click();
    }
  };
  return (
    <div className="checkbox__container">
      <input
        ref={ref}
        type="checkbox"
        {...checkboxProps}
        onClick={onClick}
        checked={checked}
        className={classNames("", className)}
      />
      <span className="checkmark" onClick={handleClick}>
        <img src="/images/tick.svg" alt="tick-icon" />
      </span>
    </div>
  );
}
