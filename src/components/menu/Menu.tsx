import { useState } from "react";
import "./menu.styles.scss";
import classNames from "classnames";

export type MenuOptions = {
  label: string;
  className?: string;
  onClick?: () => void;
};
export type MenuProps = {
  options: MenuOptions[];
};

export function Menu({ options }: MenuProps) {
  const [isShowOptions, setIsShowOptions] = useState(false);

  const toggleOptions = () => {
    setIsShowOptions((prev) => !prev);
  };

  return (
    <div className="menu__container">
      <div className="menu__button" onClick={toggleOptions}>
        <img src="/images/three-dot.svg" alt="three-dot-icon" />
      </div>
      {isShowOptions && (
        <div className="menu__option-container">
          {options?.map((option) => (
            <p
              className={classNames("menu__option-item", option?.className)}
              key={option.label}
              onClick={option?.onClick}
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
