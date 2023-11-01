import { useRef, useState } from "react";
import classNames from "classnames";
import { useClickOutSide } from "../../hooks/common/useClickOutSide";

import "./select.styles.scss";

export type SelectOption = { label: string; value: string };
export type SelectProps = {
  options: SelectOption[];
  value?: SelectOption["value"];
  onChange?: (value: string) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isShowOptions, setIsShowOptions] = useState(false);

  const selectedOption = options.find((item) => item.value === value);

  useClickOutSide(selectRef, () => {
    setIsShowOptions(false);
  });

  const toggleOptions = () => {
    setIsShowOptions((prev) => !prev);
  };

  const handleSelect = (option: SelectOption) => () => {
    if (option.value !== value) {
      onChange?.(option.value);
    }
  };

  return (
    <div className="select__container" ref={selectRef}>
      <div className="select__selected-input" onClick={toggleOptions}>
        <span>{selectedOption?.label}</span>
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
