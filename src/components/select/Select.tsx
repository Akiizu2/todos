import { useState } from "react";
import "./select.styles.scss";
import classNames from "classnames";

export type SelectOptions = { label: string; value: string };
export type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions["value"];
  onChange?: (value: string) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const toggleOptions = () => {
    setIsShowOptions((prev) => !prev);
  };

  const handleSelect = (option: SelectOptions) => () => {
    if (option.value !== value) {
      onChange?.(option.value);
    }
  };

  return (
    <div className="select__container">
      <div className="select__selected-input" onClick={toggleOptions}>
        <span>All</span>
        <img
          className="chevron-icon"
          src="/images/chev-down.svg"
          alt="chevron-icon"
        />
      </div>
      {isShowOptions && (
        <div className="select__option-container">
          {options?.map((option) => (
            <div
              key={option.value}
              className={classNames("select__option-item", {
                selected: value === option.value,
              })}
              onClick={handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
