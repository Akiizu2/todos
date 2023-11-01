import { RefObject, useEffect } from "react";

export function useClickOutSide(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  const handleClick = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
